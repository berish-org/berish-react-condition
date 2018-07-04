import * as React from 'react';

type ObjectOrFunction<T> = T | (() => T);
type ObjectOrPromise<T> = T | Promise<T>;
type ObjectOrPromiseOrFunction<T> = ObjectOrFunction<ObjectOrPromise<T>>;

async function getByObjectOrPromiseOrFunction<T>(value: ObjectOrPromiseOrFunction<T>) {
  let res = getByObjectOrFunction(value);
  return getByObjectOrPromise(res);
}

function getByObjectOrFunction<T>(value: ObjectOrFunction<T>) {
  if (typeof value == 'function') {
    return value();
  }
  return value;
}
async function getByObjectOrPromise<T>(value: ObjectOrPromise<T>) {
  return await value;
}

enum ActionTypeEnum {
  loading,
  do,
  doelse
}

export interface ISmartConditionProps {
  condition: ObjectOrPromiseOrFunction<boolean>;
  doNode: React.ReactNode;
  doElseNode?: React.ReactNode;
  loadingNode?: React.ReactNode;
}
interface ISmartConditionState {
  action: ActionTypeEnum;
}
export default class SmartCondition extends React.Component<ISmartConditionProps, ISmartConditionState> {
  constructor(props) {
    super(props);
    this.state = {
      action: ActionTypeEnum.loading
    };
  }

  changeLoading = (value: ActionTypeEnum) => {
    return new Promise<void>(resolve => this.setState({ action: value }, () => resolve()));
  };

  async componentWillMount() {
    let { condition } = this.props;
    await this.changeLoading(ActionTypeEnum.loading);
    let res = await getByObjectOrPromiseOrFunction(condition);
    await this.changeLoading(res ? ActionTypeEnum.do : ActionTypeEnum.doelse);
  }

  render() {
    let { loadingNode, doNode, doElseNode } = this.props;
    let { action } = this.state;
    if (action == ActionTypeEnum.loading && loadingNode) return loadingNode;
    else if (action == ActionTypeEnum.do && doNode) return doNode;
    else if (action == ActionTypeEnum.doelse && doElseNode) return doElseNode;
    return null;
  }
}

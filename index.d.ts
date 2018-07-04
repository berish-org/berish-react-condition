import * as React from 'react';
declare type ObjectOrFunction<T> = T | (() => T);
declare type ObjectOrPromise<T> = T | Promise<T>;
declare type ObjectOrPromiseOrFunction<T> = ObjectOrFunction<ObjectOrPromise<T>>;
declare enum ActionTypeEnum {
    loading = 0,
    do = 1,
    doelse = 2
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
    constructor(props: any);
    changeLoading: (value: ActionTypeEnum) => Promise<void>;
    componentWillMount(): Promise<void>;
    render(): {};
}
export {};

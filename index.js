var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import * as React from 'react';
function getByObjectOrPromiseOrFunction(value) {
    return __awaiter(this, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
            res = getByObjectOrFunction(value);
            return [2, getByObjectOrPromise(res)];
        });
    });
}
function getByObjectOrFunction(value) {
    if (typeof value == 'function') {
        return value();
    }
    return value;
}
function getByObjectOrPromise(value) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, value];
                case 1: return [2, _a.sent()];
            }
        });
    });
}
var ActionTypeEnum;
(function (ActionTypeEnum) {
    ActionTypeEnum[ActionTypeEnum["loading"] = 0] = "loading";
    ActionTypeEnum[ActionTypeEnum["do"] = 1] = "do";
    ActionTypeEnum[ActionTypeEnum["doelse"] = 2] = "doelse";
})(ActionTypeEnum || (ActionTypeEnum = {}));
var SmartCondition = (function (_super) {
    __extends(SmartCondition, _super);
    function SmartCondition(props) {
        var _this = _super.call(this, props) || this;
        _this.changeLoading = function (value) {
            return new Promise(function (resolve) { return _this.setState({ action: value }, function () { return resolve(); }); });
        };
        _this.state = {
            action: ActionTypeEnum.loading
        };
        return _this;
    }
    SmartCondition.prototype.componentWillMount = function () {
        return __awaiter(this, void 0, void 0, function () {
            var condition, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        condition = this.props.condition;
                        return [4, this.changeLoading(ActionTypeEnum.loading)];
                    case 1:
                        _a.sent();
                        return [4, getByObjectOrPromiseOrFunction(condition)];
                    case 2:
                        res = _a.sent();
                        return [4, this.changeLoading(res ? ActionTypeEnum.do : ActionTypeEnum.doelse)];
                    case 3:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    SmartCondition.prototype.render = function () {
        var _a = this.props, loadingNode = _a.loadingNode, doNode = _a.doNode, doElseNode = _a.doElseNode;
        var action = this.state.action;
        if (action == ActionTypeEnum.loading && loadingNode)
            return loadingNode;
        else if (action == ActionTypeEnum.do && doNode)
            return doNode;
        else if (action == ActionTypeEnum.doelse && doElseNode)
            return doElseNode;
        return null;
    };
    return SmartCondition;
}(React.Component));
export default SmartCondition;
//# sourceMappingURL=index.js.map
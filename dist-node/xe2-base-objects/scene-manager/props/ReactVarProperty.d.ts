import { ReactParamsType } from "xbsj-xe2/dist-node/xe2-base-utils";
import { WithUndefinedProperty } from "./WithUndefinedProperty";
export declare abstract class ReactVarProperty<T> extends WithUndefinedProperty<T> {
    private _reactVar;
    constructor(name: string, description: string, withUndefined: boolean, readonly: boolean, _reactVar: ReactParamsType<T>, defaultValue?: T | (() => T));
    get reactVar(): ReactParamsType<T, any>;
}

import { ReactParamsType } from "xbsj-xe2/dist-node/xe2-base-utils";
import { ReactVarProperty } from "./ReactVarProperty";
import { DVT } from "./WithUndefinedProperty";
declare type ParamTypes = ('string' | 'number' | 'boolean' | 'strings' | 'numbers' | 'booleans' | ['string' | 'number' | 'boolean' | 'strings' | 'numbers' | 'booleans', string])[];
export declare class ParamsProperty<T extends (string | number | boolean | string[] | number[] | boolean[])[]> extends ReactVarProperty<T> {
    private _paramTypes;
    constructor(name: string, description: string, reactVar: ReactParamsType<T>, _paramTypes: ParamTypes, defaultValue?: DVT<T>);
    get type(): string;
    get paramTypes(): ParamTypes;
}
export {};

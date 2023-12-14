import { ReactParamsType } from "xbsj-xe2/dist-node/xe2-base-utils";
import { Property, ReactVarProperty } from "../scene-manager";
export declare class MethodParams<T extends any[]> extends ReactVarProperty<T> {
    private _paramTypes;
    private _sampleValue?;
    constructor(name: string, description: string, reactVar: ReactParamsType<T>, _paramTypes: string[], defaultValue?: T, _sampleValue?: string | undefined);
    get type(): string;
    get paramTypes(): string[];
}
export declare class MethodProperty<ParamsType extends any[]> extends Property {
    private _func;
    private _sampleValue?;
    private _paramsProperty;
    private _getValueFunc;
    constructor(name: string, description: string, paramTypes: string[], _func: (...args: ParamsType) => void, defaultParams: ParamsType, _sampleValue?: string | undefined);
    get sampleValue(): string | undefined;
    get paramsProperty(): MethodParams<ParamsType>;
    exec(): void;
    get type(): string;
}

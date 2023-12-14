import { ReactParamsType } from "xbsj-xe2/dist-node/xe2-base-utils";
import { ReactVarProperty } from "./ReactVarProperty";
import { DVT } from "./WithUndefinedProperty";
export declare class LongStringProperty extends ReactVarProperty<string | undefined> {
    private _sampleValue?;
    constructor(name: string, description: string, withUndefined: boolean, readonly: boolean, reactVar: ReactParamsType<string | undefined>, defaultValue?: DVT<string> | undefined, _sampleValue?: string | undefined);
    get sampleValue(): string | undefined;
    get type(): string;
}

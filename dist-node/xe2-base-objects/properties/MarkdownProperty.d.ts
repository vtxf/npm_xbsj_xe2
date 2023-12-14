import { ReactParamsType } from "xbsj-xe2/dist-node/xe2-base-utils";
import { ReactVarProperty } from "../scene-manager";
export declare class MarkdownProperty extends ReactVarProperty<string | undefined> {
    constructor(name: string, description: string, withUndefined: boolean, readonly: boolean, reactVar: ReactParamsType<string | undefined>);
    get type(): string;
}

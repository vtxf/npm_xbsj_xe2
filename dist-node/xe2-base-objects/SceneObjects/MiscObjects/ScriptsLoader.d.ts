import { PartialWithUndefinedReactivePropsToNativeProps, ReactivePropsToNativePropsAndChanged } from "xbsj-xe2/dist-node/xe2-base-utils";
import { SceneObjectKey } from "xbsj-xe2/dist-node/xe2-utils";
import { ESSceneObject } from "../ESSceneObject";
export declare class ScriptsLoader extends ESSceneObject {
    static readonly type: string;
    get typeName(): string;
    get defaultProps(): {
        execOnceFuncStr: string | undefined;
        updateFuncStr: string | undefined;
        toDestroyFuncStr: string | undefined;
        name: string;
        ref: string | undefined;
        devTags: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<string[] | undefined>;
        extras: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<import("xbsj-xe2/dist-node/xe2-base-utils").JsonValue>;
        enabled: boolean | undefined;
        uris: string[] | undefined;
    };
    get json(): JsonType;
    set json(value: JsonType);
    private _loaded;
    constructor(id?: SceneObjectKey);
    load(): Promise<void>;
    reload(): Promise<void>;
    getProperties(language?: string): import("../ESSceneObject").Property[];
}
export declare namespace ScriptsLoader {
    const createDefaultProps: () => {
        execOnceFuncStr: string | undefined;
        updateFuncStr: string | undefined;
        toDestroyFuncStr: string | undefined;
        name: string;
        ref: string | undefined;
        devTags: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<string[] | undefined>;
        extras: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<import("xbsj-xe2/dist-node/xe2-base-utils").JsonValue>;
        enabled: boolean | undefined;
        uris: string[] | undefined;
    };
}
export interface ScriptsLoader extends ReactivePropsToNativePropsAndChanged<ReturnType<typeof ScriptsLoader.createDefaultProps>> {
}
declare type JsonType = PartialWithUndefinedReactivePropsToNativeProps<ReturnType<typeof ScriptsLoader.createDefaultProps> & {
    type: string;
}>;
export {};

import { ESSceneObject } from "xbsj-xe2/dist-node/xe2-base-objects";
import { PartialWithUndefinedReactivePropsToNativeProps, ReactivePropsToNativePropsAndChanged } from "xbsj-xe2/dist-node/xe2-base-utils";
import { SceneObjectKey } from "xbsj-xe2/dist-node/xe2-utils";
import { CzmModelPrimitive } from "./CzmModelPrimitive";
export declare type CzmModelCreatingToolItem = {
    imgUrl: string;
    modelUrl: string;
    title: string;
};
export declare class CzmModelCreatingTool extends ESSceneObject {
    static readonly type: string;
    get typeName(): string;
    get defaultProps(): {
        show: boolean | undefined;
        createModelFnStr: string | undefined;
        cssText: string | undefined;
        items: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<CzmModelCreatingToolItem[] | undefined>;
        containerId: string | undefined;
        execOnceFuncStr: string | undefined;
        updateFuncStr: string | undefined;
        toDestroyFuncStr: string | undefined;
        name: string;
        ref: string | undefined;
        devTags: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<string[] | undefined>;
        extras: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<import("xbsj-xe2/dist-node/xe2-base-utils").JsonValue>;
    };
    get json(): JsonType;
    set json(value: JsonType);
    static defaults: {
        show: boolean;
        items: CzmModelCreatingToolItem[];
        createModelFnStr: string;
        cssText: string;
        viewerTagsEnums: [string, string][];
    };
    createModelFn?: () => CzmModelPrimitive;
    constructor(id?: SceneObjectKey);
    getProperties(language?: string): import("xbsj-xe2/dist-node/xe2-base-objects").Property[];
}
export declare namespace CzmModelCreatingTool {
    const createDefaultProps: () => {
        show: boolean | undefined;
        createModelFnStr: string | undefined;
        cssText: string | undefined;
        items: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<CzmModelCreatingToolItem[] | undefined>;
        containerId: string | undefined;
        execOnceFuncStr: string | undefined;
        updateFuncStr: string | undefined;
        toDestroyFuncStr: string | undefined;
        name: string;
        ref: string | undefined;
        devTags: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<string[] | undefined>;
        extras: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<import("xbsj-xe2/dist-node/xe2-base-utils").JsonValue>;
    };
}
export interface CzmModelCreatingTool extends ReactivePropsToNativePropsAndChanged<ReturnType<typeof CzmModelCreatingTool.createDefaultProps>> {
}
declare type JsonType = PartialWithUndefinedReactivePropsToNativeProps<ReturnType<typeof CzmModelCreatingTool.createDefaultProps> & {
    type: string;
}>;
export {};

import { PartialWithUndefinedReactivePropsToNativeProps, ReactivePropsToNativePropsAndChanged } from "xbsj-xe2/dist-node/xe2-base-utils";
import { SceneObjectKey } from "xbsj-xe2/dist-node/xe2-utils";
import { ESSceneObject } from "../ESSceneObject";
import { PropertyTracker } from "./PropertyTracker";
export declare class PropertyBinding extends ESSceneObject {
    static readonly type: string;
    get typeName(): string;
    get defaultProps(): {
        sourceDebug: undefined;
        targetDebug: undefined;
        execOnceFuncStr: string | undefined;
        updateFuncStr: string | undefined;
        toDestroyFuncStr: string | undefined;
        name: string;
        ref: string | undefined;
        devTags: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<string[] | undefined>;
        extras: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<import("xbsj-xe2/dist-node/xe2-base-utils").JsonValue>;
        enabled: boolean | undefined;
        sourceObjId: string | undefined;
        sourcePropertyName: string | undefined;
        targetObjId: string | undefined;
        targetPropertyName: string | undefined;
    };
    get json(): JsonType;
    set json(value: JsonType);
    private _sourceTracker;
    get sourceTracker(): PropertyTracker;
    private _targetTracker;
    get targetTracker(): PropertyTracker;
    /**
     * 强制执行
     */
    forceExecute(): void;
    constructor(id?: SceneObjectKey);
    getProperties(language?: string): import("../ESSceneObject").Property[];
}
declare const extraComponentProps: {
    sourceDebug: undefined;
    targetDebug: undefined;
};
export declare namespace PropertyBinding {
    const createDefaultProps: () => {
        execOnceFuncStr: string | undefined;
        updateFuncStr: string | undefined;
        toDestroyFuncStr: string | undefined;
        name: string;
        ref: string | undefined;
        devTags: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<string[] | undefined>;
        extras: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<import("xbsj-xe2/dist-node/xe2-base-utils").JsonValue>;
        enabled: boolean | undefined;
        sourceObjId: string | undefined;
        sourcePropertyName: string | undefined;
        targetObjId: string | undefined;
        targetPropertyName: string | undefined;
    };
}
export interface PropertyBinding extends ReactivePropsToNativePropsAndChanged<ReturnType<typeof PropertyBinding.createDefaultProps> & typeof extraComponentProps> {
}
declare type JsonType = PartialWithUndefinedReactivePropsToNativeProps<ReturnType<typeof PropertyBinding.createDefaultProps> & typeof extraComponentProps & {
    type: string;
}>;
export {};

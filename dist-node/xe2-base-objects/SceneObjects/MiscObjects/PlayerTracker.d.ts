import { PartialWithUndefinedReactivePropsToNativeProps, ReactivePropsToNativePropsAndChanged } from "xbsj-xe2/dist-node/xe2-base-utils";
import { SceneObjectKey } from "xbsj-xe2/dist-node/xe2-utils";
import { ESSceneObject } from "../ESSceneObject";
import { PropertyTracker } from "./PropertyTracker";
export declare class PlayerTracker extends ESSceneObject {
    static readonly type: string;
    get typeName(): string;
    get defaultProps(): {
        debug: undefined;
        evalFuncStr: undefined;
        execOnceFuncStr: string | undefined;
        updateFuncStr: string | undefined;
        toDestroyFuncStr: string | undefined;
        name: string;
        ref: string | undefined;
        devTags: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<string[] | undefined>;
        extras: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<import("xbsj-xe2/dist-node/xe2-base-utils").JsonValue>;
        enabled: boolean | undefined;
        playerId: string | undefined;
        targetObjId: string | undefined;
        targetPropertyName: string | undefined;
    };
    get json(): JsonType;
    set json(value: JsonType);
    private _tracker;
    get tracker(): PropertyTracker;
    /**
     * 强制执行
     */
    forceExecute(): void;
    constructor(id?: SceneObjectKey);
    static defaultEvalFuncStr: string;
    static evalFuncStrReadMe: string;
    getProperties(language?: string): import("../ESSceneObject").Property[];
}
declare const extraComponentProps: {
    debug: undefined;
    evalFuncStr: undefined;
};
export declare namespace PlayerTracker {
    const createDefaultProps: () => {
        execOnceFuncStr: string | undefined;
        updateFuncStr: string | undefined;
        toDestroyFuncStr: string | undefined;
        name: string;
        ref: string | undefined;
        devTags: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<string[] | undefined>;
        extras: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<import("xbsj-xe2/dist-node/xe2-base-utils").JsonValue>;
        enabled: boolean | undefined;
        playerId: string | undefined;
        targetObjId: string | undefined;
        targetPropertyName: string | undefined;
    };
}
export interface PlayerTracker extends ReactivePropsToNativePropsAndChanged<ReturnType<typeof PlayerTracker.createDefaultProps> & typeof extraComponentProps> {
}
declare type JsonType = PartialWithUndefinedReactivePropsToNativeProps<ReturnType<typeof PlayerTracker.createDefaultProps> & typeof extraComponentProps & {
    type: string;
}>;
export {};

import { PartialWithUndefinedReactivePropsToNativeProps, ReactivePropsToNativePropsAndChanged } from "xbsj-xe2/dist-node/xe2-base-utils";
import { SceneObjectKey } from "xbsj-xe2/dist-node/xe2-utils";
import { ESSceneObject, SceneObject, Property } from "../ESSceneObject";
export declare type WatcherEvalFuncType = (sceneObjects: (SceneObject | undefined)[]) => void;
export declare class Watcher extends ESSceneObject {
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
        objIdAndPropChangedNames: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[id: string, propChangedName: string][]>;
        evalFuncStr: string | undefined;
        evalMode: EvalModelType | undefined;
        evalOnlyWhenObjsAllExist: boolean | undefined;
        debug: boolean | undefined;
    };
    get json(): JsonType;
    set json(value: JsonType);
    private _evalFunc?;
    get evalFunc(): WatcherEvalFuncType | undefined;
    set evalFunc(value: WatcherEvalFuncType | undefined);
    private _forceExecute;
    /**
     * 强制执行
     */
    forceExecute(): void;
    constructor(id?: SceneObjectKey);
    static defaultEvalFuncStr: string;
    static evalFuncStrReadMe: string;
    getProperties(language?: string): Property[];
}
export declare type EvalModelType = 'Immediate' | 'NextAnimateFrame';
export declare namespace Watcher {
    const createDefaultProps: () => {
        execOnceFuncStr: string | undefined;
        updateFuncStr: string | undefined;
        toDestroyFuncStr: string | undefined;
        name: string;
        ref: string | undefined;
        devTags: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<string[] | undefined>;
        extras: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<import("xbsj-xe2/dist-node/xe2-base-utils").JsonValue>;
        enabled: boolean | undefined;
        objIdAndPropChangedNames: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[id: string, propChangedName: string][]>;
        evalFuncStr: string | undefined;
        evalMode: EvalModelType | undefined;
        evalOnlyWhenObjsAllExist: boolean | undefined;
        debug: boolean | undefined;
    };
}
export interface Watcher extends ReactivePropsToNativePropsAndChanged<ReturnType<typeof Watcher.createDefaultProps>> {
}
declare type JsonType = PartialWithUndefinedReactivePropsToNativeProps<ReturnType<typeof Watcher.createDefaultProps> & {
    type: string;
}>;
export {};

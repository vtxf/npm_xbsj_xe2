import { PartialWithUndefinedReactivePropsToNativeProps, ReactivePropsToNativePropsAndChanged } from "xbsj-xe2/dist-node/xe2-base-utils";
import { SceneObjectKey } from "xbsj-xe2/dist-node/xe2-utils";
import { ESSceneObject } from "../ESSceneObject";
import { Watcher } from "./Watcher";
export declare type TrackerEvalFuncType = (propValue: any) => any;
export declare class PropertyTracker extends ESSceneObject {
    static readonly type: string;
    get typeName(): string;
    get defaultProps(): {
        evalMode: import("./Watcher").EvalModelType | undefined;
        evalOnlyWhenObjsAllExist: boolean | undefined;
        debug: boolean | undefined;
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
        evalFuncStr: string | undefined;
    };
    get json(): JsonType;
    set json(value: JsonType);
    private _watcher;
    get watcher(): Watcher;
    private _evalFunc?;
    get evalFunc(): TrackerEvalFuncType | undefined;
    set evalFunc(value: TrackerEvalFuncType | undefined);
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
    evalMode: import("./Watcher").EvalModelType | undefined;
    evalOnlyWhenObjsAllExist: boolean | undefined;
    debug: boolean | undefined;
};
export declare namespace PropertyTracker {
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
        evalFuncStr: string | undefined;
    };
}
export interface PropertyTracker extends ReactivePropsToNativePropsAndChanged<ReturnType<typeof PropertyTracker.createDefaultProps> & typeof extraComponentProps> {
}
declare type JsonType = PartialWithUndefinedReactivePropsToNativeProps<ReturnType<typeof PropertyTracker.createDefaultProps> & typeof extraComponentProps & {
    type: string;
}>;
export {};

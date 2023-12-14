import { PartialWithUndefinedReactivePropsToNativeProps, ReactivePropsToNativePropsAndChanged } from "xbsj-xe2/dist-node/xe2-base-utils";
import { SceneObjectKey } from "xbsj-xe2/dist-node/xe2-utils";
import { PropertyTracker } from "../MiscObjects";
import { ESSceneObject } from "../ESSceneObject";
export declare class GeoPathTracker extends ESSceneObject {
    static readonly type: string;
    get typeName(): string;
    get defaultProps(): {
        positionDebug: undefined;
        rotationDebug: undefined;
        positionEvalFuncStr: undefined;
        rotationEvalFuncStr: undefined;
        execOnceFuncStr: string | undefined;
        updateFuncStr: string | undefined;
        toDestroyFuncStr: string | undefined;
        name: string;
        ref: string | undefined;
        devTags: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<string[] | undefined>;
        extras: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<import("xbsj-xe2/dist-node/xe2-base-utils").JsonValue>;
        enabled: boolean | undefined;
        pathId: string | undefined;
        targetObjId: string | undefined;
        usePosition: boolean | undefined;
        useRotation: boolean | undefined;
        targetPositionPropertyName: string | undefined;
        targetRotationPropertyName: string | undefined;
    };
    get json(): JsonType;
    set json(value: JsonType);
    private _positionTracker;
    get positionTracker(): PropertyTracker;
    private _rotationTracker;
    get rotationTracker(): PropertyTracker;
    /**
     * 强制执行
     */
    forceExecute(): void;
    constructor(id?: SceneObjectKey);
    static defaultPositionEvalFuncStr: string;
    static positionEvalFuncStrReadMe: string;
    static defaultRotationEvalFuncStr: string;
    static rotationEvalFuncStrReadMe: string;
    getProperties(language?: string): import("../ESSceneObject").Property[];
}
declare const extraComponentProps: {
    positionDebug: undefined;
    rotationDebug: undefined;
    positionEvalFuncStr: undefined;
    rotationEvalFuncStr: undefined;
};
export declare namespace GeoPathTracker {
    const createDefaultProps: () => {
        execOnceFuncStr: string | undefined;
        updateFuncStr: string | undefined;
        toDestroyFuncStr: string | undefined;
        name: string;
        ref: string | undefined;
        devTags: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<string[] | undefined>;
        extras: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<import("xbsj-xe2/dist-node/xe2-base-utils").JsonValue>;
        enabled: boolean | undefined;
        pathId: string | undefined;
        targetObjId: string | undefined;
        usePosition: boolean | undefined;
        useRotation: boolean | undefined;
        targetPositionPropertyName: string | undefined;
        targetRotationPropertyName: string | undefined;
    };
}
export interface GeoPathTracker extends ReactivePropsToNativePropsAndChanged<ReturnType<typeof GeoPathTracker.createDefaultProps> & typeof extraComponentProps> {
}
declare type JsonType = PartialWithUndefinedReactivePropsToNativeProps<ReturnType<typeof GeoPathTracker.createDefaultProps> & typeof extraComponentProps & {
    type: string;
}>;
export {};

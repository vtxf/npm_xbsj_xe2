import { PartialWithUndefinedReactivePropsToNativeProps, ReactivePropsToNativePropsAndChanged } from "xbsj-xe2/dist-node/xe2-base-utils";
import { SceneObjectKey } from "xbsj-xe2/dist-node/xe2-utils";
import { PlayerTracker } from "../MiscObjects";
import { ESSceneObject } from "../ESSceneObject";
import { GeoPathTracker } from "./GeoPathTracker";
export declare class GeoSceneObjectPathPlayerTracker extends ESSceneObject {
    static readonly type: string;
    get typeName(): string;
    get defaultProps(): {
        playerId: undefined;
        playerEvalFuncStr: undefined;
        pathId: undefined;
        targetObjId: undefined;
        usePosition: undefined;
        useRotation: undefined;
        targetPositionPropertyName: undefined;
        targetRotationPropertyName: undefined;
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
    };
    get json(): JsonType;
    set json(value: JsonType);
    private _geoPathTracker;
    get geoPathTracker(): GeoPathTracker;
    private _playerTracker;
    get playerTracker(): PlayerTracker;
    /**
     * 强制执行
     */
    forceExecute(): void;
    constructor(id?: SceneObjectKey);
    getProperties(language?: string): import("../ESSceneObject").Property[];
}
declare const extraComponentProps: {
    playerId: undefined;
    playerEvalFuncStr: undefined;
    pathId: undefined;
    targetObjId: undefined;
    usePosition: undefined;
    useRotation: undefined;
    targetPositionPropertyName: undefined;
    targetRotationPropertyName: undefined;
    positionDebug: undefined;
    rotationDebug: undefined;
    positionEvalFuncStr: undefined;
    rotationEvalFuncStr: undefined;
};
export declare namespace GeoSceneObjectPathPlayerTracker {
    const createDefaultProps: () => {
        execOnceFuncStr: string | undefined;
        updateFuncStr: string | undefined;
        toDestroyFuncStr: string | undefined;
        name: string;
        ref: string | undefined;
        devTags: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<string[] | undefined>;
        extras: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<import("xbsj-xe2/dist-node/xe2-base-utils").JsonValue>;
        enabled: boolean | undefined;
    };
}
export interface GeoSceneObjectPathPlayerTracker extends ReactivePropsToNativePropsAndChanged<ReturnType<typeof GeoSceneObjectPathPlayerTracker.createDefaultProps> & typeof extraComponentProps> {
}
declare type JsonType = PartialWithUndefinedReactivePropsToNativeProps<ReturnType<typeof GeoSceneObjectPathPlayerTracker.createDefaultProps> & typeof extraComponentProps & {
    type: string;
}>;
export {};

import { PartialWithUndefinedReactivePropsToNativeProps, ReactivePropsToNativePropsAndChanged } from "xbsj-xe2/dist-node/xe2-base-utils";
import { SceneObjectKey } from "xbsj-xe2/dist-node/xe2-utils";
import { ESSceneObject } from "../ESSceneObject";
import { GeoCameraController } from "./GeoCameraController";
export declare class GeoSceneObjectCameraController extends ESSceneObject {
    static readonly type: string;
    get typeName(): string;
    get defaultProps(): {
        enabled: boolean;
        showTarget: boolean;
        position: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number] | undefined>;
        rotation: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number] | undefined>;
        viewDistance: number;
        offsetHeight: number;
        offsetRotation: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number]>;
        enabledRotationInput: boolean;
        enabledScaleInput: boolean;
        execOnceFuncStr: string | undefined;
        updateFuncStr: string | undefined;
        toDestroyFuncStr: string | undefined;
        name: string;
        ref: string | undefined;
        devTags: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<string[] | undefined>;
        extras: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<import("xbsj-xe2/dist-node/xe2-base-utils").JsonValue>;
        sceneObjectId: string | undefined;
        positionTracking: boolean | undefined;
        rotationTracking: boolean | undefined;
        positionPropertyName: string | undefined;
        positionChangedPropertyName: string | undefined;
        rotationPropertyName: string | undefined;
        rotationChangedPropertyName: string | undefined;
    };
    get json(): JsonType;
    set json(value: JsonType);
    private _geoCameraController;
    get geoCameraController(): GeoCameraController;
    constructor(id?: SceneObjectKey);
    getProperties(language?: string): import("../ESSceneObject").Property[];
}
declare const extraComponentProps: {
    enabled: boolean;
    showTarget: boolean;
    position: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number] | undefined>;
    rotation: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number] | undefined>;
    viewDistance: number;
    offsetHeight: number;
    offsetRotation: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number]>;
    enabledRotationInput: boolean;
    enabledScaleInput: boolean;
};
export declare namespace GeoSceneObjectCameraController {
    const createDefaultProps: () => {
        execOnceFuncStr: string | undefined;
        updateFuncStr: string | undefined;
        toDestroyFuncStr: string | undefined;
        name: string;
        ref: string | undefined;
        devTags: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<string[] | undefined>;
        extras: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<import("xbsj-xe2/dist-node/xe2-base-utils").JsonValue>;
        enabled: boolean | undefined;
        sceneObjectId: string | undefined;
        positionTracking: boolean | undefined;
        rotationTracking: boolean | undefined;
        positionPropertyName: string | undefined;
        positionChangedPropertyName: string | undefined;
        rotationPropertyName: string | undefined;
        rotationChangedPropertyName: string | undefined;
    };
}
export interface GeoSceneObjectCameraController extends ReactivePropsToNativePropsAndChanged<ReturnType<typeof GeoSceneObjectCameraController.createDefaultProps> & typeof extraComponentProps> {
}
declare type JsonType = PartialWithUndefinedReactivePropsToNativeProps<ReturnType<typeof GeoSceneObjectCameraController.createDefaultProps> & typeof extraComponentProps & {
    type: string;
}>;
export {};

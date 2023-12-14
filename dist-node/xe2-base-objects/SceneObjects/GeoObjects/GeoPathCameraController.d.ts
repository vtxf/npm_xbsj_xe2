import { PartialWithUndefinedReactivePropsToNativeProps, ReactivePropsToNativePropsAndChanged } from "xbsj-xe2/dist-node/xe2-base-utils";
import { SceneObjectKey } from "xbsj-xe2/dist-node/xe2-utils";
import { ESSceneObject } from "../ESSceneObject";
import { Watcher } from "../MiscObjects";
import { GeoCameraController } from "./GeoCameraController";
export declare class GeoPathCameraController extends ESSceneObject {
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
        pathId: string | undefined;
        usePathPosition: boolean | undefined;
        usePathRotation: boolean | undefined;
    };
    get json(): JsonType;
    set json(value: JsonType);
    private _geoCameraController;
    get geoCameraController(): GeoCameraController;
    private _watcher;
    get watcher(): Watcher;
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
export declare namespace GeoPathCameraController {
    const createDefaultProps: () => {
        execOnceFuncStr: string | undefined;
        updateFuncStr: string | undefined;
        toDestroyFuncStr: string | undefined;
        name: string;
        ref: string | undefined;
        devTags: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<string[] | undefined>;
        extras: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<import("xbsj-xe2/dist-node/xe2-base-utils").JsonValue>;
        pathId: string | undefined;
        usePathPosition: boolean | undefined;
        usePathRotation: boolean | undefined;
    };
}
export interface GeoPathCameraController extends ReactivePropsToNativePropsAndChanged<ReturnType<typeof GeoPathCameraController.createDefaultProps> & typeof extraComponentProps> {
}
declare type JsonType = PartialWithUndefinedReactivePropsToNativeProps<ReturnType<typeof GeoPathCameraController.createDefaultProps> & typeof extraComponentProps & {
    type: string;
}>;
export {};

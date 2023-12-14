import { GeoPathCameraController } from './GeoPathCameraController';
import { GeoPolylinePath } from './GeoPolylinePath';
import { ESSceneObject } from "../ESSceneObject";
import { PartialWithUndefinedReactivePropsToNativeProps, ReactivePropsToNativePropsAndChanged } from "xbsj-xe2/dist-node/xe2-base-utils";
import { SceneObjectKey } from "xbsj-xe2/dist-node/xe2-utils";
export declare class GeoPolylinePathCameraController extends ESSceneObject {
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
        show: boolean;
        enabled: boolean;
        playing: boolean;
        loop: boolean;
        speed: number;
        currentTime: number;
        offsetHeight: number;
        allowPicking: boolean;
        editing: boolean;
        positions: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number][] | undefined>;
    };
    get json(): JsonType;
    set json(value: JsonType);
    private _geoPolylinePath;
    get geoPolylinePath(): GeoPolylinePath;
    private _cameraController;
    get cameraController(): GeoPathCameraController;
    constructor(id?: SceneObjectKey);
    getProperties(language?: string): import("xbsj-xe2/dist-node/xe2-base-objects/scene-manager").Property[];
}
export declare namespace GeoPolylinePathCameraController {
    const createDefaultProps: () => {
        execOnceFuncStr: string | undefined;
        updateFuncStr: string | undefined;
        toDestroyFuncStr: string | undefined;
        name: string;
        ref: string | undefined;
        devTags: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<string[] | undefined>;
        extras: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<import("xbsj-xe2/dist-node/xe2-base-utils").JsonValue>;
        show: boolean;
        enabled: boolean;
        playing: boolean;
        loop: boolean;
        speed: number;
        currentTime: number;
        offsetHeight: number;
        allowPicking: boolean;
        editing: boolean;
        positions: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number][] | undefined>;
    };
}
export interface GeoPolylinePathCameraController extends ReactivePropsToNativePropsAndChanged<ReturnType<typeof GeoPolylinePathCameraController.createDefaultProps>> {
}
declare type JsonType = PartialWithUndefinedReactivePropsToNativeProps<ReturnType<typeof GeoPolylinePathCameraController.createDefaultProps> & {
    type: string;
}>;
export {};

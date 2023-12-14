import { Event, Listener, PartialWithUndefinedReactivePropsToNativeProps, ReactivePropsToNativePropsAndChanged } from "xbsj-xe2/dist-node/xe2-base-utils";
import { SceneObjectKey } from "xbsj-xe2/dist-node/xe2-utils";
import { PickedInfo } from "../../scene-manager";
import { ESSceneObject } from "../ESSceneObject";
import { GeoPolylines } from "./GeoPolylines";
export declare class GeoVolumeMeasurement extends ESSceneObject {
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
        allowPicking: boolean;
        positions: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number][] | undefined>;
        editing: boolean;
        planeHight: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<number | undefined>;
        sampling: number;
        area: number;
        excavationArea: number;
        fillArea: number;
        CutAndFillArea: number;
        schedule: number;
        depthTest: boolean;
    };
    get json(): JsonType;
    set json(value: JsonType);
    private _pickedEvent;
    get pickedEvent(): Event<[PickedInfo]>;
    private _flyToEvent;
    get flyToEvent(): Listener<[number | undefined]>;
    flyTo(duration?: number): void;
    private _enableEvent;
    get enableEvent(): Listener;
    enableEmit(): void;
    private _clearEvent;
    get clearEvent(): Listener;
    clearEmit(): void;
    private _gridPoints;
    get gridPoints(): [number, number, number][];
    set gridPoints(value: [number, number, number][]);
    get gridPointsChanged(): Listener<[[number, number, number][], [number, number, number][]]>;
    private _excavationPolylines;
    get excavationPolylines(): GeoPolylines;
    private _fillPolylines;
    get fillPolylines(): GeoPolylines;
    static defaults: {
        positions: never[];
        viewerTagsEnums: [string, string][];
    };
    constructor(id?: SceneObjectKey);
    getProperties(language?: string): import("../ESSceneObject").Property[];
}
export declare namespace GeoVolumeMeasurement {
    const createDefaultProps: () => {
        execOnceFuncStr: string | undefined;
        updateFuncStr: string | undefined;
        toDestroyFuncStr: string | undefined;
        name: string;
        ref: string | undefined;
        devTags: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<string[] | undefined>;
        extras: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<import("xbsj-xe2/dist-node/xe2-base-utils").JsonValue>;
        show: boolean;
        allowPicking: boolean;
        positions: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number][] | undefined>;
        editing: boolean;
        planeHight: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<number | undefined>;
        sampling: number;
        area: number;
        excavationArea: number;
        fillArea: number;
        CutAndFillArea: number;
        schedule: number;
        depthTest: boolean;
    };
}
export interface GeoVolumeMeasurement extends ReactivePropsToNativePropsAndChanged<ReturnType<typeof GeoVolumeMeasurement.createDefaultProps>> {
}
declare type JsonType = PartialWithUndefinedReactivePropsToNativeProps<ReturnType<typeof GeoVolumeMeasurement.createDefaultProps> & {
    type: string;
}>;
export {};

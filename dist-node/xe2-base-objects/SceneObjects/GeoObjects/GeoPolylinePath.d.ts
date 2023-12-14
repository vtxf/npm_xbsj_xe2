import { PickedInfo } from "../../scene-manager";
import { Event, JsonValue, Listener, PartialWithUndefinedReactivePropsToNativeProps, ReactivePropsToNativePropsAndChanged } from "xbsj-xe2/dist-node/xe2-base-utils";
import { SceneObjectKey } from "xbsj-xe2/dist-node/xe2-utils";
import { ESSceneObject } from "../ESSceneObject";
import { Player } from "../MiscObjects/Player";
import { GeoCanvasPointPoi } from "./GeoCanvasPointPoi";
import { GeoPath, RotLerpModeType } from "./GeoPath";
import { GeoPolyline } from "./GeoPolyline";
export declare class GeoPolylinePath extends ESSceneObject {
    static readonly type: string;
    get typeName(): string;
    get defaultProps(): {
        execOnceFuncStr: string | undefined;
        updateFuncStr: string | undefined;
        toDestroyFuncStr: string | undefined;
        name: string;
        ref: string | undefined;
        devTags: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<string[] | undefined>;
        extras: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<JsonValue>;
        show: boolean;
        allowPicking: boolean;
        currentPoiShow: boolean;
        polylineShow: boolean;
        positions: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number][] | undefined>;
        width: number;
        ground: boolean;
        color: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number]>;
        hasDash: boolean;
        gapColor: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number]>;
        dashLength: number;
        dashPattern: number;
        hasArrow: boolean;
        arcType: "NONE" | "GEODESIC" | "RHUMB";
        editing: boolean;
        pointEditing: boolean;
        loop: boolean;
        currentTime: number;
        duration: number;
        speed: number;
        playing: boolean;
        depthTest: boolean;
        leadTime: number;
        trailTime: number;
        rotLerpMode: RotLerpModeType;
    };
    get json(): JsonType;
    set json(value: JsonType);
    get geoJson(): JsonValue;
    set geoJson(value: JsonValue);
    get geoJsonStr(): string;
    set geoJsonStr(value: string);
    private _geoPath;
    private _geoPolyline;
    private _geoCanvasPointPoi;
    private _player;
    get geoPath(): GeoPath;
    get geoPolyline(): GeoPolyline;
    get geoCanvasPointPoi(): GeoCanvasPointPoi;
    get player(): Player;
    get currentInfo(): {
        position: [number, number, number];
        rotation: [number, number, number] | undefined;
        index: number;
        ratio: number;
    } | undefined;
    get currentInfoChanged(): Listener<[{
        position: [number, number, number];
        rotation: [number, number, number] | undefined;
        index: number;
        ratio: number;
    } | undefined, {
        position: [number, number, number];
        rotation: [number, number, number] | undefined;
        index: number;
        ratio: number;
    } | undefined]>;
    get currentIndex(): number | undefined;
    get currentIndexChanged(): Listener<[{
        position: [number, number, number];
        rotation: [number, number, number] | undefined;
        index: number;
        ratio: number;
    } | undefined, {
        position: [number, number, number];
        rotation: [number, number, number] | undefined;
        index: number;
        ratio: number;
    } | undefined]>;
    get currentPosition(): [number, number, number] | undefined;
    get currentPositionChanged(): Listener<[{
        position: [number, number, number];
        rotation: [number, number, number] | undefined;
        index: number;
        ratio: number;
    } | undefined, {
        position: [number, number, number];
        rotation: [number, number, number] | undefined;
        index: number;
        ratio: number;
    } | undefined]>;
    get currentRotation(): [number, number, number] | undefined;
    get currentRotationChanged(): Listener<[{
        position: [number, number, number];
        rotation: [number, number, number] | undefined;
        index: number;
        ratio: number;
    } | undefined, {
        position: [number, number, number];
        rotation: [number, number, number] | undefined;
        index: number;
        ratio: number;
    } | undefined]>;
    private _distances;
    get distances(): number[];
    get distancesChanged(): Listener<[number[], number[]]>;
    get totalDistance(): number;
    private _flyToEvent;
    get flyToEvent(): Listener<[number | undefined]>;
    flyTo(duration?: number): void;
    private _pickedEvent;
    get pickedEvent(): Event<[PickedInfo]>;
    subPath(startDistance: number, stopDistance: number): [longitude: number, latitude: number, height: number][] | undefined;
    private _currentDistance;
    get currentDistance(): number;
    set currentDistance(value: number);
    get currentDistanceChanged(): Listener<[number, number]>;
    constructor(id?: SceneObjectKey);
    private _ratio;
    get ratio(): number;
    set ratio(value: number);
    get ratioChanged(): Listener<[number, number]>;
    get timePosRots(): import("./GeoPath").TimePosRotType[] | undefined;
    static defaults: {
        viewerTagsEnums: [string, string][];
    };
    getProperties(language?: string): import("../ESSceneObject").Property[];
}
export declare namespace GeoPolylinePath {
    const createDefaultProps: () => {
        execOnceFuncStr: string | undefined;
        updateFuncStr: string | undefined;
        toDestroyFuncStr: string | undefined;
        name: string;
        ref: string | undefined;
        devTags: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<string[] | undefined>;
        extras: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<JsonValue>;
        show: boolean;
        allowPicking: boolean;
        currentPoiShow: boolean;
        polylineShow: boolean;
        positions: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number][] | undefined>;
        width: number;
        ground: boolean;
        color: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number]>;
        hasDash: boolean;
        gapColor: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number]>;
        dashLength: number;
        dashPattern: number;
        hasArrow: boolean;
        arcType: "NONE" | "GEODESIC" | "RHUMB";
        editing: boolean;
        pointEditing: boolean;
        loop: boolean;
        currentTime: number;
        duration: number;
        speed: number;
        playing: boolean;
        depthTest: boolean;
        leadTime: number;
        trailTime: number;
        rotLerpMode: RotLerpModeType;
    };
}
export interface GeoPolylinePath extends ReactivePropsToNativePropsAndChanged<ReturnType<typeof GeoPolylinePath.createDefaultProps>> {
}
declare type JsonType = PartialWithUndefinedReactivePropsToNativeProps<ReturnType<typeof GeoPolylinePath.createDefaultProps> & {
    type: string;
}>;
export {};

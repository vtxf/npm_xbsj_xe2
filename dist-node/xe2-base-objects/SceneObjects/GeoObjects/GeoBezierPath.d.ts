import { Event, JsonValue, Listener, PartialWithUndefinedReactivePropsToNativeProps, ReactivePropsToNativePropsAndChanged } from "xbsj-xe2/dist-node/xe2-base-utils";
import { SceneObjectKey } from "xbsj-xe2/dist-node/xe2-utils";
import { PickedInfo } from "../../scene-manager";
import { PointEditing, PositionsEditing } from "../../utils";
import { ESSceneObject } from "../ESSceneObject";
import { GeoPath } from "./GeoPath";
import { GeoPolylinePath } from './GeoPolylinePath';
export declare class GeoBezierPath extends ESSceneObject {
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
        arcType: string;
        editing: boolean;
        pointEditing: boolean;
        loop: boolean;
        currentTime: number;
        duration: number;
        speed: number;
        playing: boolean;
        resolution: number;
        sharpness: number;
        depthTest: boolean;
        leadTime: number;
        trailTime: number;
    };
    get json(): JsonType;
    set json(value: JsonType);
    get geoJson(): JsonValue;
    set geoJson(value: JsonValue);
    get geoJsonStr(): string;
    set geoJsonStr(value: string);
    private _geoPolylinePath;
    get geoPolylinePath(): GeoPolylinePath;
    get geoPath(): GeoPath;
    get ratio(): number;
    set ratio(value: number);
    get ratioChanged(): Listener<[number, number]>;
    get player(): import("..").Player;
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
    get distances(): number[];
    get distancesChanged(): Listener<[number[], number[]]>;
    get totalDistance(): number;
    private _flyToEvent;
    get flyToEvent(): Listener<[number | undefined]>;
    flyTo(duration?: number): void;
    private _pickedEvent;
    get pickedEvent(): Event<[PickedInfo]>;
    private _currentDistance;
    get currentDistance(): number;
    set currentDistance(value: number);
    get currentDistanceChanged(): Listener<[number, number]>;
    static defaults: {
        viewerTagsEnums: [string, string][];
    };
    private _sPositionsEditing;
    get sPositionsEditing(): PositionsEditing;
    private _pointEditor;
    get pointEditor(): PointEditing;
    constructor(id?: SceneObjectKey);
    get timePosRots(): import("./GeoPath").TimePosRotType[] | undefined;
    getProperties(language?: string): import("../ESSceneObject").Property[];
}
export declare namespace GeoBezierPath {
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
        arcType: string;
        editing: boolean;
        pointEditing: boolean;
        loop: boolean;
        currentTime: number;
        duration: number;
        speed: number;
        playing: boolean;
        resolution: number;
        sharpness: number;
        depthTest: boolean;
        leadTime: number;
        trailTime: number;
    };
}
export interface GeoBezierPath extends ReactivePropsToNativePropsAndChanged<ReturnType<typeof GeoBezierPath.createDefaultProps>> {
}
declare type JsonType = PartialWithUndefinedReactivePropsToNativeProps<ReturnType<typeof GeoBezierPath.createDefaultProps> & {
    type: string;
}>;
export {};

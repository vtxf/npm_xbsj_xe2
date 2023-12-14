import { PickedInfo } from "../../../scene-manager";
import { Event, Listener, PartialWithUndefinedReactivePropsToNativeProps, ReactivePropsToNativePropsAndChanged } from "xbsj-xe2/dist-node/xe2-base-utils";
import { SceneObjectKey } from "xbsj-xe2/dist-node/xe2-utils";
import { ESSceneObject } from "../../ESSceneObject";
import { GeoPolygon } from "../GeoPolygon";
import { GeoPolyline } from "../GeoPolyline";
import { equalsPenSplineVertexJsonType, PenSplineVertexJsonType } from './PenSplineVertexJsonType';
export { PenSplineVertexJsonType };
export declare type InterpolateFuncType = (a: [number, number, number]) => [number, number, number];
export declare class GeoPenSpline extends ESSceneObject {
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
        vertexArray: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<PenSplineVertexJsonType[] | undefined>;
        loop: boolean;
        isPolygon: boolean;
        width: number;
        ground: boolean;
        color: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number]>;
        fillColor: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number]>;
        hasDash: boolean;
        gapColor: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number]>;
        dashLength: number;
        dashPattern: number;
        hasArrow: boolean;
        arcType: string;
        editing: boolean;
        pointEditing: boolean;
        spliteNumPerSegment: number;
        zIndex: number;
        interpolateMode: GeoPenSplineInterpolateModeType;
    };
    get json(): JsonType;
    set json(value: JsonType);
    private _flyToEvent;
    get flyToEvent(): Listener<[number | undefined]>;
    flyTo(duration?: number): void;
    private _polylinePositions;
    get polylinePositions(): [number, number, number][] | undefined;
    get polylinePositionsChanged(): Listener<[[number, number, number][] | undefined, [number, number, number][] | undefined]>;
    private _geoPolyline;
    get geoPolyline(): GeoPolyline;
    private _geoPolygon;
    get geoPolygon(): GeoPolygon;
    private _pickedEvent;
    get pickedEvent(): Event<[PickedInfo]>;
    static equalsPenSplineVertexJsonType: typeof equalsPenSplineVertexJsonType;
    static interplateFuncMap: {
        WebMercator: [InterpolateFuncType, InterpolateFuncType];
        Cartesian: [InterpolateFuncType, InterpolateFuncType];
        LonLat: [InterpolateFuncType, InterpolateFuncType];
    };
    constructor(id?: SceneObjectKey);
    static defaultSpliteNumPerSegment: number;
    static vertexArrayReadMe: string;
    getProperties(language?: string): import("../../ESSceneObject").Property[];
}
export declare type GeoPenSplineInterpolateModeType = 'WebMercator' | 'Cartesian' | 'LonLat';
export declare namespace GeoPenSpline {
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
        vertexArray: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<PenSplineVertexJsonType[] | undefined>;
        loop: boolean;
        isPolygon: boolean;
        width: number;
        ground: boolean;
        color: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number]>;
        fillColor: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number]>;
        hasDash: boolean;
        gapColor: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number]>;
        dashLength: number;
        dashPattern: number;
        hasArrow: boolean;
        arcType: string;
        editing: boolean;
        pointEditing: boolean;
        spliteNumPerSegment: number;
        zIndex: number;
        interpolateMode: GeoPenSplineInterpolateModeType;
    };
}
export interface GeoPenSpline extends ReactivePropsToNativePropsAndChanged<ReturnType<typeof GeoPenSpline.createDefaultProps>> {
}
declare type JsonType = PartialWithUndefinedReactivePropsToNativeProps<ReturnType<typeof GeoPenSpline.createDefaultProps> & {
    type: string;
}>;

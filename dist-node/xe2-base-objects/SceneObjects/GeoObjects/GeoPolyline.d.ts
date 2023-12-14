import { Event, Listener, PartialWithUndefinedReactivePropsToNativeProps, ReactivePropsToNativePropsAndChanged } from "xbsj-xe2/dist-node/xe2-base-utils";
import { SceneObjectKey } from "xbsj-xe2/dist-node/xe2-utils";
import { PickedInfo } from "../../scene-manager";
import { PointEditing, PositionsCenter, PositionsEditing } from "../../utils";
import { ESSceneObject } from "../ESSceneObject";
export declare type GeoPolylineArcType = 'NONE' | 'GEODESIC' | 'RHUMB';
export declare class GeoPolyline extends ESSceneObject {
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
        loop: boolean;
        width: number;
        ground: boolean;
        color: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number]>;
        hasDash: boolean;
        gapColor: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number]>;
        dashLength: number;
        dashPattern: number;
        hasArrow: boolean;
        arcType: GeoPolylineArcType;
        depthTest: boolean;
        editing: boolean;
        pointEditing: boolean;
        zIndex: number;
        viewDistanceRange: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number] | undefined>;
        viewDistanceDebug: boolean;
    };
    get json(): JsonType;
    set json(value: JsonType);
    private _pickedEvent;
    get pickedEvent(): Event<[PickedInfo]>;
    private _flyToEvent;
    get flyToEvent(): Listener<[number | undefined]>;
    flyTo(duration?: number): void;
    private _sPositionsEditing;
    get sPositionsEditing(): PositionsEditing;
    private _sPointEditing;
    get sPointEditing(): PointEditing;
    private _positionsCenter;
    get positionsCenter(): PositionsCenter;
    constructor(id?: SceneObjectKey);
    static defaults: {
        positions: never[];
        viewDistanceRange: [number, number, number, number];
        viewerTagsEnums: [string, string][];
    };
    getProperties(language?: string): import("../ESSceneObject").Property[];
}
export declare namespace GeoPolyline {
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
        loop: boolean;
        width: number;
        ground: boolean;
        color: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number]>;
        hasDash: boolean;
        gapColor: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number]>;
        dashLength: number;
        dashPattern: number;
        hasArrow: boolean;
        arcType: GeoPolylineArcType;
        depthTest: boolean;
        editing: boolean;
        pointEditing: boolean;
        zIndex: number;
        viewDistanceRange: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number] | undefined>;
        viewDistanceDebug: boolean;
    };
}
export interface GeoPolyline extends ReactivePropsToNativePropsAndChanged<ReturnType<typeof GeoPolyline.createDefaultProps>> {
}
declare type JsonType = PartialWithUndefinedReactivePropsToNativeProps<ReturnType<typeof GeoPolyline.createDefaultProps> & {
    type: string;
}>;
export {};

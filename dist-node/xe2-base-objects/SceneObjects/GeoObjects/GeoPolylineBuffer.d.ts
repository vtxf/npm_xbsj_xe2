import { Event, Listener, PartialWithUndefinedReactivePropsToNativeProps, ReactivePropsToNativePropsAndChanged } from "xbsj-xe2/dist-node/xe2-base-utils";
import { SceneObjectKey } from "xbsj-xe2/dist-node/xe2-utils";
import { PickedInfo } from "../../scene-manager";
import { PointEditing, PositionsEditing } from "../../utils";
import { ESSceneObject } from "../ESSceneObject";
import { GeoPolygon } from "./GeoPolygon";
export declare class GeoPolylineBuffer extends ESSceneObject {
    static readonly type: string;
    get typeName(): string;
    get defaultProps(): {
        show: boolean;
        ground: boolean;
        outline: boolean;
        outlineColor: [number, number, number, number];
        outlineWidth: number;
        color: [number, number, number, number];
        depth: number;
        execOnceFuncStr: string | undefined;
        updateFuncStr: string | undefined;
        toDestroyFuncStr: string | undefined;
        name: string;
        ref: string | undefined;
        devTags: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<string[] | undefined>;
        extras: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<import("xbsj-xe2/dist-node/xe2-base-utils").JsonValue>;
        allowPicking: boolean;
        editing: boolean;
        pointEditing: boolean;
        positions: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number][] | undefined>;
        resolution: number;
        sharpness: number;
        ratio: number;
        width: number | undefined;
        spline: boolean;
    };
    get json(): JsonType;
    set json(value: JsonType);
    private _pickedEvent;
    get pickedEvent(): Event<[PickedInfo]>;
    private _flyToEvent;
    get flyToEvent(): Listener<[number | undefined]>;
    flyTo(duration?: number): void;
    private _geoPolygon;
    get geoPolygon(): GeoPolygon;
    private _sPositionsEditing;
    get sPositionsEditing(): PositionsEditing;
    private _pointEditor;
    get pointEditor(): PointEditing;
    constructor(id?: SceneObjectKey);
    static defaults: {
        positions: never[];
        width: number;
        viewerTagsEnums: [string, string][];
    };
    getProperties(language?: string): import("../ESSceneObject").Property[];
}
declare const extraComponentProps: {
    show: boolean;
    ground: boolean;
    outline: boolean;
    outlineColor: [number, number, number, number];
    outlineWidth: number;
    color: [number, number, number, number];
    depth: number;
};
export declare namespace GeoPolylineBuffer {
    const createDefaultProps: () => {
        execOnceFuncStr: string | undefined;
        updateFuncStr: string | undefined;
        toDestroyFuncStr: string | undefined;
        name: string;
        ref: string | undefined;
        devTags: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<string[] | undefined>;
        extras: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<import("xbsj-xe2/dist-node/xe2-base-utils").JsonValue>;
        allowPicking: boolean;
        editing: boolean;
        pointEditing: boolean;
        positions: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number][] | undefined>;
        resolution: number;
        sharpness: number;
        ratio: number;
        width: number | undefined;
        spline: boolean;
    };
}
export interface GeoPolylineBuffer extends ReactivePropsToNativePropsAndChanged<ReturnType<typeof GeoPolylineBuffer.createDefaultProps> & typeof extraComponentProps> {
}
declare type JsonType = PartialWithUndefinedReactivePropsToNativeProps<ReturnType<typeof GeoPolylineBuffer.createDefaultProps> & typeof extraComponentProps & {
    type: string;
}>;
export {};

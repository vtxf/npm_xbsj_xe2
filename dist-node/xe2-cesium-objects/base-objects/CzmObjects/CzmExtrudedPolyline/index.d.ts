import { ESSceneObject, GeoPolygon, PickedInfo, PointEditing, PositionsEditing } from "xbsj-xe2/dist-node/xe2-base-objects";
import { Event, Listener, PartialWithUndefinedReactivePropsToNativeProps, ReactivePropsToNativePropsAndChanged } from "xbsj-xe2/dist-node/xe2-base-utils";
import { SceneObjectKey } from "xbsj-xe2/dist-node/xe2-utils";
import { CzmCustomPrimitive } from "../CzmCustomPrimitive";
export declare class CzmExtrudedPolyline extends ESSceneObject {
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
        show: boolean | undefined;
        allowPicking: boolean | undefined;
        editing: boolean | undefined;
        pointEditing: boolean | undefined;
        positions: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number][] | undefined>;
        height: number | undefined;
        textureSizeInMeters: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number] | undefined>;
        textureUri: string | undefined;
        textureMoveSpeed: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number] | undefined>;
        textureColor: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number] | undefined>;
    };
    get json(): JsonType;
    set json(value: JsonType);
    static defaults: {
        show: boolean;
        allowPicking: boolean;
        editing: boolean;
        pointEditing: boolean;
        positions: [number, number, number][];
        height: number;
        textureSizeInMeters: [number, number];
        textureUri: string;
        textureMoveSpeed: [number, number];
        textureColor: [number, number, number, number];
        viewerTagsEnums: [string, string][];
    };
    private _pickedEvent;
    get pickedEvent(): Event<[PickedInfo]>;
    private _flyToEvent;
    get flyToEvent(): Listener<[number | undefined]>;
    flyTo(duration?: number): void;
    private _sPositionsEditing;
    get sPositionsEditing(): PositionsEditing;
    private _pointEditor;
    get pointEditor(): PointEditing;
    private _czmCustomPrimitive;
    get czmCustomPrimitive(): CzmCustomPrimitive;
    private _geoPolygon;
    get geoPolygon(): GeoPolygon;
    constructor(id?: SceneObjectKey);
    getProperties(language?: string): import("xbsj-xe2/dist-node/xe2-base-objects").Property[];
}
export declare namespace CzmExtrudedPolyline {
    const createDefaultProps: () => {
        execOnceFuncStr: string | undefined;
        updateFuncStr: string | undefined;
        toDestroyFuncStr: string | undefined;
        name: string;
        ref: string | undefined;
        devTags: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<string[] | undefined>;
        extras: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<import("xbsj-xe2/dist-node/xe2-base-utils").JsonValue>;
        show: boolean | undefined;
        allowPicking: boolean | undefined;
        editing: boolean | undefined;
        pointEditing: boolean | undefined;
        positions: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number][] | undefined>;
        height: number | undefined;
        textureSizeInMeters: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number] | undefined>;
        textureUri: string | undefined;
        textureMoveSpeed: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number] | undefined>;
        textureColor: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number] | undefined>;
    };
}
export interface CzmExtrudedPolyline extends ReactivePropsToNativePropsAndChanged<ReturnType<typeof CzmExtrudedPolyline.createDefaultProps>> {
}
declare type JsonType = PartialWithUndefinedReactivePropsToNativeProps<ReturnType<typeof CzmExtrudedPolyline.createDefaultProps> & {
    type: string;
}>;
export {};

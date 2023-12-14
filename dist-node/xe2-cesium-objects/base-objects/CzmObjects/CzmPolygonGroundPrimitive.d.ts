import { CzmMaterialJsonType, ESSceneObject, PolygonHierarchyType } from "xbsj-xe2/dist-node/xe2-base-objects";
import { PickedInfo } from "xbsj-xe2/dist-node/xe2-base-objects";
import { Event, JsonValue, Listener, PartialWithUndefinedReactivePropsToNativeProps, ReactivePropsToNativePropsAndChanged } from "xbsj-xe2/dist-node/xe2-base-utils";
import { SceneObjectKey } from "xbsj-xe2/dist-node/xe2-utils";
export declare class CzmPolygonGroundPrimitive extends ESSceneObject {
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
        show: boolean | undefined;
        allowPicking: boolean | undefined;
        arcType: "NONE" | "GEODESIC" | "RHUMB" | undefined;
        material: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<CzmMaterialJsonType>;
        stRotation: number | undefined;
        polygonHierarchy: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<PolygonHierarchyType>;
        height: number | undefined;
        extrudedHeight: number | undefined;
        ellipsoid: [x: number, y: number, z: number] | undefined;
        granularity: number | undefined;
        perPositionHeight: boolean | undefined;
        closeTop: boolean | undefined;
        closeBottom: boolean | undefined;
    };
    get json(): JsonType;
    set json(value: JsonType);
    get geoJson(): JsonValue;
    set geoJson(value: JsonValue);
    get geoJsonStr(): string;
    set geoJsonStr(value: string);
    private _pickedEvent;
    get pickedEvent(): Event<[PickedInfo]>;
    private _flyToEvent;
    get flyToEvent(): Listener<[number | undefined]>;
    flyTo(duration?: number): void;
    constructor(id?: SceneObjectKey);
    getProperties(language?: string): import("xbsj-xe2/dist-node/xe2-base-objects").Property[];
}
export declare namespace CzmPolygonGroundPrimitive {
    const createDefaultProps: () => {
        execOnceFuncStr: string | undefined;
        updateFuncStr: string | undefined;
        toDestroyFuncStr: string | undefined;
        name: string;
        ref: string | undefined;
        devTags: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<string[] | undefined>;
        extras: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<JsonValue>;
        show: boolean | undefined;
        allowPicking: boolean | undefined;
        arcType: "NONE" | "GEODESIC" | "RHUMB" | undefined;
        material: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<CzmMaterialJsonType>;
        stRotation: number | undefined;
        polygonHierarchy: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<PolygonHierarchyType>;
        height: number | undefined;
        extrudedHeight: number | undefined;
        ellipsoid: [x: number, y: number, z: number] | undefined;
        granularity: number | undefined;
        perPositionHeight: boolean | undefined;
        closeTop: boolean | undefined;
        closeBottom: boolean | undefined;
    };
}
export interface CzmPolygonGroundPrimitive extends ReactivePropsToNativePropsAndChanged<ReturnType<typeof CzmPolygonGroundPrimitive.createDefaultProps>> {
}
declare type JsonType = PartialWithUndefinedReactivePropsToNativeProps<ReturnType<typeof CzmPolygonGroundPrimitive.createDefaultProps> & {
    type: string;
}>;
export {};

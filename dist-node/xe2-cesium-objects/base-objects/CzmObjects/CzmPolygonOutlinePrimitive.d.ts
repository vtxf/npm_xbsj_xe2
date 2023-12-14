import { JsonValue, Listener, PartialWithUndefinedReactivePropsToNativeProps, ReactivePropsToNativePropsAndChanged } from "xbsj-xe2/dist-node/xe2-base-utils";
import { SceneObjectKey } from "xbsj-xe2/dist-node/xe2-utils";
import { PolygonHierarchyType } from "xbsj-xe2/dist-node/xe2-base-objects";
import { ESSceneObject } from "xbsj-xe2/dist-node/xe2-base-objects";
export declare class CzmPolygonOutlinePrimitive extends ESSceneObject {
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
        height: number | undefined;
        extrudedHeight: number | undefined;
        translucent: boolean | undefined;
        outlineColor: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number] | undefined>;
        arcType: "NONE" | "GEODESIC" | "RHUMB" | undefined;
        polygonHierarchy: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<PolygonHierarchyType>;
        ellipsoid: [x: number, y: number, z: number] | undefined;
        granularity: number | undefined;
        perPositionHeight: boolean | undefined;
    };
    get json(): JsonType;
    set json(value: JsonType);
    get geoJson(): JsonValue;
    set geoJson(value: JsonValue);
    get geoJsonStr(): string;
    set geoJsonStr(value: string);
    private _flyToEvent;
    get flyToEvent(): Listener<[number | undefined]>;
    flyTo(duration?: number): void;
    constructor(id?: SceneObjectKey);
    getProperties(language?: string): import("xbsj-xe2/dist-node/xe2-base-objects").Property[];
}
export declare namespace CzmPolygonOutlinePrimitive {
    const createDefaultProps: () => {
        execOnceFuncStr: string | undefined;
        updateFuncStr: string | undefined;
        toDestroyFuncStr: string | undefined;
        name: string;
        ref: string | undefined;
        devTags: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<string[] | undefined>;
        extras: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<JsonValue>;
        show: boolean | undefined;
        height: number | undefined;
        extrudedHeight: number | undefined;
        translucent: boolean | undefined;
        outlineColor: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number] | undefined>;
        arcType: "NONE" | "GEODESIC" | "RHUMB" | undefined;
        polygonHierarchy: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<PolygonHierarchyType>;
        ellipsoid: [x: number, y: number, z: number] | undefined;
        granularity: number | undefined;
        perPositionHeight: boolean | undefined;
    };
}
export interface CzmPolygonOutlinePrimitive extends ReactivePropsToNativePropsAndChanged<ReturnType<typeof CzmPolygonOutlinePrimitive.createDefaultProps>> {
}
declare type JsonType = PartialWithUndefinedReactivePropsToNativeProps<ReturnType<typeof CzmPolygonOutlinePrimitive.createDefaultProps> & {
    type: string;
}>;
export {};

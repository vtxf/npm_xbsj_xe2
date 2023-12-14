import { CzmMaterialJsonType, PickedInfo, PolygonHierarchyType } from "xbsj-xe2/dist-node/xe2-base-objects";
import { Event, JsonValue, Listener, PartialWithUndefinedReactivePropsToNativeProps, ReactivePropsToNativePropsAndChanged } from "xbsj-xe2/dist-node/xe2-base-utils";
import { SceneObjectKey } from "xbsj-xe2/dist-node/xe2-utils";
import { ESSceneObject } from "xbsj-xe2/dist-node/xe2-base-objects";
export declare class CzmCoplanarPolygonPrimitive extends ESSceneObject {
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
        polygonHierarchy: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<PolygonHierarchyType | undefined>;
        stRotation: number | undefined;
        material: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<CzmMaterialJsonType | undefined>;
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
    private _pickedEvent;
    get pickedEvent(): Event<[PickedInfo]>;
    static defaluts: {
        allowPicking: boolean;
        show: boolean;
        polygonHierarchy: PolygonHierarchyType;
        stRotation: number;
        material: CzmMaterialJsonType;
    };
    static polygonHierarchyMd: string;
    constructor(id?: SceneObjectKey);
    getProperties(language?: string): import("xbsj-xe2/dist-node/xe2-base-objects").Property[];
}
export declare namespace CzmCoplanarPolygonPrimitive {
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
        polygonHierarchy: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<PolygonHierarchyType | undefined>;
        stRotation: number | undefined;
        material: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<CzmMaterialJsonType | undefined>;
    };
}
export interface CzmCoplanarPolygonPrimitive extends ReactivePropsToNativePropsAndChanged<ReturnType<typeof CzmCoplanarPolygonPrimitive.createDefaultProps>> {
}
declare type JsonType = PartialWithUndefinedReactivePropsToNativeProps<ReturnType<typeof CzmCoplanarPolygonPrimitive.createDefaultProps> & {
    type: string;
}>;
export {};

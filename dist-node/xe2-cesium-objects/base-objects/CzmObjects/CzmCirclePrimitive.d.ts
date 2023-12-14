import { PickedInfo } from "xbsj-xe2/dist-node/xe2-base-objects";
import { Event, JsonValue, Listener, PartialWithUndefinedReactivePropsToNativeProps, ReactivePropsToNativePropsAndChanged } from "xbsj-xe2/dist-node/xe2-base-utils";
import { SceneObjectKey } from "xbsj-xe2/dist-node/xe2-utils";
import { CzmMaterialJsonType } from "xbsj-xe2/dist-node/xe2-base-objects";
import { ESSceneObject } from "xbsj-xe2/dist-node/xe2-base-objects";
export declare class CzmCirclePrimitive extends ESSceneObject {
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
        material: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<CzmMaterialJsonType>;
        position: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number] | undefined>;
        height: number | undefined;
        extrudedHeight: number | undefined;
        radius: number | undefined;
        stRotation: number | undefined;
        ellipsoid: [x: number, y: number, z: number] | undefined;
        granularity: number | undefined;
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
    constructor(id?: SceneObjectKey);
    static defaults: {
        show: boolean;
        allowPicking: boolean;
        translucent: boolean;
        outlineColor: [number, number, number, number];
        position: [number, number, number];
        height: number;
        extrudedHeight: number;
        radius: number;
        stRotation: number;
        ellipsoid: [number, number, number];
        granularity: number;
        viewerTagsEnums: [string, string][];
    };
    getProperties(language?: string): import("xbsj-xe2/dist-node/xe2-base-objects").Property[];
}
export declare namespace CzmCirclePrimitive {
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
        material: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<CzmMaterialJsonType>;
        position: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number] | undefined>;
        height: number | undefined;
        extrudedHeight: number | undefined;
        radius: number | undefined;
        stRotation: number | undefined;
        ellipsoid: [x: number, y: number, z: number] | undefined;
        granularity: number | undefined;
    };
}
export interface CzmCirclePrimitive extends ReactivePropsToNativePropsAndChanged<ReturnType<typeof CzmCirclePrimitive.createDefaultProps>> {
}
declare type JsonType = PartialWithUndefinedReactivePropsToNativeProps<ReturnType<typeof CzmCirclePrimitive.createDefaultProps> & {
    type: string;
}>;
export {};

import { JsonValue, Listener, PartialWithUndefinedReactivePropsToNativeProps, ReactivePropsToNativePropsAndChanged } from "xbsj-xe2/dist-node/xe2-base-utils";
import { SceneObjectKey } from "xbsj-xe2/dist-node/xe2-utils";
import { ESSceneObject } from "xbsj-xe2/dist-node/xe2-base-objects";
export declare class CzmCylinderEntity extends ESSceneObject {
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
        length: number | undefined;
        topRadius: number | undefined;
        bottomRadius: number | undefined;
        heightReference: string | undefined;
        fill: boolean | undefined;
        material: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number] | undefined>;
        outline: boolean | undefined;
        outlineColor: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number] | undefined>;
        outlineWidth: number | undefined;
        numberOfVerticalLines: number | undefined;
        slices: number | undefined;
        shadows: string | undefined;
        distanceDisplayCondition: [number, number] | undefined;
        position: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number] | undefined>;
        rotation: [number, number, number];
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
    static defaults: {
        show: boolean;
        length: number;
        topRadius: number;
        bottomRadius: number;
        heightReference: string;
        fill: boolean;
        material: [number, number, number, number];
        outline: boolean;
        outlineColor: [number, number, number, number];
        outlineWidth: number;
        numberOfVerticalLines: number;
        slices: number;
        shadows: string;
        distanceDisplayCondition: [number, number];
        position: [number, number, number];
        rotation: [number, number, number];
        viewerTagsEnums: [string, string][];
    };
    getProperties(language?: string): import("xbsj-xe2/dist-node/xe2-base-objects").Property[];
}
export declare namespace CzmCylinderEntity {
    const createDefaultProps: () => {
        execOnceFuncStr: string | undefined;
        updateFuncStr: string | undefined;
        toDestroyFuncStr: string | undefined;
        name: string;
        ref: string | undefined;
        devTags: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<string[] | undefined>;
        extras: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<JsonValue>;
        show: boolean;
        length: number | undefined;
        topRadius: number | undefined;
        bottomRadius: number | undefined;
        heightReference: string | undefined;
        fill: boolean | undefined;
        material: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number] | undefined>;
        outline: boolean | undefined;
        outlineColor: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number] | undefined>;
        outlineWidth: number | undefined;
        numberOfVerticalLines: number | undefined;
        slices: number | undefined;
        shadows: string | undefined;
        distanceDisplayCondition: [number, number] | undefined;
        position: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number] | undefined>;
        rotation: [number, number, number];
    };
}
export interface CzmCylinderEntity extends ReactivePropsToNativePropsAndChanged<ReturnType<typeof CzmCylinderEntity.createDefaultProps>> {
}
declare type JsonType = PartialWithUndefinedReactivePropsToNativeProps<ReturnType<typeof CzmCylinderEntity.createDefaultProps> & {
    type: string;
}>;
export {};

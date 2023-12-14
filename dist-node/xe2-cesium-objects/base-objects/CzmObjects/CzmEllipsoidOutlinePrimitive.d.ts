import { JsonValue, Listener, PartialWithUndefinedReactivePropsToNativeProps, ReactivePropsToNativePropsAndChanged } from "xbsj-xe2/dist-node/xe2-base-utils";
import { SceneObjectKey } from "xbsj-xe2/dist-node/xe2-utils";
import { ESSceneObject } from "xbsj-xe2/dist-node/xe2-base-objects";
export declare class CzmEllipsoidOutlinePrimitive extends ESSceneObject {
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
        color: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number] | undefined>;
        position: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number] | undefined>;
        radii: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number] | undefined>;
        innerRadii: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number] | undefined>;
        minimumClock: number | undefined;
        maximumClock: number | undefined;
        minimumCone: number | undefined;
        maximumCone: number | undefined;
        stackPartitions: number | undefined;
        slicePartitions: number | undefined;
        subdivisions: number | undefined;
        translucent: boolean | undefined;
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
    static defaults: {
        show: boolean;
        color: [number, number, number, number];
        position: [number, number, number];
        radii: [number, number, number];
        innerRadii: [number, number, number];
        translucent: boolean;
        minimumClock: number;
        maximumClock: number;
        minimumCone: number;
        maximumCone: number;
        stackPartitions: number;
        slicePartitions: number;
        subdivisions: number;
        viewerTagsEnums: [string, string][];
    };
    constructor(id?: SceneObjectKey);
    getProperties(language?: string): import("xbsj-xe2/dist-node/xe2-base-objects").Property[];
}
export declare namespace CzmEllipsoidOutlinePrimitive {
    const createDefaultProps: () => {
        execOnceFuncStr: string | undefined;
        updateFuncStr: string | undefined;
        toDestroyFuncStr: string | undefined;
        name: string;
        ref: string | undefined;
        devTags: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<string[] | undefined>;
        extras: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<JsonValue>;
        show: boolean | undefined;
        color: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number] | undefined>;
        position: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number] | undefined>;
        radii: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number] | undefined>;
        innerRadii: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number] | undefined>;
        minimumClock: number | undefined;
        maximumClock: number | undefined;
        minimumCone: number | undefined;
        maximumCone: number | undefined;
        stackPartitions: number | undefined;
        slicePartitions: number | undefined;
        subdivisions: number | undefined;
        translucent: boolean | undefined;
    };
}
export interface CzmEllipsoidOutlinePrimitive extends ReactivePropsToNativePropsAndChanged<ReturnType<typeof CzmEllipsoidOutlinePrimitive.createDefaultProps>> {
}
declare type JsonType = PartialWithUndefinedReactivePropsToNativeProps<ReturnType<typeof CzmEllipsoidOutlinePrimitive.createDefaultProps> & {
    type: string;
}>;
export {};

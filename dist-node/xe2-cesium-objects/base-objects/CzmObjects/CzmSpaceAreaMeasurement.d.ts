import { ESSceneObject, GeoCustomDivPoi, PickedInfo, PositionsEditing } from "xbsj-xe2/dist-node/xe2-base-objects";
import { Event, Listener, PartialWithUndefinedReactivePropsToNativeProps, ReactivePropsToNativePropsAndChanged } from "xbsj-xe2/dist-node/xe2-base-utils";
import { SceneObjectKey } from "xbsj-xe2/dist-node/xe2-utils";
import { CzmPolygonGroundPrimitive } from "./CzmPolygonGroundPrimitive";
export declare class CzmSpaceAreaMeasurement extends ESSceneObject {
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
        positions: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number][] | undefined>;
        positionEditing: boolean;
        show: boolean | undefined;
        totalArea: number | undefined;
        interpolationDistance: number | undefined;
        interpolation: boolean | undefined;
        offsetHeight: number | undefined;
        drillDepth: number | undefined;
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
    private _czmPolygonGroundPrimitive;
    get czmPolygonGroundPrimitive(): CzmPolygonGroundPrimitive;
    private _geoDivPoi;
    get geoDivPoi(): GeoCustomDivPoi<{
        destroy(): undefined;
    }>;
    constructor(id?: SceneObjectKey);
    static defaults: {
        positions: never[];
        positionEditing: boolean;
        totalArea: number;
        interpolation: boolean;
        interpolationDistance: number;
        offsetHeight: number;
        drillDepth: number;
        viewerTagsEnums: [string, string][];
    };
    getProperties(language?: string): import("xbsj-xe2/dist-node/xe2-base-objects").Property[];
}
export declare namespace CzmSpaceAreaMeasurement {
    const createDefaultProps: () => {
        execOnceFuncStr: string | undefined;
        updateFuncStr: string | undefined;
        toDestroyFuncStr: string | undefined;
        name: string;
        ref: string | undefined;
        devTags: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<string[] | undefined>;
        extras: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<import("xbsj-xe2/dist-node/xe2-base-utils").JsonValue>;
        positions: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number][] | undefined>;
        positionEditing: boolean;
        show: boolean | undefined;
        totalArea: number | undefined;
        interpolationDistance: number | undefined;
        interpolation: boolean | undefined;
        offsetHeight: number | undefined;
        drillDepth: number | undefined;
    };
}
export interface CzmSpaceAreaMeasurement extends ReactivePropsToNativePropsAndChanged<ReturnType<typeof CzmSpaceAreaMeasurement.createDefaultProps>> {
}
declare type JsonType = PartialWithUndefinedReactivePropsToNativeProps<ReturnType<typeof CzmSpaceAreaMeasurement.createDefaultProps> & {
    type: string;
}>;
export {};

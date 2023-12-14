import { GeoDivTextPoi, GeoPoint, GeoPolyline, PositionsEditing } from "xbsj-xe2/dist-node/xe2-base-objects";
import { ESSceneObject, PickedInfo } from "xbsj-xe2/dist-node/xe2-base-objects";
import { Event, Listener, PartialWithUndefinedReactivePropsToNativeProps, ReactivePropsToNativePropsAndChanged } from "xbsj-xe2/dist-node/xe2-base-utils";
export declare class XbsjVisibilityAnalysis extends ESSceneObject {
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
        allowPicking: boolean | undefined;
        editing: boolean | undefined;
        positions: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number][] | undefined>;
        cutPointPosition: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number] | undefined>;
        calculating: boolean | undefined;
    };
    get json(): JsonType;
    set json(value: JsonType);
    private _pickedEvent;
    get pickedEvent(): Event<[PickedInfo]>;
    private _flyToEvent;
    get flyToEvent(): Listener<[number | undefined]>;
    flyTo(duration?: number): void;
    private _polyline;
    get polyline(): GeoPolyline;
    private _redPolyline;
    get redPolyline(): GeoPolyline;
    private _greenPolyline;
    get greenPolyline(): GeoPolyline;
    private _geoDivTextPoi;
    get geoDivTextPoi(): GeoDivTextPoi;
    private _originPoint;
    get originPoint(): GeoPoint;
    private _targetPoint;
    get targetPoint(): GeoPoint;
    private _cutPoint;
    get cutPoint(): GeoPoint;
    private _sPositionsEditing;
    get sPositionsEditing(): PositionsEditing;
    constructor(id?: string);
    getProperties(language?: string): import("xbsj-xe2/dist-node/xe2-base-objects").Property[];
}
export declare namespace XbsjVisibilityAnalysis {
    const createDefaultProps: () => {
        execOnceFuncStr: string | undefined;
        updateFuncStr: string | undefined;
        toDestroyFuncStr: string | undefined;
        name: string;
        ref: string | undefined;
        devTags: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<string[] | undefined>;
        extras: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<import("xbsj-xe2/dist-node/xe2-base-utils").JsonValue>;
        show: boolean;
        allowPicking: boolean | undefined;
        editing: boolean | undefined;
        positions: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number][] | undefined>;
        cutPointPosition: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number] | undefined>;
        calculating: boolean | undefined;
    };
}
export interface XbsjVisibilityAnalysis extends ReactivePropsToNativePropsAndChanged<ReturnType<typeof XbsjVisibilityAnalysis.createDefaultProps>> {
}
declare type JsonType = PartialWithUndefinedReactivePropsToNativeProps<ReturnType<typeof XbsjVisibilityAnalysis.createDefaultProps> & {
    type: string;
}>;
export {};

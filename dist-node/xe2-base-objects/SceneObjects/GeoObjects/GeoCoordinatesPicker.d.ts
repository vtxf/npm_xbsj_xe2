import { Event, PartialWithUndefinedReactivePropsToNativeProps, ReactivePropsToNativePropsAndChanged } from "xbsj-xe2/dist-node/xe2-base-utils";
import { SceneObjectKey } from "xbsj-xe2/dist-node/xe2-utils";
import { ESSceneObject } from "../ESSceneObject";
export declare type GeoCoordinatesPickerPickingFuncType = ((pointerEvent: PointerEvent) => boolean);
export declare class GeoCoordinatesPicker extends ESSceneObject {
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
        enabled: boolean;
        position: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number] | undefined>;
        heading: number;
        axisPixelSize: number;
        axisSnapPixelSize: number;
        virtualHeight: number | undefined;
        showCoordinates: boolean;
        showCircle: boolean;
        showPoint: boolean;
        clickEnabled: boolean;
        dbClickEnabled: boolean;
    };
    get json(): JsonType;
    set json(value: JsonType);
    private _overEvent;
    get overEvent(): Event<[]>;
    static defaultClickFilterFunc: (pointerEvent: PointerEvent) => boolean;
    static defaultDbClickFilterFunc: (pointerEvent: PointerEvent) => boolean;
    private _clickFilterFunc;
    get clickFilterFunc(): GeoCoordinatesPickerPickingFuncType;
    set clickFilterFunc(value: GeoCoordinatesPickerPickingFuncType);
    get clickFilterFuncChanged(): import("xbsj-xe2/dist-node/xe2-base-utils").Listener<[GeoCoordinatesPickerPickingFuncType, GeoCoordinatesPickerPickingFuncType]>;
    private _dbClickFilterFunc;
    get dbClickFilterFunc(): GeoCoordinatesPickerPickingFuncType;
    set dbClickFilterFunc(value: GeoCoordinatesPickerPickingFuncType);
    get dbClickFilterFuncChanged(): import("xbsj-xe2/dist-node/xe2-base-utils").Listener<[GeoCoordinatesPickerPickingFuncType, GeoCoordinatesPickerPickingFuncType]>;
    constructor(id?: SceneObjectKey);
    getProperties(language?: string): import("../ESSceneObject").Property[];
}
export declare namespace GeoCoordinatesPicker {
    const createDefaultProps: () => {
        execOnceFuncStr: string | undefined;
        updateFuncStr: string | undefined;
        toDestroyFuncStr: string | undefined;
        name: string;
        ref: string | undefined;
        devTags: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<string[] | undefined>;
        extras: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<import("xbsj-xe2/dist-node/xe2-base-utils").JsonValue>;
        enabled: boolean;
        position: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number] | undefined>;
        heading: number;
        axisPixelSize: number;
        axisSnapPixelSize: number;
        virtualHeight: number | undefined;
        showCoordinates: boolean;
        showCircle: boolean;
        showPoint: boolean;
        clickEnabled: boolean;
        dbClickEnabled: boolean;
    };
}
export interface GeoCoordinatesPicker extends ReactivePropsToNativePropsAndChanged<ReturnType<typeof GeoCoordinatesPicker.createDefaultProps>> {
}
declare type JsonType = PartialWithUndefinedReactivePropsToNativeProps<ReturnType<typeof GeoCoordinatesPicker.createDefaultProps> & {
    type: string;
}>;
export {};

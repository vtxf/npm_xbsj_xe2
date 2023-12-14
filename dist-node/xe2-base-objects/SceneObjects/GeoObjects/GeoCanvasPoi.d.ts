import { Destroyable, Event, Listener, PartialWithUndefinedReactivePropsToNativeProps, ReactivePropsToNativePropsAndChanged } from "xbsj-xe2/dist-node/xe2-base-utils";
import { CanvasPoi, CanvasPrimitivesContext, SceneObjectKey } from "xbsj-xe2/dist-node/xe2-utils";
import { PickedInfo } from "../../scene-manager";
import { PositionEditing } from "../../utils";
import { ESSceneObject } from "../ESSceneObject";
export declare type CanvasPoiClassAndCreateFuncPairType = [canvasPoiClass: new (canvasPrimitivesContext: CanvasPrimitivesContext) => CanvasPoi, createFunc: (canvasPoi: CanvasPoi, visibleAlphaChanged?: Listener<[number, number]>) => Destroyable];
/**
 * 该类是GeoCanvasPointPoi、GeoCanvasImagePoi等场景对象的基础类，不要直接使用！
 */
export declare class GeoCanvasPoi extends ESSceneObject {
    static readonly type: string;
    get typeName(): string;
    get defaultProps(): {
        show: boolean;
        enabled: boolean;
        position: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number] | undefined>;
        positionEditing: boolean;
        viewDistanceRange: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number] | undefined>;
        viewDistanceDebug: boolean;
        execOnceFuncStr: string | undefined;
        updateFuncStr: string | undefined;
        toDestroyFuncStr: string | undefined;
        name: string;
        ref: string | undefined;
        devTags: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<string[] | undefined>;
        extras: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<import("xbsj-xe2/dist-node/xe2-base-utils").JsonValue>;
    };
    get json(): JsonType;
    set json(value: JsonType);
    private _pickedEvent;
    get pickedEvent(): Event<[PickedInfo]>;
    private _flyToEvent;
    get flyToEvent(): Listener<[number | undefined]>;
    flyTo(duration?: number): void;
    private _sPositionEditing;
    get sPositionEditing(): PositionEditing;
    private _clickEvent;
    get clickEvent(): Event<[PointerEvent]>;
    private _clickOutEvent;
    get clickOutEvent(): Event<[PointerEvent]>;
    private _dbclickEvent;
    get dbclickEvent(): Event<[PointerEvent]>;
    private _dbclickOutEvent;
    get dbclickOutEvent(): Event<[PointerEvent]>;
    private _canvasPoiClassAndCreateFunc;
    get canvasPoiClassAndCreateFunc(): CanvasPoiClassAndCreateFuncPairType | undefined;
    set canvasPoiClassAndCreateFunc(value: CanvasPoiClassAndCreateFuncPairType | undefined);
    get canvasPoiClassAndCreateFuncChanged(): Listener<[CanvasPoiClassAndCreateFuncPairType | undefined, CanvasPoiClassAndCreateFuncPairType | undefined]>;
    static defaults: {
        viewDistanceRange: [number, number, number, number];
        viewerTagsEnums: [string, string][];
    };
    constructor(id?: SceneObjectKey);
    getProperties(language?: string): import("../ESSceneObject").Property[];
}
export declare namespace GeoCanvasPoi {
    const createDefaultProps: () => {
        show: boolean;
        enabled: boolean;
        position: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number] | undefined>;
        positionEditing: boolean;
        viewDistanceRange: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number] | undefined>;
        viewDistanceDebug: boolean;
        execOnceFuncStr: string | undefined;
        updateFuncStr: string | undefined;
        toDestroyFuncStr: string | undefined;
        name: string;
        ref: string | undefined;
        devTags: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<string[] | undefined>;
        extras: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<import("xbsj-xe2/dist-node/xe2-base-utils").JsonValue>;
    };
}
export interface GeoCanvasPoi extends ReactivePropsToNativePropsAndChanged<ReturnType<typeof GeoCanvasPoi.createDefaultProps>> {
}
declare type JsonType = PartialWithUndefinedReactivePropsToNativeProps<ReturnType<typeof GeoCanvasPoi.createDefaultProps> & {
    type: string;
}>;
export {};

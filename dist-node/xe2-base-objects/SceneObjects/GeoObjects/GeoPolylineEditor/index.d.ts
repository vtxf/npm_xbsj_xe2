import { Event, Listener, PartialWithUndefinedReactivePropsToNativeProps, ReactivePropsToNativePropsAndChanged } from "xbsj-xe2/dist-node/xe2-base-utils";
import { SceneObjectKey } from "xbsj-xe2/dist-node/xe2-utils";
import { ESSceneObject } from "../../ESSceneObject";
import { GeoPolylineEditorImpl } from "./GeoPolylineEditorImpl";
import { GeoPolylineArcType } from "../GeoPolyline";
export declare class GeoPolylineEditor extends ESSceneObject {
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
        loop: boolean;
        debug: boolean;
        polylineShow: boolean;
        polylineWidth: number;
        polylineColor: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number]>;
        polylineArcType: GeoPolylineArcType;
        maxPointsNum: number;
        firstControlPointImageUrl: string;
        otherControlPointImageUrl: string;
        middlePointImageUrl: string;
        noModifingAfterAdding: boolean;
        hideCursorInfo: boolean;
        moveWithFirstPosition: boolean;
    };
    get json(): JsonType & {
        positions: [number, number, number][];
    };
    set json(value: JsonType & {
        positions: [number, number, number][];
    });
    private _flyToEvent;
    get flyToEvent(): Listener<[number | undefined]>;
    flyTo(duration?: number): void;
    static defaults: {
        viewerTagsEnums: [string, string][];
    };
    private _inner;
    get inner(): GeoPolylineEditorImpl;
    /**
     * 每次调用都会创建一个新的数组，谨慎使用，避免影响性能！
     * @returns
     */
    getPositions(): [number, number, number][];
    resetPositions(value?: [number, number, number][]): void;
    forceResetPositions(value?: [number, number, number][]): void;
    get positions(): [number, number, number][];
    get positionsChanged(): Event<[]>;
    constructor(id?: SceneObjectKey);
    getProperties(language?: string): import("../../ESSceneObject").Property[];
}
export declare namespace GeoPolylineEditor {
    const createDefaultProps: () => {
        execOnceFuncStr: string | undefined;
        updateFuncStr: string | undefined;
        toDestroyFuncStr: string | undefined;
        name: string;
        ref: string | undefined;
        devTags: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<string[] | undefined>;
        extras: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<import("xbsj-xe2/dist-node/xe2-base-utils").JsonValue>;
        enabled: boolean;
        loop: boolean;
        debug: boolean;
        polylineShow: boolean;
        polylineWidth: number;
        polylineColor: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number]>;
        polylineArcType: GeoPolylineArcType;
        maxPointsNum: number;
        firstControlPointImageUrl: string;
        otherControlPointImageUrl: string;
        middlePointImageUrl: string;
        noModifingAfterAdding: boolean;
        hideCursorInfo: boolean;
        moveWithFirstPosition: boolean;
    };
}
export interface GeoPolylineEditor extends ReactivePropsToNativePropsAndChanged<ReturnType<typeof GeoPolylineEditor.createDefaultProps>> {
}
declare type JsonType = PartialWithUndefinedReactivePropsToNativeProps<ReturnType<typeof GeoPolylineEditor.createDefaultProps> & {
    type: string;
}>;
export {};

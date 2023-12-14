import { Viewer } from "../../scene-manager";
import { Destroyable, JsonValue, Listener, PartialWithUndefinedReactivePropsToNativeProps, ReactivePropsToNativePropsAndChanged } from "xbsj-xe2/dist-node/xe2-base-utils";
import { SceneObjectKey } from "xbsj-xe2/dist-node/xe2-utils";
import { ESSceneObject } from "../ESSceneObject";
import { GeoCustomDivPoi } from "./GeoCustomDivPoi";
declare class MyDivBase extends Destroyable {
    protected _container: HTMLDivElement;
    constructor(_container: HTMLDivElement, geoCustomDivPoi: GeoCustomDivPoi<MyDivBase>, viewer: Viewer);
}
export declare class GeoDivEditSignboardTextPoi extends ESSceneObject {
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
        position: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number] | undefined>;
        text: string | undefined;
        width: number | undefined;
        maxWidth: number | undefined;
        minWidth: number | undefined;
        left: number | undefined;
        right: number | undefined;
        zoom: number;
        editing: boolean;
        textEditing: boolean;
        leftImg: string;
        middleImg: string;
        rightImg: string;
        bottomImg: string;
        originRatioAndOffset: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[leftRatio: number, topRatio: number, leftOffset: number, topOffset: number]>;
        opacity: number;
        padding: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number]>;
        font: string;
        textAlign: "center" | "left" | "right" | undefined;
        color: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number]>;
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
    private _customDivPoi;
    get customDivPoi(): GeoCustomDivPoi<MyDivBase>;
    constructor(id?: SceneObjectKey);
    static defaults: {
        show: boolean;
        textEditing: boolean;
        width: number;
        maxWidth: number;
        minWidth: number;
        text: string;
        editing: boolean;
        originRatioAndOffset: [number, number, number, number];
        font: string;
        opacity: number;
        left: number;
        right: number;
        zoom: number;
        padding: [number, number];
        color: [number, number, number, number];
        leftImg: string;
        middleImg: string;
        rightImg: string;
        bottomImg: string;
        viewerTagsEnums: [string, string][];
    };
    getProperties(language?: string): import("../ESSceneObject").Property[];
}
export declare namespace GeoDivEditSignboardTextPoi {
    const createDefaultProps: () => {
        execOnceFuncStr: string | undefined;
        updateFuncStr: string | undefined;
        toDestroyFuncStr: string | undefined;
        name: string;
        ref: string | undefined;
        devTags: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<string[] | undefined>;
        extras: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<JsonValue>;
        show: boolean;
        position: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number] | undefined>;
        text: string | undefined;
        width: number | undefined;
        maxWidth: number | undefined;
        minWidth: number | undefined;
        left: number | undefined;
        right: number | undefined;
        zoom: number;
        editing: boolean;
        textEditing: boolean;
        leftImg: string;
        middleImg: string;
        rightImg: string;
        bottomImg: string;
        originRatioAndOffset: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[leftRatio: number, topRatio: number, leftOffset: number, topOffset: number]>;
        opacity: number;
        padding: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number]>;
        font: string;
        textAlign: "center" | "left" | "right" | undefined;
        color: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number]>;
    };
}
export interface GeoDivEditSignboardTextPoi extends ReactivePropsToNativePropsAndChanged<ReturnType<typeof GeoDivEditSignboardTextPoi.createDefaultProps>> {
}
declare type JsonType = PartialWithUndefinedReactivePropsToNativeProps<ReturnType<typeof GeoDivEditSignboardTextPoi.createDefaultProps> & {
    type: string;
}>;
export {};

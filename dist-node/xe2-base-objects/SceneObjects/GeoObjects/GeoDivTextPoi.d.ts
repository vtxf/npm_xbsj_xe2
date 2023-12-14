import { Destroyable, Event, Listener, PartialWithUndefinedReactivePropsToNativeProps, ReactivePropsToNativePropsAndChanged } from "xbsj-xe2/dist-node/xe2-base-utils";
import { SceneObjectKey } from "xbsj-xe2/dist-node/xe2-utils";
import { PickedInfo, Viewer } from "../../scene-manager";
import { ESSceneObject } from "../ESSceneObject";
import { GeoCustomDivPoi } from "./GeoCustomDivPoi";
declare class MyDivBase extends Destroyable {
    protected _container: HTMLDivElement;
    constructor(_container: HTMLDivElement, geoCustomDivPoi: GeoCustomDivPoi<MyDivBase>, viewer: Viewer);
}
export declare class GeoDivTextPoi extends ESSceneObject {
    static readonly type: string;
    get typeName(): string;
    get defaultProps(): {
        show: boolean;
        position: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number] | undefined>;
        text: string | undefined;
        width: number | undefined;
        positionEditing: boolean;
        textEditing: boolean;
        textEditingInteraction: boolean;
        originRatioAndOffset: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[leftRatio: number, topRatio: number, leftOffset: number, topOffset: number]>;
        opacity: number;
        fontSize: number;
        textAlign: string;
        color: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number]>;
        backgroundColor: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number]>;
        padding: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number]>;
        borderRadius: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number]>;
        borderWidth: number;
        borderColor: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number]>;
        borderStyle: string;
        viewDistanceRange: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number] | undefined>;
        viewDistanceDebug: boolean;
        pickOnClick: boolean;
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
    /**
     * @deprecated
     */
    private _divEvent;
    get divEvent(): Event<[boolean | undefined]>;
    private _divCreatedEvent;
    get divCreatedEvent(): Event<[HTMLDivElement]>;
    private _divToDestroyEvent;
    get divToDestroyEvent(): Event<[HTMLDivElement]>;
    private _flyToEvent;
    get flyToEvent(): Listener<[number | undefined]>;
    flyTo(duration?: number): void;
    private _customDivPoi;
    get customDivPoi(): GeoCustomDivPoi<MyDivBase>;
    get sPositionEditing(): import("../..").PositionEditing;
    constructor(id?: SceneObjectKey);
    static defaults: {
        width: number;
        text: string;
        borderStyle: string;
        viewDistanceRange: [number, number, number, number];
        viewerTagsEnums: [string, string][];
    };
    getProperties(language?: string): import("../ESSceneObject").Property[];
}
export declare namespace GeoDivTextPoi {
    const createDefaultProps: () => {
        show: boolean;
        position: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number] | undefined>;
        text: string | undefined;
        width: number | undefined;
        positionEditing: boolean;
        textEditing: boolean;
        textEditingInteraction: boolean;
        originRatioAndOffset: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[leftRatio: number, topRatio: number, leftOffset: number, topOffset: number]>;
        opacity: number;
        fontSize: number;
        textAlign: string;
        color: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number]>;
        backgroundColor: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number]>;
        padding: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number]>;
        borderRadius: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number]>;
        borderWidth: number;
        borderColor: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number]>;
        borderStyle: string;
        viewDistanceRange: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number] | undefined>;
        viewDistanceDebug: boolean;
        pickOnClick: boolean;
        execOnceFuncStr: string | undefined;
        updateFuncStr: string | undefined;
        toDestroyFuncStr: string | undefined;
        name: string;
        ref: string | undefined;
        devTags: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<string[] | undefined>;
        extras: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<import("xbsj-xe2/dist-node/xe2-base-utils").JsonValue>;
    };
}
export interface GeoDivTextPoi extends ReactivePropsToNativePropsAndChanged<ReturnType<typeof GeoDivTextPoi.createDefaultProps>> {
}
declare type JsonType = PartialWithUndefinedReactivePropsToNativeProps<ReturnType<typeof GeoDivTextPoi.createDefaultProps> & {
    type: string;
}>;
export {};

import { Event, Listener, PartialWithUndefinedReactivePropsToNativeProps, ReactivePropsToNativePropsAndChanged } from "xbsj-xe2/dist-node/xe2-base-utils";
import { SceneObjectKey } from "xbsj-xe2/dist-node/xe2-utils";
import { PickedInfo, Viewer } from "../../scene-manager";
import { ESSceneObject } from "../ESSceneObject";
import { PositionEditing } from "../../utils";
export declare type GeoCustomDivPoiInstanceClass<DivClass extends {
    destroy(): undefined;
} = {
    destroy(): undefined;
}> = (new (container: HTMLDivElement, customDiv: GeoCustomDivPoi<DivClass>, viewer: Viewer) => DivClass);
export declare class GeoCustomDivPoi<DivClass extends {
    destroy(): undefined;
} = {
    destroy(): undefined;
}> extends ESSceneObject {
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
        allowPicking: boolean;
        opacity: number;
        position: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number] | undefined>;
        editing: boolean;
        originRatioAndOffset: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[leftRatio: number, topRatio: number, leftOffset: number, topOffset: number]>;
        instanceClassStr: string | undefined;
        innerHTML: string | undefined;
        viewDistanceRange: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number] | undefined>;
        viewDistanceDebug: boolean;
    };
    get json(): JsonType;
    set json(value: JsonType);
    private _updateEvent;
    update(updateFunc: (divClass: DivClass, customDiv: GeoCustomDivPoi<DivClass>, viewer: Viewer) => void): void;
    private _instanceClassReact;
    get instanceClass(): GeoCustomDivPoiInstanceClass<DivClass> | undefined;
    set instanceClass(value: GeoCustomDivPoiInstanceClass<DivClass> | undefined);
    get instanceClassChanged(): Listener<[GeoCustomDivPoiInstanceClass<DivClass> | undefined, GeoCustomDivPoiInstanceClass<DivClass> | undefined]>;
    private _flyToEvent;
    get flyToEvent(): Listener<[number | undefined]>;
    flyTo(duration?: number): void;
    private _pickedEvent;
    get pickedEvent(): Event<[PickedInfo]>;
    pickFromDiv(element: HTMLElement, childPickedInfo?: PickedInfo): void;
    private _innerHtmlMounted;
    get innerHtmlMounted(): Listener<[contentDiv: HTMLDivElement, viewer: Viewer]>;
    static defaulInstanceClassStr: string;
    static instanceClassStrReadMe: string;
    static defaults: {
        position: [number, number, number];
        instanceClassStr: string;
        instanceClassStrReadMe: string;
        innerHTML: string;
        innerHTMLReadMe: string;
        viewDistanceRange: [number, number, number, number];
        viewerTagsEnums: [string, string][];
    };
    private _sPositionEditing;
    get sPositionEditing(): PositionEditing;
    constructor(id?: SceneObjectKey);
    getProperties(language?: string): import("../ESSceneObject").Property[];
}
export declare namespace GeoCustomDivPoi {
    const createDefaultProps: () => {
        execOnceFuncStr: string | undefined;
        updateFuncStr: string | undefined;
        toDestroyFuncStr: string | undefined;
        name: string;
        ref: string | undefined;
        devTags: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<string[] | undefined>;
        extras: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<import("xbsj-xe2/dist-node/xe2-base-utils").JsonValue>;
        show: boolean;
        allowPicking: boolean;
        opacity: number;
        position: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number] | undefined>;
        editing: boolean;
        originRatioAndOffset: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[leftRatio: number, topRatio: number, leftOffset: number, topOffset: number]>;
        instanceClassStr: string | undefined;
        innerHTML: string | undefined;
        viewDistanceRange: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number] | undefined>;
        viewDistanceDebug: boolean;
    };
}
export interface GeoCustomDivPoi extends ReactivePropsToNativePropsAndChanged<ReturnType<typeof GeoCustomDivPoi.createDefaultProps>> {
}
declare type JsonType = PartialWithUndefinedReactivePropsToNativeProps<ReturnType<typeof GeoCustomDivPoi.createDefaultProps> & {
    type: string;
}>;
export {};

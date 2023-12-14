import { PickedInfo } from "../../scene-manager";
import { Event, Listener, PartialWithUndefinedReactivePropsToNativeProps, ReactivePropsToNativePropsAndChanged } from "xbsj-xe2/dist-node/xe2-base-utils";
import { SceneObjectKey } from "xbsj-xe2/dist-node/xe2-utils";
import { ESSceneObject } from "../ESSceneObject";
export declare class GeoGifPoi extends ESSceneObject {
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
        show: boolean | undefined;
        opacity: number | undefined;
        position: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number] | undefined>;
        positionEditing: boolean | undefined;
        originRatioAndOffset: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[leftRatio: number, topRatio: number, leftOffset: number, topOffset: number]>;
        gifUrl: string | undefined;
        size: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[width: number, height: number] | undefined>;
        playing: boolean | undefined;
        loop: boolean | undefined;
        currentTime: number | undefined;
        speed: number | undefined;
        autoPlayOnLoad: boolean | undefined;
    };
    get json(): JsonType;
    set json(value: JsonType);
    private _pickedEvent;
    get pickedEvent(): Event<[PickedInfo]>;
    private _flyToEvent;
    get flyToEvent(): Listener<[number | undefined]>;
    flyTo(duration?: number): void;
    private _duration;
    get duration(): number;
    get durationChanged(): Listener<[number, number]>;
    private _setDuration;
    private _ratio;
    get ratio(): number;
    set ratio(value: number);
    get ratioChanged(): Listener<[number, number]>;
    static defaults: {
        show: boolean;
        opacity: number;
        position: [number, number, number];
        positionEditing: boolean;
        originRatioAndOffset: [number, number, number, number];
        gifUrl: string;
        size: [number, number];
        playing: boolean;
        loop: boolean;
        currentTime: number;
        speed: number;
        autoPlayOnLoad: boolean | undefined;
        ratio: number;
        viewerTagsEnums: [string, string][];
    };
    constructor(id?: SceneObjectKey);
    getProperties(language?: string): import("../ESSceneObject").Property[];
}
export declare namespace GeoGifPoi {
    const createDefaultProps: () => {
        execOnceFuncStr: string | undefined;
        updateFuncStr: string | undefined;
        toDestroyFuncStr: string | undefined;
        name: string;
        ref: string | undefined;
        devTags: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<string[] | undefined>;
        extras: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<import("xbsj-xe2/dist-node/xe2-base-utils").JsonValue>;
        show: boolean | undefined;
        opacity: number | undefined;
        position: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number] | undefined>;
        positionEditing: boolean | undefined;
        originRatioAndOffset: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[leftRatio: number, topRatio: number, leftOffset: number, topOffset: number]>;
        gifUrl: string | undefined;
        size: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[width: number, height: number] | undefined>;
        playing: boolean | undefined;
        loop: boolean | undefined;
        currentTime: number | undefined;
        speed: number | undefined;
        autoPlayOnLoad: boolean | undefined;
    };
}
export interface GeoGifPoi extends ReactivePropsToNativePropsAndChanged<ReturnType<typeof GeoGifPoi.createDefaultProps>> {
}
declare type JsonType = PartialWithUndefinedReactivePropsToNativeProps<ReturnType<typeof GeoGifPoi.createDefaultProps> & {
    type: string;
}>;
export {};

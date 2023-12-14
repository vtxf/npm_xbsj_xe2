import { GeoGifPoi } from "xbsj-xe2/dist-node/xe2-base-objects";
import { ESSceneObject, PickedInfo } from "xbsj-xe2/dist-node/xe2-base-objects";
import { Event, Listener, PartialWithUndefinedReactivePropsToNativeProps, ReactivePropsToNativePropsAndChanged } from "xbsj-xe2/dist-node/xe2-base-utils";
import { XbsjTailFlameEffect } from "./XbsjTailFlameEffect";
export declare type PlayerChannelType = [id: string, startTimeStamp: number, duration: number];
export declare class XbsjMissileSystem extends ESSceneObject {
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
        uri: string | undefined;
        text: string | undefined;
        currentPosition: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number] | undefined>;
        showPoi: boolean | undefined;
        maximumScale: number | undefined;
        minimumScale: number | undefined;
        pixelSize: number | undefined;
        originRatioAndOffset: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[leftRatio: number, topRatio: number, leftOffset: number, topOffset: number] | undefined>;
        localPosition: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number] | undefined>;
        localRotation: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number] | undefined>;
        localScale: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number] | undefined>;
        allowPicking: boolean | undefined;
        polylineShow: boolean | undefined;
        positions: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number][] | undefined>;
        color: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number] | undefined>;
        editing: boolean | undefined;
        depthTest: boolean | undefined;
        loop: boolean | undefined;
        currentTime: number | undefined;
        duration: number | undefined;
        speed: number | undefined;
        playing: boolean | undefined;
        channels: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<PlayerChannelType[] | undefined>;
    };
    private _geoGifPoi;
    get geoGifPoi(): GeoGifPoi;
    private _effect;
    get effect(): XbsjTailFlameEffect;
    get json(): JsonType;
    set json(value: JsonType);
    private _ratio;
    get ratio(): number;
    set ratio(value: number);
    get ratioChanged(): Listener<[number, number]>;
    private _pickedEvent;
    get pickedEvent(): Event<[PickedInfo]>;
    private _flyToEvent;
    get flyToEvent(): Listener<[number | undefined]>;
    flyTo(duration?: number): void;
    constructor(id?: string);
    getProperties(language?: string): import("xbsj-xe2/dist-node/xe2-base-objects").Property[];
}
declare const extraComponentProps: {};
export declare namespace XbsjMissileSystem {
    const createDefaultProps: () => {
        execOnceFuncStr: string | undefined;
        updateFuncStr: string | undefined;
        toDestroyFuncStr: string | undefined;
        name: string;
        ref: string | undefined;
        devTags: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<string[] | undefined>;
        extras: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<import("xbsj-xe2/dist-node/xe2-base-utils").JsonValue>;
        show: boolean | undefined;
        uri: string | undefined;
        text: string | undefined;
        currentPosition: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number] | undefined>;
        showPoi: boolean | undefined;
        maximumScale: number | undefined;
        minimumScale: number | undefined;
        pixelSize: number | undefined;
        originRatioAndOffset: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[leftRatio: number, topRatio: number, leftOffset: number, topOffset: number] | undefined>;
        localPosition: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number] | undefined>;
        localRotation: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number] | undefined>;
        localScale: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number] | undefined>;
        allowPicking: boolean | undefined;
        polylineShow: boolean | undefined;
        positions: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number][] | undefined>;
        color: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number] | undefined>;
        editing: boolean | undefined;
        depthTest: boolean | undefined;
        loop: boolean | undefined;
        currentTime: number | undefined;
        duration: number | undefined;
        speed: number | undefined;
        playing: boolean | undefined;
        channels: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<PlayerChannelType[] | undefined>;
    };
}
export interface XbsjMissileSystem extends ReactivePropsToNativePropsAndChanged<ReturnType<typeof XbsjMissileSystem.createDefaultProps> & typeof extraComponentProps> {
}
declare type JsonType = PartialWithUndefinedReactivePropsToNativeProps<ReturnType<typeof XbsjMissileSystem.createDefaultProps> & typeof extraComponentProps & {
    type: string;
}>;
export {};
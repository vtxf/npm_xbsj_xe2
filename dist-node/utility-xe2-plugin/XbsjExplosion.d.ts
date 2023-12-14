import { GeoGifPoi } from "xbsj-xe2/dist-node/xe2-base-objects";
import { PickedInfo, ESSceneObject } from "xbsj-xe2/dist-node/xe2-base-objects";
import { Event, Listener, PartialWithUndefinedReactivePropsToNativeProps, ReactivePropsToNativePropsAndChanged } from "xbsj-xe2/dist-node/xe2-base-utils";
export declare class XbsjExplosion extends ESSceneObject {
    static readonly type: string;
    get typeName(): string;
    get defaultProps(): {
        opacity: number | undefined;
        originRatioAndOffset: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[leftRatio: number, topRatio: number, leftOffset: number, topOffset: number]>;
        gifUrl: string | undefined;
        size: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[width: number, height: number] | undefined>;
        playing: boolean;
        loop: boolean;
        currentTime: number | undefined;
        speed: number | undefined;
        execOnceFuncStr: string | undefined;
        updateFuncStr: string | undefined;
        toDestroyFuncStr: string | undefined;
        name: string;
        ref: string | undefined;
        devTags: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<string[] | undefined>;
        extras: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<import("xbsj-xe2/dist-node/xe2-base-utils").JsonValue>;
        show: boolean | undefined;
        startTime: number | undefined;
        playerId: string | undefined;
        objId: string | undefined;
    };
    get json(): JsonType;
    set json(value: JsonType);
    private _geoGifPoi;
    get geoGifPoi(): GeoGifPoi;
    get flyToEvent(): Listener<[number | undefined]>;
    flyTo(duration?: number): void;
    private _pickedEvent;
    get pickedEvent(): Event<[PickedInfo]>;
    get ratio(): number;
    set ratio(value: number);
    get ratioChanged(): Listener<[number, number]>;
    constructor(id?: string);
    get position(): [number, number, number] | undefined;
    get positionChanged(): Listener<[[number, number, number] | undefined, [number, number, number] | undefined]>;
    getProperties(language?: string): import("xbsj-xe2/dist-node/xe2-base-objects").Property[];
}
declare const extraComponentProps: {
    opacity: number | undefined;
    originRatioAndOffset: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[leftRatio: number, topRatio: number, leftOffset: number, topOffset: number]>;
    gifUrl: string | undefined;
    size: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[width: number, height: number] | undefined>;
    playing: boolean;
    loop: boolean;
    currentTime: number | undefined;
    speed: number | undefined;
};
export declare namespace XbsjExplosion {
    const createDefaultProps: () => {
        execOnceFuncStr: string | undefined;
        updateFuncStr: string | undefined;
        toDestroyFuncStr: string | undefined;
        name: string;
        ref: string | undefined;
        devTags: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<string[] | undefined>;
        extras: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<import("xbsj-xe2/dist-node/xe2-base-utils").JsonValue>;
        show: boolean | undefined;
        startTime: number | undefined;
        playerId: string | undefined;
        objId: string | undefined;
    };
}
export interface XbsjExplosion extends ReactivePropsToNativePropsAndChanged<ReturnType<typeof XbsjExplosion.createDefaultProps> & typeof extraComponentProps> {
}
declare type JsonType = PartialWithUndefinedReactivePropsToNativeProps<ReturnType<typeof XbsjExplosion.createDefaultProps> & typeof extraComponentProps & {
    type: string;
}>;
export {};

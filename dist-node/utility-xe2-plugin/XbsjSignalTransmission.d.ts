import { CzmSignalTransmission } from "xbsj-xe2/dist-node/xe2-cesium-objects";
import { ESSceneObject, PickedInfo } from "xbsj-xe2/dist-node/xe2-base-objects";
import { Event, JsonValue, Listener, PartialWithUndefinedReactivePropsToNativeProps, ReactivePropsToNativePropsAndChanged } from "xbsj-xe2/dist-node/xe2-base-utils";
export declare class XbsjSignalTransmission extends ESSceneObject {
    static readonly type: string;
    get typeName(): string;
    get defaultProps(): {
        imageUrl: string | undefined;
        repeat: number | undefined;
        bidirectional: 0 | 1 | 2 | 3 | undefined;
        startTime: number | undefined;
        transmissionTime: number | undefined;
        color: [number, number, number, number] | undefined;
        width: number | undefined;
        arcType: "NONE" | "GEODESIC" | "RHUMB" | undefined;
        brightening: boolean | undefined;
        depthTest: boolean | undefined;
        positions: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number][] | undefined>;
        heightRatio: number | undefined;
        allowPicking: boolean | undefined;
        loop: boolean | undefined;
        currentTime: number | undefined;
        duration: number | undefined;
        playing: boolean | undefined;
        execOnceFuncStr: string | undefined;
        updateFuncStr: string | undefined;
        toDestroyFuncStr: string | undefined;
        name: string;
        ref: string | undefined;
        devTags: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<string[] | undefined>;
        extras: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<JsonValue>;
        show: boolean | undefined;
        ids: string[] | undefined;
        stopTime: number | undefined;
        playerId: string | undefined;
    };
    get json(): JsonType;
    set json(value: JsonType);
    private _signalTransmission;
    get signalTransmission(): CzmSignalTransmission;
    get flyToEvent(): Listener<[number | undefined]>;
    flyTo(duration?: number): void;
    private _pickedEvent;
    get pickedEvent(): Event<[PickedInfo]>;
    get ratio(): number;
    set ratio(value: number);
    get ratioChanged(): Listener<[number, number]>;
    constructor(id?: string);
    getProperties(language?: string): import("xbsj-xe2/dist-node/xe2-base-objects").Property[];
}
declare const extraComponentProps: {
    imageUrl: string | undefined;
    repeat: number | undefined;
    bidirectional: 0 | 1 | 2 | 3 | undefined;
    startTime: number | undefined;
    transmissionTime: number | undefined;
    color: [number, number, number, number] | undefined;
    width: number | undefined;
    arcType: "NONE" | "GEODESIC" | "RHUMB" | undefined;
    brightening: boolean | undefined;
    depthTest: boolean | undefined;
    positions: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number][] | undefined>;
    heightRatio: number | undefined;
    allowPicking: boolean | undefined;
    loop: boolean | undefined;
    currentTime: number | undefined;
    duration: number | undefined;
    playing: boolean | undefined;
};
export declare namespace XbsjSignalTransmission {
    const createDefaultProps: () => {
        execOnceFuncStr: string | undefined;
        updateFuncStr: string | undefined;
        toDestroyFuncStr: string | undefined;
        name: string;
        ref: string | undefined;
        devTags: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<string[] | undefined>;
        extras: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<JsonValue>;
        show: boolean | undefined;
        ids: string[] | undefined;
        startTime: number | undefined;
        stopTime: number | undefined;
        playerId: string | undefined;
    };
}
export interface XbsjSignalTransmission extends ReactivePropsToNativePropsAndChanged<ReturnType<typeof XbsjSignalTransmission.createDefaultProps> & typeof extraComponentProps> {
}
declare type JsonType = PartialWithUndefinedReactivePropsToNativeProps<ReturnType<typeof XbsjSignalTransmission.createDefaultProps> & typeof extraComponentProps & {
    type: string;
}>;
export {};

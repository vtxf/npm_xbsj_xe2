import { CzmDetectives } from "xbsj-xe2/dist-node/xe2-cesium-objects";
import { ESSceneObject } from "xbsj-xe2/dist-node/xe2-base-objects";
import { Listener, PartialWithUndefinedReactivePropsToNativeProps, ReactivePropsToNativePropsAndChanged } from "xbsj-xe2/dist-node/xe2-base-utils";
export declare class XbsjSignalInterference extends ESSceneObject {
    static readonly type: string;
    get typeName(): string;
    get defaultProps(): {
        color: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number] | undefined>;
        segments: number | undefined;
        ringRepeat: number | undefined;
        ringFill: number | undefined;
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
        extras: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<import("xbsj-xe2/dist-node/xe2-base-utils").JsonValue>;
        show: boolean | undefined;
        startId: string | undefined;
        endId: string | undefined;
        playerId: string | undefined;
        startTime: number | undefined;
        stopTime: number | undefined;
        topRadius: number | undefined;
        bottomRadius: number | undefined;
    };
    get json(): JsonType;
    set json(value: JsonType);
    private _czmDetectives;
    get czmDetectives(): CzmDetectives;
    private _flyToEvent;
    get flyToEvent(): Listener<[number | undefined]>;
    flyTo(duration?: number): void;
    get ratio(): number;
    set ratio(value: number);
    get ratioChanged(): Listener<[number, number]>;
    constructor(id?: string);
    getProperties(language?: string): import("xbsj-xe2/dist-node/xe2-base-objects").Property[];
}
declare const extraComponentProps: {
    color: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number] | undefined>;
    segments: number | undefined;
    ringRepeat: number | undefined;
    ringFill: number | undefined;
    loop: boolean | undefined;
    currentTime: number | undefined;
    duration: number | undefined;
    playing: boolean | undefined;
};
export declare namespace XbsjSignalInterference {
    const createDefaultProps: () => {
        execOnceFuncStr: string | undefined;
        updateFuncStr: string | undefined;
        toDestroyFuncStr: string | undefined;
        name: string;
        ref: string | undefined;
        devTags: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<string[] | undefined>;
        extras: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<import("xbsj-xe2/dist-node/xe2-base-utils").JsonValue>;
        show: boolean | undefined;
        startId: string | undefined;
        endId: string | undefined;
        playerId: string | undefined;
        startTime: number | undefined;
        stopTime: number | undefined;
        topRadius: number | undefined;
        bottomRadius: number | undefined;
    };
}
export interface XbsjSignalInterference extends ReactivePropsToNativePropsAndChanged<ReturnType<typeof XbsjSignalInterference.createDefaultProps> & typeof extraComponentProps> {
}
declare type JsonType = PartialWithUndefinedReactivePropsToNativeProps<ReturnType<typeof XbsjSignalInterference.createDefaultProps> & typeof extraComponentProps & {
    type: string;
}>;
export {};

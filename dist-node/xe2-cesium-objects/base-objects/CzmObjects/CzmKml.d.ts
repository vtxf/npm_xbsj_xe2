/// <reference types="cesium" />
import { ESSceneObject, PickedInfo } from "xbsj-xe2/dist-node/xe2-base-objects";
import { Event, Listener, PartialWithUndefinedReactivePropsToNativeProps, ReactivePropsToNativePropsAndChanged } from "xbsj-xe2/dist-node/xe2-base-utils";
import { CzmClock, CzmClockRangeType, CzmClockStepType } from "./CzmClock";
export declare class CzmKml extends ESSceneObject {
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
        uri: string | undefined;
        allowPicking: boolean | undefined;
        loadFuncStr: string | undefined;
        data: string | undefined;
        autoResetClock: boolean | undefined;
        clockEnabled: boolean | undefined;
        startTime: number | undefined;
        stopTime: number | undefined;
        currentTime: number | undefined;
        multiplier: number | undefined;
        clockStep: CzmClockStepType | undefined;
        clockRange: CzmClockRangeType | undefined;
        shouldAnimate: boolean | undefined;
    };
    get json(): JsonType;
    set json(value: JsonType);
    private _flyToEvent;
    get flyToEvent(): Listener<[number | undefined]>;
    flyTo(duration?: number): void;
    private _pickedEvent;
    get pickedEvent(): Event<[PickedInfo]>;
    private _loadFuncReact;
    get loadFun(): ((dataSource: Cesium.KmlDataSource, viewer?: Cesium.Viewer) => void) | undefined;
    set loadFun(value: ((dataSource: Cesium.KmlDataSource, viewer?: Cesium.Viewer) => void) | undefined);
    get loadFunChanged(): Listener<[((dataSource: import("cesium").KmlDataSource, viewer?: import("cesium").Viewer | undefined) => void) | undefined, ((dataSource: import("cesium").KmlDataSource, viewer?: import("cesium").Viewer | undefined) => void) | undefined]>;
    private _clock;
    get clock(): CzmClock;
    private _resetClockEvent;
    get resetClockEvent(): Event<[]>;
    resetClock(): void;
    constructor(id?: string);
    static defaults: {
        show: boolean;
        allowPicking: boolean;
        defaultLoadFuncStr: string;
        defaultLoadFuncDocStr: string;
        data: string;
        dataMd: string;
        autoResetClock: boolean;
        clockEnabled: boolean;
        startTime: () => number;
        stopTime: () => number;
        currentTime: () => number;
        multiplier: number;
        clockStep: CzmClockStepType;
        clockRange: CzmClockRangeType;
        shouldAnimate: boolean;
        uri: string;
        viewerTagsEnums: [string, string][];
    };
    getProperties(language?: string): import("xbsj-xe2/dist-node/xe2-base-objects").Property[];
}
export declare namespace CzmKml {
    const createDefaultProps: () => {
        execOnceFuncStr: string | undefined;
        updateFuncStr: string | undefined;
        toDestroyFuncStr: string | undefined;
        name: string;
        ref: string | undefined;
        devTags: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<string[] | undefined>;
        extras: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<import("xbsj-xe2/dist-node/xe2-base-utils").JsonValue>;
        show: boolean;
        uri: string | undefined;
        allowPicking: boolean | undefined;
        loadFuncStr: string | undefined;
        data: string | undefined;
        autoResetClock: boolean | undefined;
        clockEnabled: boolean | undefined;
        startTime: number | undefined;
        stopTime: number | undefined;
        currentTime: number | undefined;
        multiplier: number | undefined;
        clockStep: CzmClockStepType | undefined;
        clockRange: CzmClockRangeType | undefined;
        shouldAnimate: boolean | undefined;
    };
}
export interface CzmKml extends ReactivePropsToNativePropsAndChanged<ReturnType<typeof CzmKml.createDefaultProps>> {
}
declare type JsonType = PartialWithUndefinedReactivePropsToNativeProps<ReturnType<typeof CzmKml.createDefaultProps> & {
    type: string;
}>;
export {};

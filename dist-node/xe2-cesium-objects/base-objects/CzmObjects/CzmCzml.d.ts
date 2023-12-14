/// <reference types="cesium" />
import { ESSceneObject, PickedInfo } from "xbsj-xe2/dist-node/xe2-base-objects";
import { Event, Listener, PartialWithUndefinedReactivePropsToNativeProps, ReactivePropsToNativePropsAndChanged } from "xbsj-xe2/dist-node/xe2-base-utils";
import { CzmClock, CzmClockRangeType, CzmClockStepType } from "./CzmClock";
export declare class CzmCzml extends ESSceneObject {
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
        allowPicking: boolean | undefined;
        data: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<undefined>;
        autoResetClock: boolean | undefined;
        clockEnabled: boolean | undefined;
        startTime: number | undefined;
        stopTime: number | undefined;
        currentTime: number | undefined;
        multiplier: number | undefined;
        clockStep: CzmClockStepType | undefined;
        clockRange: CzmClockRangeType | undefined;
        shouldAnimate: boolean | undefined;
        loadFuncStr: string | undefined;
    };
    get json(): JsonType;
    set json(value: JsonType);
    private _flyToEvent;
    get flyToEvent(): Listener<[number | undefined]>;
    flyTo(duration?: number): void;
    private _loadFuncReact;
    get loadFun(): ((dataSource: Cesium.CzmlDataSource) => void) | undefined;
    set loadFun(value: ((dataSource: Cesium.CzmlDataSource) => void) | undefined);
    get loadFunChanged(): Listener<[((dataSource: import("cesium").CzmlDataSource) => void) | undefined, ((dataSource: import("cesium").CzmlDataSource) => void) | undefined]>;
    private _pickedEvent;
    get pickedEvent(): Event<[PickedInfo]>;
    private _clock;
    get clock(): CzmClock;
    private _resetClockEvent;
    get resetClockEvent(): Event<[]>;
    resetClock(): void;
    constructor(id?: string);
    static defaults: {
        show: boolean;
        allowPicking: boolean;
        data: ({
            id: string;
            version: string;
            availability?: undefined;
            billboard?: undefined;
            label?: undefined;
            path?: undefined;
            position?: undefined;
        } | {
            id: string;
            availability: string;
            billboard: {
                eyeOffset: {
                    cartesian: number[];
                };
                horizontalOrigin: string;
                image: string;
                pixelOffset: {
                    cartesian2: number[];
                };
                scale: number;
                show: {
                    interval: string;
                    boolean: boolean;
                }[];
                verticalOrigin: string;
            };
            label: {
                fillColor: {
                    interval: string;
                    rgba: number[];
                }[];
                font: string;
                horizontalOrigin: string;
                outlineColor: {
                    rgba: number[];
                };
                pixelOffset: {
                    cartesian2: number[];
                };
                scale: number;
                show: {
                    interval: string;
                    boolean: boolean;
                }[];
                style: string;
                text: string;
                verticalOrigin: string;
            };
            path: {
                material: {
                    solidColor: {
                        color: {
                            interval: string;
                            rgba: number[];
                        };
                    };
                };
                width: {
                    interval: string;
                    number: number;
                }[];
                show: {
                    interval: string;
                    boolean: boolean;
                }[];
            };
            position: {
                interpolationAlgorithm: string;
                interpolationDegree: number;
                epoch: string;
                cartesian: number[];
            };
            version?: undefined;
        })[];
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
        defaultLoadFuncStr: string;
        defaultLoadFuncDocStr: string;
        viewerTagsEnums: [string, string][];
    };
    getProperties(language?: string): import("xbsj-xe2/dist-node/xe2-base-objects").Property[];
}
export declare namespace CzmCzml {
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
        allowPicking: boolean | undefined;
        data: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<undefined>;
        autoResetClock: boolean | undefined;
        clockEnabled: boolean | undefined;
        startTime: number | undefined;
        stopTime: number | undefined;
        currentTime: number | undefined;
        multiplier: number | undefined;
        clockStep: CzmClockStepType | undefined;
        clockRange: CzmClockRangeType | undefined;
        shouldAnimate: boolean | undefined;
        loadFuncStr: string | undefined;
    };
}
export interface CzmCzml extends ReactivePropsToNativePropsAndChanged<ReturnType<typeof CzmCzml.createDefaultProps>> {
}
declare type JsonType = PartialWithUndefinedReactivePropsToNativeProps<ReturnType<typeof CzmCzml.createDefaultProps> & {
    type: string;
}>;
export {};

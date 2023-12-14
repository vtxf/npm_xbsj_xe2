import { PartialWithUndefinedReactivePropsToNativeProps, ReactivePropsToNativePropsAndChanged } from "xbsj-xe2/dist-node/xe2-base-utils";
import { SceneObjectKey } from "xbsj-xe2/dist-node/xe2-utils";
import { ESSceneObject } from "xbsj-xe2/dist-node/xe2-base-objects";
export declare class CzmClock extends ESSceneObject {
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
        enabled: boolean | undefined;
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
    constructor(id?: SceneObjectKey);
    static defaults: {
        enabled: boolean;
        startTime: () => number;
        stopTime: () => number;
        currentTime: () => number;
        multiplier: number;
        clockStep: CzmClockStepType;
        clockRange: CzmClockRangeType;
        shouldAnimate: boolean;
        viewerTagsEnums: [string, string][];
    };
    getProperties(language?: string): import("xbsj-xe2/dist-node/xe2-base-objects").Property[];
}
export declare type CzmClockStepType = 'TICK_DEPENDENT' | 'SYSTEM_CLOCK_MULTIPLIER' | 'SYSTEM_CLOCK';
export declare type CzmClockRangeType = 'UNBOUNDED' | 'CLAMPED' | 'LOOP_STOP';
export declare namespace CzmClock {
    const createDefaultProps: () => {
        execOnceFuncStr: string | undefined;
        updateFuncStr: string | undefined;
        toDestroyFuncStr: string | undefined;
        name: string;
        ref: string | undefined;
        devTags: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<string[] | undefined>;
        extras: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<import("xbsj-xe2/dist-node/xe2-base-utils").JsonValue>;
        enabled: boolean | undefined;
        startTime: number | undefined;
        stopTime: number | undefined;
        currentTime: number | undefined;
        multiplier: number | undefined;
        clockStep: CzmClockStepType | undefined;
        clockRange: CzmClockRangeType | undefined;
        shouldAnimate: boolean | undefined;
    };
}
export interface CzmClock extends ReactivePropsToNativePropsAndChanged<ReturnType<typeof CzmClock.createDefaultProps>> {
}
declare type JsonType = PartialWithUndefinedReactivePropsToNativeProps<ReturnType<typeof CzmClock.createDefaultProps> & {
    type: string;
}>;
export {};

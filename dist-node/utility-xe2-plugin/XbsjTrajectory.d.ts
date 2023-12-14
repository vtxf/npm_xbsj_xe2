import { GeoPolyline } from "xbsj-xe2/dist-node/xe2-base-objects";
import { ESSceneObject } from "xbsj-xe2/dist-node/xe2-base-objects";
import { Listener, PartialWithUndefinedReactivePropsToNativeProps, ReactivePropsToNativePropsAndChanged } from "xbsj-xe2/dist-node/xe2-base-utils";
export declare class XbsjTrajectory extends ESSceneObject {
    static readonly type: string;
    get typeName(): string;
    get defaultProps(): {
        show: boolean;
        depthTest: boolean;
        ground: boolean;
        color: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number]>;
        loop: boolean;
        width: number;
        hasDash: boolean;
        gapColor: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number]>;
        dashLength: number;
        dashPattern: number;
        hasArrow: boolean;
        arcType: import("xbsj-xe2/dist-node/xe2-base-objects").GeoPolylineArcType;
        execOnceFuncStr: string | undefined;
        updateFuncStr: string | undefined;
        toDestroyFuncStr: string | undefined;
        name: string;
        ref: string | undefined;
        devTags: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<string[] | undefined>;
        extras: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<import("xbsj-xe2/dist-node/xe2-base-utils").JsonValue>;
        trckedObjectId: string | undefined;
        duration: number | undefined;
        interval: number | undefined;
    };
    private _geoPolyline;
    get geoPolyline(): GeoPolyline;
    get json(): JsonType;
    set json(value: JsonType);
    private _flyToEvent;
    get flyToEvent(): Listener<[number | undefined]>;
    flyTo(duration?: number): void;
    private _resetEvent;
    get resetEvent(): Listener<[]>;
    reset(pos?: number): void;
    constructor(id?: string);
    getProperties(language?: string): import("xbsj-xe2/dist-node/xe2-base-objects").Property[];
}
declare const extraComponentProps: {
    show: boolean;
    depthTest: boolean;
    ground: boolean;
    color: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number]>;
    loop: boolean;
    width: number;
    hasDash: boolean;
    gapColor: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number]>;
    dashLength: number;
    dashPattern: number;
    hasArrow: boolean;
    arcType: import("xbsj-xe2/dist-node/xe2-base-objects").GeoPolylineArcType;
};
export declare namespace XbsjTrajectory {
    const createDefaultProps: () => {
        execOnceFuncStr: string | undefined;
        updateFuncStr: string | undefined;
        toDestroyFuncStr: string | undefined;
        name: string;
        ref: string | undefined;
        devTags: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<string[] | undefined>;
        extras: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<import("xbsj-xe2/dist-node/xe2-base-utils").JsonValue>;
        trckedObjectId: string | undefined;
        duration: number | undefined;
        interval: number | undefined;
    };
}
export interface XbsjTrajectory extends ReactivePropsToNativePropsAndChanged<ReturnType<typeof XbsjTrajectory.createDefaultProps> & typeof extraComponentProps> {
}
declare type JsonType = PartialWithUndefinedReactivePropsToNativeProps<ReturnType<typeof XbsjTrajectory.createDefaultProps> & typeof extraComponentProps & {
    type: string;
}>;
export {};

import { PickedInfo } from "../../scene-manager";
import { Event, Listener, PartialWithUndefinedReactivePropsToNativeProps, ReactivePropsToNativePropsAndChanged } from "xbsj-xe2/dist-node/xe2-base-utils";
import { SceneObjectKey } from "xbsj-xe2/dist-node/xe2-utils";
import { ESSceneObject } from "../ESSceneObject";
export declare class GeoDistanceMeasurement extends ESSceneObject {
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
        positions: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number][] | undefined>;
        width: number;
        color: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number]>;
        hasDash: boolean;
        gapColor: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number]>;
        dashLength: number;
        dashPattern: number;
        hasArrow: boolean;
        arcType: string;
        editing: boolean;
        depthTest: boolean;
    };
    get json(): JsonType;
    set json(value: JsonType);
    private _pickedEvent;
    get pickedEvent(): Event<[PickedInfo]>;
    private _flyToEvent;
    get flyToEvent(): Listener<[number | undefined]>;
    flyTo(duration?: number): void;
    private _distances;
    get distances(): number[];
    get distancesChanged(): Listener<[number[], number[]]>;
    constructor(id?: SceneObjectKey);
    static defaults: {
        positions: never[];
        viewerTagsEnums: [string, string][];
    };
    getProperties(language?: string): import("../ESSceneObject").Property[];
}
export declare namespace GeoDistanceMeasurement {
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
        positions: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number][] | undefined>;
        width: number;
        color: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number]>;
        hasDash: boolean;
        gapColor: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number]>;
        dashLength: number;
        dashPattern: number;
        hasArrow: boolean;
        arcType: string;
        editing: boolean;
        depthTest: boolean;
    };
}
export interface GeoDistanceMeasurement extends ReactivePropsToNativePropsAndChanged<ReturnType<typeof GeoDistanceMeasurement.createDefaultProps>> {
}
declare type JsonType = PartialWithUndefinedReactivePropsToNativeProps<ReturnType<typeof GeoDistanceMeasurement.createDefaultProps> & {
    type: string;
}>;
export {};

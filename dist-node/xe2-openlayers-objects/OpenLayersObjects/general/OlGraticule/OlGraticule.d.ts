import { ESSceneObject, PickedInfo } from "xbsj-xe2/dist-node/xe2-base-objects";
import { Event, PartialWithUndefinedReactivePropsToNativeProps, ReactivePropsToNativePropsAndChanged } from "xbsj-xe2/dist-node/xe2-base-utils";
import { SceneObjectKey } from "xbsj-xe2/dist-node/xe2-utils";
import { LineCapType, LineJoinType } from "../base";
export declare class OlGraticule extends ESSceneObject {
    static readonly type: string;
    get typeName(): string;
    get defaultProps(): {
        show: boolean | undefined;
        color: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number] | undefined>;
        lineCap: LineCapType | undefined;
        lineJoin: LineJoinType | undefined;
        lineDash: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<number[] | undefined>;
        lineDashOffset: number | undefined;
        miterLimit: number | undefined;
        width: number | undefined;
        className: string | undefined;
        opacity: number | undefined;
        zIndex: number | undefined;
        minResolution: number | undefined;
        maxResolution: number | undefined;
        minZoom: number | undefined;
        maxZoom: number | undefined;
        maxLines: number | undefined;
        targetSize: number | undefined;
        lonLabelPosition: number | undefined;
        latLabelPosition: number | undefined;
        intervals: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<number[] | undefined>;
        wrapX: boolean | undefined;
        showLabels: boolean | undefined;
        meridiansPositions: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[[number, number], [number, number]][] | undefined>;
        parallelsPositions: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[[number, number], [number, number]][] | undefined>;
        execOnceFuncStr: string | undefined;
        updateFuncStr: string | undefined;
        toDestroyFuncStr: string | undefined;
        name: string;
        ref: string | undefined;
        devTags: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<string[] | undefined>;
        extras: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<import("xbsj-xe2/dist-node/xe2-base-utils").JsonValue>;
    };
    get json(): JsonType;
    set json(value: JsonType);
    private _pickedEvent;
    get pickedEvent(): Event<[PickedInfo]>;
    private _getGraticuleEvent;
    get getGraticuleEvent(): Event<[]>;
    getGraticulePositions(): void;
    constructor(id?: SceneObjectKey);
    static lineCapTypeEnums: [string, string][];
    static lineJoinTypeEnums: [string, string][];
    static description: {
        color: string;
        lineCap: string;
        lineJoin: string;
        lineDash: string;
        lineDashOffset: string;
        miterLimit: string;
        width: string;
        intervals: string;
        latLabelPosition: string;
        lonLabelPosition: string;
        targetSize: string;
        className: string;
        minResolution: string;
        maxResolution: string;
        minZoom: string;
        maxZoom: string;
        maxLines: string;
    };
    static defaultValue: {
        intervals: number[];
    };
    getProperties(language?: string): import("xbsj-xe2/dist-node/xe2-base-objects").Property[];
}
export declare namespace OlGraticule {
    const createDefaultProps: () => {
        show: boolean | undefined;
        color: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number] | undefined>;
        lineCap: LineCapType | undefined;
        lineJoin: LineJoinType | undefined;
        lineDash: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<number[] | undefined>;
        lineDashOffset: number | undefined;
        miterLimit: number | undefined;
        width: number | undefined;
        className: string | undefined;
        opacity: number | undefined;
        zIndex: number | undefined;
        minResolution: number | undefined;
        maxResolution: number | undefined;
        minZoom: number | undefined;
        maxZoom: number | undefined;
        maxLines: number | undefined;
        targetSize: number | undefined;
        lonLabelPosition: number | undefined;
        latLabelPosition: number | undefined;
        intervals: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<number[] | undefined>;
        wrapX: boolean | undefined;
        showLabels: boolean | undefined;
        meridiansPositions: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[[number, number], [number, number]][] | undefined>;
        parallelsPositions: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[[number, number], [number, number]][] | undefined>;
        execOnceFuncStr: string | undefined;
        updateFuncStr: string | undefined;
        toDestroyFuncStr: string | undefined;
        name: string;
        ref: string | undefined;
        devTags: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<string[] | undefined>;
        extras: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<import("xbsj-xe2/dist-node/xe2-base-utils").JsonValue>;
    };
}
export interface OlGraticule extends ReactivePropsToNativePropsAndChanged<ReturnType<typeof OlGraticule.createDefaultProps>> {
}
declare type JsonType = PartialWithUndefinedReactivePropsToNativeProps<ReturnType<typeof OlGraticule.createDefaultProps> & {
    type: string;
}>;
export {};

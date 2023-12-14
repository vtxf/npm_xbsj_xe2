import { ESSceneObject, PickedInfo } from "xbsj-xe2/dist-node/xe2-base-objects";
import { Event, Listener, PartialWithUndefinedReactivePropsToNativeProps, ReactivePropsToNativePropsAndChanged } from "xbsj-xe2/dist-node/xe2-base-utils";
import { SceneObjectKey } from "xbsj-xe2/dist-node/xe2-utils";
import { OlPoint } from "../OlPoint";
import { OlPolygon } from "../OlPolygon";
import { LineCapType, LineJoinType } from "../base";
export declare class OlRectangle extends ESSceneObject {
    static readonly type: string;
    get typeName(): string;
    get defaultProps(): {
        show: boolean | undefined;
        positions: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number][] | undefined>;
        editing: boolean | undefined;
        pointEditing: boolean | undefined;
        allowPicking: boolean | undefined;
        fillColor: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number] | undefined>;
        strokeColor: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number] | undefined>;
        strokeWidth: number | undefined;
        zIndex: number | undefined;
        lineCap: LineCapType | undefined;
        lineJoin: LineJoinType | undefined;
        lineDash: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<number[] | undefined>;
        lineDashOffset: number | undefined;
        miterLimit: number | undefined;
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
    private _flyToEvent;
    get flyToEvent(): Listener<[number | undefined]>;
    flyTo(duration?: number): void;
    private _polygon;
    get polygon(): OlPolygon;
    private _centerPoint;
    get centerPoint(): OlPoint;
    constructor(id?: SceneObjectKey);
    static description: {
        lineCap: string;
        lineJoin: string;
        lineDash: string;
        lineDashOffset: string;
        miterLimit: string;
    };
    static defaultValue: {
        lineCap: string;
        lineJoin: string;
        lineDash: undefined;
        lineDashOffset: number;
        miterLimit: number;
        lineCapTypeEnums: [string, string][];
        lineJoinTypeEnums: [string, string][];
    };
    getProperties(language?: string): import("xbsj-xe2/dist-node/xe2-base-objects").Property[];
}
export declare namespace OlRectangle {
    const createDefaultProps: () => {
        show: boolean | undefined;
        positions: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number][] | undefined>;
        editing: boolean | undefined;
        pointEditing: boolean | undefined;
        allowPicking: boolean | undefined;
        fillColor: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number] | undefined>;
        strokeColor: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number] | undefined>;
        strokeWidth: number | undefined;
        zIndex: number | undefined;
        lineCap: LineCapType | undefined;
        lineJoin: LineJoinType | undefined;
        lineDash: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<number[] | undefined>;
        lineDashOffset: number | undefined;
        miterLimit: number | undefined;
        execOnceFuncStr: string | undefined;
        updateFuncStr: string | undefined;
        toDestroyFuncStr: string | undefined;
        name: string;
        ref: string | undefined;
        devTags: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<string[] | undefined>;
        extras: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<import("xbsj-xe2/dist-node/xe2-base-utils").JsonValue>;
    };
}
export interface OlRectangle extends ReactivePropsToNativePropsAndChanged<ReturnType<typeof OlRectangle.createDefaultProps>> {
}
declare type JsonType = PartialWithUndefinedReactivePropsToNativeProps<ReturnType<typeof OlRectangle.createDefaultProps> & {
    type: string;
}>;
export {};

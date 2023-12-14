import { ESSceneObject, PickedInfo } from "xbsj-xe2/dist-node/xe2-base-objects";
import { Event, Listener, PartialWithUndefinedReactivePropsToNativeProps, ReactivePropsToNativePropsAndChanged } from "xbsj-xe2/dist-node/xe2-base-utils";
import { SceneObjectKey } from "xbsj-xe2/dist-node/xe2-utils";
import { LineCapType, LineJoinType } from '../base/types';
export declare class OlMultiLineString extends ESSceneObject {
    static readonly type: string;
    get typeName(): string;
    get defaultProps(): {
        show: boolean | undefined;
        positionsSet: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number][][] | undefined>;
        editing: boolean | undefined;
        allowPicking: boolean | undefined;
        color: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number] | undefined>;
        lineCap: LineCapType | undefined;
        lineJoin: LineJoinType | undefined;
        lineDash: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<number[] | undefined>;
        lineDashOffset: number | undefined;
        miterLimit: number | undefined;
        width: number | undefined;
        zIndex: number | undefined;
        maxPoints: number | undefined;
        minPoints: number | undefined;
        allowDeleting: boolean | undefined;
        allowInserting: boolean | undefined;
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
    };
    getProperties(language?: string): import("xbsj-xe2/dist-node/xe2-base-objects").Property[];
}
export declare namespace OlMultiLineString {
    const createDefaultProps: () => {
        show: boolean | undefined;
        positionsSet: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number][][] | undefined>;
        editing: boolean | undefined;
        allowPicking: boolean | undefined;
        color: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number] | undefined>;
        lineCap: LineCapType | undefined;
        lineJoin: LineJoinType | undefined;
        lineDash: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<number[] | undefined>;
        lineDashOffset: number | undefined;
        miterLimit: number | undefined;
        width: number | undefined;
        zIndex: number | undefined;
        maxPoints: number | undefined;
        minPoints: number | undefined;
        allowDeleting: boolean | undefined;
        allowInserting: boolean | undefined;
        execOnceFuncStr: string | undefined;
        updateFuncStr: string | undefined;
        toDestroyFuncStr: string | undefined;
        name: string;
        ref: string | undefined;
        devTags: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<string[] | undefined>;
        extras: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<import("xbsj-xe2/dist-node/xe2-base-utils").JsonValue>;
    };
}
export interface OlMultiLineString extends ReactivePropsToNativePropsAndChanged<ReturnType<typeof OlMultiLineString.createDefaultProps>> {
}
declare type JsonType = PartialWithUndefinedReactivePropsToNativeProps<ReturnType<typeof OlMultiLineString.createDefaultProps> & {
    type: string;
}>;
export {};

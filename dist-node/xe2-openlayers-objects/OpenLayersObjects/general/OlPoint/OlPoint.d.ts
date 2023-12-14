import { ESSceneObject, PickedInfo } from "xbsj-xe2/dist-node/xe2-base-objects";
import { Event, Listener, PartialWithUndefinedReactivePropsToNativeProps, ReactivePropsToNativePropsAndChanged } from "xbsj-xe2/dist-node/xe2-base-utils";
import { SceneObjectKey } from "xbsj-xe2/dist-node/xe2-utils";
export declare class OlPoint extends ESSceneObject {
    static readonly type: string;
    get typeName(): string;
    get defaultProps(): {
        show: boolean | undefined;
        position: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number] | undefined>;
        editing: boolean | undefined;
        allowPicking: boolean | undefined;
        fillColor: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number] | undefined>;
        strokeColor: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number] | undefined>;
        strokeWidth: number | undefined;
        radius: number | undefined;
        zIndex: number | undefined;
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
    private _clickEvent;
    get clickEvent(): Event<[]>;
    private _hovered;
    get hovered(): boolean;
    set hovered(value: boolean);
    constructor(id?: SceneObjectKey);
    static defaults: {
        show: boolean;
        duration: number;
        editing: boolean;
        allowPicking: boolean;
        strokeColor: [number, number, number, number];
        fillColor: [number, number, number, number];
        strokeWidth: number;
        radius: number;
        viewerTagsEnums: [string, string][];
    };
    getProperties(language?: string): import("xbsj-xe2/dist-node/xe2-base-objects").Property[];
}
export declare namespace OlPoint {
    const createDefaultProps: () => {
        show: boolean | undefined;
        position: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number] | undefined>;
        editing: boolean | undefined;
        allowPicking: boolean | undefined;
        fillColor: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number] | undefined>;
        strokeColor: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number] | undefined>;
        strokeWidth: number | undefined;
        radius: number | undefined;
        zIndex: number | undefined;
        execOnceFuncStr: string | undefined;
        updateFuncStr: string | undefined;
        toDestroyFuncStr: string | undefined;
        name: string;
        ref: string | undefined;
        devTags: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<string[] | undefined>;
        extras: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<import("xbsj-xe2/dist-node/xe2-base-utils").JsonValue>;
    };
}
export interface OlPoint extends ReactivePropsToNativePropsAndChanged<ReturnType<typeof OlPoint.createDefaultProps>> {
}
declare type JsonType = PartialWithUndefinedReactivePropsToNativeProps<ReturnType<typeof OlPoint.createDefaultProps> & {
    type: string;
}>;
export {};

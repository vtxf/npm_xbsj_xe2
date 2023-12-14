import { Event, Listener, PartialWithUndefinedReactivePropsToNativeProps, ReactivePropsToNativePropsAndChanged } from "xbsj-xe2/dist-node/xe2-base-utils";
import { SceneObjectKey } from "xbsj-xe2/dist-node/xe2-utils";
import { CzmMaterialJsonType } from "../../base";
import { PickedInfo } from "../../scene-manager";
import { ESSceneObject } from "../ESSceneObject";
export declare class GeoRectangle extends ESSceneObject {
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
        ground: boolean;
        outlineTranslucent: boolean;
        outline: boolean;
        outlineColor: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number]>;
        height: number;
        extrudedHeight: number;
        material: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<CzmMaterialJsonType | undefined>;
        rectangle: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number] | undefined>;
        rotation: number;
        stRotation: number;
        editing: boolean;
        pointEditing: boolean;
    };
    get json(): JsonType;
    set json(value: JsonType);
    private _flyToEvent;
    get flyToEvent(): Listener<[number | undefined]>;
    flyTo(duration?: number): void;
    private _pickedEvent;
    get pickedEvent(): Event<[PickedInfo]>;
    static defaults: {
        material: CzmMaterialJsonType;
        rectangle: undefined;
        viewerTagsEnums: [string, string][];
    };
    private _rectangleEditing;
    constructor(id?: SceneObjectKey);
    getProperties(language?: string): import("../ESSceneObject").Property[];
}
export declare namespace GeoRectangle {
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
        ground: boolean;
        outlineTranslucent: boolean;
        outline: boolean;
        outlineColor: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number]>;
        height: number;
        extrudedHeight: number;
        material: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<CzmMaterialJsonType | undefined>;
        rectangle: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number] | undefined>;
        rotation: number;
        stRotation: number;
        editing: boolean;
        pointEditing: boolean;
    };
}
export interface GeoRectangle extends ReactivePropsToNativePropsAndChanged<ReturnType<typeof GeoRectangle.createDefaultProps>> {
}
declare type JsonType = PartialWithUndefinedReactivePropsToNativeProps<ReturnType<typeof GeoRectangle.createDefaultProps> & {
    type: string;
}>;
export {};

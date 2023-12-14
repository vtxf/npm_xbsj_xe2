import { ESSceneObject, PickedInfo } from "xbsj-xe2/dist-node/xe2-base-objects";
import { Event, PartialWithUndefinedReactivePropsToNativeProps, ReactivePropsToNativePropsAndChanged } from "xbsj-xe2/dist-node/xe2-base-utils";
import { SceneObjectKey } from "xbsj-xe2/dist-node/xe2-utils";
export declare type OlIconAnchorOriginType = 'bottom-left' | 'bottom-right' | 'top-left' | 'top-right';
export declare type OlIconAnchorUnitsType = 'fraction' | 'pixels';
export declare type OlIconCrossOriginType = 'anonymous' | 'use-credentials';
export declare type OlIconDeclutterModeType = "declutter" | "obstacle" | "none";
export declare class OlIcon extends ESSceneObject {
    static readonly type: string;
    get typeName(): string;
    get defaultProps(): {
        show: boolean | undefined;
        position: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number] | undefined>;
        editing: boolean | undefined;
        allowPicking: boolean | undefined;
        anchor: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number] | undefined>;
        anchorOrigin: OlIconAnchorOriginType | undefined;
        anchorXUnits: OlIconAnchorUnitsType | undefined;
        anchorYUnits: OlIconAnchorUnitsType | undefined;
        color: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number] | undefined>;
        crossOrigin: OlIconCrossOriginType | undefined;
        displacement: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number] | undefined>;
        opacity: number | undefined;
        scale: number | undefined;
        rotateWithView: boolean | undefined;
        rotation: number | undefined;
        offset: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number] | undefined>;
        offsetOrigin: OlIconAnchorOriginType | undefined;
        size: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number] | undefined>;
        src: string | undefined;
        declutterMode: OlIconDeclutterModeType | undefined;
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
    constructor(id?: SceneObjectKey);
    static defaultValue: {
        anchor: [number, number];
        anchorOrigin: OlIconAnchorOriginType;
        anchorXUnits: OlIconAnchorUnitsType;
        anchorYUnits: OlIconAnchorUnitsType;
        crossOrigin: OlIconCrossOriginType;
        displacement: [number, number];
        opacity: number;
        scale: number;
        rotateWithView: boolean;
        rotation: number;
        offset: [number, number];
        offsetOrigin: OlIconAnchorOriginType;
        src: string;
        declutterMode: string;
    };
    static olIconAnchorOriginTypeEnums: [string, string][];
    static olIconAnchorUnitsTypeEnums: [string, string][];
    static olIconCrossOriginTypeEnums: [string, string][];
    static olIconDeclutterModeTypeEnums: [string, string][];
    getProperties(language?: string): import("xbsj-xe2/dist-node/xe2-base-objects").Property[];
}
export declare namespace OlIcon {
    const createDefaultProps: () => {
        show: boolean | undefined;
        position: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number] | undefined>;
        editing: boolean | undefined;
        allowPicking: boolean | undefined;
        anchor: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number] | undefined>;
        anchorOrigin: OlIconAnchorOriginType | undefined;
        anchorXUnits: OlIconAnchorUnitsType | undefined;
        anchorYUnits: OlIconAnchorUnitsType | undefined;
        color: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number] | undefined>;
        crossOrigin: OlIconCrossOriginType | undefined;
        displacement: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number] | undefined>;
        opacity: number | undefined;
        scale: number | undefined;
        rotateWithView: boolean | undefined;
        rotation: number | undefined;
        offset: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number] | undefined>;
        offsetOrigin: OlIconAnchorOriginType | undefined;
        size: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number] | undefined>;
        src: string | undefined;
        declutterMode: OlIconDeclutterModeType | undefined;
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
export interface OlIcon extends ReactivePropsToNativePropsAndChanged<ReturnType<typeof OlIcon.createDefaultProps>> {
}
declare type JsonType = PartialWithUndefinedReactivePropsToNativeProps<ReturnType<typeof OlIcon.createDefaultProps> & {
    type: string;
}>;
export {};

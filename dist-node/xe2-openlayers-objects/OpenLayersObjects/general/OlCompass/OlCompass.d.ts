import { CustomDiv } from "xbsj-xe2/dist-node/xe2-base-objects";
import { ESSceneObject } from "xbsj-xe2/dist-node/xe2-base-objects";
import { PartialWithUndefinedReactivePropsToNativeProps, Event, ReactivePropsToNativePropsAndChanged } from "xbsj-xe2/dist-node/xe2-base-utils";
import { SceneObjectKey } from "xbsj-xe2/dist-node/xe2-utils";
export declare class OlCompass extends ESSceneObject {
    static readonly type: string;
    get typeName(): string;
    get defaultProps(): {
        show: boolean | undefined;
        rotation: number | undefined;
        text: string | undefined;
        zIndex: number | undefined;
        imgPositions: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number][] | undefined>;
        textPosition: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number] | undefined>;
        textTop: number | undefined;
        textRight: number | undefined;
        textWidth: number | undefined;
        textHeight: number | undefined;
        textAlign: "center" | "left" | "right" | "justify" | "inherit" | undefined;
        fontStyle: "normal" | "inherit" | "italic" | "oblique" | undefined;
        fontSize: number | undefined;
        fontWeight: string | undefined;
        fontFamily: string | undefined;
        textDecoration: "none" | "blink" | "inherit" | "underline" | "overline" | "line-through" | undefined;
        textColor: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number] | undefined>;
        letterSpacing: number | undefined;
        textStrokeColor: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number] | undefined>;
        textStrokeWidth: number | undefined;
        lineHeight: number | undefined;
        uri: string | undefined;
        imgWidth: number | undefined;
        imgHeight: number | undefined;
        imgTop: number | undefined;
        imgRight: number | undefined;
        borderRadius: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number] | undefined>;
        borderWidth: number | undefined;
        borderColor: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number] | undefined>;
        borderStyle: "hidden" | "none" | "solid" | "dotted" | "dashed" | "double" | "groove" | "ridge" | "inset" | "outset" | undefined;
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
    private _customDiv;
    get customDiv(): CustomDiv<{
        destroy(): undefined;
    }>;
    private _getPositionsEvent;
    get getPositionsEvent(): Event<[]>;
    getPositions(): void;
    static defaults: {
        textRight: number;
        textTop: number;
        textWidth: number;
        textHeight: number;
        rotation: number;
        imgRight: number;
        imgTop: number;
        imgWidth: number;
        imgHeight: number;
        viewerTagsEnums: [string, string][];
    };
    constructor(id?: SceneObjectKey);
    getProperties(language?: string): import("xbsj-xe2/dist-node/xe2-base-objects").Property[];
}
export declare namespace OlCompass {
    const createDefaultProps: () => {
        show: boolean | undefined;
        rotation: number | undefined;
        text: string | undefined;
        zIndex: number | undefined;
        imgPositions: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number][] | undefined>;
        textPosition: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number] | undefined>;
        textTop: number | undefined;
        textRight: number | undefined;
        textWidth: number | undefined;
        textHeight: number | undefined;
        textAlign: "center" | "left" | "right" | "justify" | "inherit" | undefined;
        fontStyle: "normal" | "inherit" | "italic" | "oblique" | undefined;
        fontSize: number | undefined;
        fontWeight: string | undefined;
        fontFamily: string | undefined;
        textDecoration: "none" | "blink" | "inherit" | "underline" | "overline" | "line-through" | undefined;
        textColor: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number] | undefined>;
        letterSpacing: number | undefined;
        textStrokeColor: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number] | undefined>;
        textStrokeWidth: number | undefined;
        lineHeight: number | undefined;
        uri: string | undefined;
        imgWidth: number | undefined;
        imgHeight: number | undefined;
        imgTop: number | undefined;
        imgRight: number | undefined;
        borderRadius: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number] | undefined>;
        borderWidth: number | undefined;
        borderColor: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number] | undefined>;
        borderStyle: "hidden" | "none" | "solid" | "dotted" | "dashed" | "double" | "groove" | "ridge" | "inset" | "outset" | undefined;
        execOnceFuncStr: string | undefined;
        updateFuncStr: string | undefined;
        toDestroyFuncStr: string | undefined;
        name: string;
        ref: string | undefined;
        devTags: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<string[] | undefined>;
        extras: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<import("xbsj-xe2/dist-node/xe2-base-utils").JsonValue>;
    };
}
export interface OlCompass extends ReactivePropsToNativePropsAndChanged<ReturnType<typeof OlCompass.createDefaultProps>> {
}
declare type JsonType = PartialWithUndefinedReactivePropsToNativeProps<ReturnType<typeof OlCompass.createDefaultProps> & {
    type: string;
}>;
export {};

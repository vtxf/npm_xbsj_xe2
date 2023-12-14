import { GeoCustomDivPoi } from "xbsj-xe2/dist-node/xe2-base-objects";
import { ESSceneObject, PickedInfo, Viewer } from "xbsj-xe2/dist-node/xe2-base-objects";
import { Destroyable, Event, Listener, PartialWithUndefinedReactivePropsToNativeProps, ReactivePropsToNativePropsAndChanged } from "xbsj-xe2/dist-node/xe2-base-utils";
import { SceneObjectKey } from "xbsj-xe2/dist-node/xe2-utils";
declare class MyDivBase extends Destroyable {
    protected _container: HTMLDivElement;
    constructor(_container: HTMLDivElement, geoCustomDivPoi: GeoCustomDivPoi<MyDivBase>, viewer: Viewer);
    getHeight(): number;
}
export declare class OlDivText extends ESSceneObject {
    static readonly type: string;
    get typeName(): string;
    get defaultProps(): {
        show: boolean | undefined;
        position: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number] | undefined>;
        editing: boolean | undefined;
        allowPicking: boolean | undefined;
        zIndex: number | undefined;
        divWidth: number | undefined;
        textAlign: "center" | "left" | "right" | "justify" | "inherit" | undefined;
        fontStyle: "normal" | "inherit" | "italic" | "oblique" | undefined;
        fontSize: number | undefined;
        fontWeight: number | undefined;
        fontFamily: string | undefined;
        textDecoration: "none" | "blink" | "inherit" | "underline" | "overline" | "line-through" | undefined;
        fontColor: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number] | undefined>;
        letterSpacing: number | undefined;
        lineHeight: number | undefined;
        padding: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number] | undefined>;
        text: string | undefined;
        textStrokeColor: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number] | undefined>;
        textStrokeWidth: number | undefined;
        textShadowOffset: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number] | undefined>;
        textShadowColor: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number] | undefined>;
        opacity: number | undefined;
        originRatioAndOffset: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[leftRatio: number, topRatio: number, leftOffset: number, topOffset: number] | undefined>;
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
    static fontStyleTypeEnums: [string, string][];
    static textAlignTypeEnums: [string, string][];
    static textDecorationTypeEnums: [string, string][];
    static description: {
        fontStyleType: string;
        textAlignType: string;
        textDecorationType: string;
    };
    static defaultValue: {
        textShadowColor: [number, number, number, number];
        textShadowOffset: [number, number];
        strokeColor: [number, number, number, number];
    };
    private _customDivPoi;
    get customDivPoi(): GeoCustomDivPoi<MyDivBase>;
    getHeight(): number;
    constructor(id?: SceneObjectKey);
    getProperties(language?: string): import("xbsj-xe2/dist-node/xe2-base-objects").Property[];
}
export declare namespace OlDivText {
    const createDefaultProps: () => {
        show: boolean | undefined;
        position: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number] | undefined>;
        editing: boolean | undefined;
        allowPicking: boolean | undefined;
        zIndex: number | undefined;
        divWidth: number | undefined;
        textAlign: "center" | "left" | "right" | "justify" | "inherit" | undefined;
        fontStyle: "normal" | "inherit" | "italic" | "oblique" | undefined;
        fontSize: number | undefined;
        fontWeight: number | undefined;
        fontFamily: string | undefined;
        textDecoration: "none" | "blink" | "inherit" | "underline" | "overline" | "line-through" | undefined;
        fontColor: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number] | undefined>;
        letterSpacing: number | undefined;
        lineHeight: number | undefined;
        padding: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number] | undefined>;
        text: string | undefined;
        textStrokeColor: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number] | undefined>;
        textStrokeWidth: number | undefined;
        textShadowOffset: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number] | undefined>;
        textShadowColor: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number] | undefined>;
        opacity: number | undefined;
        originRatioAndOffset: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[leftRatio: number, topRatio: number, leftOffset: number, topOffset: number] | undefined>;
        execOnceFuncStr: string | undefined;
        updateFuncStr: string | undefined;
        toDestroyFuncStr: string | undefined;
        name: string;
        ref: string | undefined;
        devTags: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<string[] | undefined>;
        extras: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<import("xbsj-xe2/dist-node/xe2-base-utils").JsonValue>;
    };
}
export interface OlDivText extends ReactivePropsToNativePropsAndChanged<ReturnType<typeof OlDivText.createDefaultProps>> {
}
declare type JsonType = PartialWithUndefinedReactivePropsToNativeProps<ReturnType<typeof OlDivText.createDefaultProps> & {
    type: string;
}>;
export {};
import { ESSceneObject } from "xbsj-xe2/dist-node/xe2-base-objects";
import { Listener, ReactivePropsToNativePropsAndChanged, PartialWithUndefinedReactivePropsToNativeProps } from "xbsj-xe2/dist-node/xe2-base-utils";
import { SceneObjectKey } from "xbsj-xe2/dist-node/xe2-utils";
import { CzmViewer } from '../../../core';
import { MouseMoving } from "./MouseMoving";
import { ToolbarMoving } from "./ToolbarMoving";
import { HeightMoving } from "./HeightMoving";
import { LastCursorPos } from "./LastCursorPos";
import { PositionMoving } from "./PositionMoving";
import { SizeScale } from "./SizeScale";
export declare type CzmToolbarConfigType = {
    url: string;
    name: string;
    creatFunc: (sceneObject: CzmToolbar, div: HTMLDivElement, img: HTMLImageElement, czmViewer: CzmViewer) => {
        destory?(): undefined;
        [key: string]: any;
    };
};
export declare class CzmToolbar extends ESSceneObject {
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
        show: boolean | undefined;
        position: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number] | undefined>;
        editing: boolean | undefined;
        scale: number;
        debug: boolean;
        markdown: string;
    };
    get json(): JsonType;
    set json(value: JsonType);
    private _flyToEvent;
    get flyToEvent(): Listener<[number | undefined]>;
    flyTo(duration?: number): void;
    private _config;
    get config(): CzmToolbarConfigType[];
    set config(value: CzmToolbarConfigType[]);
    get configChanged(): Listener<[CzmToolbarConfigType[], CzmToolbarConfigType[]]>;
    static images: {
        move: string;
        up: string;
        scale: string;
        default: string;
    };
    static MouseMoving: typeof MouseMoving;
    static ToolbarMoving: typeof ToolbarMoving;
    static HeightMoving: typeof HeightMoving;
    static LastCursorPos: typeof LastCursorPos;
    static PositionMoving: typeof PositionMoving;
    static SizeScale: typeof SizeScale;
    static defaultConfig: CzmToolbarConfigType[];
    static defaultConfigDoc: string;
    static moveMod: {
        url: string;
        name: string;
        creatFunc: (sceneObject: CzmToolbar, div: HTMLDivElement, img: HTMLImageElement, czmViewer: CzmViewer) => {
            [key: string]: any;
            destory?(): undefined;
        };
    };
    static upMod: {
        url: string;
        name: string;
        creatFunc: (sceneObject: CzmToolbar, div: HTMLDivElement, img: HTMLImageElement, czmViewer: CzmViewer) => {
            [key: string]: any;
            destory?(): undefined;
        };
    };
    static scaleMod: {
        url: string;
        name: string;
        creatFunc: (sceneObject: CzmToolbar, div: HTMLDivElement, img: HTMLImageElement, czmViewer: CzmViewer) => {
            [key: string]: any;
            destory?(): undefined;
        };
    };
    static defaultMod: {
        url: string;
        name: string;
        creatFunc: (sceneObject: CzmToolbar, div: HTMLDivElement, img: HTMLImageElement, czmViewer: CzmViewer) => {
            [key: string]: any;
            destory?(): undefined;
        };
    };
    transitionImageUrl(url: string): string;
    constructor(id?: SceneObjectKey);
    static defaults: {
        show: boolean;
        editing: boolean;
        upImage: string;
        shensuoImage: string;
        moveImage: string;
        viewerTagsEnums: [string, string][];
    };
    getProperties(language?: string): import("xbsj-xe2/dist-node/xe2-base-objects").Property[];
}
export declare namespace CzmToolbar {
    const createDefaultProps: () => {
        execOnceFuncStr: string | undefined;
        updateFuncStr: string | undefined;
        toDestroyFuncStr: string | undefined;
        name: string;
        ref: string | undefined;
        devTags: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<string[] | undefined>;
        extras: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<import("xbsj-xe2/dist-node/xe2-base-utils").JsonValue>;
        show: boolean | undefined;
        position: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number] | undefined>;
        editing: boolean | undefined;
        scale: number;
        debug: boolean;
        markdown: string;
    };
}
export interface CzmToolbar extends ReactivePropsToNativePropsAndChanged<ReturnType<typeof CzmToolbar.createDefaultProps>> {
}
declare type JsonType = PartialWithUndefinedReactivePropsToNativeProps<ReturnType<typeof CzmToolbar.createDefaultProps> & {
    type: string;
}>;
export {};

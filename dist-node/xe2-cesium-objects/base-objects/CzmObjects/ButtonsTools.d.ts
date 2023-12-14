import { ESSceneObject } from "xbsj-xe2/dist-node/xe2-base-objects";
import { PartialWithUndefinedReactivePropsToNativeProps, ReactivePropsToNativePropsAndChanged } from "xbsj-xe2/dist-node/xe2-base-utils";
import { SceneObjectKey } from "xbsj-xe2/dist-node/xe2-utils";
export declare type ButtonsToolsType = {
    imgUrl: string;
    title: string;
};
export declare class ButtonsTools extends ESSceneObject {
    static readonly type: string;
    get typeName(): string;
    get defaultProps(): {
        show: boolean | undefined;
        buttonsFnStr: string | undefined;
        cssText: string | undefined;
        items: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<ButtonsToolsType[] | undefined>;
        imgSize: [number, number] | undefined;
        containerId: string | undefined;
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
    static defaults: {
        show: boolean;
        items: ButtonsToolsType[];
        buttonsFnStr: string;
        cssText: string;
        imgSize: [number, number];
        containerId: string;
        viewerTagsEnums: [string, string][];
    };
    private _buttonsFnReact;
    get buttonsFn(): ((index: number, item: object) => any) | undefined;
    set buttonsFn(value: ((index: number, item: object) => any) | undefined);
    get buttonsFnChanged(): import("xbsj-xe2/dist-node/xe2-base-utils").Listener<[((index: number, item: object) => any) | undefined, ((index: number, item: object) => any) | undefined]>;
    constructor(id?: SceneObjectKey);
    getProperties(language?: string): import("xbsj-xe2/dist-node/xe2-base-objects").Property[];
}
export declare namespace ButtonsTools {
    const createDefaultProps: () => {
        show: boolean | undefined;
        buttonsFnStr: string | undefined;
        cssText: string | undefined;
        items: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<ButtonsToolsType[] | undefined>;
        imgSize: [number, number] | undefined;
        containerId: string | undefined;
        execOnceFuncStr: string | undefined;
        updateFuncStr: string | undefined;
        toDestroyFuncStr: string | undefined;
        name: string;
        ref: string | undefined;
        devTags: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<string[] | undefined>;
        extras: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<import("xbsj-xe2/dist-node/xe2-base-utils").JsonValue>;
    };
}
export interface ButtonsTools extends ReactivePropsToNativePropsAndChanged<ReturnType<typeof ButtonsTools.createDefaultProps>> {
}
declare type JsonType = PartialWithUndefinedReactivePropsToNativeProps<ReturnType<typeof ButtonsTools.createDefaultProps> & {
    type: string;
}>;
export {};

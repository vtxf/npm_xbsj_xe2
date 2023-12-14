import { ESSceneObject, PickedInfo, Viewer } from "../../scene-manager";
import { Event, Listener, PartialWithUndefinedReactivePropsToNativeProps, ReactivePropsToNativePropsAndChanged } from "xbsj-xe2/dist-node/xe2-base-utils";
import { SceneObjectKey } from "xbsj-xe2/dist-node/xe2-utils";
export declare type DivInstanceClass<DivClass extends {
    destroy(): undefined;
} = {
    destroy(): undefined;
}> = (new (subContainer: HTMLDivElement, customDiv: CustomDiv<DivClass>, viewer?: Viewer | undefined) => DivClass);
export declare class CustomDiv<DivClass extends {
    destroy(): undefined;
} = {
    destroy(): undefined;
}> extends ESSceneObject {
    static readonly type: string;
    get typeName(): string;
    get defaultProps(): {
        show: boolean | undefined;
        instanceClassStr: string | undefined;
        innerHTML: string | undefined;
        allowPicking: boolean | undefined;
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
    private _updateEvent;
    update(updateFunc: (divClass: DivClass, customDiv: CustomDiv<DivClass>, viewer: Viewer) => void): void;
    private _instanceClassReact;
    get instanceClass(): DivInstanceClass<DivClass> | undefined;
    set instanceClass(value: DivInstanceClass<DivClass> | undefined);
    get instanceClassChanged(): Listener<[DivInstanceClass<DivClass> | undefined, DivInstanceClass<DivClass> | undefined]>;
    private _pickedEvent;
    get pickedEvent(): Event<[PickedInfo]>;
    private _innerHtmlMounted;
    get innerHtmlMounted(): Listener<[contentDiv: HTMLDivElement, viewer: Viewer]>;
    pickFromDiv(element: HTMLElement, childPickedInfo?: PickedInfo): void;
    private _container;
    get container(): HTMLDivElement | undefined;
    get containerChanged(): Listener<[HTMLDivElement | undefined, HTMLDivElement | undefined]>;
    set container(value: HTMLDivElement | undefined);
    static defaults: {
        show: boolean;
        containerId: string;
        viewerTagsEnums: [string, string][];
    };
    constructor(id?: SceneObjectKey);
    static defaultInnerHTML: string;
    static innerHTMLReadMe: string;
    getProperties(language?: string): import("../../scene-manager").Property[];
}
export declare namespace CustomDiv {
    const createDefaultProps: () => {
        show: boolean | undefined;
        instanceClassStr: string | undefined;
        innerHTML: string | undefined;
        allowPicking: boolean | undefined;
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
export interface CustomDiv<DivClass extends {
    destroy(): undefined;
} = {
    destroy(): undefined;
}> extends ReactivePropsToNativePropsAndChanged<ReturnType<typeof CustomDiv.createDefaultProps>> {
}
declare type JsonType = PartialWithUndefinedReactivePropsToNativeProps<ReturnType<typeof CustomDiv.createDefaultProps> & {
    type: string;
}>;
export {};

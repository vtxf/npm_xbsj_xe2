import { PartialWithUndefinedReactivePropsToNativeProps, ReactivePropsToNativePropsAndChanged } from "xbsj-xe2/dist-node/xe2-base-utils";
import { SceneObjectKey } from "xbsj-xe2/dist-node/xe2-utils";
import { ESSceneObject } from "../ESSceneObject";
export declare type GeoDivButtonClickFuncType = (event: MouseEvent) => void;
export declare class GeoDivButton extends ESSceneObject {
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
        text: string | undefined;
        normalCssText: string | undefined;
        hoveredCssText: string | undefined;
        clickFuncStr: string | undefined;
        containerId: string;
    };
    get json(): JsonType;
    set json(value: JsonType);
    private _clickFuncReact;
    get clickFunc(): GeoDivButtonClickFuncType | undefined;
    set clickFunc(value: GeoDivButtonClickFuncType | undefined);
    get clickFuncChanged(): import("xbsj-xe2/dist-node/xe2-base-utils").Listener<[GeoDivButtonClickFuncType | undefined, GeoDivButtonClickFuncType | undefined]>;
    static defaultNormalCssText: string;
    static defaultHoveredCssText: string;
    static clickFuncStrReadMe: string;
    constructor(id?: SceneObjectKey);
    getProperties(language?: string): import("../ESSceneObject").Property[];
}
export declare namespace GeoDivButton {
    const createDefaultProps: () => {
        execOnceFuncStr: string | undefined;
        updateFuncStr: string | undefined;
        toDestroyFuncStr: string | undefined;
        name: string;
        ref: string | undefined;
        devTags: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<string[] | undefined>;
        extras: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<import("xbsj-xe2/dist-node/xe2-base-utils").JsonValue>;
        show: boolean;
        text: string | undefined;
        normalCssText: string | undefined;
        hoveredCssText: string | undefined;
        clickFuncStr: string | undefined;
        containerId: string;
    };
}
export interface GeoDivButton extends ReactivePropsToNativePropsAndChanged<ReturnType<typeof GeoDivButton.createDefaultProps>> {
}
declare type JsonType = PartialWithUndefinedReactivePropsToNativeProps<ReturnType<typeof GeoDivButton.createDefaultProps> & {
    type: string;
}>;
export {};

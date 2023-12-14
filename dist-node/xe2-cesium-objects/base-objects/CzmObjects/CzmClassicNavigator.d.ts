import { Listener, PartialWithUndefinedReactivePropsToNativeProps, ReactivePropsToNativePropsAndChanged } from "xbsj-xe2/dist-node/xe2-base-utils";
import { SceneObjectKey } from "xbsj-xe2/dist-node/xe2-utils";
import { ESSceneObject } from "xbsj-xe2/dist-node/xe2-base-objects";
import { ClassicNavigatorCssStyle } from '../../core';
export declare class CzmClassicNavigator extends ESSceneObject {
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
        showCompass: boolean | undefined;
        compassStyle: ClassicNavigatorCssStyle | undefined;
        showDistanceLegend: boolean | undefined;
        distanceLegendStyle: ClassicNavigatorCssStyle | undefined;
    };
    get json(): JsonType;
    set json(value: JsonType);
    private _flyToEvent;
    get flyToEvent(): Listener<[number | undefined]>;
    flyTo(duration?: number): void;
    constructor(id?: SceneObjectKey);
    static defaults: {
        showCompass: boolean;
        compassStyle: [number | undefined, number | undefined, number | undefined, number | undefined];
        showDistanceLegend: boolean;
        distanceLegendStyle: [number | undefined, number | undefined, number | undefined, number | undefined];
        viewerTagsEnums: [string, string][];
    };
    getProperties(language?: string): import("xbsj-xe2/dist-node/xe2-base-objects").Property[];
}
export declare namespace CzmClassicNavigator {
    const createDefaultProps: () => {
        execOnceFuncStr: string | undefined;
        updateFuncStr: string | undefined;
        toDestroyFuncStr: string | undefined;
        name: string;
        ref: string | undefined;
        devTags: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<string[] | undefined>;
        extras: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<import("xbsj-xe2/dist-node/xe2-base-utils").JsonValue>;
        showCompass: boolean | undefined;
        compassStyle: ClassicNavigatorCssStyle | undefined;
        showDistanceLegend: boolean | undefined;
        distanceLegendStyle: ClassicNavigatorCssStyle | undefined;
    };
}
export interface CzmClassicNavigator extends ReactivePropsToNativePropsAndChanged<ReturnType<typeof CzmClassicNavigator.createDefaultProps>> {
}
declare type JsonType = PartialWithUndefinedReactivePropsToNativeProps<ReturnType<typeof CzmClassicNavigator.createDefaultProps> & {
    type: string;
}>;
export {};

import { ESSceneObject } from "xbsj-xe2/dist-node/xe2-base-objects";
import { Destroyable, PartialWithUndefinedReactivePropsToNativeProps, ReactParamsType, ReactivePropsToNativePropsAndChanged } from "xbsj-xe2/dist-node/xe2-base-utils";
import { ObjResettingWithEvent, SceneObjectKey } from "xbsj-xe2/dist-node/xe2-utils";
import { CzmViewer } from "../../core";
import { CzmViewDistanceRangeControl } from "../utils2";
declare class CzmViewDistanceRangeControlWrapper extends Destroyable {
    private _czmViewDistanceRange;
    private _czmViewer;
    private _viewDistanceRangeReact;
    private _positionReact;
    private _radiusReact?;
    private _czmViewDistanceRangeControl;
    get czmViewDistanceRangeControl(): CzmViewDistanceRangeControl;
    constructor(_czmViewDistanceRange: CzmViewDistanceRange, _czmViewer: CzmViewer, _viewDistanceRangeReact: ReactParamsType<[number, number, number, number] | undefined>, _positionReact: ReactParamsType<[number, number, number] | undefined>, _radiusReact?: ReactParamsType<number | undefined, any> | undefined);
}
export declare type CzmViewDistanceRangeConfigType = {
    czmViewer: CzmViewer;
    viewDistanceRangeReact: ReactParamsType<[number, number, number, number] | undefined>;
    positionReact: ReactParamsType<[number, number, number] | undefined>;
    radiusReact?: ReactParamsType<number | undefined>;
};
/**
 * 将CzmViewDistanceRangeControl封装成一个场景对象，但是还没测试其是否可用，可能会有问题 vtxf 20231111
 */
export declare class CzmViewDistanceRange extends ESSceneObject {
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
    };
    get json(): JsonType;
    set json(value: JsonType);
    private _config;
    get config(): CzmViewDistanceRangeConfigType | undefined;
    set config(value: CzmViewDistanceRangeConfigType | undefined);
    get configChanged(): import("xbsj-xe2/dist-node/xe2-base-utils").Listener<[CzmViewDistanceRangeConfigType | undefined, CzmViewDistanceRangeConfigType | undefined]>;
    private _visibleAlpha;
    get visibleAlpha(): number;
    set visibleAlpha(value: number);
    get visibleAlphaChanged(): import("xbsj-xe2/dist-node/xe2-base-utils").Listener<[number, number]>;
    private _objResetting;
    get objResetting(): ObjResettingWithEvent<CzmViewDistanceRangeControlWrapper, import("xbsj-xe2/dist-node/xe2-base-utils").Listener<[CzmViewDistanceRangeConfigType | undefined, CzmViewDistanceRangeConfigType | undefined]>>;
    constructor(id?: SceneObjectKey);
    getProperties(language?: string): import("xbsj-xe2/dist-node/xe2-base-objects").Property[];
}
export declare namespace CzmViewDistanceRange {
    const createDefaultProps: () => {
        execOnceFuncStr: string | undefined;
        updateFuncStr: string | undefined;
        toDestroyFuncStr: string | undefined;
        name: string;
        ref: string | undefined;
        devTags: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<string[] | undefined>;
        extras: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<import("xbsj-xe2/dist-node/xe2-base-utils").JsonValue>;
    };
}
export interface CzmViewDistanceRange extends ReactivePropsToNativePropsAndChanged<ReturnType<typeof CzmViewDistanceRange.createDefaultProps>> {
}
declare type JsonType = PartialWithUndefinedReactivePropsToNativeProps<ReturnType<typeof CzmViewDistanceRange.createDefaultProps> & {
    type: string;
}>;
export {};

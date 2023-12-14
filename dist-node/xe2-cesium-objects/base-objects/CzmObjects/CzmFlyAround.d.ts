import { Listener, Event, PartialWithUndefinedReactivePropsToNativeProps, ReactivePropsToNativePropsAndChanged } from "xbsj-xe2/dist-node/xe2-base-utils";
import { SceneObjectKey } from "xbsj-xe2/dist-node/xe2-utils";
import { ESSceneObject } from "xbsj-xe2/dist-node/xe2-base-objects";
export declare class CzmFlyAround extends ESSceneObject {
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
        enabled: boolean | undefined;
        position: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number] | undefined>;
        positionEditing: boolean | undefined;
        showTarget: boolean | undefined;
        stopRadius: number | undefined;
        stopPitch: number | undefined;
        flyToDuration: number | undefined;
        aroundSpeed: number | undefined;
        placeCenter: boolean | undefined;
    };
    get json(): JsonType;
    set json(value: JsonType);
    private _flyToEvent;
    get flyToEvent(): Listener<[number | undefined]>;
    flyTo(duration?: number): void;
    static defaults: {
        enabled: boolean;
        position: [number, number, number];
        positionEditing: boolean;
        showTarget: boolean;
        stopRadius: number;
        stopPitch: number;
        flyToDuration: number;
        aroundSpeed: number;
        placeCenter: boolean;
        viewerTagsEnums: [string, string][];
    };
    constructor(id?: SceneObjectKey);
    getProperties(language?: string): import("xbsj-xe2/dist-node/xe2-base-objects").Property[];
    private _applyCurrentDistanceEvent;
    get applyCurrentDistanceEvent(): Event<[]>;
    /**
     * 将当前视距应用到stopRadius属性上
     * @param viewerTags 为undefined或者空数组时，表示使用当前激活的视口来赋值
     */
    applyCurrentDistance(): void;
}
export declare namespace CzmFlyAround {
    const createDefaultProps: () => {
        execOnceFuncStr: string | undefined;
        updateFuncStr: string | undefined;
        toDestroyFuncStr: string | undefined;
        name: string;
        ref: string | undefined;
        devTags: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<string[] | undefined>;
        extras: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<import("xbsj-xe2/dist-node/xe2-base-utils").JsonValue>;
        enabled: boolean | undefined;
        position: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number] | undefined>;
        positionEditing: boolean | undefined;
        showTarget: boolean | undefined;
        stopRadius: number | undefined;
        stopPitch: number | undefined;
        flyToDuration: number | undefined;
        aroundSpeed: number | undefined;
        placeCenter: boolean | undefined;
    };
}
export interface CzmFlyAround extends ReactivePropsToNativePropsAndChanged<ReturnType<typeof CzmFlyAround.createDefaultProps>> {
}
declare type JsonType = PartialWithUndefinedReactivePropsToNativeProps<ReturnType<typeof CzmFlyAround.createDefaultProps> & {
    type: string;
}>;
export {};

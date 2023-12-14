import { ESSceneObject } from "xbsj-xe2/dist-node/xe2-base-objects";
import { JsonValue, Listener, PartialWithUndefinedReactivePropsToNativeProps, ReactivePropsToNativePropsAndChanged } from "xbsj-xe2/dist-node/xe2-base-utils";
import { SceneObjectKey } from "xbsj-xe2/dist-node/xe2-utils";
export declare type CloudCollectionType = {
    slice: number;
    brightness: number;
    scale: [number, number];
    maximumSize: [number, number, number];
    color: [number, number, number, number];
    position: [number, number, number];
};
export declare const cloudCollectionTypeMd = "\n```javascript\n[\n    {\n        \"slice\": -1,\n        \"brightness\": 1,\n        \"scale\": [24, 10],\n        \"maximumSize\": [25, 9, 10],\n        \"color\": [1, 1, 1, 1],\n        \"position\": [116.9, 39.9, 100]\n    }\n]\n```\n";
export declare class CzmBackLayerCloudCollection extends ESSceneObject {
    static readonly type: string;
    get typeName(): string;
    get defaultProps(): {
        execOnceFuncStr: string | undefined;
        updateFuncStr: string | undefined;
        toDestroyFuncStr: string | undefined;
        name: string;
        ref: string | undefined;
        devTags: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<string[] | undefined>;
        extras: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<JsonValue>;
        show: boolean;
        option: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<CloudCollectionType[]>;
    };
    get json(): JsonType;
    set json(value: JsonType);
    private _flyToEvent;
    get flyToEvent(): Listener<[number | undefined]>;
    flyTo(duration?: number): void;
    static defaults: {
        slice: number;
        brightness: number;
        scale: [number, number];
        maximumSize: [number, number, number];
        color: [number, number, number, number];
        position: [number, number, number];
        viewerTagsEnums: [string, string][];
    };
    constructor(id?: SceneObjectKey);
    getProperties(language?: string): import("xbsj-xe2/dist-node/xe2-base-objects").Property[];
}
export declare namespace CzmBackLayerCloudCollection {
    const createDefaultProps: () => {
        execOnceFuncStr: string | undefined;
        updateFuncStr: string | undefined;
        toDestroyFuncStr: string | undefined;
        name: string;
        ref: string | undefined;
        devTags: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<string[] | undefined>;
        extras: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<JsonValue>;
        show: boolean;
        option: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<CloudCollectionType[]>;
    };
}
export interface CzmBackLayerCloudCollection extends ReactivePropsToNativePropsAndChanged<ReturnType<typeof CzmBackLayerCloudCollection.createDefaultProps>> {
}
declare type JsonType = PartialWithUndefinedReactivePropsToNativeProps<ReturnType<typeof CzmBackLayerCloudCollection.createDefaultProps> & {
    type: string;
}>;
export {};

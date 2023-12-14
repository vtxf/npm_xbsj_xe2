import { CzmTerrainProviderJsonType } from "xbsj-xe2/dist-node/xe2-base-objects";
import { ESSceneObject } from "xbsj-xe2/dist-node/xe2-base-objects";
import { Event, Listener, PartialWithUndefinedReactivePropsToNativeProps, ReactivePropsToNativePropsAndChanged } from "xbsj-xe2/dist-node/xe2-base-utils";
import { SceneObjectKey } from "xbsj-xe2/dist-node/xe2-utils";
export declare class CzmTerrain extends ESSceneObject {
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
        rectangle: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[west: number, south: number, east: number, north: number] | undefined>;
        height: number | undefined;
        provider: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<CzmTerrainProviderJsonType | undefined>;
    };
    get json(): JsonType;
    set json(value: JsonType);
    private _flyToEvent;
    get flyToEvent(): Listener<[number | undefined]>;
    flyTo(duration?: number): void;
    private _recreateEvent;
    get recreateEvent(): Event<[]>;
    recreate(): void;
    constructor(id?: SceneObjectKey);
    static defaults: {
        show: boolean;
        rectangle: [number, number, number, number];
        height: number;
        provider: CzmTerrainProviderJsonType;
        viewerTagsEnums: [string, string][];
    };
    getProperties(language?: string): import("xbsj-xe2/dist-node/xe2-base-objects").Property[];
}
export declare namespace CzmTerrain {
    const createDefaultProps: () => {
        execOnceFuncStr: string | undefined;
        updateFuncStr: string | undefined;
        toDestroyFuncStr: string | undefined;
        name: string;
        ref: string | undefined;
        devTags: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<string[] | undefined>;
        extras: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<import("xbsj-xe2/dist-node/xe2-base-utils").JsonValue>;
        show: boolean | undefined;
        rectangle: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[west: number, south: number, east: number, north: number] | undefined>;
        height: number | undefined;
        provider: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<CzmTerrainProviderJsonType | undefined>;
    };
}
export interface CzmTerrain extends ReactivePropsToNativePropsAndChanged<ReturnType<typeof CzmTerrain.createDefaultProps>> {
}
declare type JsonType = PartialWithUndefinedReactivePropsToNativeProps<ReturnType<typeof CzmTerrain.createDefaultProps> & {
    type: string;
}>;
export {};

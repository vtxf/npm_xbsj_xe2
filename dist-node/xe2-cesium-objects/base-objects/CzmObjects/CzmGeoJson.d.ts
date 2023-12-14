/// <reference types="cesium" />
import { ESSceneObject, PickedInfo } from "xbsj-xe2/dist-node/xe2-base-objects";
import { Event, Listener, PartialWithUndefinedReactivePropsToNativeProps, ReactivePropsToNativePropsAndChanged } from "xbsj-xe2/dist-node/xe2-base-utils";
export declare class CzmGeoJson extends ESSceneObject {
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
        uri: string | undefined;
        fill: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number] | undefined>;
        data: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<undefined>;
        stroke: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number] | undefined>;
        strokeWidth: number | undefined;
        clampToGround: boolean | undefined;
        allowPicking: boolean | undefined;
        loadFuncStr: string | undefined;
        markerSymbol: string | undefined;
        markerColor: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number] | undefined>;
        markerSize: number | undefined;
    };
    get json(): JsonType;
    set json(value: JsonType);
    private _flyToEvent;
    get flyToEvent(): Listener<[number | undefined]>;
    flyTo(duration?: number): void;
    private _pickedEvent;
    get pickedEvent(): Event<[PickedInfo]>;
    private _loadFuncReact;
    get loadFun(): ((dataSource: Cesium.GeoJsonDataSource) => void) | undefined;
    set loadFun(value: ((dataSource: Cesium.GeoJsonDataSource) => void) | undefined);
    get loadFunChanged(): Listener<[((dataSource: import("cesium").GeoJsonDataSource) => void) | undefined, ((dataSource: import("cesium").GeoJsonDataSource) => void) | undefined]>;
    constructor(id?: string);
    static defaults: {
        show: boolean;
        allowPicking: boolean;
        fill: [number, number, number, number];
        stroke: [number, number, number, number];
        strokeWidth: number;
        markerSymbol: string;
        markerColor: [number, number, number, number];
        markerSize: number;
        clampToGround: boolean;
        uri: string;
        defaultLoadFuncStr: string;
        defaultLoadFuncDocStr: string;
        data: {
            type: string;
            features: {
                type: string;
                geometry: {
                    type: string;
                    coordinates: number[];
                };
                properties: {
                    title: string;
                    "marker-symbol": string;
                    "marker-color": string;
                };
            }[];
        };
        dataMd: string;
        viewerTagsEnums: [string, string][];
    };
    getProperties(language?: string): import("xbsj-xe2/dist-node/xe2-base-objects").Property[];
}
export declare namespace CzmGeoJson {
    const createDefaultProps: () => {
        execOnceFuncStr: string | undefined;
        updateFuncStr: string | undefined;
        toDestroyFuncStr: string | undefined;
        name: string;
        ref: string | undefined;
        devTags: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<string[] | undefined>;
        extras: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<import("xbsj-xe2/dist-node/xe2-base-utils").JsonValue>;
        show: boolean;
        uri: string | undefined;
        fill: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number] | undefined>;
        data: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<undefined>;
        stroke: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number] | undefined>;
        strokeWidth: number | undefined;
        clampToGround: boolean | undefined;
        allowPicking: boolean | undefined;
        loadFuncStr: string | undefined;
        markerSymbol: string | undefined;
        markerColor: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number] | undefined>;
        markerSize: number | undefined;
    };
}
export interface CzmGeoJson extends ReactivePropsToNativePropsAndChanged<ReturnType<typeof CzmGeoJson.createDefaultProps>> {
}
declare type JsonType = PartialWithUndefinedReactivePropsToNativeProps<ReturnType<typeof CzmGeoJson.createDefaultProps> & {
    type: string;
}>;
export {};

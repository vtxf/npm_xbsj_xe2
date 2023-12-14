import { ESSceneObject, GeoRectangle, PickedInfo } from "xbsj-xe2/dist-node/xe2-base-objects";
import { Event, Listener, PartialWithUndefinedReactivePropsToNativeProps, ReactivePropsToNativePropsAndChanged } from "xbsj-xe2/dist-node/xe2-base-utils";
import { SceneObjectKey } from "xbsj-xe2/dist-node/xe2-utils";
import h337 from './heatmap.js';
export declare class CzmHeatMap extends ESSceneObject {
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
        allowPicking: boolean | undefined;
        rotationAngle: number | undefined;
        color: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number] | undefined>;
        classificationType: import("..").CzmClassificationType | undefined;
        data: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number][] | undefined>;
        canvasWidth: number | undefined;
        max: number | undefined;
        min: number | undefined;
        radius: number | undefined;
        maxOpacity: number | undefined;
        minOpacity: number | undefined;
        blur: number | undefined;
        gradient: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<{
            [key: string]: string;
        } | undefined>;
        rectangle: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number] | undefined>;
        editing: boolean | undefined;
        pointEditing: boolean | undefined;
        debug: boolean | undefined;
    };
    get json(): JsonType;
    set json(value: JsonType);
    static defaults: {
        show: boolean;
        allowPicking: boolean;
        origin: [number, number];
        rotationAngle: number;
        color: [number, number, number, number];
        classificationType: import("..").CzmClassificationType;
        data: [number, number, number][];
        dataMd: string;
        canvasWidth: number;
        max: number;
        min: number;
        radius: number;
        maxOpacity: number;
        minOpacity: number;
        blur: number;
        gradient: {
            ".5": string;
            ".7": string;
            ".95": string;
        };
        pointEditing: boolean;
        rectangle: [number, number, number, number];
        editing: boolean;
        debug: boolean;
        viewerTagsEnums: [string, string][];
    };
    private _pickedEvent;
    get pickedEvent(): Event<[PickedInfo]>;
    private _flyToEvent;
    get flyToEvent(): Listener<[number | undefined]>;
    flyTo(duration?: number): void;
    private _div;
    get div(): HTMLDivElement;
    private _heatMap;
    get heatMap(): h337.Heatmap<"value", "x", "y">;
    private _geoRectangle;
    get geoRectangle(): GeoRectangle;
    setTestCenterData(): void;
    getCanvasWidth(): number;
    setTestRandomData(num: number): void;
    private _canvasHeightAndCanvasUnitPerMeter;
    get canvasHeightAndCanvasUnitPerMeter(): [number, number] | undefined;
    private _transformedData;
    get transformedData(): {
        x: number;
        y: number;
        value: number;
    }[];
    private _radiusInCanvasUnit;
    get radiusInCanvasUnit(): number | undefined;
    constructor(id?: SceneObjectKey);
    getProperties(language?: string): import("xbsj-xe2/dist-node/xe2-base-objects").Property[];
}
export declare namespace CzmHeatMap {
    const createDefaultProps: () => {
        execOnceFuncStr: string | undefined;
        updateFuncStr: string | undefined;
        toDestroyFuncStr: string | undefined;
        name: string;
        ref: string | undefined;
        devTags: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<string[] | undefined>;
        extras: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<import("xbsj-xe2/dist-node/xe2-base-utils").JsonValue>;
        show: boolean | undefined;
        allowPicking: boolean | undefined;
        rotationAngle: number | undefined;
        color: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number] | undefined>;
        classificationType: import("..").CzmClassificationType | undefined;
        data: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number][] | undefined>;
        canvasWidth: number | undefined;
        max: number | undefined;
        min: number | undefined;
        radius: number | undefined;
        maxOpacity: number | undefined;
        minOpacity: number | undefined;
        blur: number | undefined;
        gradient: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<{
            [key: string]: string;
        } | undefined>;
        rectangle: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number] | undefined>;
        editing: boolean | undefined;
        pointEditing: boolean | undefined;
        debug: boolean | undefined;
    };
}
export interface CzmHeatMap extends ReactivePropsToNativePropsAndChanged<ReturnType<typeof CzmHeatMap.createDefaultProps>> {
}
declare type JsonType = PartialWithUndefinedReactivePropsToNativeProps<ReturnType<typeof CzmHeatMap.createDefaultProps> & {
    type: string;
}>;
export {};

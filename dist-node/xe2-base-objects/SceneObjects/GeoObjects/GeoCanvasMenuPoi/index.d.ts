import { Event, JsonValue, Listener, PartialWithUndefinedReactivePropsToNativeProps, ReactivePropsToNativePropsAndChanged } from "xbsj-xe2/dist-node/xe2-base-utils";
import { SceneObjectKey } from "xbsj-xe2/dist-node/xe2-utils";
import { ESSceneObject } from "../../ESSceneObject";
export declare class GeoCanvasMenuPoi extends ESSceneObject {
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
        enabled: boolean;
        position: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number] | undefined>;
        positionEditing: boolean;
        title: string;
        description: string;
        imageUri: string;
        commands: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[name: string, title: string, description: string, imageUrl: string][] | undefined>;
        clickCommandName: string;
        rightClickCommandName: string;
        mainPoiSize: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number] | undefined>;
        mainPoiBgColor: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number] | undefined>;
        mainPoiFgColor: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number] | undefined>;
    };
    get json(): JsonType;
    set json(value: JsonType);
    get geoJson(): JsonValue;
    set geoJson(value: JsonValue);
    get geoJsonStr(): string;
    set geoJsonStr(value: string);
    private _flyToEvent;
    get flyToEvent(): Listener<[number | undefined]>;
    flyTo(duration?: number): void;
    private _commandEvent;
    get commandEvent(): Event<[commandName: string, pointerEvent: PointerEvent]>;
    private _dbclickEvent;
    get dbclickEvent(): Event<[pointerEvent: PointerEvent]>;
    constructor(id?: SceneObjectKey);
    getProperties(language?: string): import("../../ESSceneObject").Property[];
}
export declare namespace GeoCanvasMenuPoi {
    const createDefaultProps: () => {
        execOnceFuncStr: string | undefined;
        updateFuncStr: string | undefined;
        toDestroyFuncStr: string | undefined;
        name: string;
        ref: string | undefined;
        devTags: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<string[] | undefined>;
        extras: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<JsonValue>;
        show: boolean;
        enabled: boolean;
        position: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number] | undefined>;
        positionEditing: boolean;
        title: string;
        description: string;
        imageUri: string;
        commands: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[name: string, title: string, description: string, imageUrl: string][] | undefined>;
        clickCommandName: string;
        rightClickCommandName: string;
        mainPoiSize: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number] | undefined>;
        mainPoiBgColor: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number] | undefined>;
        mainPoiFgColor: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number] | undefined>;
    };
}
export interface GeoCanvasMenuPoi extends ReactivePropsToNativePropsAndChanged<ReturnType<typeof GeoCanvasMenuPoi.createDefaultProps>> {
}
declare type JsonType = PartialWithUndefinedReactivePropsToNativeProps<ReturnType<typeof GeoCanvasMenuPoi.createDefaultProps> & {
    type: string;
}>;
export {};

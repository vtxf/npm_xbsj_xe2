import { Event, JsonValue, Listener, PartialWithUndefinedReactivePropsToNativeProps, ReactivePropsToNativePropsAndChanged } from "xbsj-xe2/dist-node/xe2-base-utils";
import { SceneObjectKey } from "xbsj-xe2/dist-node/xe2-utils";
import { PositionEditing } from "../../utils";
import { ESSceneObject } from "../ESSceneObject";
export declare class View extends ESSceneObject {
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
        enabled: boolean | undefined;
        position: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number] | undefined>;
        positionEditing: boolean | undefined;
        show: boolean | undefined;
        rotation: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number] | undefined>;
        viewDistance: number | undefined;
        duration: number | undefined;
        default: boolean | undefined;
        thumbnail: string | undefined;
        cameraShow: boolean | undefined;
    };
    get json(): JsonType;
    set json(value: JsonType);
    static ResetFlag: {
        Position: number;
        Rotation: number;
        ViewDistance: number;
    };
    get geoJson(): JsonValue;
    set geoJson(value: JsonValue);
    get geoJsonStr(): string;
    set geoJsonStr(value: string);
    private _flyToEvent;
    get flyToEvent(): Listener<[number | undefined]>;
    /**
    * 飞入视角
    * @param duration 飞行时间
    */
    flyTo(duration?: number): void;
    private _resetWithCurrentCameraEvent;
    get resetWithCurrentCameraEvent(): Listener<[flag: number]>;
    /**
     * 设置为当前视角
     */
    resetWithCurrentCamera(flag?: number): void;
    execOnCreating(): void;
    private _captureEvent;
    get captureEvent(): Event<[width?: number | undefined, height?: number | undefined, format?: "image/jpeg" | "image/png" | undefined]>;
    /**
    * 获取缩略图
    * @param x 缩略图的宽度
    * @param y 缩略图的高度
    */
    capture(width?: number, height?: number, format?: "image/jpeg" | "image/png"): void;
    static defaults: {
        thumbnailWidth: number;
        thumbnailHeight: number;
        enabled: boolean;
        show: boolean;
        position: [number, number, number];
        positionEditing: boolean;
        rotation: [number, number, number];
        viewDistance: number;
        duration: number;
        default: boolean;
        thumbnail: string;
        viewerTagsEnums: [string, string][];
    };
    private _sPositionEditing;
    get sPositionEditing(): PositionEditing;
    constructor(id?: SceneObjectKey);
    getProperties(language?: string): import("../ESSceneObject").Property[];
}
export declare namespace View {
    const createDefaultProps: () => {
        execOnceFuncStr: string | undefined;
        updateFuncStr: string | undefined;
        toDestroyFuncStr: string | undefined;
        name: string;
        ref: string | undefined;
        devTags: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<string[] | undefined>;
        extras: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<JsonValue>;
        enabled: boolean | undefined;
        position: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number] | undefined>;
        positionEditing: boolean | undefined;
        show: boolean | undefined;
        rotation: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number] | undefined>;
        viewDistance: number | undefined;
        duration: number | undefined;
        default: boolean | undefined;
        thumbnail: string | undefined;
        cameraShow: boolean | undefined;
    };
}
export interface View extends ReactivePropsToNativePropsAndChanged<ReturnType<typeof View.createDefaultProps>> {
}
declare type JsonType = PartialWithUndefinedReactivePropsToNativeProps<ReturnType<typeof View.createDefaultProps> & {
    type: string;
}>;
export {};

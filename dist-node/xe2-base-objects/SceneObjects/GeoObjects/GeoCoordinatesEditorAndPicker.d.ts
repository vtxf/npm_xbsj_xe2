import { PartialWithUndefinedReactivePropsToNativeProps, ReactivePropsToNativePropsAndChanged } from "xbsj-xe2/dist-node/xe2-base-utils";
import { SceneObjectKey } from "xbsj-xe2/dist-node/xe2-utils";
import { ESSceneObject } from "../ESSceneObject";
import { GeoCoordinatesEditor } from "./GeoCoordinatesEditor";
import { GeoCoordinatesPicker } from "./GeoCoordinatesPicker";
export declare class GeoCoordinatesEditorAndPicker extends ESSceneObject {
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
        enabled: boolean;
        position: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number] | undefined>;
        heading: number;
        axisPixelSize: number;
        axisSnapPixelSize: number;
        virtualHeight: number | undefined;
        noModifingAfterAdding: boolean;
        hideCursorInfo: boolean;
    };
    get json(): JsonType;
    set json(value: JsonType);
    private _editor;
    get editor(): GeoCoordinatesEditor;
    private _picker;
    get picker(): GeoCoordinatesPicker;
    get picking(): boolean;
    get pickingChanged(): import("xbsj-xe2/dist-node/xe2-base-utils").Listener<[boolean, boolean]>;
    constructor(id?: SceneObjectKey);
    getProperties(language?: string): import("../ESSceneObject").Property[];
}
export declare namespace GeoCoordinatesEditorAndPicker {
    const createDefaultProps: () => {
        execOnceFuncStr: string | undefined;
        updateFuncStr: string | undefined;
        toDestroyFuncStr: string | undefined;
        name: string;
        ref: string | undefined;
        devTags: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<string[] | undefined>;
        extras: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<import("xbsj-xe2/dist-node/xe2-base-utils").JsonValue>;
        enabled: boolean;
        position: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number] | undefined>;
        heading: number;
        axisPixelSize: number;
        axisSnapPixelSize: number;
        virtualHeight: number | undefined;
        noModifingAfterAdding: boolean;
        hideCursorInfo: boolean;
    };
}
export interface GeoCoordinatesEditorAndPicker extends ReactivePropsToNativePropsAndChanged<ReturnType<typeof GeoCoordinatesEditorAndPicker.createDefaultProps>> {
}
declare type JsonType = PartialWithUndefinedReactivePropsToNativeProps<ReturnType<typeof GeoCoordinatesEditorAndPicker.createDefaultProps> & {
    type: string;
}>;
export {};

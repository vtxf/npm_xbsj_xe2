import { Destroyable, ReactParamsType } from "xbsj-xe2/dist-node/xe2-base-utils";
import { GeoCoordinatesEditorAndPicker } from "../SceneObjects";
import { PositionEditingConfigType } from "../base";
import { SceneObject } from '../scene-manager';
export declare class PositionEditing extends Destroyable {
    static defaultConfig: PositionEditingConfigType;
    private _config;
    get config(): PositionEditingConfigType;
    set config(value: PositionEditingConfigType);
    get configChanged(): import("xbsj-xe2/dist-node/xe2-base-utils").Listener<[PositionEditingConfigType, PositionEditingConfigType]>;
    private _editingRef;
    get editingRef(): import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<boolean>;
    get picking(): boolean;
    get pickingChanged(): import("xbsj-xe2/dist-node/xe2-base-utils").Listener<[boolean, boolean]>;
    private _geoCoordinatesEditorAndPicker;
    get geoCoordinatesEditorAndPicker(): GeoCoordinatesEditorAndPicker;
    constructor(positionReactParam: ReactParamsType<[number, number, number] | undefined>, positionEditing: ReactParamsType<boolean> | undefined, components: {
        add: (sceneObject: SceneObject) => void;
        delete: (sceneObject: SceneObject) => void;
    });
}

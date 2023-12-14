import { Destroyable, Listener, ReactParamsType } from "xbsj-xe2/dist-node/xe2-base-utils";
import { GeoPolylineEditor } from "../SceneObjects/GeoObjects";
import { ObjResettingWithEvent, SceneObject } from '../scene-manager';
import { PositionsEditingConfigType } from "../base";
declare class GeoPolylineEditorWrapper extends Destroyable {
    private _geoPolylineEditor;
    get geoPolylineEditor(): GeoPolylineEditor;
    constructor(positionsEditing: PositionsEditing, positionsReactParams: ReactParamsType<[number, number, number][] | undefined>, loopReactParams: ReactParamsType<boolean | undefined> | boolean | undefined, components: {
        add: (sceneObject: SceneObject) => void;
        delete: (sceneObject: SceneObject) => void;
    }, maxPointsNum?: number);
}
export declare class PositionsEditing extends Destroyable {
    private _resetting;
    get resetting(): ObjResettingWithEvent<GeoPolylineEditorWrapper, Listener<[[number, number, number][] | undefined]>>;
    static defaultConfig: PositionsEditingConfigType;
    private _config;
    get config(): PositionsEditingConfigType;
    set config(value: PositionsEditingConfigType);
    get configChanged(): Listener<[PositionsEditingConfigType, PositionsEditingConfigType]>;
    private _moveWithFirstPosition;
    get moveWithFirstPosition(): boolean;
    set moveWithFirstPosition(value: boolean);
    get moveWithFirstPositionChanged(): Listener<[boolean, boolean]>;
    constructor(positionsReactParams: ReactParamsType<[number, number, number][] | undefined>, loopReactParams: ReactParamsType<boolean | undefined> | boolean | undefined, positionsEditing: ReactParamsType<boolean | undefined> | ReactParamsType<boolean>, components: {
        add: (sceneObject: SceneObject) => void;
        delete: (sceneObject: SceneObject) => void;
    }, maxPointsNum?: number, defaultPositionsEditing?: boolean);
}
export {};

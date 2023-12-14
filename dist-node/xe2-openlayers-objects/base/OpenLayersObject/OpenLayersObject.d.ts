import { SceneObject } from "xbsj-xe2/dist-node/xe2-base-objects";
import { Destroyable } from "xbsj-xe2/dist-node/xe2-base-utils";
import { OpenLayersViewer } from "../OpenLayersViewer";
export declare class OpenLayersObjectsContext {
    private _registerCzmObjsMap;
    register<R extends SceneObject>(sceneObjectTypeName: string, objConstructor: new (sceneObject: R, openlayersViewer: OpenLayersViewer) => OpenLayersObject<R>): void;
    private _getObjConstructor;
    createObject<R extends SceneObject>(sceneObject: R, openlayersViewer: OpenLayersViewer): OpenLayersObject<R>;
}
export declare class OpenLayersObject<SceneObjectType extends SceneObject = SceneObject> extends Destroyable {
    private _sceneObject;
    private _openlayersViewer;
    private static _accumId;
    private static _totalExistingCount;
    static debugging: boolean;
    static readonly context: OpenLayersObjectsContext;
    static readonly register: <R extends SceneObject>(sceneObjectTypeName: string, objConstructor: new (sceneObject: R, openlayersViewer: OpenLayersViewer) => OpenLayersObject<R>) => void;
    private _id;
    get id(): number;
    constructor(_sceneObject: SceneObjectType, _openlayersViewer: OpenLayersViewer);
    get sceneObject(): SceneObjectType;
    get openlayersViewer(): OpenLayersViewer;
}

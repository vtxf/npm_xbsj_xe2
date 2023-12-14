import { SceneObject } from "xbsj-xe2/dist-node/xe2-base-objects";
import { Destroyable } from "xbsj-xe2/dist-node/xe2-base-utils";
import { CzmViewer } from "./CzmViewer";
export declare class CzmObjectsContext {
    private _registerObjsMap;
    register<R extends SceneObject>(sceneObjectTypeName: string, objConstructor: new (sceneObject: R, czmViewer: CzmViewer) => CzmObject<R>): void;
    private _getObjConstructor;
    createObject<R extends SceneObject>(sceneObject: R, czmViewer: CzmViewer): CzmObject<R>;
}
export declare class CzmObject<SceneObjectType extends SceneObject = SceneObject> extends Destroyable {
    private _sceneObject;
    private _czmViewer;
    private static _accumId;
    private static _totalExistingCount;
    static debugging: boolean;
    static readonly context: CzmObjectsContext;
    static readonly register: <R extends SceneObject>(sceneObjectTypeName: string, objConstructor: new (sceneObject: R, czmViewer: CzmViewer) => CzmObject<R>) => void;
    private _id;
    get id(): number;
    constructor(_sceneObject: SceneObjectType, _czmViewer: CzmViewer);
    get sceneObject(): SceneObjectType;
    get czmViewer(): CzmViewer;
}

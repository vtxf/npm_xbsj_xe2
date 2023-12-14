import { Destroyable } from "xbsj-xe2/dist-node/xe2-base-utils";
import { SceneObject } from "../SceneObjects";
import { SceneObjectsManager } from "./SceneObjectsManager";
export declare class PropListening<T> extends Destroyable {
    private _sceneObjectsManager;
    constructor(_sceneObjectsManager: SceneObjectsManager, propName: string, callback: (sceneObject: SceneObject, prop: T) => void, filter?: (sceneObject: SceneObject) => boolean);
}

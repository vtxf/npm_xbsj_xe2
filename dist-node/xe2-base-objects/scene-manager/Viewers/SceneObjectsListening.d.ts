import { Destroyable } from "xbsj-xe2/dist-node/xe2-base-utils";
import { SceneObject } from "../SceneObjects";
import { SceneObjectsManager } from "./SceneObjectsManager";
export declare type CreateSceneObjectListeningFuncType = (sceneObject: SceneObject) => {
    destroy: () => void;
} | undefined;
export declare class SceneObjectsListening extends Destroyable {
    private _sceneObjectsMananger;
    private _createSceneObjectListeningFunc;
    private _listeningSceneObjects;
    get listeningSceneObjects(): Map<SceneObject, {
        destroy: () => void;
    }>;
    get createSceneObjectListeningFunc(): CreateSceneObjectListeningFuncType;
    constructor(_sceneObjectsMananger: SceneObjectsManager, _createSceneObjectListeningFunc: CreateSceneObjectListeningFuncType);
}

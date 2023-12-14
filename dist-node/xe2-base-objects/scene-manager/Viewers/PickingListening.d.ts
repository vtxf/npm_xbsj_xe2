import { Destroyable, Event } from "xbsj-xe2/dist-node/xe2-base-utils";
import { SceneObjectPickedInfo } from "../SceneObjects";
import { SceneObjectsManager } from "./SceneObjectsManager";
export declare class PickingListening extends Destroyable {
    private _sceneObjectsManager;
    private _pickedEvent;
    get pickedEvent(): Event<[sceneObjectPickedInfo: SceneObjectPickedInfo]>;
    private _sol;
    constructor(_sceneObjectsManager: SceneObjectsManager);
}

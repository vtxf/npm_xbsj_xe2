import { SceneObject, SceneObjectsManager } from "xbsj-xe2/dist-node/xe2-base-objects";
import { Destroyable } from "xbsj-xe2/dist-node/xe2-base-utils";
export declare class SceneObjectEditing extends Destroyable {
    private _sceneObject;
    get sceneObject(): SceneObject;
    constructor(_sceneObject: SceneObject, sceneObjectEditingManager: SceneObjectEditingManager);
}
export declare type ActiveEditingInfoType = [sceneObject: SceneObject, editingPropName: string];
export declare class SceneObjectEditingManager extends Destroyable {
    private _sceneObjectsManager;
    private _currentActiveEditing;
    get currentActiveEditing(): ActiveEditingInfoType | undefined;
    set currentActiveEditing(value: ActiveEditingInfoType | undefined);
    get currentActiveEditingChanged(): import("xbsj-xe2/dist-node/xe2-base-utils").Listener<[ActiveEditingInfoType | undefined, ActiveEditingInfoType | undefined]>;
    private _currentActiveEditingLastChangedTime;
    get currentActiveEditingLastChangedTime(): number;
    constructor(_sceneObjectsManager: SceneObjectsManager);
}

import { Destroyable, Event, Listener } from "xbsj-xe2/dist-node/xe2-base-utils";
import { SceneObject } from "../SceneObjects";
import { PickingListening } from "./PickingListening";
export declare class SceneObjectsManager extends Destroyable {
    private _sceneObjects;
    get sceneObjects(): Set<SceneObject>;
    private _sceneObjectsToChange;
    get sceneObjectsToChange(): Listener<[toDels: SceneObject[], toAdds: SceneObject[]]>;
    private _sceneObjectDevTagsChanged;
    get sceneObjectDevTagsChanged(): Listener<[sceneObject: SceneObject, devTags: string[] | undefined, oldDevTags: string[] | undefined]>;
    private _pickingListening;
    get sceneObjectsPicking(): PickingListening;
    get sceneObjectPickedEvent(): Event<[sceneObjectPickedInfo: import("../SceneObjects").SceneObjectPickedInfo]>;
    constructor();
    addSceneObject(sceneObject: SceneObject): boolean;
    deleteSceneObject(sceneObject: SceneObject): boolean;
    /**
     * 监听场景对象的属性，属性变化时就会触发
     * @param propName 属性名称
     * @param callback 属性变化以后需要做什么样的操作
     * @param filter 用来过滤需要监听的场景对象
     * @returns
     */
    listenProp<T>(propName: string, callback: (sceneObject: SceneObject, prop: T) => void, filter?: (sceneObject: SceneObject) => boolean): () => undefined;
}

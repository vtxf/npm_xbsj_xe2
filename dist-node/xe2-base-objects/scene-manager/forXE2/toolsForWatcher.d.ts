import { Destroyable } from "xbsj-xe2/dist-node/xe2-base-utils";
import { SceneObjectKey } from "xbsj-xe2/dist-node/xe2-utils";
import { SceneObject } from "../SceneObjects/SceneObject";
export declare type WatchObjectType = {
    debug?: boolean;
    evalMode?: 'NextAnimateFrame' | 'Immediate';
    evalOnlyWhenObjsAllExist?: boolean;
};
export declare class WatcherObjects extends Destroyable {
    private _doEvalEvent;
    /**
     * 强制执行
     */
    forceExecute(): void;
    constructor(objIdAndPropChangedNames: [SceneObjectKey, string][], watcher: WatchObjectType, evalFunc: (sceneObjects: (SceneObject | undefined)[]) => void);
}

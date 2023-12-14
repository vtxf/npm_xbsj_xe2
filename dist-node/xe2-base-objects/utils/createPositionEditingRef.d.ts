import { ReactParamsType } from "xbsj-xe2/dist-node/xe2-base-utils";
import { SceneObject } from "../SceneObjects/ESSceneObject";
export declare function createPositionEditingRef(positionReactParams: ReactParamsType, addSceneObjectFunc: (sceneObject: SceneObject) => void, deleteSceneObjectFunc: (sceneObject: SceneObject) => void): import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<boolean>;

import { ReactParamsType, ReactiveVariable } from "xbsj-xe2/dist-node/xe2-base-utils";
import { SceneObject } from "../SceneObjects/ESSceneObject";
export declare function createPenSplineEditingRef(vertexArrayReactParams: ReactParamsType, addSceneObjectFunc: (sceneObject: SceneObject) => void, deleteSceneObjectFunc: (sceneObject: SceneObject) => void, maxPointsNum?: number): ReactiveVariable<boolean | undefined>;

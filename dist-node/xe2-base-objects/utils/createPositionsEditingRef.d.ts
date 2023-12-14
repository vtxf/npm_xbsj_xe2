import { ReactParamsType, ReactiveVariable } from "xbsj-xe2/dist-node/xe2-base-utils";
import { SceneObject } from "../SceneObjects/ESSceneObject";
export declare function createPositionsEditingRef(positionsReactParams: ReactParamsType<[number, number, number][] | undefined>, loopReactParams: ReactParamsType<boolean | undefined> | boolean | undefined, addSceneObjectFunc: (sceneObject: SceneObject) => void, deleteSceneObjectFunc: (sceneObject: SceneObject) => void, maxPointsNum?: number): ReactiveVariable<boolean | undefined>;

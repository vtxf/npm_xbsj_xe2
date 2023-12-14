import { ReactParamsType } from "xbsj-xe2/dist-node/xe2-base-utils";
import { SceneObject } from "../scene-manager";
export declare function createPenSplineEditingRefForComponent(positionsReactParams: ReactParamsType, components: {
    add: (sceneObject: SceneObject) => void;
    delete: (sceneObject: SceneObject) => void;
}, maxPointsNum?: number): import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<boolean | undefined>;

import { ReactParamsType } from "xbsj-xe2/dist-node/xe2-base-utils";
import { SceneObject } from "../scene-manager";
export declare function createPositionsEditingRefForComponent(positionsReactParams: ReactParamsType<[number, number, number][] | undefined>, loopReactParams: ReactParamsType<boolean | undefined> | boolean | undefined, components: {
    add: (sceneObject: SceneObject) => void;
    delete: (sceneObject: SceneObject) => void;
}, maxPointsNum?: number): import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<boolean | undefined>;

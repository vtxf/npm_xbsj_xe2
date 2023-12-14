import { Destroyable, ReactivePropsToNativePropsAndChanged } from "xbsj-xe2/dist-node/xe2-base-utils";
import { ESSceneObject, SceneObject } from "xbsj-xe2/dist-node/xe2-base-objects";
import { PropTree } from "./PropTree";
export declare function createPropTreeFromSceneObject(sceneObject: ESSceneObject, itemDivHeight: number): PropTree;
export declare class PropUiTreeManager extends Destroyable {
    private _propTreeReact;
    get propTree(): PropTree | undefined;
    get propTreeChanged(): import("xbsj-xe2/dist-node/xe2-base-utils").Listener<[PropTree | undefined, PropTree | undefined]>;
    constructor(itemDivHeight: number);
}
export declare namespace PropUiTreeManager {
    const createDefaultProps: () => {
        sceneObject: SceneObject | undefined;
    };
}
export interface PropUiTreeManager extends ReactivePropsToNativePropsAndChanged<ReturnType<typeof PropUiTreeManager.createDefaultProps>> {
}

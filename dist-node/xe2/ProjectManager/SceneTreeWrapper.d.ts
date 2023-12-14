import { Destroyable, ReactivePropsToNativePropsAndChanged } from "xbsj-xe2/dist-node/xe2-base-utils";
import { SceneTree } from '../SceneTrees';
import { ProjectManager } from './index';
export declare class SceneTreeWrapper extends Destroyable {
    private _projectManager;
    private _sceneTree;
    get sceneTree(): SceneTree;
    constructor(_projectManager: ProjectManager, name: string, itemDivHeight: number);
}
export declare namespace SceneTreeWrapper {
    const createDefaultProps: () => {
        showPropUiOnSelecting: boolean;
    };
}
export interface SceneTreeWrapper extends ReactivePropsToNativePropsAndChanged<ReturnType<typeof SceneTreeWrapper.createDefaultProps>> {
}

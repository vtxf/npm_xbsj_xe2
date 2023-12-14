import { Destroyable } from "xbsj-xe2/dist-node/xe2-base-utils";
import { SceneTreeItem } from "./SceneTreeItem";
import { SceneTree } from './SceneTree';
import { ProjectManager } from "../ProjectManager";
export declare type MenuContentType = {
    text: string;
    keys: string;
    func: () => void;
} | {
    type: "divider";
};
export declare type TreeItemContexMenuCallbackType = (contextMenuItems: MenuContentType[], item: SceneTreeItem | undefined, sceneTree: SceneTree, projectManager: ProjectManager) => void;
export declare class SceneTreeContextMenu extends Destroyable {
    private _sceneTree;
    private _projectManager;
    get sceneTree(): SceneTree;
    static defaultPlayerTreeItemContexMenuCallback: (contextMenuItems: MenuContentType[], item: SceneTreeItem | undefined, sceneTree: SceneTree, projectManager: ProjectManager) => undefined;
    static defaultTreeItemContexMenuCallback: (contextMenuItems: MenuContentType[], item: SceneTreeItem | undefined, sceneTree: SceneTree, projectManager: ProjectManager) => void;
    treeItemContexMenuCallback: TreeItemContexMenuCallbackType | undefined;
    constructor(_sceneTree: SceneTree, _projectManager: ProjectManager);
}

import { GroupPropTreeItem, LeafPropTreeItem, PropTree } from '../PropTrees';
import { ProjectManager } from ".";
import { PropertyCompCallbackFuncParamsType } from "./PropertyCompCallbackFuncParamsType";
export declare function propTreeCallback(projectManager: ProjectManager, params: PropertyCompCallbackFuncParamsType & {
    treeItem: GroupPropTreeItem | LeafPropTreeItem;
    propTree: PropTree;
}): void;

import { Tree, UiTree } from "../base";
import { GroupPropTreeItem, LeafPropTreeItem } from "./PropTreeItem";
export declare class PropTree extends Tree<LeafPropTreeItem | GroupPropTreeItem> {
    constructor(itemDivHeight: number);
    get propUiTree(): UiTree<GroupPropTreeItem | LeafPropTreeItem, PropTree>;
}

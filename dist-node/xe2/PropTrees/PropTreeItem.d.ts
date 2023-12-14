import { ObservableArray } from "xbsj-xe2/dist-node/xe2-base-utils";
import { TreeItem } from "../base";
import { GroupProperty } from "xbsj-xe2/dist-node/xe2-base-objects";
import { Property } from "xbsj-xe2/dist-node/xe2-base-objects";
import { PropTree } from "./PropTree";
export declare class BasePropTreeItem extends TreeItem {
    private _property;
    constructor(tree: PropTree, hasChildren: boolean, _property: Property);
    get property(): Property;
}
export declare class LeafPropTreeItem extends BasePropTreeItem {
    constructor(tree: PropTree, property: Property);
}
export declare class GroupPropTreeItem extends BasePropTreeItem {
    constructor(tree: PropTree, groupProperty: GroupProperty);
    get groupChildren(): ObservableArray<TreeItem>;
}

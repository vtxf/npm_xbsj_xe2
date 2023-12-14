import { JsonValue, ReactivePropsToNativePropsAndChanged } from "xbsj-xe2/dist-node/xe2-base-utils";
import { TreeItem, TreeItemDragDrop, TreeItemInsertFlag } from "../base";
import { SceneObject } from "xbsj-xe2/dist-node/xe2-base-objects";
import { SceneTree } from "./SceneTree";
export declare type SceneTreeItemJsonValue = {
    name?: string;
    show?: boolean;
    collapsed?: boolean;
    sceneObj?: JsonValue;
    children?: SceneTreeItemJsonValue[];
};
export declare type SceneTreeItemType = 'Folder' | string;
export declare type SceneTreeItemInsertFlag = TreeItemInsertFlag | 'FolderInnerOrAfter' | 'FolderInnerOrBefore' | 'FolderInner';
export declare class SceneTreeItem extends TreeItem {
    private _dragDrop?;
    get dragDrop(): TreeItemDragDrop;
    private _showChangedNotAffectChildren;
    private _showChangedNotAffectParent;
    private _type;
    get type(): string;
    get typeChanged(): import("xbsj-xe2/dist-node/xe2-base-utils").Listener<[string, string]>;
    get sceneTree(): SceneTree;
    constructor(tree: SceneTree, hasChildren?: boolean, id?: string);
    get jsonStr(): string;
    set jsonStr(value: string);
    get json(): SceneTreeItemJsonValue;
    set json(value: SceneTreeItemJsonValue);
    clone(): SceneTreeItem | undefined;
    insertNewTreeItem(flag: SceneTreeItemInsertFlag, newTreeItem?: TreeItem | undefined): boolean;
}
export declare namespace SceneTreeItem {
    const createDefaultProps: () => {
        name: string;
        nameEditing: boolean;
        sceneObject: SceneObject | undefined;
        show: boolean;
    };
}
export interface SceneTreeItem extends ReactivePropsToNativePropsAndChanged<ReturnType<typeof SceneTreeItem.createDefaultProps>> {
}

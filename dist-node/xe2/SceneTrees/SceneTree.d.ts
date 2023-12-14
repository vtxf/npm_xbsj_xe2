import { SceneObject } from "xbsj-xe2/dist-node/xe2-base-objects";
import { JsonValue } from "xbsj-xe2/dist-node/xe2-base-utils";
import { UiTree } from "xbsj-xe2/dist-node/xe2-utils";
import { DragStartDataManager, Tree } from "../base";
import { SceneTreeItem, SceneTreeItemJsonValue, SceneTreeItemInsertFlag } from "./SceneTreeItem";
import { defaultCreateSceneObject } from "./defaultCreateSceneObject";
import { defaultCreateTreeItemDragDrop } from "./defaultCreateTreeItemDragDrop";
import { getSceneObjectShow as defaultGetSceneObjectShow, setSceneObjectShow as defaultSetSceneObjectShow } from "./defaultShowSceneObject";
import { preload } from "./preload";
import { SceneTreeContextMenu } from "./SceneTreeContextMenu";
import { ProjectManager } from "../ProjectManager";
export declare type SceneTreeJsonValue = {
    root: SceneTreeItemJsonValue;
};
declare function defaultGetSceneTreeItemCloneName(originSceneTreeItem: SceneTreeItem): string;
export declare class SceneTree extends Tree<SceneTreeItem> {
    private _name;
    private _dragStartDataManager;
    private _projectManager;
    private _jsonLoading;
    get json(): SceneTreeJsonValue;
    set json(value: SceneTreeJsonValue);
    get jsonStr(): string;
    set jsonStr(value: string);
    get jsonLoadingEvent(): import("xbsj-xe2/dist-node/xe2-base-utils").Event<[{
        type: "init" | "loading" | "loaded";
    } | {
        type: "error";
        error?: string | undefined;
    }]>;
    get name(): string;
    static defaultCreateSceneObjectFunc: typeof defaultCreateSceneObject;
    createSceneObjectFunc: typeof defaultCreateSceneObject;
    static defaultCreateTreeItemDragDropFunc: typeof defaultCreateTreeItemDragDrop;
    createTreeItemDragDropFunc: typeof defaultCreateTreeItemDragDrop;
    static defaultPreload: typeof preload;
    preloadFunc: typeof preload;
    static defaultGetSceneObjectShow: typeof defaultGetSceneObjectShow;
    getSceneObjectShowFunc: typeof defaultGetSceneObjectShow;
    static defaultSetSceneObjectShow: typeof defaultSetSceneObjectShow;
    setSceneObjectShowFunc: typeof defaultSetSceneObjectShow;
    static defaultGetSceneTreeItemCloneNameFunc: typeof defaultGetSceneTreeItemCloneName;
    getSceneTreeItemCloneNameFunc: typeof defaultGetSceneTreeItemCloneName;
    debug: boolean;
    get projectManager(): ProjectManager;
    private _contextMenu;
    get contextMenu(): SceneTreeContextMenu;
    constructor(_name: string, _dragStartDataManager: DragStartDataManager, itemDivHeight: number, _projectManager: ProjectManager);
    get sceneUiTree(): UiTree<SceneTreeItem, SceneTree>;
    get dragStartDataManager(): DragStartDataManager;
    getJson(): {
        root: {
            children: SceneTreeItemJsonValue[];
        };
    };
    setJson(value: SceneTreeJsonValue): void;
    /**
     * 监测addNewTreeItem是否可以添加项
     * @deprecated 请勿使用，未来将废弃！
     * @param currentTreeItem
     * @param flag
     * @returns
     */
    testAddNewTreeItem(currentTreeItem: SceneTreeItem | undefined, flag: SceneTreeItemInsertFlag): boolean;
    /**
     * @deprecated 请勿使用，未来将废弃！
     * @param currentTreeItem
     * @param flag
     * @param isGroup
     * @param sceneObject
     * @returns
     */
    addNewTreeItem(currentTreeItem: SceneTreeItem | undefined, flag: SceneTreeItemInsertFlag, isGroup: boolean, sceneObject?: SceneObject): SceneTreeItem | undefined;
    /**
     * 创建树结构上的场景对象节点
     * @param sceneObjectType 需要创建的场景对象类型的字符串，或者时场景对象的类名
     * @param id 指定场景对象的id，如果不指定或者为undefined时，则会内部自动生成
     * @param currentTreeItem 当前节点，当前常见的节点挂接到哪个节点上
     * @param flag 插入标记：'InnerOrBefore' | 'InnerOrAfter' | 'Inner' | 'Before' | 'After'
     * 分别表示在当前节点的内部或者之前、内部或者之后、内部、之前、之后创建新节点，注意当flag为Inner且当前节点非组节点时会创建失败返回undefined！
     * @returns 返回创建的树节点，如果创建失败则会返回undefined
     * @example
     * // 示例1 通过场景对象类型的字符串创建某个类型的场景对象节点
     * const sceneObjTreeItem = projectManager.createSceneObjectTreeItem('CzmModelPrimitive');
     * sceneObjTreeItem.sceneObject.position = [116.39, 39.9, 100];
     * sceneObjTreeItem.sceneObject.flyTo();
     *
     * // 示例2 通过场景对象的类来创建某个类型的场景对象节点
     * import { CzmModelPrimitive } from 'xbsj-czmtoy/dist-node/general-scene-objects';
     * const sceneObjTreeItem = projectManager.createSceneObjectTreeItem(CzmModelPrimitive);
     * sceneObjTreeItem.sceneObject.position = [116.39, 39.9, 100];
     * sceneObjTreeItem.sceneObject.flyTo();
     *
     * // 示例3 创建某个类型的场景对象节点，并手动指定id
     * const sceneObjTreeItem = projectManager.createSceneObjectTreeItem('CzmModelPrimitive', 'obj123');
     * sceneObjTreeItem.sceneObject.position = [116.39, 39.9, 100];
     * sceneObjTreeItem.sceneObject.flyTo();
     *
     * // 示例4 创建某个类型的场景对象节点，假如当前节点是组节点的话，则在其内部创建，否则在之后创建新的节点
     * const currentTreeItem = projectManager.sceneTree.root;
     * const sceneObjTreeItem = projectManager.createSceneObjectTreeItem('CzmModelPrimitive', 'obj123', currentTreeItem);
     * sceneObjTreeItem.sceneObject.position = [116.39, 39.9, 100];
     * sceneObjTreeItem.sceneObject.flyTo();
     *
     * // 示例5 创建某个类型的场景对象节点，假如当前节点是组节点的话，则在其内部创建，否则在之前创建新的节点
     * const sceneObjTreeItem = projectManager.createSceneObjectTreeItem('CzmModelPrimitive', 'obj123', currentTreeItem, 'InnerOrBefore');
     * sceneObjTreeItem.sceneObject.position = [116.39, 39.9, 100];
     * sceneObjTreeItem.sceneObject.flyTo();
     */
    createSceneObjectTreeItem<T extends SceneObject>(sceneObjectType: string | (new (id?: string | undefined) => T), id?: string, currentTreeItem?: SceneTreeItem, flag?: SceneTreeItemInsertFlag): SceneTreeItem | undefined;
    /**
     * 创建一个组节点
     * @param id
     * @param currentTreeItem
     * @param flag
     * @returns
     */
    createGroupTreeItem(name?: string, id?: string, currentTreeItem?: SceneTreeItem, flag?: SceneTreeItemInsertFlag): SceneTreeItem | undefined;
    /**
     * 通过Class来创建树结构上的场景对象节点
     * @param sceneObjConstructor 需要创建的场景对象类
     * @param id 指定场景对象的id，如果不指定或者为undefined时，则会内部自动生成
     * @param currentTreeItem 当前节点，当前常见的节点挂接到哪个节点上
     * @param flag 插入标记：'InnerOrBefore' | 'InnerOrAfter' | 'Inner' | 'Before' | 'After'
     * 分别表示在当前节点的内部或者之前、内部或者之后、内部、之前、之后创建新节点，注意当flag为Inner且当前节点非组节点时会创建失败返回undefined！
     * @returns 返回创建的树节点，如果创建失败则会返回undefined
     * @example
     * // 示例1 创建某个类型的场景对象节点
     * import { CzmModelPrimitive } from 'xbsj-czmtoy/dist-node/general-scene-objects';
     * const sceneObjTreeItem = projectManager.createSceneObjectTreeItemFromClass(CzmModelPrimitive);
     * sceneObjTreeItem.sceneObject.position = [116.39, 39.9, 100];
     * sceneObjTreeItem.sceneObject.flyTo();
     *
     * // 示例2 创建某个类型的场景对象节点，并手动指定id
     * import { CzmModelPrimitive } from 'xbsj-czmtoy/dist-node/general-scene-objects';
     * const sceneObjTreeItem = projectManager.createSceneObjectTreeItemFromClass(CzmModelPrimitive, 'obj123');
     * sceneObjTreeItem.sceneObject.position = [116.39, 39.9, 100];
     * sceneObjTreeItem.sceneObject.flyTo();
     *
     * // 示例3 创建某个类型的场景对象节点，假如当前节点是组节点的话，则在其内部创建，否则在之后创建新的节点
     * import { CzmModelPrimitive } from 'xbsj-czmtoy/dist-node/general-scene-objects';
     * const currentTreeItem = projectManager.sceneTree.root;
     * const sceneObjTreeItem = projectManager.createSceneObjectTreeItemFromClass(CzmModelPrimitive, 'obj123', currentTreeItem);
     * sceneObjTreeItem.sceneObject.position = [116.39, 39.9, 100];
     * sceneObjTreeItem.sceneObject.flyTo();
     *
     * // 示例4 创建某个类型的场景对象节点，假如当前节点是组节点的话，则在其内部创建，否则在之前创建新的节点
     * import { CzmModelPrimitive } from 'xbsj-czmtoy/dist-node/general-scene-objects';
     * const sceneObjTreeItem = projectManager.createSceneObjectTreeItemFromClass(CzmModelPrimitive, 'obj123', currentTreeItem, 'InnerOrBefore');
     * sceneObjTreeItem.sceneObject.position = [116.39, 39.9, 100];
     * sceneObjTreeItem.sceneObject.flyTo();
     */
    createSceneObjectTreeItemFromClass<T extends SceneObject>(sceneObjConstructor: new (id?: string | undefined) => T, id?: string, currentTreeItem?: SceneTreeItem, flag?: SceneTreeItemInsertFlag): SceneTreeItem | undefined;
    /**
     * 通过Json来创建树结构上的场景对象节点
     * @param sceneObjectJson 需要创建的场景对象的JSON
     * @param id 指定场景对象的id，如果不指定或者为undefined时，则会内部自动生成
     * @param currentTreeItem 当前节点，当前常见的节点挂接到哪个节点上
     * @param flag 插入标记：'InnerOrBefore' | 'InnerOrAfter' | 'Inner' | 'Before' | 'After'
     * 分别表示在当前节点的内部或者之前、内部或者之后、内部、之前、之后创建新节点，注意当flag为Inner且当前节点非组节点时会创建失败返回undefined！
     * @returns 返回创建的树节点，如果创建失败则会返回undefined
     * @example
     * // 示例1 创建某个类型的场景对象节点
     * const sceneObjTreeItem = g_projectManager.createSceneObjectTreeItemFromJson({
     *     type: 'CzmModelPrimitive',
     *     position: [116.39, 39.9, 100],
     * })
     * sceneObjTreeItem.sceneObject.flyTo();
     *
     * // 示例2 创建某个类型的场景对象节点，并手动指定id
     * const sceneObjTreeItem = g_projectManager.createSceneObjectTreeItemFromJson({
     *     type: 'CzmModelPrimitive',
     *     id: 'abc123',
     *     position: [116.39, 39.9, 100],
     * })
     * sceneObjTreeItem.sceneObject.flyTo();
     *
     * // 示例3 创建某个类型的场景对象节点，假如当前节点是组节点的话，则在其内部创建，否则在之后创建新的节点
     * const currentTreeItem = projectManager.sceneTree.root;
     * const sceneObjTreeItem = g_projectManager.createSceneObjectTreeItemFromJson({
     *     type: 'CzmModelPrimitive',
     *     id: 'abc123',
     *     position: [116.39, 39.9, 100],
     * }, currentTreeItem);
     * sceneObjTreeItem.sceneObject.flyTo();
     *
     * // 示例4 创建某个类型的场景对象节点，假如当前节点是组节点的话，则在其内部创建，否则在之前创建新的节点
     * const currentTreeItem = projectManager.sceneTree.root;
     * const sceneObjTreeItem = g_projectManager.createSceneObjectTreeItemFromJson({
     *     type: 'CzmModelPrimitive',
     *     id: 'abc123',
     *     position: [116.39, 39.9, 100],
     * }, currentTreeItem, 'InnerOrBefore');
     * sceneObjTreeItem.sceneObject.flyTo();
     */
    createSceneObjectTreeItemFromJson<T extends SceneObject>(sceneObjectJson: JsonValue & {
        [k: string]: any;
        type: string;
    }, currentTreeItem?: SceneTreeItem, flag?: SceneTreeItemInsertFlag): SceneTreeItem | undefined;
    /**
     * 销毁一个场景对象节点
     * @param sceneTreeItem
     */
    destroySceneObjectTreeItem(sceneTreeItem: SceneTreeItem): void;
    /**
     * 销毁用户添加的所有场景节点
     * @returns
     */
    destroyAllSceneObjectTreeItems(): void;
}
export {};

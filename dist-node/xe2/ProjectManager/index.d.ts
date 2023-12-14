import { ESSceneObject, Player, SceneObject, SceneObjectsManager, ViewCollection, Viewer, ViewersManager } from "xbsj-xe2/dist-node/xe2-base-objects";
import { Destroyable, JsonValue, ReactivePropsToNativePropsAndChanged } from "xbsj-xe2/dist-node/xe2-base-utils";
import { TreeItemInsertFlag } from 'xbsj-xe2/dist-node/xe2-utils';
import { GroupPropTreeItem, LeafPropTreeItem, PropTree, PropUiTreeManager } from '../PropTrees';
import { SceneTreeItem, SceneTreeJsonValue } from '../SceneTrees';
import { DragStartDataManager } from '../base';
import { DoWithAllowPickingOnCreating } from "./DoWithAllowPickingOnCreating";
import { ProjectConfig } from "./ProjectConfig";
import { PropertyCompCallbackFuncParamsType } from "./PropertyCompCallbackFuncParamsType";
import { SceneObjectEditingManager } from "./SceneObjectEditingManager";
import { SceneTreeWrapper } from "./SceneTreeWrapper";
import { defaultInitSceneObjectOnCreatingFunc, defaultUpdateSceneObjectOnPickingFunc } from "./utils";
import { SceneObjectsPicking } from "./SceneObjectsPicking";
export { SceneObjectsPicking };
export declare type ProjectJsonType = {
    asset: {
        version: string;
        createdTime: string;
        modifiedTime: string;
        name: string;
    };
    sceneTree: SceneTreeJsonValue;
};
/**
 * 项目管理类
 */
export declare class ProjectManager extends Destroyable {
    private _itemDivHeight;
    static setEnv(varName: string, value: string | undefined): void;
    static getEnv(varName: string): string | undefined;
    static envs(): {
        [k: string]: string | undefined;
    };
    private _dragstartDataMananger;
    get dragstartDataMananger(): DragStartDataManager;
    private _asset;
    get asset(): Destroyable & {
        name: string;
        createdTime: string;
        modifiedTime: string;
    } & import("xbsj-xe2/dist-node/xe2-base-utils").ConvertToChangedProps<{
        name: string;
        createdTime: string;
        modifiedTime: string;
    }>;
    private _propUiTreeManager;
    get propUiTreeManager(): PropUiTreeManager;
    private _sceneObjectsManager;
    get sceneObjectsManager(): SceneObjectsManager;
    private _sceneObjectEditingManager;
    get sceneObjectEditingManager(): SceneObjectEditingManager;
    private _viewersManager;
    get viewersManager(): ViewersManager;
    private _userCreatedSceneObjects;
    get userCreatedSceneObjects(): Set<SceneObject>;
    printAllUserCreatedSceneObjects(): void;
    propTreeCallback(params: PropertyCompCallbackFuncParamsType & {
        treeItem: GroupPropTreeItem | LeafPropTreeItem;
        propTree: PropTree;
    }): void;
    get defaultContainer(): HTMLDivElement | undefined;
    set defaultContainer(value: HTMLDivElement | undefined);
    set defaultContainerOrId(value: HTMLDivElement | string | undefined);
    private _defaultSceneTreeWrapper;
    get defaultSceneTreeWrapper(): SceneTreeWrapper;
    get sceneTree(): import("../SceneTrees").SceneTree;
    private _sceneTreeWrapperMap;
    getSceneTreeWrapper(name: string, itemDivHeight?: number): SceneTreeWrapper;
    get jsonLoadingEvent(): import("xbsj-xe2/dist-node/xe2-base-utils").Event<[{
        type: "init" | "loading" | "loaded";
    } | {
        type: "error";
        error?: string | undefined;
    }]>;
    static defaultUpdateSceneObjectOnPickingFunc: typeof defaultUpdateSceneObjectOnPickingFunc;
    updateSceneObjectOnPickingFunc?: (viewer: Viewer, sceneObject: SceneObject | undefined) => void;
    static defaultInitSceneObjectOnCreatingFunc: typeof defaultInitSceneObjectOnCreatingFunc;
    initSceneObjectOnCreatingFunc?: (sceneObject: SceneObject) => void;
    private _config;
    get config(): ProjectConfig;
    private _doWithAllowPickingOnCreating;
    get doWithAllowPickingOnCreating(): DoWithAllowPickingOnCreating;
    private _sceneObjectsPicking;
    get sceneObjectsPicking(): SceneObjectsPicking;
    constructor(defaultContainerOrId?: HTMLDivElement | string, _itemDivHeight?: number);
    private _getJson;
    /**
     * 获取项目的JSON配置信息
     */
    get json(): ProjectJsonType;
    /**
     * 需要传递一个JSON数据
     * @example
     * const projectJson = {
     *     "asset": {
     *         "version": "0.1.0",
     *         "createdTime": "2022-06-17T05:54:41.744Z",
     *         "modifiedTime": "2022-10-21T06:41:38.758Z",
     *         "name": "基础场景"
     *     },
     *     "sceneTree": {
     *         "root": {
     *             "name": "ROOT",
     *             "children": [
     *                 {
     *                     "name": "基础场景",
     *                     "children": [
     *                         {
     *                             "name": "默认视口",
     *                             "sceneObj": {
     *                                 "type": "CzmViewer",
     *                                 "actived": true,
     *                                 "name": "默认视口",
     *                             }
     *                         },
     *                         {
     *                             "name": "离线影像",
     *                             "sceneObj": {
     *                                 "type": "CzmImagery",
     *                                 "imageryProvider": {
     *                                     "type": "TileMapServiceImageryProvider",
     *                                     "url": "${czm-path}/Assets/Textures/NaturalEarthII"
     *                                 },
     *                                 "name": "离线影像"
     *                             }
     *                         }
     *                     ]
     *                 }
     *             ]
     *         }
     *     }
     * }
     * projectManager.json = projectJson;
     */
    private _setJson;
    set json(value: ProjectJsonType);
    /**
     * 获取项目的JSON配置信息，字符串形式
     */
    get jsonStr(): string;
    /**
     * 配置项目，需要传递一个JSON配置信息，字符串类型
     * @example
     * const projectJsonStr = `{
     *     "asset": {
     *         "version": "0.1.0",
     *         "createdTime": "2022-06-17T05:54:41.744Z",
     *         "modifiedTime": "2022-10-21T06:41:38.758Z",
     *         "name": "基础场景"
     *     },
     *     "sceneTree": {
     *         "root": {
     *             "name": "ROOT",
     *             "children": [
     *                 {
     *                     "name": "基础场景",
     *                     "children": [
     *                         {
     *                             "name": "默认视口",
     *                             "sceneObj": {
     *                                 "type": "CzmViewer",
     *                                 "actived": true,
     *                                 "name": "默认视口",
     *                             }
     *                         },
     *                         {
     *                             "name": "离线影像",
     *                             "sceneObj": {
     *                                 "type": "CzmImagery",
     *                                 "imageryProvider": {
     *                                     "type": "TileMapServiceImageryProvider",
     *                                     "url": "${czm-path}/Assets/Textures/NaturalEarthII"
     *                                 },
     *                                 "name": "离线影像"
     *                             }
     *                         }
     *                     ]
     *                 }
     *             ]
     *         }
     *     }
     * }`;
     * projectManager.jsonStr = projectJsonStr;
     */
    set jsonStr(value: string);
    /**
     * 创建一个场景对象，注意不会在场景结构树上体现
     * @param sceneObjectType 需要创建的场景对象类型的字符串，或者是场景对象的类名
     * @param id 指定场景对象的id，如果不指定或者为undefined时，则会内部自动生成
     * @returns 返回一个场景对象，如果失败返回undefined
     * @example
     * // 示例1 通过场景对象类型的字符串创建某个类型的场景对象
     * const sceneObject = projectManager.createSceneObject('CzmModelPrimitive');
     * sceneObject.position = [116.39, 39.9, 100];
     * //场景对象飞入
     * sceneObject.flyTo();
     *
     * // 示例2 通过场景对象类型的字符串创建某个类型的场景对象，并指定场景对象的ID
     * const sceneObject = projectManager.createSceneObject('CzmModelPrimitive', 'abc123');
     * sceneObject.position = [116.39, 39.9, 100];
     * //场景对象飞入
     * sceneObject.flyTo();
     * //示例2.1 通过场景对象类型的字符串创建某个类型的场景对象，并指定场景对象ID为undefined,此时会自动创建ID
     * const sceneObject = projectManager.createSceneObject('CzmModelPrimitive',undefined);
     * sceneObject.position = [116.39, 39.9, 100];
     * //场景对象飞入
     * sceneObject.flyTo();
     * //错误示例2.2 通过场景对象类型的字符串创建某个类型的场景对象，并指定场景对象ID为空字符串''。当''里面没有内容时，会自动创建ID
     * const sceneObject = projectManager.createSceneObject('CzmModelPrimitive', '');
     * sceneObject.position = [116.39, 39.9, 100];
     *  //场景对象飞入
     * sceneObject.flyTo();
     * //错误示例2.3 通过场景对象类型的字符串创建某个类型的场景对象，并指定场景对象ID为空字符串''。当''里面有空格时，会提示“场景对象的ID不能是空字符串！”，此时创建的场景对象ID为空
     * const sceneObject = projectManager.createSceneObject('CzmModelPrimitive', ' ');
     * sceneObject.position = [116.39, 39.9, 100];
     * //场景对象飞入
     * sceneObject.flyTo();
     * //错误示例2.4 通过场景对象类型的字符串创建某个类型的场景对象，并指定场景对象ID为null,此时会自动创建ID
     * const sceneObject = projectManager.createSceneObject('CzmModelPrimitive',null);
     * sceneObject.position = [116.39, 39.9, 100];
     * //场景对象飞入
     * sceneObject.flyTo();
     */
    createSceneObject<T extends SceneObject = SceneObject>(sceneObjectType: string | (new (id?: string | undefined) => T), id?: string): T | undefined;
    /**
     * 通过Class创建一个场景对象，注意不会在场景结构树上体现
     * @param sceneObjConstructor 需要创建的场景对象类
     * @param id 指定场景对象的id，如果不指定或者为undefined时，则会内部自动生成
     * @returns 返回一个场景对象，如果失败返回undefined
     * @example
     * // 示例1 通过场景对象类创建某个类型的场景对象
     * import { CzmModelPrimitive } from 'xbsj-xe2/dist-node/xe2-cesium-objects';
     * const sceneObject = projectManager.createSceneObject(CzmModelPrimitive);
     * sceneObject.position = [116.39, 39.9, 100];
     * //场景对象飞入
     * sceneObject.flyTo();
     *
     * // 示例2 通过场景对象类创建某个类型的场景对象，并指定场景对象的ID
     * import { CzmModelPrimitive } from 'xbsj-xe2/dist-node/xe2-cesium-objects';
     * const sceneObject = projectManager.createSceneObject(CzmModelPrimitive, 'abc123');
     * sceneObject.position = [116.39, 39.9, 100];
     * //场景对象飞入
     * sceneObject.flyTo();
     * //示例2.1通过场景对象类创建某个类型的场景对象，并指定场景对象的ID为undefined,此时会自动创建ID
     * import { CzmModelPrimitive } from 'xbsj-xe2/dist-node/xe2-cesium-objects';
     * const sceneObject = projectManager.createSceneObject(CzmModelPrimitive, undefined);
     * sceneObject.position = [116.39, 39.9, 100];
     * //场景对象飞入
     * sceneObject.flyTo();
     * //错误示例2.2通过场景对象类创建某个类型的场景对象，并指定场景对象的ID为空字符串''。当''里面没有内容时，会自动创建ID
     * import { CzmModelPrimitive } from 'xbsj-xe2/dist-node/xe2-cesium-objects';
     * const sceneObject = projectManager.createSceneObject(CzmModelPrimitive, '');
     * sceneObject.position = [116.39, 39.9, 100];
     * //场景对象飞入
     * sceneObject.flyTo();
     * //错误示例2.3通过场景对象类创建某个类型的场景对象，并指定场景对象的ID为空字符串''。当''里面有空格时，会提示“场景对象的ID不能是空字符串！”，此时创建的场景对象ID为空
     * import { CzmModelPrimitive } from 'xbsj-xe2/dist-node/xe2-cesium-objects';
     * const sceneObject = projectManager.createSceneObject(CzmModelPrimitive, ' ');
     * sceneObject.position = [116.39, 39.9, 100];
     * //场景对象飞入
     * sceneObject.flyTo();
     * //错误示例2.4通过场景对象类创建某个类型的场景对象，并指定场景对象的ID为null,此时会自动创建ID
     * import { CzmModelPrimitive } from 'xbsj-xe2/dist-node/xe2-cesium-objects';
     * const sceneObject = projectManager.createSceneObject(CzmModelPrimitive, null);
     * sceneObject.position = [116.39, 39.9, 100];
     * //场景对象飞入
     * sceneObject.flyTo();
     */
    createSceneObjectFromClass<T extends SceneObject>(sceneObjConstructor: new (id?: string | undefined) => T, id?: string): T | undefined;
    /**
     * 通过Json创建一个场景对象，注意不会在场景结构树上体现
     * @param sceneObjectJson 需要创建的场景对象的JSON
     * @returns 返回一个场景对象，如果失败返回undefined
     * @example
     * // 示例1 通过场景对象的JSON配置创建某个类型的场景对象
     * const sceneObject = g_projectManager.createSceneObjectFromJson({
     *     type: 'CzmModelPrimitive',
     *     position: [116.39, 39.9, 100],
     * });
     * //场景对象飞入
     * sceneObject.flyTo();
     *
     * // 示例2 通过场景对象的JSON配置创建某个类型的场景对象，并指定场景对象的ID
     * import { CzmModelPrimitive } from 'xbsj-xe2/dist-node/xe2-cesium-objects';
     * const sceneObject = g_projectManager.createSceneObjectFromJson({
     *     type: 'CzmModelPrimitive',
     *     position: [116.39, 39.9, 100],
     *     id: 'abc123',
     * });
     * //场景对象飞入
     * sceneObject.flyTo();
     * // 示例2.1 通过场景对象的JSON配置创建某个类型的场景对象，并指定场景对象的ID为undefined,此时会自动创建ID
     * import { CzmModelPrimitive } from 'xbsj-xe2/dist-node/xe2-cesium-objects';
     * const sceneObject = g_projectManager.createSceneObjectFromJson({
     *     type: 'CzmModelPrimitive',
     *     position: [116.39, 39.9, 100],
     *     id: undefined,
     * });
     * //场景对象飞入
     * sceneObject.flyTo();
     * //错误示例2.2 通过场景对象的JSON配置创建某个类型的场景对象，并指定场景对象的ID为空字符串''。当''里面没有内容时，会自动创建ID
     * import { CzmModelPrimitive } from 'xbsj-xe2/dist-node/xe2-cesium-objects';
     * const sceneObject = g_projectManager.createSceneObjectFromJson({
     *     type: 'CzmModelPrimitive',
     *     position: [116.39, 39.9, 100],
     *     id: '',
     * });
     * //场景对象飞入
     * sceneObject.flyTo();
     * //错误示例2.3 通过场景对象的JSON配置创建某个类型的场景对象，并指定场景对象的ID为空字符串''。当''里面有空格时，会提示“场景对象的ID不能是空字符串！”，此时创建的场景对象ID为空
     * import { CzmModelPrimitive } from 'xbsj-xe2/dist-node/xe2-cesium-objects';
     * const sceneObject = g_projectManager.createSceneObjectFromJson({
     *     type: 'CzmModelPrimitive',
     *     position: [116.39, 39.9, 100],
     *     id: ' ',
     * });
     * //场景对象飞入
     * sceneObject.flyTo();
     * //错误示例2.4 通过场景对象的JSON配置创建某个类型的场景对象，并指定场景对象的ID为null,此时会自动创建ID
     * import { CzmModelPrimitive } from 'xbsj-xe2/dist-node/xe2-cesium-objects';
     * const sceneObject = g_projectManager.createSceneObjectFromJson({
     *     type: 'CzmModelPrimitive',
     *     position: [116.39, 39.9, 100],
     *     id: null,
     * });
     * //场景对象飞入
     * sceneObject.flyTo();
     */
    createSceneObjectFromJson<T extends SceneObject>(sceneObjectJson: JsonValue & {
        [k: string]: any;
        type: string;
    }): T | undefined;
    /**
     * 销毁场景对象
     * @param sceneObject
     */
    destroySceneObject(sceneObject: SceneObject): void;
    /**
     * 销毁所有创建的场景对象，
     * 注意通过createSceneObjectTreeItemXXX创建的场景节点不会销毁！
     * 它们需要通过destroySceneObjectTreeItem/destroyAllSceneObjectTreeItems来销毁
     *
     */
    destroyAllSceneObjects(): void;
    /**
     * 创建树结构上的场景对象节点
     * @param sceneObjectType 需要创建的场景对象类型的字符串，或者是场景对象的类名
     * @param id 指定场景对象的id，如果不指定或者为undefined时，则会内部自动生成，注意不是场景树节点的id！是场景对象的id！
     * @param currentTreeItem 当前节点，当前常见的节点挂接到哪个节点上
     * @param flag 插入标记：'InnerOrBefore' | 'InnerOrAfter' | 'Inner' | 'Before' | 'After'
     * 分别表示在当前节点的内部或者之前、内部或者之后、内部、之前、之后创建新节点，注意当flag为Inner且当前节点非组节点时会创建失败返回undefined！
     * @returns 返回创建的树节点，如果创建失败则会返回undefined
     * @example
     * // 示例1 通过场景对象类型的字符串创建某个类型的场景对象节点
     * const sceneObjTreeItem = projectManager.createSceneObjectTreeItem('CzmModelPrimitive');
     * sceneObjTreeItem.sceneObject.position = [116.39, 39.9, 100];
     * //场景对象飞入
     * sceneObjTreeItem.sceneObject.flyTo();
     *
     * // 示例2 通过场景对象的类来创建某个类型的场景对象节点
     * import { CzmModelPrimitive } from 'xbsj-xe2/dist-node/xe2-cesium-objects';
     * const sceneObjTreeItem = projectManager.createSceneObjectTreeItem(CzmModelPrimitive);
     * sceneObjTreeItem.sceneObject.position = [116.39, 39.9, 100];
     * //场景对象飞入
     * sceneObjTreeItem.sceneObject.flyTo();
     *
     * // 示例3 创建某个类型的场景对象节点，并手动指定id
     * const sceneObjTreeItem = projectManager.createSceneObjectTreeItem('CzmModelPrimitive', 'obj123');
     * sceneObjTreeItem.sceneObject.position = [116.39, 39.9, 100];
     * //场景对象飞入
     * sceneObjTreeItem.sceneObject.flyTo();
     * //示例3.1 创建某个类型的场景对象节点，并手动指定id为undefined,此时会自动创建ID
     * const sceneObjTreeItem = projectManager.createSceneObjectTreeItem('CzmModelPrimitive', undefined);
     * sceneObjTreeItem.sceneObject.position = [116.39, 39.9, 100];
     * //场景对象飞入
     * sceneObjTreeItem.sceneObject.flyTo();
     * //错误示例3.2 创建某个类型的场景对象节点，并手动指定id为'',当''里面没有内容时，会自动创建ID
     * const sceneObjTreeItem = projectManager.createSceneObjectTreeItem('CzmModelPrimitive', '');
     * sceneObjTreeItem.sceneObject.position = [116.39, 39.9, 100];
     * //场景对象飞入
     * sceneObjTreeItem.sceneObject.flyTo();
     * //错误示例3.3 创建某个类型的场景对象节点，并手动指定id为'',当''里面有空格时，会提示“场景对象的ID不能是空字符串！”，此时创建的场景对象ID为空
     * const sceneObjTreeItem = projectManager.createSceneObjectTreeItem('CzmModelPrimitive', ' ');
     * sceneObjTreeItem.sceneObject.position = [116.39, 39.9, 100];
     * //场景对象飞入
     * sceneObjTreeItem.sceneObject.flyTo();
     * //错误示例3.4 创建某个类型的场景对象节点，并手动指定id为null,此时会自动创建ID
     * const sceneObjTreeItem = projectManager.createSceneObjectTreeItem('CzmModelPrimitive', null);
     * sceneObjTreeItem.sceneObject.position = [116.39, 39.9, 100];
     * //场景对象飞入
     * sceneObjTreeItem.sceneObject.flyTo();
     *
     * // 示例4 创建某个类型的场景对象节点，假如当前节点是组节点的话，则在其内部创建，否则在之后创建新的节点
     * const currentTreeItem = projectManager.sceneTree.root;
     * const sceneObjTreeItem = projectManager.createSceneObjectTreeItem('CzmModelPrimitive', 'obj123', currentTreeItem);
     * sceneObjTreeItem.sceneObject.position = [116.39, 39.9, 100];
     * //场景对象飞入
     * sceneObjTreeItem.sceneObject.flyTo();
     *
     * // 示例5 创建某个类型的场景对象节点，假如当前节点是组节点的话，则在其内部创建，否则在之前创建新的节点
     * const sceneObjTreeItem = projectManager.createSceneObjectTreeItem('CzmModelPrimitive', 'obj123', currentTreeItem, 'InnerOrBefore');
     * sceneObjTreeItem.sceneObject.position = [116.39, 39.9, 100];
     * //场景对象飞入
     * sceneObjTreeItem.sceneObject.flyTo();
     *
     * // 示例6 创建某个类型的场景对象节点，假如当前节点是组节点的话，则在其内部创建，否则在之后创建新的节点
     * const sceneObjTreeItem = projectManager.createSceneObjectTreeItem('CzmModelPrimitive', 'obj123', currentTreeItem, 'InnerOrAfter');
     * sceneObjTreeItem.sceneObject.position = [116.39, 39.9, 100];
     * //场景对象飞入
     * sceneObjTreeItem.sceneObject.flyTo();
     *
     * // 示例7 创建某个类型的场景对象节点，在当前节点内部创建
     * const sceneObjTreeItem = projectManager.createSceneObjectTreeItem('CzmModelPrimitive', 'obj123', currentTreeItem, 'Inner');
     * sceneObjTreeItem.sceneObject.position = [116.39, 39.9, 100];
     * //场景对象飞入
     * sceneObjTreeItem.sceneObject.flyTo();
     *
     * // 示例8 创建某个类型的场景对象节点，在当前节点之前创建
     * const sceneObjTreeItem = projectManager.createSceneObjectTreeItem('CzmModelPrimitive', 'obj123', currentTreeItem, 'Before');
     * sceneObjTreeItem.sceneObject.position = [116.39, 39.9, 100];
     * //场景对象飞入
     * sceneObjTreeItem.sceneObject.flyTo();
     *
     * // 示例9 创建某个类型的场景对象节点，在当前节点之前创建
     * const sceneObjTreeItem = projectManager.createSceneObjectTreeItem('CzmModelPrimitive', 'obj123', currentTreeItem, 'After');
     * sceneObjTreeItem.sceneObject.position = [116.39, 39.9, 100];
     * //场景对象飞入
     * sceneObjTreeItem.sceneObject.flyTo();
     */
    createSceneObjectTreeItem<T extends SceneObject>(sceneObjectType: string | (new (id?: string | undefined) => T), id?: string, currentTreeItem?: SceneTreeItem, flag?: TreeItemInsertFlag): SceneTreeItem | undefined;
    /**
     * 创建一个组节点
     * @param name 组节点的名称
     * @param id 暂时保留，没有使用！
     * @param currentTreeItem 当前的树节点
     * @param flag 插入方式
     * @returns 返回一个组节点对象(SceneTreeItem)
     */
    createGroupTreeItem(name?: string, id?: string, currentTreeItem?: SceneTreeItem, flag?: TreeItemInsertFlag): SceneTreeItem | undefined;
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
     * import { CzmModelPrimitive } from 'xbsj-xe2/dist-node/xe2-cesium-objects';
     * const sceneObjTreeItem = projectManager.createSceneObjectTreeItemFromClass(CzmModelPrimitive);
     * sceneObjTreeItem.sceneObject.position = [116.39, 39.9, 100];
     * //场景对象飞入
     * sceneObjTreeItem.sceneObject.flyTo();
     *
     * // 示例2 创建某个类型的场景对象节点，并手动指定id
     * import { CzmModelPrimitive } from 'xbsj-xe2/dist-node/xe2-cesium-objects';
     * const sceneObjTreeItem = projectManager.createSceneObjectTreeItemFromClass(CzmModelPrimitive, 'obj123');
     * sceneObjTreeItem.sceneObject.position = [116.39, 39.9, 100];
     * //场景对象飞入
     * sceneObjTreeItem.sceneObject.flyTo();
     * // 示例2.1 创建某个类型的场景对象节点，并手动指定id为undefined，内部ID自动生成
     * import { CzmModelPrimitive } from 'xbsj-xe2/dist-node/xe2-cesium-objects';
     * const sceneObjTreeItem = projectManager.createSceneObjectTreeItemFromClass(CzmModelPrimitive, 'obj123');
     * sceneObjTreeItem.sceneObject.position = [116.39, 39.9, 100];
     * //场景对象飞入
     * sceneObjTreeItem.sceneObject.flyTo();
     * // 错误示例2.2 创建某个类型的场景对象节点，并手动指定id为'',当''里面没有内容时内部会自动创建ID
     * import { CzmModelPrimitive } from 'xbsj-xe2/dist-node/xe2-cesium-objects';
     * const sceneObjTreeItem = projectManager.createSceneObjectTreeItemFromClass(CzmModelPrimitive, '');
     * sceneObjTreeItem.sceneObject.position = [116.39, 39.9, 100];
     * //场景对象飞入
     * sceneObjTreeItem.sceneObject.flyTo();
     * 错误示例2.3 创建某个类型的场景对象节点，并手动指定id为'',当''里面有空格时，会提示“场景对象的ID不能是空字符串！”，此时创建的场景对象ID为空
     * import { CzmModelPrimitive } from 'xbsj-xe2/dist-node/xe2-cesium-objects';
     * const sceneObjTreeItem = projectManager.createSceneObjectTreeItemFromClass(CzmModelPrimitive, ' ');
     * sceneObjTreeItem.sceneObject.position = [116.39, 39.9, 100];
     * //场景对象飞入
     * sceneObjTreeItem.sceneObject.flyTo();
     * 错误示例2.4 创建某个类型的场景对象节点，并手动指定id为null,此时内部会自动创建ID
     * import { CzmModelPrimitive } from 'xbsj-xe2/dist-node/xe2-cesium-objects';
     * const sceneObjTreeItem = projectManager.createSceneObjectTreeItemFromClass(CzmModelPrimitive,null);
     * sceneObjTreeItem.sceneObject.position = [116.39, 39.9, 100];
     * //场景对象飞入
     * sceneObjTreeItem.sceneObject.flyTo();
     * // 示例3 创建某个类型的场景对象节点，假如当前节点是组节点的话，则在其内部创建，否则在之后创建新的节点
     * import { CzmModelPrimitive } from 'xbsj-xe2/dist-node/xe2-cesium-objects';
     * const currentTreeItem = projectManager.sceneTree.root;
     * const sceneObjTreeItem = projectManager.createSceneObjectTreeItemFromClass(CzmModelPrimitive, 'obj123', currentTreeItem);
     * sceneObjTreeItem.sceneObject.position = [116.39, 39.9, 100];
     * //场景对象飞入
     * sceneObjTreeItem.sceneObject.flyTo();
     *
     * // 示例4 创建某个类型的场景对象节点，假如当前节点是组节点的话，则在其内部创建，否则在之前创建新的节点
     * import { CzmModelPrimitive } from 'xbsj-xe2/dist-node/xe2-cesium-objects';
     * const sceneObjTreeItem = projectManager.createSceneObjectTreeItemFromClass(CzmModelPrimitive, 'obj123', currentTreeItem, 'InnerOrBefore');
     * sceneObjTreeItem.sceneObject.position = [116.39, 39.9, 100];
     * //场景对象飞入
     * sceneObjTreeItem.sceneObject.flyTo();
     *
     * // 示例5 创建某个类型的场景对象节点，假如当前节点是组节点的话，则在其内部创建，否则在之后创建新的节点
     * import { CzmModelPrimitive } from 'xbsj-xe2/dist-node/xe2-cesium-objects';
     * const sceneObjTreeItem = projectManager.createSceneObjectTreeItemFromClass(CzmModelPrimitive, 'obj123', currentTreeItem, 'InnerOrAfter');
     * sceneObjTreeItem.sceneObject.position = [116.39, 39.9, 100];
     * //场景对象飞入
     * sceneObjTreeItem.sceneObject.flyTo();
     *
     * // 示例6 创建某个类型的场景对象节点，在当前节点内部创建
     * import { CzmModelPrimitive } from 'xbsj-xe2/dist-node/xe2-cesium-objects';
     * const sceneObjTreeItem = projectManager.createSceneObjectTreeItemFromClass(CzmModelPrimitive, 'obj123', currentTreeItem, 'Inner');
     * sceneObjTreeItem.sceneObject.position = [116.39, 39.9, 100];
     * //场景对象飞入
     * sceneObjTreeItem.sceneObject.flyTo();
     *
     * // 示例7 创建某个类型的场景对象节点，在当前节点之前创建
     * import { CzmModelPrimitive } from 'xbsj-xe2/dist-node/xe2-cesium-objects';
     * const sceneObjTreeItem = projectManager.createSceneObjectTreeItemFromClass(CzmModelPrimitive, 'obj123', currentTreeItem, 'Before');
     * sceneObjTreeItem.sceneObject.position = [116.39, 39.9, 100];
     * //场景对象飞入
     * sceneObjTreeItem.sceneObject.flyTo();
     *
     * // 示例8 创建某个类型的场景对象节点，在当前节点之后创建
     * import { CzmModelPrimitive } from 'xbsj-xe2/dist-node/xe2-cesium-objects';
     * const sceneObjTreeItem = projectManager.createSceneObjectTreeItemFromClass(CzmModelPrimitive, 'obj123', currentTreeItem, 'After');
     * sceneObjTreeItem.sceneObject.position = [116.39, 39.9, 100];
     * //场景对象飞入
     * sceneObjTreeItem.sceneObject.flyTo();
     *
     */
    createSceneObjectTreeItemFromClass<T extends SceneObject>(sceneObjConstructor: new (id?: string | undefined) => T, id?: string, currentTreeItem?: SceneTreeItem, flag?: TreeItemInsertFlag): SceneTreeItem | undefined;
    /**
     * 通过Json来创建树结构上的场景对象节点
     * @param sceneObjectJson 需要创建的场景对象的JSON
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
     * //场景对象飞入
     * sceneObjTreeItem.sceneObject.flyTo();
     *
     * // 示例2 创建某个类型的场景对象节点，并手动指定id
     * const sceneObjTreeItem = g_projectManager.createSceneObjectTreeItemFromJson({
     *     type: 'CzmModelPrimitive',
     *     id: 'abc123',
     *     position: [116.39, 39.9, 100],
     * })
     * //场景对象飞入
     * sceneObjTreeItem.sceneObject.flyTo();
     * // 示例2.1 创建某个类型的场景对象节点，并手动指定id为undefined,内部ID自动生成
     *  const sceneObjTreeItem = g_projectManager.createSceneObjectTreeItemFromJson({
     *     type: 'CzmModelPrimitive',
     *     id: undefined,
     *     position: [116.39, 39.9, 100],
     * })
     * //场景对象飞入
     * sceneObjTreeItem.sceneObject.flyTo();
     *  // 错误示例2.2 创建某个类型的场景对象节点，并手动指定id为'',当''里面没有内容时内部会自动创建ID
     *  const sceneObjTreeItem = g_projectManager.createSceneObjectTreeItemFromJson({
     *     type: 'CzmModelPrimitive',
     *     id: '',
     *     position: [116.39, 39.9, 100],
     * })
     * //场景对象飞入
     * sceneObjTreeItem.sceneObject.flyTo();
     *  // 错误示例2.3 创建某个类型的场景对象节点，并手动指定id为'',当''里面有空格时，会提示“场景对象的ID不能是空字符串！”，此时创建的场景对象ID为空
     *  const sceneObjTreeItem = g_projectManager.createSceneObjectTreeItemFromJson({
     *     type: 'CzmModelPrimitive',
     *     id: ' ',
     *     position: [116.39, 39.9, 100],
     * })
     * //场景对象飞入
     * sceneObjTreeItem.sceneObject.flyTo();
     * // 错误示例2.4 创建某个类型的场景对象节点，并手动指定id为null,此时内部会自动创建ID
     *  const sceneObjTreeItem = g_projectManager.createSceneObjectTreeItemFromJson({
     *     type: 'CzmModelPrimitive',
     *     id: null,
     *     position: [116.39, 39.9, 100],
     * })
     * //场景对象飞入
     * sceneObjTreeItem.sceneObject.flyTo();
     *
     * // 示例3 创建某个类型的场景对象节点，假如当前节点是组节点的话，则在其内部创建，否则在之后创建新的节点
     * const currentTreeItem = projectManager.sceneTree.root;
     * const sceneObjTreeItem = g_projectManager.createSceneObjectTreeItemFromJson({
     *     type: 'CzmModelPrimitive',
     *     id: 'abc123',
     *     position: [116.39, 39.9, 100],
     * }, currentTreeItem);
     * //场景对象飞入
     * sceneObjTreeItem.sceneObject.flyTo();
     *
     * // 示例4 创建某个类型的场景对象节点，假如当前节点是组节点的话，则在其内部创建，否则在之前创建新的节点
     * const currentTreeItem = projectManager.sceneTree.root;
     * const sceneObjTreeItem = g_projectManager.createSceneObjectTreeItemFromJson({
     *     type: 'CzmModelPrimitive',
     *     id: 'abc123',
     *     position: [116.39, 39.9, 100],
     * }, currentTreeItem, 'InnerOrBefore');
     * //场景对象飞入
     * sceneObjTreeItem.sceneObject.flyTo();
     *
     * //示例5 创建某个类型的场景对象节点，假如当前节点是组节点的话，则在其内部创建，否则在之后创建新的节点
     * const currentTreeItem = projectManager.sceneTree.root;
     * const sceneObjTreeItem = g_projectManager.createSceneObjectTreeItemFromJson({
     *     type: 'CzmModelPrimitive',
     *     id: 'abc123',
     *     position: [116.39, 39.9, 100],
     * }, currentTreeItem, 'InnerOrAfter');
     * //场景对象飞入
     * sceneObjTreeItem.sceneObject.flyTo();
     *
     * //示例6 创建某个类型的场景对象节点，在当前节点内部创建
     * const currentTreeItem = projectManager.sceneTree.root;
     * const sceneObjTreeItem = g_projectManager.createSceneObjectTreeItemFromJson({
     *     type: 'CzmModelPrimitive',
     *     id: 'abc123',
     *     position: [116.39, 39.9, 100],
     * }, currentTreeItem, 'Inner');
     * //场景对象飞入
     * sceneObjTreeItem.sceneObject.flyTo();
     *
     * //示例7 创建某个类型的场景对象节点，在当前节点之前创建
     * const currentTreeItem = projectManager.sceneTree.root;
     * const sceneObjTreeItem = g_projectManager.createSceneObjectTreeItemFromJson({
     *     type: 'CzmModelPrimitive',
     *     id: 'abc123',
     *     position: [116.39, 39.9, 100],
     * }, currentTreeItem, 'Before');
     * //场景对象飞入
     * sceneObjTreeItem.sceneObject.flyTo();
     *
     * //示例8 创建某个类型的场景对象节点，在当前节点之前创建
     * const currentTreeItem = projectManager.sceneTree.root;
     * const sceneObjTreeItem = g_projectManager.createSceneObjectTreeItemFromJson({
     *     type: 'CzmModelPrimitive',
     *     id: 'abc123',
     *     position: [116.39, 39.9, 100],
     * }, currentTreeItem, 'After');
     * //场景对象飞入
     * sceneObjTreeItem.sceneObject.flyTo();
     */
    createSceneObjectTreeItemFromJson<T extends SceneObject>(sceneObjectJson: JsonValue & {
        [k: string]: any;
        type: string;
    }, currentTreeItem?: SceneTreeItem, flag?: TreeItemInsertFlag): SceneTreeItem | undefined;
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
    /**
     * 根据场景对象或者对应的树上的场景对象节点，如果该场景对象未挂接在节点上，则会返回undefined!
     * @param sceneObject 场景对象
     * @returns 返回场景节点，有可能为undefined
     */
    getTreeItemFromSceneObject(sceneObject: SceneObject): SceneTreeItem | undefined;
    /**
     * 根据id获取场景对象
     * @param id
     * @returns
     */
    getSceneObjectById(id: string): SceneObject | undefined;
    selectSingleTreeItemWithSceneObject(sceneObject: SceneObject | undefined): void;
}
export declare namespace ProjectManager {
    const createDefaultProps: () => {
        currentPlayer: Player | undefined;
        showPlayerView: boolean;
        currentViewCollection: ViewCollection | undefined;
        currenESCameraViewCollection: ESSceneObject | undefined;
        showESViewCollectionVue3UI: boolean;
        showViewCollectionView: boolean;
        currentESPlayer: ESSceneObject | undefined;
        showESPlayerVue3UI: boolean;
        editingOnPicking: boolean;
        allowPickingOnCreating: boolean;
    };
}
export interface ProjectManager extends ReactivePropsToNativePropsAndChanged<ReturnType<typeof ProjectManager.createDefaultProps>> {
}

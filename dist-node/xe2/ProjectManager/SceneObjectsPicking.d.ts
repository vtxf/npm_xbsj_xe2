import { ObjResettingWithEvent, PickedInfo, SceneObjectPickedInfo, Viewer, ViewersPicking, ViewersPickingPointerEventFuncType } from "xbsj-xe2/dist-node/xe2-base-objects";
import { Destroyable, Event } from "xbsj-xe2/dist-node/xe2-base-utils";
import { ProjectManager } from "./index";
declare class ViewersPickingResetting extends Destroyable {
    private _sceneObjectsPicking;
    private _viewersPicking;
    get viewersPicking(): ViewersPicking;
    constructor(_sceneObjectsPicking: SceneObjectsPicking);
}
/**
 * SceneObjectsPicking用来捕获拾取操作发生时，哪个场景对象被拾取了，没有拾取到场景对象也会触发事件
 * 而没有场景对象自身的picked事件，只能监测自身是否被拾取到。
 */
export declare class SceneObjectsPicking extends Destroyable {
    private _projectManager;
    static pickedFuncs: {
        edit(sceneObjectPickedInfo: SceneObjectPickedInfo | undefined, pickedInfo: PickedInfo | undefined, viewer: Viewer, projectManager: ProjectManager): void;
        info(sceneObjectPickedInfo: SceneObjectPickedInfo | undefined, pickedInfo: PickedInfo | undefined, viewer: Viewer): void;
    };
    /**
     * 用来设置场景对象拾取后的操作
     * @example
     *
     * // 示例1
     * var projectManager = g_appProjectManager.xe2ProjectManager
     * projectManager.sceneObjectsPicking.pickedFunc = (sceneObjectPickedInfo, pickedInfo, viewer) => {
     *     // 参数解释
     *     // sceneObjectPickedInfo 如果有值，表示有场景对象拾取到，如果是undefined，表示没有拾取到场景对象，可以通过undefined获悉当前没有拾取到场景对象。
     *     // pickedInfo 各引擎原始的拾取信息
     *     // viewer 当前拾取操作的视口，如果有多个视口，那么就是点击操作发生的视口，这个视口有可能是CzmViewer，也有可能是UeViewer，或者别的。
     *
     *     const sceneObject = sceneObjectPickedInfo && sceneObjectPickedInfo.sceneObject;
     *     const str = sceneObject ? `拾取到的场景对象的名称是：${sceneObject.name }` : `没有拾取到场景对象！`;
     *     alert(str);
     * }
     *
     * // 示例2 也可以手动设置成info
     * var projectManager = g_appProjectManager.xe2ProjectManager
     * projectManager.sceneObjectsPicking.pickedFunc = projectManager.sceneObjectsPicking.constructor.pickedFuncs.info;
     * projectManager.sceneObjectsPicking.pickedFunc = XE2['xe2'].SceneObjectsPicking.pickedFuncs.info;
     *
     * // 示例3，也可以和已有的函数结合使用
     * var projectManager = g_appProjectManager.xe2ProjectManager
     * const { edit, info } = XE2['xe2'].SceneObjectsPicking.pickedFuncs;
     * projectManager.sceneObjectsPicking.pickedFunc = (sceneObjectPickedInfo, pickedInfo, viewer) => {
     *      edit(sceneObjectPickedInfo, pickedInfo, viewer, projectManager);
     *      info(sceneObjectPickedInfo, pickedInfo, viewer);
     * }
     *
     * // 示例4, 编辑操作
     * var projectManager = g_appProjectManager.xe2ProjectManager
     * projectManager.sceneObjectsPicking.pickedFunc = (sceneObjectPickedInfo, pickedInfo, viewer) => {
     *     if (!projectManager.editingOnPicking)
     *         return;
     *     var sceneObject = sceneObjectPickedInfo && sceneObjectPickedInfo.sceneObject;
     *     var sceneObjectEditingManager = projectManager.sceneObjectEditingManager;
     *     if (sceneObjectEditingManager.currentActiveEditing) {
     *         return;
     *     }
     *     if (sceneObject) {
     *         if (Reflect.has(sceneObject, 'editing')) {
     *             sceneObject.editing = true;
     *         }
     *         else if (Reflect.has(sceneObject, 'positionEditing')) {
     *             sceneObject.positionEditing = true;
     *         }
     *     }
     *     projectManager.selectSingleTreeItemWithSceneObject(sceneObject);
     * }
     */
    pickedFunc: (sceneObjectPickedInfo: SceneObjectPickedInfo | undefined, pickedInfo: PickedInfo | undefined, viewer: Viewer) => void;
    private _pickedEvent;
    /**
     * 拾取事件
     * @example
     * var projectManager = g_appProjectManager.xe2ProjectManager
     * var d = projectManager.sceneObjectsPicking.pickedEvent.disposableOn(sceneObjectPickedInfo => console.log(sceneObjectPickedInfo))
     */
    get pickedEvent(): Event<[sceneObjectPickedInfo: SceneObjectPickedInfo | undefined, pickedInfo: PickedInfo | undefined, viewer: Viewer]>;
    private _pointerEventFuncs;
    set pointerEventFuncs(value: ViewersPickingPointerEventFuncType[]);
    get pointerEventFuncs(): ViewersPickingPointerEventFuncType[];
    get pointerEventFuncsChanged(): import("xbsj-xe2/dist-node/xe2-base-utils").Listener<[ViewersPickingPointerEventFuncType[], ViewersPickingPointerEventFuncType[]]>;
    private _viewersPickingResetting;
    get viewersPickingResetting(): ObjResettingWithEvent<ViewersPickingResetting, import("xbsj-xe2/dist-node/xe2-base-utils").Listener<[ViewersPickingPointerEventFuncType[], ViewersPickingPointerEventFuncType[]]>>;
    get projectManager(): ProjectManager;
    constructor(_projectManager: ProjectManager);
}
export {};

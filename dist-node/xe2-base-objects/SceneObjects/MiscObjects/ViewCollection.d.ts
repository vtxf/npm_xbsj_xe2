import { ObservableArray, PartialWithUndefinedReactivePropsToNativeProps, ReactivePropsToNativePropsAndChanged } from "xbsj-xe2/dist-node/xe2-base-utils";
import { SceneObjectKey } from "xbsj-xe2/dist-node/xe2-utils";
import { ESSceneObject } from "../ESSceneObject";
import { ViewInfo, ViewWrapper } from "./ViewWrapper";
export declare class ViewCollection extends ESSceneObject {
    static readonly type: string;
    get typeName(): string;
    get defaultProps(): {
        execOnceFuncStr: string | undefined;
        updateFuncStr: string | undefined;
        toDestroyFuncStr: string | undefined;
        name: string;
        ref: string | undefined;
        devTags: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<string[] | undefined>;
        extras: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<import("xbsj-xe2/dist-node/xe2-base-utils").JsonValue>;
        playing: boolean | undefined;
        loop: boolean | undefined;
        intervalTime: number | undefined;
        show: boolean | undefined;
        showUI: boolean | undefined;
        cssText: string | undefined;
        showHelper: boolean | undefined;
        containerId: string | undefined;
    };
    get json(): JsonType;
    set json(value: JsonType);
    private _currentViewIndex;
    get currentViewIndex(): number;
    get currentViewIndexChanged(): import("xbsj-xe2/dist-node/xe2-base-utils").Listener<[number, number]>;
    private _viewWrappers;
    private _currentViewWrapper;
    emitViewsWarpper(): void;
    private _container;
    get container(): HTMLDivElement | undefined;
    get containerChanged(): import("xbsj-xe2/dist-node/xe2-base-utils").Listener<[HTMLDivElement | undefined, HTMLDivElement | undefined]>;
    set container(value: HTMLDivElement | undefined);
    get views(): ViewInfo[];
    get viewsChanged(): import("xbsj-xe2/dist-node/xe2-base-utils").Event<[target: ObservableArray<ViewWrapper>]>;
    set views(value: ViewInfo[]);
    /**
    * 获取当前视角的index
    * @param viewWrapper 当前选中的视角
    * @returns 选中视角的index
    */
    private _getIndex;
    /**
     * 添加视角
     */
    appendView(): void;
    /**
    * 插入视角
    * @param index 当前视角的index
    * @returns
    */
    insertView(index: number): void;
    /**
   * 设置当前视角
   * @param index 当前视角的index
   * @returns
   */
    setCurrentView(index: number): boolean;
    /**
  * 重置视角
  * @param index 当前视角的index
  * @returns
  */
    resetView(index: number): void;
    /**
 * 飞入指定视角
 * @param index
 */
    flyToView(index: number): void;
    /**
     * 上一个视角
     * @returns
     */
    flyToPrevView(): boolean;
    /**
  * 下一个视角
  * @returns
  */
    flyToNextView(): boolean;
    /**
    * 停止
    */
    stop(): void;
    /**
      * 删除指定视角
      * @param index 要删除视角的index
      * @returns
      */
    deleteView(index: number): void;
    /**
    * 删除当前视角
    * @returns
    */
    deleteCurrentView(): void;
    /**
    * 删除所有视角
    */
    clearAllViews(): void;
    /**
    * 转换图片路径
    * @param url 图片路径
    * @returns 转化以后的图片路径
    */
    transitionImageUrl(url: string): string;
    constructor(id?: SceneObjectKey);
    static defaults: {
        loop: boolean;
        playing: boolean;
        intervalTime: number;
        duration: number;
        views: never[];
        showUI: boolean;
        showHelper: boolean;
        cssText: string;
        show: boolean;
        loopClose: string;
        loopOpen: string;
        containerId: string;
        viewerTagsEnums: [string, string][];
    };
    getProperties(language?: string): import("../ESSceneObject").Property[];
}
export declare namespace ViewCollection {
    const createDefaultProps: () => {
        execOnceFuncStr: string | undefined;
        updateFuncStr: string | undefined;
        toDestroyFuncStr: string | undefined;
        name: string;
        ref: string | undefined;
        devTags: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<string[] | undefined>;
        extras: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<import("xbsj-xe2/dist-node/xe2-base-utils").JsonValue>;
        playing: boolean | undefined;
        loop: boolean | undefined;
        intervalTime: number | undefined;
        show: boolean | undefined;
        showUI: boolean | undefined;
        cssText: string | undefined;
        showHelper: boolean | undefined;
        containerId: string | undefined;
    };
}
export interface ViewCollection extends ReactivePropsToNativePropsAndChanged<ReturnType<typeof ViewCollection.createDefaultProps>> {
}
declare type JsonType = PartialWithUndefinedReactivePropsToNativeProps<ReturnType<typeof ViewCollection.createDefaultProps> & {
    type: string;
} & {
    views: ViewInfo[];
}>;
export {};

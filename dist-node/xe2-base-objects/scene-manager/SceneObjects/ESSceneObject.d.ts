import { Destroyable, Event, ReactivePropsToNativePropsAndChanged } from "xbsj-xe2/dist-node/xe2-base-utils";
import { SceneObjectKey } from "xbsj-xe2/dist-node/xe2-utils";
import { Property } from "../props";
import { Viewer } from "../Viewers";
import { SceneObject } from "./SceneObject";
export declare abstract class ESSceneObject extends SceneObject {
    private _viewerAttched;
    get viewerAttched(): Event<[Viewer]>;
    private _viewerDetached;
    get viewerDetached(): Event<[Viewer]>;
    private _viewerTagsChangedEvent;
    get viewerTagsChanged(): Event<[viewerTags: string[] | undefined, oldViewerTags: string[] | undefined]>;
    get viewerTags(): string[] | undefined;
    /**
     * 不带_ES_Viewer_前缀的，会自动增加上前缀
     * @example
     * xxx.viewerTags = ['0', '1']
     * // 相当于
     * xxx.viewerTags = ['_ES_Viewer_0', '_ES_Viewer_1']
     */
    set viewerTags(value: string[] | undefined);
    addViewerTag(...devTags: string[]): void;
    deleteViewerTag(...devTags: string[]): void;
    registerAttachedObject(createViewerPropSceneObject: (viewer: Viewer) => Destroyable | undefined): void;
    registerAttachedObjectForContainer(createContainerPropSceneObject: (viewer: Viewer, container: HTMLDivElement) => Destroyable | undefined): void;
    private _updateFuncReact;
    get updateFunc(): ((sceneObject: ESSceneObject, timeStamp: number) => void) | undefined;
    set updateFunc(value: ((sceneObject: ESSceneObject, timeStamp: number) => void) | undefined);
    get updateFuncChanged(): import("xbsj-xe2/dist-node/xe2-base-utils").Listener<[((sceneObject: ESSceneObject, timeStamp: number) => void) | undefined, ((sceneObject: ESSceneObject, timeStamp: number) => void) | undefined]>;
    private _toDestroyFuncReact;
    get toDestroyFunc(): ((sceneObject: ESSceneObject) => void) | undefined;
    set toDestroyFunc(value: ((sceneObject: ESSceneObject) => void) | undefined);
    get toDestroyFuncChanged(): import("xbsj-xe2/dist-node/xe2-base-utils").Listener<[((sceneObject: ESSceneObject) => void) | undefined, ((sceneObject: ESSceneObject) => void) | undefined]>;
    static defaults: {
        viewerTagsEnums: [string, string][];
    };
    private _flushEvent?;
    get flushEvent(): Event<[]>;
    flush(): void;
    private _ueCreatedEvent;
    get ueCreatedEvent(): Event<[]>;
    constructor(id?: SceneObjectKey);
    getProperties(language?: string): Property[];
}
export declare namespace ESSceneObject {
    const createDefaultProps: () => {
        execOnceFuncStr: string | undefined;
        updateFuncStr: string | undefined;
        toDestroyFuncStr: string | undefined;
        name: string;
        ref: string | undefined;
        devTags: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<string[] | undefined>;
        extras: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<import("xbsj-xe2/dist-node/xe2-base-utils").JsonValue>;
    };
}
export interface ESSceneObject extends ReactivePropsToNativePropsAndChanged<ReturnType<typeof ESSceneObject.createDefaultProps>> {
}

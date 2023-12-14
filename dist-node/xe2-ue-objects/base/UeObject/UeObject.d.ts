import { SceneObject } from "xbsj-xe2/dist-node/xe2-base-objects";
import { Destroyable, Event } from "xbsj-xe2/dist-node/xe2-base-utils";
import { UeViewer } from "../UeViewer";
export declare class UeObjectsContext {
    private _registerObjsMap;
    register<R extends SceneObject>(sceneObjectTypeName: string, objConstructor: new (sceneObject: R, ueViewer: UeViewer) => UeObject<R>): void;
    private _getUeObjConstructor;
    createObject<R extends SceneObject>(sceneObject: R, ueViewer: UeViewer): UeObject<R>;
}
export declare type UeObjectPropValFuncType<T = any, R = any> = (val: T, ueObj: UeObject, ueViewer: UeViewer, sceneObject: SceneObject) => R;
export declare class UeObject<SceneObjectType extends SceneObject = SceneObject> extends Destroyable {
    private _sceneObject;
    private _ueViewer;
    private static _accumId;
    private static _totalExistingCount;
    static debugging: boolean;
    static readonly context: UeObjectsContext;
    static readonly register: <R extends SceneObject>(sceneObjectTypeName: string, objConstructor: new (sceneObject: R, ueViewer: UeViewer) => UeObject<R>) => void;
    private _id;
    get id(): number;
    private _createdEvent;
    get createdEvent(): Event<[]>;
    constructor(_sceneObject: SceneObjectType, _ueViewer: UeViewer);
    get sceneObject(): SceneObjectType;
    get ueViewer(): UeViewer;
}

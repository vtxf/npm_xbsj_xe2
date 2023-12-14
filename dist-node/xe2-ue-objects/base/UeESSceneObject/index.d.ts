import { ESSceneObject } from 'xbsj-xe2/dist-node/xe2-base-objects';
import { UeObject, UeViewer, UeObjectPropValFuncType } from "..";
export declare class UeESSceneObject<T extends ESSceneObject = ESSceneObject> extends UeObject<T> {
    static propValFuncs: {
        [k: string]: UeObjectPropValFuncType | undefined | null;
    };
    static forceUeUpdateProps: string[];
    constructor(sceneObject: T, ueViewer: UeViewer);
}

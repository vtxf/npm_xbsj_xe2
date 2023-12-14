import { SceneObject } from "../SceneObject";
export declare class PickedInfo {
    childPickedInfo?: PickedInfo | undefined;
    constructor(childPickedInfo?: PickedInfo | undefined);
    static getFinalAttachedInfo(pickedInfo: PickedInfo): any;
}
export declare class AttachedPickedInfo extends PickedInfo {
    attachedInfo: any;
    constructor(attachedInfo: any, childPickedInfo?: PickedInfo);
}
export declare class DivPickedInfo extends PickedInfo {
    element: any;
    constructor(element: any, childPickedInfo?: PickedInfo);
}
export declare class CzmPickedInfo extends PickedInfo {
    czmPickResult: any;
    constructor(czmPickResult: any, childPickedInfo?: PickedInfo);
}
export declare class SceneObjectPickedInfo extends PickedInfo {
    sceneObject: SceneObject;
    constructor(sceneObject: SceneObject, childPickedInfo?: PickedInfo);
}

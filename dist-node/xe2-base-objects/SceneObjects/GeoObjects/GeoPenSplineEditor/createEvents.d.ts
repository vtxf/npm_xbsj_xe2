import { Event } from "xbsj-xe2/dist-node/xe2-base-utils";
import { ESSceneObject } from "../../ESSceneObject";
export declare function createEvents(sceneObject: ESSceneObject): {
    keyUpEvent: Event<[KeyboardEvent]>;
    keyDownEvent: Event<[KeyboardEvent]>;
    dbclickEvent: Event<[PointerEvent]>;
    clickEvent: Event<[PointerEvent]>;
};

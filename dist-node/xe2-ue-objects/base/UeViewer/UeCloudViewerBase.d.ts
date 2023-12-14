import { Destroyable } from "xbsj-xe2/dist-node/xe2-base-utils";
import { UeEventsType } from "./UeEventsType";
import { UeFuncType } from "./UeMessage";
export declare abstract class UeCloudViewerBase extends Destroyable {
    abstract callUeFunc<ResultType>(ueFunc: UeFuncType): Promise<ResultType>;
    abstract disposableOnUeEvent<EventType extends keyof UeEventsType>(type: EventType, callback: (params: UeEventsType[EventType]) => void): () => void;
}

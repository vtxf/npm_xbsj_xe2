import { UeViewer } from ".";
import { UeCloudViewerBase } from "./UeCloudViewerBase";
import { UeEventsType } from "./UeEventsType";
import { UeFuncType } from "./UeMessage";
export declare class UeFalseCloudViewer extends UeCloudViewerBase {
    private _ueViewer;
    private _ueFuncResultWithIdsEvent;
    private _ueFuncWithIdAndResultCallbacks;
    private _waitingUeFuncIdAndResultCallbacks;
    private _waitingUeCalls;
    private _ueEvent;
    constructor(container: HTMLDivElement, _ueViewer: UeViewer);
    callUeFunc<ResultType>(ueFunc: UeFuncType): Promise<ResultType>;
    disposableOnUeEvent<EventType extends keyof UeEventsType>(type: EventType, callback: (params: UeEventsType[EventType]) => void): () => void;
}

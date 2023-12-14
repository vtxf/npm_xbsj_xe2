import { Event } from "xbsj-xe2/dist-node/xe2-base-utils";
import { UeViewer } from ".";
import { ESUEViewerWrapper } from "./inner/ESUEViewerWrapper";
import { UeCloudViewerBase } from "./UeCloudViewerBase";
import { UeEventsType } from "./UeEventsType";
import { UeFuncType } from "./UeMessage";
export declare class UeCloudViewer extends UeCloudViewerBase {
    private _ueViewer;
    private _esueViewerWrapper;
    get esueViewerWrapper(): ESUEViewerWrapper;
    private _ueFuncResultWithIdsEvent;
    private _ueFuncWithIdAndResultCallbacks;
    private _waitingUeFuncIdAndResultCallbacks;
    private _waitingUeCalls;
    private _ueEvent;
    private _errorEvent;
    get errorEvent(): Event<[string]>;
    private _closeEvent;
    get closeEvent(): Event<[string]>;
    private _readyEvent;
    get readyEvent(): Event<[]>;
    constructor(container: HTMLDivElement, wsUri: string, esmsgWsUri: string | undefined, _ueViewer: UeViewer);
    callUeFunc<ResultType>(ueFunc: UeFuncType): Promise<ResultType>;
    disposableOnUeEvent<EventType extends keyof UeEventsType>(type: EventType, callback: (params: UeEventsType[EventType]) => void): () => void;
}

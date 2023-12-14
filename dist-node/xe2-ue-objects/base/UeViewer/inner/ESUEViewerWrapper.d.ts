import { Destroyable, Event as XrEvent } from "xbsj-xe2/dist-node/xe2-base-utils";
export declare class ESUEViewerWrapper extends Destroyable {
    private _container;
    private _wsuri;
    private _esmsgWsUri;
    private _instance;
    private _event;
    get event(): XrEvent<[eventName: string, eventDetailStr: string]>;
    get debug(): boolean;
    set debug(value: boolean);
    constructor(_container: HTMLDivElement, _wsuri: string, _esmsgWsUri: string | undefined);
    emitUIInteractionForBigData(params: any, callback?: (...params: any[]) => void): Promise<any[]>;
    getVideoSize(): {
        width: number;
        height: number;
    };
    resize(width: number, height: number): void;
}

export declare class ESUEViewer extends EventTarget {
    constructor(domOrDomId: HTMLDivElement, options: { url?: string, esmsgWsUri?: string | undefined });
    debug: boolean;
    emitUIInteraction(params: any, callback: (...params: any[]) => void): void;
    emitUIInteractionForBigData(params: any, callback: (...params: any[]) => void): void;
    destroy(): undefined;
    getVideoSize(): { width: number, height: number };
    resize(width: number, height: number): void;
    resizeUEVideo(x: number, y: number): void;
    destroy(): undefined;
}
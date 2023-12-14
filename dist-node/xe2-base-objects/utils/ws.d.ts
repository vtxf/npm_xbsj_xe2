/**
 * WebSocket处理类 vtxf 20230321
 */
import { Destroyable, Event, JsonValue } from "xbsj-xe2/dist-node/xe2-base-utils";
/**
 * 封装WebSocket操作，通过messageEvent获得原始数据
 */
export declare class WebSocketRaw<T> extends Destroyable {
    private _wsUrl;
    private _messageEvent;
    get messageEvent(): Event<[MessageEvent<T>]>;
    private _errorEvent;
    get errorEvent(): Event<[error: string]>;
    private _closeEvent;
    get closeEvent(): Event<[]>;
    private _ws;
    get ws(): WebSocket;
    send(data: string | ArrayBufferLike | Blob | ArrayBufferView): void;
    debug: boolean;
    constructor(_wsUrl: string);
}
export declare class WebSocketRawWithReconnection<T> extends Destroyable {
    private _wsUrl;
    private _messageEvent;
    get messageEvent(): Event<[MessageEvent<T>]>;
    private _sendEvent;
    send(data: string | ArrayBufferLike | Blob | ArrayBufferView): void;
    private _debug;
    set debug(value: boolean);
    get debug(): boolean;
    get debugChanged(): import("xbsj-xe2/dist-node/xe2-base-utils").Listener<[boolean, boolean]>;
    constructor(_wsUrl: string, reconnectBaseTime?: number, timeout?: number, intervalCheckTime?: number);
}
/**
 * 封装WebSocket操作，通过messageEvent直接获取JSON数据
 */
export declare class WebSocketJson<T extends JsonValue> extends Destroyable {
    private _wsUrl;
    private _timeout;
    private _raw;
    get debug(): boolean;
    set debug(value: boolean);
    get debugChanged(): import("xbsj-xe2/dist-node/xe2-base-utils").Listener<[boolean, boolean]>;
    private _messageJsonEvent;
    get messageJsonEvent(): Event<[T]>;
    send(data: string | ArrayBufferLike | Blob | ArrayBufferView): void;
    constructor(_wsUrl: string, _timeout?: number);
}

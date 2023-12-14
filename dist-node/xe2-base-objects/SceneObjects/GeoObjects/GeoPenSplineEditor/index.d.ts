import { Event, Listener, ObservableArray, PartialWithUndefinedReactivePropsToNativeProps, ReactivePropsToNativePropsAndChanged } from "xbsj-xe2/dist-node/xe2-base-utils";
import { ESSceneObject } from "../../ESSceneObject";
import { CursorInfo } from "../../MiscObjects";
import { PenSplineVertexJsonType } from '../GeoPenSpline';
import { GeoPenSplineEditorModeType } from "./GeoPenSplineEditorModeType";
import { PenSplineVertex } from "./PenSplineVertex";
export declare class GeoPenSplineEditor extends ESSceneObject {
    static readonly type: string;
    get typeName(): string;
    get defaultProps(): {
        execOnceFuncStr: string | undefined;
        updateFuncStr: string | undefined;
        toDestroyFuncStr: string | undefined;
        name: string;
        ref: string | undefined;
        devTags: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<string[] | undefined>;
        extras: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<import("xbsj-xe2/dist-node/xe2-base-utils").JsonValue>;
        enabled: boolean;
        arcType: string;
        polylineShow: boolean;
        maxPointsNum: number;
    };
    get json(): JsonType & {
        positions: [number, number, number][];
    };
    set json(value: JsonType & {
        positions: [number, number, number][];
    });
    private _overEvent;
    get overEvent(): Event<[]>;
    private _addEvent;
    get addEvent(): Event<[PointerEvent]>;
    private _cursorInfo;
    get cursorInfo(): CursorInfo;
    private _commandEvent;
    get commandEvent(): Event<[positionRef: PenSplineVertex, commandName: string]>;
    private _mode;
    get mode(): GeoPenSplineEditorModeType;
    get modeChanged(): Listener<[GeoPenSplineEditorModeType, GeoPenSplineEditorModeType]>;
    setMode(value: GeoPenSplineEditorModeType): void;
    private _flyToEvent;
    get flyToEvent(): Listener<[number | undefined]>;
    flyTo(duration?: number): void;
    private _nativeVertexArray;
    get nativeVertexArray(): ObservableArray<PenSplineVertex>;
    /**
     * 每次调用都会创建一个新的数组，谨慎使用，避免影响性能！
     * @returns
     */
    getPositions(): [number, number, number][];
    resetPositions(value?: [number, number, number][]): void;
    private _vertexArrayChanged;
    get vertexArrayChanged(): Event<[]>;
    get vertexArray(): PenSplineVertexJsonType[];
    private _createPenSplineVertexFunc;
    set vertexArray(value: PenSplineVertexJsonType[]);
    private _updateMenuPoisTitleRegister;
    private _editingVertexRef;
    get editingVertexRef(): import("./utils").EditingPositionRefType;
    private _geoCoordinatesEditorAndPicker;
    get geoCoordinatesEditorAndPicker(): import("..").GeoCoordinatesEditorAndPicker;
    private _innerEvents;
    get innerEvents(): {
        keyUpEvent: Event<[KeyboardEvent]>;
        keyDownEvent: Event<[KeyboardEvent]>;
        dbclickEvent: Event<[PointerEvent]>;
        clickEvent: Event<[PointerEvent]>;
    };
    constructor(id?: string);
    deleteVertex(vertex: PenSplineVertex): void;
    getProperties(language?: string): import("../../ESSceneObject").Property[];
}
export declare namespace GeoPenSplineEditor {
    const createDefaultProps: () => {
        execOnceFuncStr: string | undefined;
        updateFuncStr: string | undefined;
        toDestroyFuncStr: string | undefined;
        name: string;
        ref: string | undefined;
        devTags: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<string[] | undefined>;
        extras: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<import("xbsj-xe2/dist-node/xe2-base-utils").JsonValue>;
        enabled: boolean;
        arcType: string;
        polylineShow: boolean;
        maxPointsNum: number;
    };
}
export interface GeoPenSplineEditor extends ReactivePropsToNativePropsAndChanged<ReturnType<typeof GeoPenSplineEditor.createDefaultProps>> {
}
declare type JsonType = PartialWithUndefinedReactivePropsToNativeProps<ReturnType<typeof GeoPenSplineEditor.createDefaultProps> & {
    type: string;
}>;
export {};

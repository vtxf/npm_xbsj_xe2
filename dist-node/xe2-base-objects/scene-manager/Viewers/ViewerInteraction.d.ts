import { Destroyable, Event } from "xbsj-xe2/dist-node/xe2-base-utils";
import { PointerClick, PointerHover } from "xbsj-xe2/dist-node/xe2-utils";
export declare class ViewerInteraction extends Destroyable {
    private _useCapture;
    private _lastWindownPosition;
    set lastWindowPosition(value: [number, number]);
    get lastWindowPosition(): [number, number];
    get lastWindowPositionChanged(): import("xbsj-xe2/dist-node/xe2-base-utils").Listener<[[number, number], [number, number]]>;
    get useCapture(): boolean;
    protected _mouseMoveEvent: Event<[MouseEvent]>;
    get mouseMoveEvent(): Event<[MouseEvent]>;
    protected _pointerDownEvent: Event<[PointerEvent]>;
    get pointerDownEvent(): Event<[PointerEvent]>;
    protected _pointerUpEvent: Event<[PointerEvent]>;
    get pointerUpEvent(): Event<[PointerEvent]>;
    protected _pointerMoveEvent: Event<[PointerEvent]>;
    get pointerMoveEvent(): Event<[PointerEvent]>;
    protected _pointerOverEvent: Event<[PointerEvent]>;
    get pointerOverEvent(): Event<[PointerEvent]>;
    protected _pointerOutEvent: Event<[PointerEvent]>;
    get pointerOutEvent(): Event<[PointerEvent]>;
    protected _pointerEnterEvent: Event<[PointerEvent]>;
    get pointerEnterEvent(): Event<[PointerEvent]>;
    protected _pointerLeaveEvent: Event<[PointerEvent]>;
    get pointerLeaveEvent(): Event<[PointerEvent]>;
    protected _pointerHover: PointerHover;
    get pointerHover(): PointerHover;
    protected _pointerClick: PointerClick;
    get pointerClick(): PointerClick;
    protected _keyDownEvent: Event<[KeyboardEvent]>;
    get keyDownEvent(): Event<[KeyboardEvent]>;
    protected _keyUpEvent: Event<[KeyboardEvent]>;
    get keyUpEvent(): Event<[KeyboardEvent]>;
    protected _wheelEvent: Event<[WheelEvent]>;
    get wheelEvent(): Event<[WheelEvent]>;
    protected _dragStartEvent: Event<[DragEvent]>;
    get dragStartEvent(): Event<[DragEvent]>;
    protected _dragEvent: Event<[DragEvent]>;
    get dragEvent(): Event<[DragEvent]>;
    protected _dragEndEvent: Event<[DragEvent]>;
    get dragEndEvent(): Event<[DragEvent]>;
    protected _dragOverEvent: Event<[DragEvent]>;
    get dragOverEvent(): Event<[DragEvent]>;
    protected _dropEvent: Event<[DragEvent]>;
    get dropEvent(): Event<[DragEvent]>;
    constructor(_useCapture?: boolean);
}

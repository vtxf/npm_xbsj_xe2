import { Destroyable, Event } from "xbsj-xe2/dist-node/xe2-base-utils";
export declare class TreeItemDragDrop extends Destroyable {
    protected _dragStartEvent: Event<[DragEvent]>;
    protected _dragOverEvent: Event<[DragEvent]>;
    protected _dragLeaveEvent: Event<[DragEvent]>;
    protected _dropEvent: Event<[DragEvent]>;
    dragStart(dragEvent: DragEvent): void;
    dragOver(dragEvent: DragEvent): void;
    dragLeave(dragEvent: DragEvent): void;
    drop(dragEvent: DragEvent): void;
}

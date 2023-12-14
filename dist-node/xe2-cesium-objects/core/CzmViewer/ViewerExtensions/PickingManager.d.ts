/// <reference types="cesium" />
import { PickedInfo } from "xbsj-xe2/dist-node/xe2-base-objects";
import { Destroyable } from "xbsj-xe2/dist-node/xe2-base-utils";
export declare class PickingManager extends Destroyable {
    private _pickPositionTasks;
    pickPosition(windowPosition: [left: number, top: number]): Promise<[number, number, number] | undefined>;
    private _pickTasks;
    pick(windowPosition: [left: number, top: number], windowSize?: [width: number, height: number], attachedInfo?: any): Promise<PickedInfo>;
    constructor(viewer: Cesium.Viewer);
}

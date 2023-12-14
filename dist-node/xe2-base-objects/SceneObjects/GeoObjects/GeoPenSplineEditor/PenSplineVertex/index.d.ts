import { Destroyable, Event, Listener, ReactivePropsToNativePropsAndChanged } from "xbsj-xe2/dist-node/xe2-base-utils";
import { PenSplineVertexJsonType } from '../../GeoPenSpline';
export declare type PenSplineVertexEditingMode = 'left' | 'centerAdding' | 'centerEditing' | 'right' | 'none';
export declare class PenSplineVertex extends Destroyable {
    private _commandEvent;
    get commandEvent(): Event<[commandName: string]>;
    private _changed;
    get changed(): Listener<[]>;
    private _positionMenuPoi;
    get positionMenuPoi(): import("../..").GeoCanvasMenuPoi;
    private _leftControlPositionMenuPoi;
    get leftControlPositionMenuPoi(): import("../..").GeoCanvasMenuPoi;
    private _rightControlPositionMenuPoi;
    get rightControlPositionMenuPoi(): import("../..").GeoCanvasMenuPoi;
    get json(): PenSplineVertexJsonType;
    set json(value: PenSplineVertexJsonType);
    constructor(position: [number, number, number]);
}
export declare type PenSplineVertexModeType = 'even' | 'none' | 'standalone';
export declare namespace PenSplineVertex {
    const createDefaultProps: () => {
        show: boolean;
        enabled: boolean;
        editingMode: PenSplineVertexEditingMode;
        position: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number]>;
        leftPosition: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number] | undefined>;
        rightPosition: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number] | undefined>;
        /**
         * 默认值'none'
         */
        mode: PenSplineVertexModeType | undefined;
    };
}
export interface PenSplineVertex extends ReactivePropsToNativePropsAndChanged<ReturnType<typeof PenSplineVertex.createDefaultProps>> {
}

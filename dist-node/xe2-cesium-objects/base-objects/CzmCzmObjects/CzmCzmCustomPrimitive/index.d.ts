import { CzmObject, CzmViewer } from '../../../core';
import { CzmCustomPrimitive } from '../../CzmObjects';
import { CzmCustomPrimitive as NativeCzmCustomPrimitive } from '../../utils';
import { CzmViewDistanceRangeControl } from '../../utils2';
export declare class CzmCzmCustomPrimitive extends CzmObject<CzmCustomPrimitive> {
    static readonly type: void;
    private _nativePrimitive?;
    get nativePrimitive(): NativeCzmCustomPrimitive | undefined;
    private _czmViewVisibleDistanceRangeControl;
    get czmViewerVisibleDistanceRangeControl(): CzmViewDistanceRangeControl;
    get visibleAlpha(): number;
    get visibleAlphaChanged(): import("xbsj-xe2/dist-node/xe2-base-utils").Listener<[number, number]>;
    private _viewDistanceDebugBinding;
    constructor(sceneObject: CzmCustomPrimitive, czmViewer: CzmViewer);
}

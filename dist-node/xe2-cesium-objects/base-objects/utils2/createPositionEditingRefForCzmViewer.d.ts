import { ReactParamsType } from 'xbsj-xe2/dist-node/xe2-base-utils';
import { CzmViewer } from '../../core';
/**
 * @deprecated 已废弃，以后会去掉，请使用PositionEditing类
 * @param positionReactParams
 * @param czmViewer
 * @returns
 * @example
 *
 * const positionEditingRef = this.disposeVar(createPositionEditingRefForCzmViewer([czmViewShed, 'position'], czmViewer));
 * this.dispose(bind([czmViewShed, 'editing'], positionEditingRef));
 *
 */
export declare function createPositionEditingRefForCzmViewer(positionReactParams: ReactParamsType, czmViewer: CzmViewer): import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<boolean>;

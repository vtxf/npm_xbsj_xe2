import { ReactParamsType } from 'xbsj-xe2/dist-node/xe2-base-utils';
import { CzmViewer } from '../../core';
/**
 * @deprecated 已废弃，以后会去掉，请使用PositionsEditing
 * @param positionsReactParams
 * @param loopReactParams
 * @param czmViewer
 * @param maxPointsNum
 * @returns
 */
export declare function createPositionsEditingRefForCzmViewer(positionsReactParams: ReactParamsType<[number, number, number][] | undefined>, loopReactParams: ReactParamsType<boolean | undefined> | boolean | undefined, czmViewer: CzmViewer, maxPointsNum?: number): import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<boolean | undefined>;

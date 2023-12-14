import { Destroyable, Event } from 'xbsj-xe2/dist-node/xe2-base-utils';
import { GeoPenSplineEditor } from '../..';
import { NextStepInfoType } from "../NextStepInfoType";
export declare class EditingStatus extends Destroyable {
    private _nextStepEvent;
    get nextStepEvent(): Event<[info: NextStepInfoType]>;
    constructor(penSplineEditor: GeoPenSplineEditor);
}

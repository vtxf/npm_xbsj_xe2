import { Destroyable, Event } from 'xbsj-xe2/dist-node/xe2-base-utils';
import { GeoPenSplineEditor } from '../..';
import { PenSplineVertex } from '../../PenSplineVertex';
export declare class AddingStatus extends Destroyable {
    private _nextStepEvent;
    get nextStepEvent(): Event<[]>;
    constructor(penSplineEditor: GeoPenSplineEditor, vertex: PenSplineVertex | undefined);
}

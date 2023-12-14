import { Destroyable, Event } from 'xbsj-xe2/dist-node/xe2-base-utils';
import { GeoPenSplineEditor } from '../..';
import { PenSplineVertex } from '../../PenSplineVertex';
export declare class ModifyingSingleLoopStatus extends Destroyable {
    private _nextStepEvent;
    get nextStepEvent(): Event<[type: "reverse" | "next"]>;
    constructor(penSplineEditor: GeoPenSplineEditor, currentVertex: PenSplineVertex);
}

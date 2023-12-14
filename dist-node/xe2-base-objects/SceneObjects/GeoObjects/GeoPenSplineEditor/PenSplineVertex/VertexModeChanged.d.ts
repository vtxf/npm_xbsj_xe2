import { Destroyable } from "xbsj-xe2/dist-node/xe2-base-utils";
import { PenSplineVertex } from "../PenSplineVertex";
export declare class VertexModeChanged extends Destroyable {
    constructor(vertex: PenSplineVertex, controlMode: 'left' | 'right');
}

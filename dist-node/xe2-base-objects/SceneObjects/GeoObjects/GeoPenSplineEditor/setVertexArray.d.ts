import { ObservableArray } from "xbsj-xe2/dist-node/xe2-base-utils";
import { PenSplineVertexJsonType } from '../GeoPenSpline';
import { PenSplineVertex } from "./PenSplineVertex";
export declare function setVertexArray(nativeVertexArray: ObservableArray<PenSplineVertex>, createPenSplineVertexFunc: (position: [number, number, number]) => PenSplineVertex, value: PenSplineVertexJsonType[]): void;

import { ObservableArray } from "xbsj-xe2/dist-node/xe2-base-utils";
import { PenSplineVertex } from "./PenSplineVertex";
export declare function resetPositions(nativeVertexArray: ObservableArray<PenSplineVertex>, createPenSplineVertexFunc: (position: [number, number, number]) => PenSplineVertex, value?: [number, number, number][]): void;

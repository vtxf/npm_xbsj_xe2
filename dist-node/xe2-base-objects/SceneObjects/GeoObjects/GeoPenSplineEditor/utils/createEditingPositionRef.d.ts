import { ObservableArray, ReactiveVariable } from 'xbsj-xe2/dist-node/xe2-base-utils';
import { PenSplineVertex, PenSplineVertexEditingMode } from '../PenSplineVertex';
export declare type EditingPositionType = {
    vertex: PenSplineVertex;
    editingMode: PenSplineVertexEditingMode;
};
export declare type EditingPositionRefType = ReactiveVariable<EditingPositionType | undefined>;
export declare function createEditingPositionRef(vertexArray: ObservableArray<PenSplineVertex>): EditingPositionRefType;

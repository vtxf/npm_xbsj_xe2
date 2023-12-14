export declare type PenSplineVertexJsonType = {
    position: [number, number, number];
    leftPosition: [number, number, number] | undefined;
    rightPosition: [number, number, number] | undefined;
    mode: "even" | "none" | "standalone" | undefined;
};
export declare function equalsPenSplineVertexJsonType(left: PenSplineVertexJsonType, right: PenSplineVertexJsonType): boolean;

import { CzmViewer } from ".";
export declare function getCenterResolution(czmViewer: CzmViewer): Promise<[number, [number, number, number]] | undefined>;
export declare function getZoomFromResolution(resolution: number): number;

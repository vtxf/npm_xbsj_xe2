declare function getCenter(right: number, top: number, width: number, height: number): [number, number];
declare function getCompassCenter(compassRight: number, compassTop: number, compassWidth: number, compassHeight: number): [number, number];
declare function getNorthCenter(northRight: number, northTop: number, northWidth: number, northHeight: number): [number, number];
declare function getRotatedPos(centerX: number, centerY: number, rotateX: number, rotateY: number, rotation: number): [number, number];
declare function getCompassCorners(compassRight: number, compassTop: number, compassWidth: number, compassHeight: number): [number, number][];
declare function getRotatedNorthCenter(compassCenter: [number, number], northCenterPos: [number, number], rotation: number): [number, number];
declare function getRotatedNorthRightTop(rotatedNorthCenter: [number, number], northWidth: number, northHeight: number): [number, number];
declare function getRotatedCompassCorners(compassCenter: [number, number], compassCorners: [number, number][], rotation: number): [number, number][];
export { getCenter, getCompassCenter, getNorthCenter, getRotatedPos, getCompassCorners, getRotatedNorthCenter, getRotatedNorthRightTop, getRotatedCompassCorners, };

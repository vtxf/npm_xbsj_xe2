export declare const createInnerHtmlWithWhiteTextBlackBackground: (text: string, height?: number) => string;
export declare const areaToHumanStr: (d: number) => string;
export declare const distanceToHumanStr: (d: number) => string;
export declare const updateDistances: (positions: [
    number,
    number,
    number
][] | undefined) => number[];
export declare const updateArea: (positions: [
    number,
    number,
    number
][] | undefined) => any;
export declare const updateCenterOfMass: (positions: [
    number,
    number,
    number
][] | undefined) => [number, number, number] | undefined;

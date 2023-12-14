export declare function geoNearestPointOnLine(l: ([number, number] | [number, number, number])[], p: [number, number] | [number, number, number]): {
    geometry: {
        type: 'Point';
        coordinates: [
            number,
            number,
            number
        ];
    };
    properties: {
        dist: number;
        index: number;
        location: number;
    };
    type: "Feature";
};

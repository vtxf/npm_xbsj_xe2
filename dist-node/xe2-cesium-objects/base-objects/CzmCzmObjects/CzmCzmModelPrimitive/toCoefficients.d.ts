import * as Cesium from 'cesium';
export declare type CzmModelCoefficientsTypeN3 = [number, number, number];
export declare type CzmModelCoefficientsType = [
    CzmModelCoefficientsTypeN3,
    CzmModelCoefficientsTypeN3,
    CzmModelCoefficientsTypeN3,
    CzmModelCoefficientsTypeN3,
    CzmModelCoefficientsTypeN3,
    CzmModelCoefficientsTypeN3,
    CzmModelCoefficientsTypeN3,
    CzmModelCoefficientsTypeN3,
    CzmModelCoefficientsTypeN3
];
export declare function toCoefficients(value: CzmModelCoefficientsType): Cesium.Cartesian3[] | undefined;

/**
 * 给定两个位置点，计算距离、水平距离、高度、偏航角和俯仰角
 * 偏航角0度指向正北，90度正东，hegith若为负值，表示第二个点的高度比第一个点的矮
 * 只在小范围适用，超过2公里上误差会逐渐变大
 *
 * @param p0 第一个位置点
 * @param p1 第二个位置点
 * @returns 返回一个数据结构 { heading, pitch, distance, distanceInXY, height } 其中heading为偏航角、pitch为俯仰角、distance为距离、distanceInXY为地面距离，heiht为高度
 * @example
 *
 * var r = d01([116.39, 39.9, 0], [116.39001, 39.9, 0])
 * console.log(JSON.stringify(r, undefined, '    '))
 * // {
 * //     "heading": 89.999996817306,
 * //     "pitch": -0.000003818191820832846,
 * //     "distance": 0.8551829328523433,
 * //     "distanceInXY": 0.8551829328523414,
 * //     "height": -5.698940667675366e-8
 * // }
 *
 * var r = d01([116.39, 39.9, 0], [116.3901, 39.9, 0])
 * console.log(JSON.stringify(r, undefined, '    '))
 * // {
 * //     "heading": 89.99996793174093,
 * //     "pitch": -0.00003836285361399983,
 * //     "distance": 8.551829335064113,
 * //     "distanceInXY": 8.551829335062196,
 * //     "height": -0.000005725946652633303
 * // }
 *
 * var r = d01([116.39, 39.9, 0], [116.39, 39.9, 10])
 * console.log(JSON.stringify(r, undefined, '    '))
 * // {
 * //     "heading": 0,
 * //     "pitch": 90,
 * //     "distance": 9.999999999697158,
 * //     "distanceInXY": 9.999999999697158,
 * //     "height": 9.999999999697158
 * // }
 *
 * var r = d01([116.39, 39.9, 0], [116.39, 39.9, -10])
 * console.log(JSON.stringify(r, undefined, '    '))
 * // {
 * //     "heading": 0,
 * //     "pitch": -90,
 * //     "distance": 9.999999999697158,
 * //     "distanceInXY": 9.999999999697158,
 * //     "height": -9.999999999697158
 * // }
 *
 * var r = d01([116.39, 39.9, 0], [116.39, 39.901, 0])
 * console.log(JSON.stringify(r, undefined, '    '))
 * // {
 * //     "heading": 0,
 * //     "pitch": -0.0005000002007775096,
 * //     "distance": 111.03272107320541,
 * //     "distanceInXY": 111.0327210689776,
 * //     "height": -0.0009689436691597025
 * // }
 *
 * var r = d01([116.39, 39.9, 0], [116.39, 39.899, 0])
 * console.log(JSON.stringify(r, undefined, '    '))
 * // {
 * //     "heading": 180,
 * //     "pitch": -0.000499999471847832,
 * //     "distance": 111.03270186887192,
 * //     "distanceInXY": 111.03270186464412,
 * //     "height": -0.0009689420889874288
 * // }
 *
 * var r = d01([116.39, 39.9, 0], [116.39 - 0.01, 39.9, 0])
 * console.log(JSON.stringify(r, undefined, '    '))
 * // {
 * //     "heading": -89.9967927518869,
 * //     "pitch": -0.003835825797385768,
 * //     "distance": 855.1829325232958,
 * //     "distanceInXY": 855.182930606828,
 * //     "height": -0.057252607076538
 * // }
 *
 */
export declare function d01(p0: [number, number, number], p1: [number, number, number]): {
    heading: number;
    pitch: number;
    distance: number;
    distanceInXY: number;
    height: number;
};

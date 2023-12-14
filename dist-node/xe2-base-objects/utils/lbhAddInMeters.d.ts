/**
 *
 * @param lbh 以度和米为单位的经纬度表示
 * @param diffInMeters 以米未单位的偏移量，分别表示朝东、北、上的偏移量
 * @returns
 * @example
 * lbhAddInMeters([116.39, 39.9, 100], [10, 10, 10])
 * // 返回值是：[116.39011709542359, 39.90008983152841, 110]
 */
export declare function lbhAddInMeters(lbh: [number, number, number], diffInMeters: [number, number, number]): number[];

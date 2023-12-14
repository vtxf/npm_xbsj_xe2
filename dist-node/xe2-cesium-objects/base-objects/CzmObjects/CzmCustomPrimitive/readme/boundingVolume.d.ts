export declare const boundingVolumeReadMe = "### \u9ED8\u8BA4\u7684BoundingVolume\n```\ntype: 'LocalAxisedBoundingBox',\ndata: {\n    min: [0, -1, 0],\n    max: [1, 0, 0],\n}\n```\n\n### BoundingVolume\u7C7B\u578B\u89C4\u683C\n```\nexport type BoundingVolumeJsonType = {\n    type: 'BoundingSphere'; // BoundingSphere\u8868\u793A\u4E16\u754C\u5750\u6807\u7CFB\u4E0B\u7684\u5305\u56F4\u7403, center\u4E3A[\u7ECF\u5EA6, \u7EAC\u5EA6, \u9AD8\u5EA6], radius\u5355\u4F4D\u4E3A\u7C73\n    data: { center: [number, number, number], radius: number };\n} | {\n    type: 'LocalBoundingSphere'; // LocalBoundingSphere\u8868\u793A\u672C\u5730\u5750\u6807\u7CFB\u4E0B\u7684\u5305\u56F4\u7403, center\u672C\u5730\u5750\u6807\u7CFB\u4E0B\u7684[x, y, z]\uFF0C\u5355\u4F4D\u662F\u7C73, radius\u5355\u4F4D\u4E3A\u7C73\n    data: { center: [number, number, number], radius: number };\n} | {\n    type: 'BoundingRectangle'; // \u6307\u5B9A\u5730\u7403\u4E0A\u7684\u77E9\u5F62\u533A\u57DF\uFF0C\u5206\u522B\u7528\u6700\u897F\u4FA7\u7ECF\u5EA6\u3001\u6700\u5357\u4FA7\u7EAC\u5EA6\u3001\u6700\u4E1C\u4FA7\u7ECF\u5EA6\u3001\u6700\u5317\u4FA7\u7EAC\u5EA6\u6765\u8868\u793A\u4E00\u4E2A\u77E9\u5F62\u8303\u56F4\n    data: [west: number, south: number, east: number, north: number];\n} | {\n    type: 'LocalAxisedBoundingBox'; // \u672C\u5730\u5750\u6807\u7CFB\u4E0B\uFF0Cmin\u4E3A\u6700\u5C0F\u89D2\u70B9\uFF0Cmax\u4E3A\u6700\u5927\u89D2\u70B9\uFF0C\u63A8\u8350\u4F7F\u7528\u6B64\u79CD\u65B9\u5F0F\uFF01\n    data: {\n        min: [number, number, number];\n        max: [number, number, number];\n    };\n};\n```\n";
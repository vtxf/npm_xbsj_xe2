export declare const defaultCreateCesiumViewerFuncStr = "async function initCesiumViewer(container, czmViewer) {\n    const viewer = await XE2.g.defaultCreateCesiumViewerFunc(container, czmViewer);\n\n    // \u82E5\u539FCzm\u7248\u6743\u4FE1\u606F\u5C55\u793A\u4F4D\u7F6E\u906E\u6321\u91CD\u8981\u4FE1\u606F\uFF0C\u53EF\u5C06\u4EE5\u4E0B\u8BED\u53E5\u89E3\u6CE8\u91CA\uFF0C\u5728\u522B\u7684\u4F4D\u7F6E\u5C55\u793A\n    // viewer._cesiumWidget._creditContainer.style.display = \"none\";\n\n    return viewer;\n}\n";
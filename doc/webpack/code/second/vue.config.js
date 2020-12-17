module.exports = {
    configureWebpack: {
        externals: {
            "vue": "Vue",
            "vue-router": "VueRouter",
            "view-design": "iview",
            "iview": "ViewUI",
            "echarts":"echarts",
        }
    }
}
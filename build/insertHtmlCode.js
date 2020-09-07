/**
 * @Author              : wanghw
 * @Date                : 2020/7/23 - 16:32
 * @PROJECT_NAME        : A-WORKSPACE
 * @FileName            : insertHtmlCode
 * @Last Modified       : 2020/7/23 - 16:32 - wanghw
 */
function InsertHtmlCode(options) {
    // Configure your plugin with options...
    this.options = options.options
}

InsertHtmlCode.prototype.apply = function (compiler) {
    var condition = this.options.condition,
        phpCode = this.options.phpCode
    compiler.plugin('compilation', function (compilation) {
        compilation.plugin('html-webpack-plugin-after-html-processing', function (htmlPluginData, callback) {
            htmlPluginData.html = htmlPluginData.html.toString().split(condition)[0] + phpCode + htmlPluginData.html.toString().split(condition)[1]
            callback(null, htmlPluginData);
        });
    });
};

module.exports = InsertHtmlCode;

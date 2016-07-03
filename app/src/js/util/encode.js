/**
 * @desc html片段转义和反转义
 **/

var $ = window.$;

module.exports = {
    // HTML片段转义
    html_encode: function(str) {
        var s = "";
        if (str.length === 0) {
            return "";
        }
        s = str.replace(/&/g, "&amp;");
        s = s.replace(/</g, "&lt;");
        s = s.replace(/>/g, "&gt;");
        s = s.replace(/ /g, "&nbsp;");
        s = s.replace(/\'/g, "&#39;");
        s = s.replace(/\"/g, "&quot;");
        s = s.replace(/\n/g, "<br>");
        return s;
    },
    // HTML片段反转义
    html_decode: function(str) {
        var s = "";
        if (str.length === 0) {
            return "";
        }
        s = str.replace(/&amp;/g, "&");
        s = s.replace(/&lt;/g, "<");
        s = s.replace(/&gt;/g, ">");
        s = s.replace(/&nbsp;/g, " ");
        s = s.replace(/&#39;/g, "\'");
        s = s.replace(/&quot;/g, "\"");
        s = s.replace(/<br>/g, "\n");
        return s;
    },
    // 把HTML片段转为纯文本
    html_plain: function(str) {
        var node = $('<p></p>');
        node.html(str);
        return node.html(str).text();
    }
};

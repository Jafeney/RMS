/**
 * @desc 时间处理工具函数
 **/

module.exports = {
    // 获取本地时间字符串
    getTimeString: function(date) {
        return date.getFullYear() + '-' + this.dateNumFormat(date.getMonth() +
                1) + '-' + this.dateNumFormat(date.getDate()) + ' ' +
            this.dateNumFormat(date.getHours()) + ':' + this.dateNumFormat(
                date.getMinutes()) +
            ':' + this.dateNumFormat(date.getSeconds());
    },
    // 格式化日期格式
    dateNumFormat: function(num) {
        if (num < 10) {
            return '0' + num;
        }
        return num;
    }
};

var navbar = (function() {
    $('.J_backBtn').on('click', function(e) {
        e.preventDefault();
        history.go(-1);
    });
})();
module.exports = navbar;

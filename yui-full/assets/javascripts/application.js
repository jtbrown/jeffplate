//set up a namespace for wrapping up methods and properties (public and private)
//http://yuiblog.com/blog/2007/06/12/module-pattern/
if(!this.BLUE) {
    BLUE = {};
}
BLUE.app = (function() {
    return {
        init: function()
        {
            BLUE.utils.getCookie('bar');
        }
    };
})();

$(document).ready(function() {
	BLUE.app.init();
});

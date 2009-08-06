if(!this.BLUE) {
    BLUE = {};
}
BLUE.app = (function() {
    return {
        init: function()
        {
            //add hook class to indicate presence of js
            $('body').addClass('js');
        }
    };
})();

$(document).ready(function() {
	BLUE.app.init();
});

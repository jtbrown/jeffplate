/* SVN FILE: $Id$ */
/**
 * Generic application javascript file
 *
 * BluePlate - BlueAtlas base template files
 * Copyright 2008 - Present,
 *      19508 Amaranth Dr., Suite D, Germantown, Maryland 20874 | 301.540.5950
 *      
 * Redistributions of files must retain the above notice.
 *
 * @filesource
 * @copyright		Copyright 2008 - Present, Blue Atlas Interactive
 * @version		    $Rev$
 * @modifiedby		$LastChangedBy$
 * @lastmodified	$Date$
 */

//set up a namespace for wrapping up methods and properties (public and private)
//http://yuiblog.com/blog/2007/06/12/module-pattern/
BLUE = {};
BLUE.app = function()
{
    return {
        init: function()
        {
            
        }
    };
    
}();

$(document).ready(function() {
	BLUE.app.init();
});

BLUE.utils = function()
{
    return {
        
        getCookie: function(name)
        {
            var start = document.cookie.indexOf(name + "=");
            var len = start + name.length + 1;
            if ((!start) && (name != document.cookie.substring(0, name.length))) {
                return null;
            }
            if (start == -1) return null;
            var end = document.cookie.indexOf(';', len);
            if (end == -1) end = document.cookie.length;
            return unescape(document.cookie.substring(len, end));
        },
        
        setCookie: function(name, value, expires, path, domain, secure)
        {
            var today = new Date();
            today.setTime(today.getTime());
            if (expires) {
                expires = expires * 1000 * 60 * 60 * 24;
            }
            var expires_date = new Date(today.getTime() + (expires));
            document.cookie = name + '=' + escape(value) +
                ((expires) ? ';expires=' + expires_date.toGMTString() : '') + //expires.toGMTString()
                ((path) ? ';path=' + path : '') +
                ((domain) ? ';domain=' + domain : '') +
                ((secure) ? ';secure' : '');
        },
        
        deleteCookie: function(name, path, domain)
        {
            if (BAI.getCookie(name)) 
                document.cookie = name + '=' +
                ((path) ? ';path=' + path : '') +
                ((domain) ? ';domain=' + domain : '') +
                ';expires=Thu, 01-Jan-1970 00:00:01 GMT';
        }
    
    };

}
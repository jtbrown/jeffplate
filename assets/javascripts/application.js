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
 * @version		   $Rev$
 * @modifiedby		$LastChangedBy$
 * @lastmodified	$Date$
 */

//set up a namespace for wrapping up methods and properties (public and private)
//http://yuiblog.com/blog/2007/06/12/module-pattern/
BLUE.app = function(){
   
   return {
      
      init: function(){
         alert("Let's get ready to rumble.");
      }
      
   };
   
}
();

window.onload = BLUE.app.init();

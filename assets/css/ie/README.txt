/* SVN FILE: $Id$ */
/**
 * ReadMe
 *
 * BluePlate - BlueAtlas base template files
 * Copyright 2008 - Present, 
 *      19508 Amaranth Dr., Suite D, Germantown, Maryland 20874 | 301.540.5950 
 *
 * Redistributions of files must retain the above notice.
 *
 * @filesource
 * @copyright		Copyright 2008 - Present, Blue Atlas Interactive
 * @version			$Rev$
 * @modifiedby		$LastChangedBy$
 * @lastmodified	$Date$
 */
 
 http://www.456bereastreet.com/archive/200510/stop_using_css_hacks_now/
 http://www.brucelawson.co.uk/2005/future-proof-your-css-with-conditional-comments/
 
 In many cases it is overkill to conditionally include IE only stylesheets.  If you need to implement
 only a few CSS rules to achived a CSS effect in IE, it is probably best to include those styles directly in 
 screen.css and include comments describing the "hack".  This prevents the need for an additional
 http request for your CSS IE only file.  Minimizing http requests is a great way to enhance
 performance for a website.
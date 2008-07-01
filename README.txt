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

/*******
TODO
/*******
With each new project there are a few things that need to be done
1) Open blueprint/print.css and modify (" attr(href) ") to that href is the actual href of the project (for example: http://www.project.com)

/*******
DESCRIPTION
/*******

BluePlate represents the base template files for a new website constructed by Blue Atlas Interactive. 
It would include the CSS framework (BlueFin), as well as a number of other files.  
The directory structure looks like the following:

Root
  -index.html
  -assets
    -css
      *CSS framework files
    -javascripts
      *jquery
      *generic application file with a window.onload event so it is ready to go.
      *Generic text file containing copy/paste functions for use in projects
      *generic utility file with cookie functions, etc
      *Dean Edwards IE fix javascript file(s)
      *swfobject files in the event that the site needs to serve flash content
    -images
      *bg (empty)
      *native (empty)
      *a few generic images for testing purposes

/*******
NOTES
/*******
/* SVN FILE: $Id$ */
/**
 * ReadMe
 *
 * Copyright 2008 - Present, Blue Atlas Interactive http://www.blueatlas.com
 *      19508 Amaranth Dr., Suite D, Germantown, Maryland 20874
 *
 * Licensed under The MIT License
 * Redistributions of files must retain the above copyright notice.
 *
 * @filesource
 * @copyright		Copyright 2008 - Present, Blue Atlas Interactive
 * @version		$Rev$
 * @modifiedby		$LastChangedBy$
 * @lastmodified	$Date$
 * @license		http://www.opensource.org/licenses/mit-license.php The MIT License
 */

/*******
DESCRIPTION
/*******

Resource: http://www.alistapart.com/articles/frameworksfordesigners
Resource: http://www.thinkvitamin.com/features/design/creating-sexy-stylesheets
http://code.google.com/p/blueprintcss/

BluePrint consists of a set of files used to make CSS development more rapid and productive.  The files in this CSS directory include:

base.css - This file is used to import blueprint/screen.css.  It is also used to define site specific styles.

./blueprint
   *ie.css - defines IE specific styles.
   *print.css - sets up print specific styles
   *screen.css - defines styles for reset, typography, grid, and forms


/*******
NOTES
/*******
   *ie.css is not necessary, as any IE necessary hacks have been removed based on the inclusion of ie7.js (Dean Edwards - http://dean.edwards.name/weblog/2008/01/ie7-2/)
   *print.css should be referenced directly, as it will need modification on a site by site basis.
   *screen.css is being referenced from s3 storaga (http://blueplate.s3.amazonaws.com/css/blueprint_0.7.1/screen.css).  This file will most like NOT need modification, however if it does it can be referenced locally
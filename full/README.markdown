# DESCRIPTION

BluePlate represents the base template files for a new website constructed by Blue Atlas Interactive. It would include the YUI CSS framework, as well as a number of other files.  

The explicit directory structure looks like the following:

## Root

1  index.html
2  threecol.html
3  assets
  +  css
    *  base.css
    *  print.css
  +  documentation
    *  deployment.html
    *  layoutguide.html
    *  styleguide.html
  +  images
    *  bg
      -  100.jpg (test file)
      -  pic.gif (test file)
      -  test.jpg (test file)
    *  native
      -  png
      -  psd
  +  javascripts
    *  application.js
    *  SNIPPETS.txt
    *  Generic text file containing copy/paste functions for use in projects
    *  swfobject files in the event that the site needs to serve flash content

## FILE EXPLANATION

### index.html

    DOCTYPE
        HTML 4.01 Strict was used, fmi http://www.sitepoint.com/article/html-or-xhtml-does-it-matter
    LAYOUT
        index.html's layout is based on the YUI CSS Framework Template System.  There are six YUI templates to choose from for more information view the cheatsheet (http://yuiblog.com/assets/pdf/cheatsheets/css.pdf), template information is in the bottom right corner.  To change template used find <div id="doc" class="yui-t5"> and change the number following the 't' to 1 thru 6.  If one of these six templates is not desired review threecol.html.  It uses YUI's custom appraoch to layout design.  If a three or four column layout is needed rename threecol.html to index.html and start from that baseline.  Premade layouts can be found in /assets/documentation/layoutguide.html
    CSS
        Links directly to YUI (2 files, reset-fonts-grids.css & base-min.css)
        base.css contains all custom styling
        print.css is yourprint stylesheet
    JAVASCRIPT
        All JavaScripts have been linked to or placed just before the closing body tag.  For information on why this is optimal http://developer.yahoo.com/performance/rules.html#js_bottom
        SWFObject Flash replacement stored locally, more info (http://code.google.com/p/swfobject/)   


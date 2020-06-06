# AutoIndex

This javascript automatically creates an index for your page, with a list of all anchor tags `<a name='referencename'>Label</a>` of the document that will highlight when the user is in that region of the html while scrolling the page.

See an working example [here](https://www.ranoya.com/Assets/JSLibs/AutoIndex/example.html).

## How it works

It will create a `<div id='AutoIndex'>` element (if it isn't already created by your own code) to put the index links to all your anchors. These index links elements will receive the CSS class `.anchorOff` , and the actual place where the user is while scrolling the document will receive the class `.anchorOn` for highlight.

## How to use / implementation

First, insert the javascript code to your page. You can download the `indexit.js` and call it in your own site, like this:

```
<script src='./indexit.js'></script>
```

Or you can call it from where it is hosted online:

```
<script src='https://www.ranoya.com/Assets/JSLibs/AutoIndex/indexit.js'></script>
```

Then, style the follow elements in your CSS as you wish:

```
#AutoIndex {
            position: fixed;
            top: 20px;
            right: 20px;
            width: 180px;
        }

#AutoIndex a {
            text-decoration: none;
            color: blue;
            padding: 10px;
            line-height: 30px;
            border-left: 4px solid transparent;
            transition: all .3s ease-out;
        }

#AutoIndex a:hover {
            background-color: blue;
            color: white !important;
            transition: all .3s ease-out;
        }

#AutoIndex a.anchorOn {
            color: red;
            border-left: 4px solid red;
        }
```

And finally, put what you want to show in your index inside each anchor `<a name=''> </a>` tag, like this:

```
<a name='firstanchor'>Start point</a>

...

<a name='otheranchor'>Second part</a>

...
```

That's it. You're good to go.

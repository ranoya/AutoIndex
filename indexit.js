/**
 * 
 * AUTOINDEX
 * Guilherme Ranoya, 2020
 * 
 * This javascript automatically creates an index for your page, 
 * with a list of all anchor tags (<a name='referencename'>Label</a>)
 * of the document that will highlight when the user is in that
 * region of the html  while scrolling the page.
 * 
 * It will create a <div id='AutoIndex'> element(if it isn't already 
 * created by your own code) to put the index links to all your anchors.
 * These index links elements will receive the CSS class .anchorOff , 
 * and the actual place where the user is while scrolling the document
 * will receive the class .anchorOn for highlight.
 * 
 * 
 * Your can style all these elements in your CSS with:
 * 
 * #AutoIndex {
 * 
 * }
 * 
 * #AutoIndex a {
 * 
 * }
 * 
 * #AutoIndex a:hover {
 * 
 * }
 * 
 * #AutoIndex a.anchorOn {
 * 
 * }
 * 
 */



// Array of elements to track
let makeindice = [];


// function that tracks the elements
function trocamarcadores() {

    let ultimo = 0;

    for (let marcadores = 0; marcadores < makeindice.length; marcadores++) {
        document.getElementById('anc' + marcadores).className = "anchorOff";
        spY = document.getElementById('pointer' + marcadores).getBoundingClientRect().top;
        if (spY < 100) {
            ultimo = marcadores;
        }
    }

    document.getElementById('anc' + ultimo).className = "anchorOn";

}


// Procedure to find the anchors and create the indexes in the document
document.addEventListener("DOMContentLoaded", function (e) {

    let alllinks = document.getElementsByTagName('a');
    let blocoindices = [];
    let bi = 0;

    for (let z = 0; z < alllinks.length; z++) {

        if (alllinks[z].name != undefined && alllinks[z].name != "") {

            blocoindices[bi] = alllinks[z];
            bi++;

        }

    }

    let constroiindices = "";
    let indicename = [];
    for (let k = 0; k < blocoindices.length; k++) {

        blocoindices[k].id = "pointer" + k;
        makeindice[k] = blocoindices[k].name;
        indicename[k] = blocoindices[k].textContent;
        blocoindices[k].style.display = "block";
        blocoindices[k].style.overflow = "hidden";
        blocoindices[k].style.height = 0;
        constroiindices += "<a id='anc" + k + "' href='#" + makeindice[k] + "'>" + indicename[k] + "</a><br>";

    }

    if (document.getElementById('AutoIndex') != null) {

        document.getElementById('AutoIndex').innerHTML = constroiindices;

    } else {

        let newtag = document.createElement('div');
        newtag.id = 'AutoIndex';
        document.body.appendChild(newtag);
        document.getElementById('AutoIndex').innerHTML = constroiindices;

    }

    document.addEventListener("scroll", trocamarcadores);

});
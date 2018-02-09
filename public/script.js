$ = (queryString) => document.querySelector(queryString);

var fs = require('fs');
var objx;

 var contents = fs.readFileSync("bukhari.json");
// Define to JSON type
 var objx = JSON.parse(contents);
alert(objx);

function LOAD() {

    var ahadith = [];
    var result = objx;
    var size = Object.keys(result).length;
    for(var i = 0; i < size; i++)
        if (typeof result[i] !== 'undefined') {
            ahadith.push(result[i]);
        }
    var hadith = ahadith[Math.floor(Math.random()*ahadith.length)];
    hadith = hadith.replace("()", "(s.a.w.s.)");
    hadith = hadith.replace("( )", "(s.a.w.s.)");
    $("#hadith").innerHTML = hadith;
}

LOAD();
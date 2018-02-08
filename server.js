// modules

var fs = require('fs');

var static = require( 'node-static' ),
    port = 8080,
    http = require( 'http' );

// config
var file = new static.Server( './public', {
    cache: 3600,
    gzip: true
} );


var obj;
fs.readFile('bukhari.json', 'utf8', function (err, data) {
  if (err) throw err;
  obj = JSON.parse(data);
});


// serve
http.createServer( function ( request, response ) {
    request.addListener( 'end', function () {
        file.serve( request, response );
    } ).resume();
} ).listen(process.env.PORT)

//.listen(process.env.PORT)
/* var https = require('https');
// the host can be thought of as the domain name you want to read from,
// and the path is the resource - '/' is the root path, but if you wanted to read a
// particular resource (like '/login/index.html'), that would be defined in the path
var requestOptions = {
  host: 'example.com',
  path: '/'
};

// notice that https.get takes a callback with one parameter -
// response, which is a Stream that represents the HTTP response
https.get(requestOptions, function (response) {

  // set encoding of received data to UTF-8
  response.setEncoding('utf8');

  // the callback is invoked when a `data` chunk is received
  response.on('data', function (data) {
    console.log('Chunk Received. Length:', data.length);
    console.log(data);
  });

  // the callback is invoked when all of the data has been received
  // (the `end` of the stream)
  response.on('end', function() {
    console.log('Response stream complete.');
  });

}); */

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};


function getAndPrintHTMLChunks () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  /* Add your code here */
  var https = require('https');

  https.get(requestOptions, function(res){

    res.setEncoding('utf8');
    res.on('data', function (data){
      console.log(data);
      console.log('\n');
    });
  });
}

function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  var result = '';

  /* Add your code here */
  var https = require('https');

  https.get(requestOptions, function(res){

    res.setEncoding('utf8');
    res.on('data', function (data){
      result = result + data;
    });



    res.on('end', function() {
    console.log(result);
    console.log('Response stream complete.');
    });


  });
}

function getAndPrintHTML2 (options) {

  /* Add your code here */
  var result = '';
  var https = require('https');

  https.get(options, function(res){

    res.setEncoding('utf8');
    res.on('data', function (data){
      result = result + data;
    });



    res.on('end', function() {
    console.log(result);
    console.log('Response stream complete.');
    });


  });


}


//getAndPrintHTMLChunks();
getAndPrintHTML(requestOptions);
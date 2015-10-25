 var requestStream = Rx.Observable.just('https://api.github.com/users');


  // flatmap is a version of map() that "flattens" a metastream, by emitting on the "trunk" stream everything that will be emitted on "branch" streams. because requestStream results to stream of streams. 
 var responsestream = requestStream
  .flatMap(function(requestUrl) {
    return Rx.Observable.fromPromise(jQuery.getJSON(requestUrl));
  });

  responseStream.subscribe(function(response) {
    // do something with the response
  });


 

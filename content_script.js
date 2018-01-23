setInterval(function(){
  var xhr = new XMLHttpRequest();
  xhr.open('GET', '//api.binance.com/api/v1/exchangeInfo');
  xhr.send(null);
  xhr.onreadystatechange = function () {
    var DONE = 4; // readyState 4 means the request is done.
    var OK = 200; // status 200 is a successful return.
    if (xhr.readyState === DONE) {
      if (xhr.status === OK)
        xhr.parsed = JSON.parse(xhr.responseText);
        var symbols = xhr.parsed.symbols;
        console.log(xhr.parsed); // 'This is the returned text.'
        if (symbols.length > 246) {
          alert(symbols[symbols.length-1].baseAsset + ' is the new coin');
        }
      } else {
        console.log('Status: ' + xhr.status); // An error occurred during the request.
      }
  };
}, 10000);

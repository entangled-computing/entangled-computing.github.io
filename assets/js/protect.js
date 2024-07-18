function encodeEmail(email) {
    key = Math.floor(Math.random() * 100);
    var encodedKey = key.toString(16);
    var encodedString = make2DigitsLong(encodedKey);
    var result = ""; 
    for(var n=0; n < email.length; n++) {
        var charCode = email.charCodeAt(n);
        var encoded = charCode ^ key;
        var value = encoded.toString(16);
        result += make2DigitsLong(value);
    }
    result += encodedString;
    return result;
  }
  
  function make2DigitsLong(value){
    return value.length === 1 
        ? '0' + value
        : value;
  }
  
  function decodeEmail(encodedString) {
    var email = ""; 
    var keyInHex = encodedString.substr(encodedString.length - 2);
    var key = parseInt(keyInHex, 16);
    for (var n = 0; n < encodedString.length - 2; n += 2) {
        var charInHex = encodedString.substr(n, 2)
        var char = parseInt(charInHex, 16);
        var output = char ^ key;
        email += String.fromCharCode(output);
    }
    return email;
  }
  
  
  var protectedElements = document.getElementsByClassName("protected");
  for (var i = 0; i < protectedElements.length; i++) {
      var encoded = protectedElements[i].getAttribute("eml");
      var decoded = decodeEmail(encoded);
      protectedElements[i].href = 'mailto:' + decoded;
  }
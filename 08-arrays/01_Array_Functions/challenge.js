module.exports.reversePlusOne = function(x,y) {
var array = x,y;
array.reverse( );
array.unshift(1);
return array;
}

module.exports.plusesEverywhere = function(x,y) {
  var array = x,y;
  return array.join('+');
}

module.exports.arrayQuantityPlusOne = function(x,y) {
  var array = x,y;
  return array.length + 1;
}
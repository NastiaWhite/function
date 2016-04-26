function getClosestToZero() {
  var length = arguments.length;
  var min = arguments[0];
  var cl;
  if(length === 0) {
  return undefined;
}
  for (var i = 0; i < length; i++) {
    var v = Math.abs(arguments[i]);

    if (min > v) {
      min = v;
      cl = arguments[i];
    }
  }
  return cl;
}

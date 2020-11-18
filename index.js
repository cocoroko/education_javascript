/**
 * @param {Number} a Первое слагаемое
 * @param {Number} b Второе слагаемое
 * @returns {Number}
 */
module.exports = function (a, b) {
	try {
      var parsed_a = parseInt(a, 10);
      var parsed_b = parseInt(b, 10);
      if((isNaN(a)) || (isNaN(b))) {
           throw new TypeError("NaN");
      }
      return parsed_a + parsed_b;
    }
    catch(e){
      return NaN;
    }
};

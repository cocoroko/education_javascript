/**
 * @param {Number} hours
 * @param {Number} minutes
 * @param {Number} interval
 * @returns {String}
 */
module.exports = function (hours, minutes, interval) {
  var min = minutes + interval;
  if (min >= 60) {
      hours = hours + Math.floor(min / 60);
      min = min % 60;
  }
  if (hours >= 24) {
      hours = Math.floor(hours % 24);
  }
  if (hours < 10 && min < 10) {
    return "0" + hours + ":" + "0" + min;
  }
  if(hours < 10 && min >= 10) {
      return "0" + hours + ":" + min;
  }
  if(hours >= 10 && min < 10) {
      return  hours + ":" + "0" + min;
  }
  return hours + ":" + min;
};

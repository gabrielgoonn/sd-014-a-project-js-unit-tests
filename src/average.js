function check(item) {
  return typeof (item) === 'number';
}

const average = (items) => {
  if (items.every(check) !== true || items.length === 0) {
    return undefined; 
  }
  return Math.round(items.reduce((a, b) => a + b) / items.length); 
};

module.exports = average;

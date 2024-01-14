// curried-add.js
function curriedAdd(a) {
  let total = a || 0;

  function add(b) {
    total += b;
    return add;
  }

  add.valueOf = function () {
    return total;
  };

  return add;
}

module.exports = { curriedAdd };
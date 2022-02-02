function getArray() {
  const arr = [
    ["/angular.svg", "/aurelia.svg", "/react.svg"],
    ["/ember.svg", "/backbone.svg", "/vue.svg"],
    ["/vue.svg", "/angular.svg", "/aurelia.svg"],
    ["/backbone.svg", "/ember.svg", "/react.svg"],
  ];
  arr.sort(() => Math.random() - 0.5);
  arr.forEach((ar) => {
    ar.sort(() => Math.random() - 0.5);
  });
  return arr
}

export { getArray };

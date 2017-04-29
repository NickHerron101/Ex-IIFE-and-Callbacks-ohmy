var Predator = (function () {
  var carnivores = [];
  var herbivores = [];

  return {
    loadCarnivores: function (callbackToInvoke) {
      var loader = new XMLHttpRequest();
      loader.open("GET", "carnivores.json");
      loader.send();
      loader.addEventListener("load", function (callback) {
        carnivores = JSON.parse(this.responseText);
        console.log("carnivores", carnivores);
        callbackToInvoke(carnivores);
      });
    },
    loadHerbivores: function (invoke) {
      loader = new XMLHttpRequest();
      loader.open("GET", "herbivores.json");
      loader.send();
      loader.addEventListener("load", function(){
        herbivores = JSON.parse(this.responseText);
        invoke(herbivores);
      });
    }
  };
})();




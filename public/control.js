var app = angular.module("myApp", []);
app.controller("myCtrl", function ($scope, $interval) {
  $scope.time = 3;
  $scope.score = 0;
  $scope.alphabets = {
    A: "red",
    B: "black",
    C: "green",
    D: "blue",
    E: "pink",
    F: "yellow",
    G: "black",
    H: "red",
    I: "green",
    J: "blue",
    K: "pink",
    L: "yellow",
    M: "black",
    N: "red",
    O: "green",
    P: "blue",
    Q: "pink",
    R: "yellow",
    S: "black",
    T: "red",
    U: "green",
    V: "blue",
    W: "pink",
    X: "yellow",
    Y: "black",
    Z: "red",
    "0": "green",
    "1": "blue",
    "2": "pink",
    "3": "yellow",
    "4": "black",
    "5": "red",
    "6": "green",
    "7": "blue",
    "8": "pink",
    "9": "yellow",
  };
  $scope.alpha = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
  ];
  $scope.colors = [
    "#E52B50",
    "#FFBF00",
    "#9966CC",
    "#FBCEB1",
    "#007FFF",
    "#DE5D83",
    "#964B00",
    "#007BA7",
    "#7FFF00",
    "#50C878",
    "#4B0082",
    "#00A86B",
    "#FF00AF",
    "#808000",
    "#D1E231",
    "#003153",
    "#FF0000",
    "yellow",
    "#FBCEB1",
    "#007FFF",
    "#DE5D83",
    "#E52B50",
    "#FFBF00",
    "#9966CC",
    "#50C878",
    "#4B0082",
    "#00A86B",
    "#964B00",
    "#007BA7",
    "#7FFF00",
    "#003153",
    "#FF0000",
    "yellow",
    "pink",
    "blue",
    "#003153",
  ];

  $scope.shuffleArray = function (array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    console.log(array);
    console.log($scope.alpha);
    $scope.highscore = localStorage.getItem("pickit_high_score");
  };

  $scope.shuffleArray($scope.alpha);
  $scope.shuffleArray($scope.colors);

  var index = Math.floor(Math.random() * $scope.alpha.length);
  $scope.targetText = $scope.alpha[index];
  $scope.targetColor = $scope.colors[index];

  $scope.getTarget = function (index) {
    console.log(index);
    console.log($scope.alpha[index]);
    console.log($scope.colors[index]);
    console.log($scope.alpha);
    if (
      $scope.alpha[index] == $scope.targetText &&
      $scope.colors[index] == $scope.targetColor
    ) {
      $scope.score = $scope.score + 2;
      var audio = document.getElementById("audio");
      audio.play();
    } else {
      $scope.score = $scope.score - 1;
      var wrong = document.getElementById("wrong");
      wrong.play();
    }

    var high_score = localStorage.getItem("pickit_high_score");
    if ($scope.score > high_score) {
      localStorage.setItem("pickit_high_score", $scope.score);
    }
  };
  $scope.changeTarget = function () {
    var index = Math.floor(Math.random() * $scope.alpha.length);
    $scope.targetText = $scope.alpha[index];
    $scope.targetColor = $scope.colors[index];
    console.log($scope.targetText);
    console.log($scope.targetColor);
  };
  $interval(function () {
    $scope.time = $scope.time - 1;
    if ($scope.time == -1) {
      $scope.changeTarget();
      $scope.time = 3;
    }
  }, 1000);
});

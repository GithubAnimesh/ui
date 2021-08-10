var Color;
(function (Color) {
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Blue"] = 4] = "Blue";
})(Color || (Color = {}));
;
var background = Color.Blue;
console.log(background);

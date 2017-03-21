/*!
 * Drow Color Noise!
 *
 * Add to <canvas id='noise' height='300' width='700'>drownoise</canvas>
 *
 * Author: California.
 */

var canvas  = document.getElementById("noise");
var ctx     = canvas.getContext('2d');

var drownoise;

var s = 1;

for (var m = 0; m < 250; m++) {

k = 1;

for (var i = 0; i < 450; i++) {

drownoise = "#"+((1<<24)*Math.random()|0).toString(16);

ctx.strokeStyle = drownoise;
ctx.strokeRect(k, s, 0.5, 0.5);

k = k+2;
i++;
}

s = s+2;

}

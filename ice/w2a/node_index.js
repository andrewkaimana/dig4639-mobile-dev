console.log("hi");
var x = 1;
//var y = new Array();
//y[0] = 1;
var y = [1];
function scopeDemo(y1) {
    console.log(x)
    let a = 3, b = 4, c = 5;
    x1[0] = 500;
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(y1);
    y1[0] = 500;
    var x = 2;
    if(true) {
        var x = 0;
    }
    return a;
}
x = scopeDemo(y1);
console.log(y);
<<<<<<< HEAD
console.log(0);
=======
>>>>>>> e8664df465d730f964f6c7bbcad745e93755b2fa

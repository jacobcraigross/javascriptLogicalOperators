// Copy and paste into the console to double check. 

var x = 3;
var y = 8;

!(x == "3" || x === y) && !(y != 8 && x <= y);

// false

var str = "" 
var msg = "haha!" 
var isFunny = "false" 

!((str || msg) && isFunny); 

// false

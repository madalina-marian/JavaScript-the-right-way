/**
 * Created by Madalina Marian on 18/11/2018.
 */


//reverse string funtion
var name = 'Mada';

function reverse(name){
    return name.split("").reverse().join("");
}

window.onload = function() {
     alert(reverse(name));
};
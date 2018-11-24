/**
 * Created by Madalina Marian on 18/11/2018.
 */

//

function capitalizeFirstLetter(string) {
    var lowercased = string.toLowerCase();
    return lowercased.charAt(0).toUpperCase() + lowercased.slice(1);
}

window.onload = function() {
    var value = document.getElementById("name").innerHTML;
    var uppercased = capitalizeFirstLetter(value);

    document.getElementById("name").innerHTML = uppercased;
};
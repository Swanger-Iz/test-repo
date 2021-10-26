/**
 * Event handler for 'Statistics' button.
 * Calculates following values fot the given text and displays them in corresponding fields:
 * 1. Count of characters;
 * 2. Count of spaces;
 * 3. Count of chars for vowels and consonants;
 * 4. Count of words.
 * @param {object} event - Event class
 */

function onStatisticsClicked(event) {
    //TODO: Implement this function
    console.log('onStatisticsClicked called');

    //count of char-s
    document.getElementById("valCharCount").value = txt.length;
    
    //count of spaces
    document.getElementById("valCountSpaces").value = txt.split(" ").length - 1;
    
    //count of vowels
    var v_counter = 0;
    var c_counter = 0;

    let vowels_arr = ['a','e','i','o','u'];

    for (i=0; i<txt.length; i++) {
        if (txt[i] in vowels_arr) {
            v_counter++;
        }
        else {
            c_counter++;
        }
    }

    document.getElementById("valVowelsCount").value = v_counter;
    document.getElementById("valConsonantsCount").value = c_counter;

    //count of words
    document.getElementById("valWordsCount").value = txt.split(" ").length;
}

/**
 * Event handler for 'Statistics' button.
 * Removes all the even words in the given text (starting from 1) and displays result in corresponding field.
 * @param {object} event - Event class
 */
function onRemoveWordsClicked(event) {
    //TODO: Implement this function
    console.log('onRemoveWordsClicked called');


    let words = txt.split(" ");
    let res_arr = []; 
    let counter = 1;
    
    for (i=0; i<words.length; i++) {
        if (counter % 2 == 0) {
            res_arr.push(words[i])
        }
    }
    document.getElementById("valOddWords").value = res_arr;

}


/**********************************************/

function init() {
    const text = document.getElementById('text');
    text.value = txt;
}

document.addEventListener('DOMContentLoaded', init);


function convertTextToNumber(text) {
    const ones = {
        'zero': 0,
        'one': 1,
        'two': 2,
        'three': 3,
        'four': 4,
        'five': 5,
        'six': 6,
        'seven': 7,
        'eight': 8,
        'nine': 9
    };
    const tens = {
        'ten': 10,
        'twenty': 20,
        'thirty': 30,
        'forty': 40,
        'fifty': 50,
        'sixty': 60,
        'seventy': 70,
        'eighty': 80,
        'ninety': 90,
    };
    const teens = {
        'eleven': 11,
        'twelve': 12,
        'thirteen': 13,
        'fourteen': 14,
        'fifteen': 15,
        'sixteen': 16,
        'seventeen': 17,
        'eighteen': 18,
        'nineteen': 19,
    };

    let words = text.split(" ");
    let number = 0;
    for (let i = 0; i < words.length; i++) {
        if (ones[words[i]]) {
            number += ones[words[i]];
        } else if (tens[words[i]]) {
            number += tens[words[i]];
        } else if (teens[words[i]]) {
            number += teens[words[i]];
        }
    }
    return number;
}
console.log(convertTextToNumber("twenty five"));
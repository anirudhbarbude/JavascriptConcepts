    let score = 0;
    let inputString = "(())";

    let openParenthesesCount = 0;

    for (let i = 0; i < inputString.length; i++) {
        let char = inputString[i];

        if (char === '(') {
            openParenthesesCount++;
        } else if (char === ')') {
            openParenthesesCount--;
            score++;
        }
    }



console.log("Score of parentheses:", score*2);

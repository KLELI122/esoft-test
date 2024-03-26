function checkStr(inputStr) {
  const result = [];
  const openBrackets = ['(', '[', '{'];
  const closeBrackets = [')', ']', '}'];

  for (let i = 0; i < inputStr.length; i++) {
      const currentStr = inputStr[i];

      if (openBrackets.includes(currentStr)) {
          result.push(currentStr);
      } else if (closeBrackets.includes(currentStr)) {
          if (result.length === 0) {
              return false;
          }
          const lastBracket = result.pop();
          if (openBrackets.indexOf(lastBracket) !== closeBrackets.indexOf(currentStr)) {
              return false;
          }
      }
  }
  return result.length === 0;
}

console.log(checkStr("()"));
console.log(checkStr("()[]{}"));
console.log(checkStr("(]"));
console.log(checkStr("([)]"));
console.log(checkStr("{[]}"));
function reverseString(text) {
  let result = "";

  for (let char of text) {
    result = char + result;
  }

  return result;
}

// recursion way
function reverseString2(text) {
  if (text == "") return "";
  else {
    return reverseString2(text.substr(1)) + text[0];
  }
}

// reduce method
function reverseString3(text) {
  return text.split("").reduce((pre, cur) => cur + pre, "");
}

console.log(reverseString3("abcdef"));

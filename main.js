const removeParenth = function(userInput) {
  let brokenString =  userInput.split('');
  let keepChar = true 
  let savedChar = []
  for (let i = 0; i < brokenString.length; i++) {
    let currentChar = brokenString[i]
    if (currentChar === '('){
      keepChar = false
    } else if (currentChar === ')'){
      keepChar = true 
      continue
    } 
    if (keepChar === true){
      savedChar.push(currentChar)
    } 
  }; 
  let resultString = savedChar.join('') 
  return resultString
};

console.log(removeParenth('Ido(not)liketocode'));

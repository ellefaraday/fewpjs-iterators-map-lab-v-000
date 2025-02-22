const tutorials = [
  'what does the this keyword mean?',
  'What is the Contutorialuctor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

function titleCased(){
  let upperCased =   tutorials.map(function(tutorial){
    tutorial = tutorial.split(" ")
    tutorial = tutorial.map(function(word){
      word = word.split("")
      word[0] = word[0].toUpperCase()
      return word.join("");
    }).join(" ")
    return tutorial
  })
  return upperCased
}

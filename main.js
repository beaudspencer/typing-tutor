var phrase = 'grumpy wizards make toxic brew for the evil queen'
var array = []
var $phraseContainer = document.getElementsByTagName('div')[1]

for(var c = 0; c < phrase.length; c++) {
  var obj = {
    letter: ''
  }
  obj.letter = phrase[c]
  array.push(obj)
}

var applicationState = {
  charachters: 'grumpy wizards make toxic brew for the evil queen',
  currentIndex: 0
}

function renderChar(obj, cVal) {
  var $currentChar = document.createElement('span')
  $currentChar.classList.add('char')
  $currentChar.textContent = obj.letter
  if( applicationState.currentIndex === cVal )
    $currentChar.classList.add('current-char')
  return $currentChar
}

function renderPhrase(arr) {
  var $wholePhrase = document.createElement('span')
  $wholePhrase.classList.add('whole-string')
  for(var c = 0; c < arr.length; c++){
    $wholePhrase.appendChild(renderChar(arr[c], c))
  }
  return $wholePhrase
}

$phraseContainer.appendChild(renderPhrase(array))

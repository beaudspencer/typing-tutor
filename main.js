var phrase = 'grumpy wizards make toxic brew for the evil queen'
var applicationState = {
  characters: [],
  currentIndex: 0
}
var $phraseContainer = document.getElementsByTagName('div')[1]

for(var c = 0; c < phrase.length; c++) {
  var character = {
    letter: ''
  }
  character.letter = phrase[c]
  applicationState.characters.push(character)
}

function renderChar(currentLetter, cVal) {
  var $currentChar = document.createElement('span')
  $currentChar.classList.add('char')
  $currentChar.textContent = currentLetter.letter
  if( applicationState.currentIndex === cVal )
    $currentChar.classList.add('current-char')
  return $currentChar
}

function renderPhrase(phraseArray) {
  var $wholePhrase = document.createElement('span')
  $wholePhrase.classList.add('whole-string')
  for(var c = 0; c < phraseArray.length; c++){
    $wholePhrase.appendChild(renderChar(phraseArray[c], c))
  }
  return $wholePhrase
}

$phraseContainer.appendChild(renderPhrase(applicationState.characters))

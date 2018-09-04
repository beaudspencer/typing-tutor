var applicationState = {
  phrase: 'grumpy wizards make toxic brew for the evil queen',
  characters: [],
  currentIndex: 0
}
for(var i = 0; i < applicationState.phrase.length; i++) {
  var letterObject = {
    char: ''
  }
  letterObject.char = applicationState.phrase[i]
  applicationState.characters.push(letterObject)
}
console.log(applicationState.characters)
var $phraseContainer = document.getElementsByTagName('div')[1]

function renderChar(state, letterIndex) {
  var $currentChar = document.createElement('span')
  $currentChar.classList.add('char')
  $currentChar.textContent = state.characters[letterIndex].char
  if( state.currentIndex === letterIndex )
    $currentChar.classList.add('current-char')
  return $currentChar
}

function renderPhrase(currentState) {
  var $wholePhrase = document.createElement('span')
  $wholePhrase.classList.add('whole-string')
  for(var c = 0; c < currentState.characters.length; c++){
    $wholePhrase.appendChild(renderChar(currentState, c))
  }
  return $wholePhrase
}

$phraseContainer.appendChild(renderPhrase(applicationState))

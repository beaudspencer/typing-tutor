var applicationState = {
  phrase: 'grumpy wizards make toxic brew for the evil queen',
  characters: [],
  currentIndex: 0
}
for(var i = 0; i < applicationState.phrase.length; i++) {
  var letterObject = {
    char: '',
    failure: 0
  }
  letterObject.char = applicationState.phrase[i]
  applicationState.characters.push(letterObject)
}
var $phraseContainer = document.getElementsByTagName('div')[1]

function renderChar(state, letterIndex) {
  var $currentChar = document.createElement('span')
  $currentChar.classList.add('char')
  $currentChar.textContent = state.characters[letterIndex].char
  if (state.characters[letterIndex].failure !== 0) {
    $currentChar.classList.add('failure')
  }
  if( state.currentIndex === letterIndex ){
    $currentChar.classList.add('current-char')
  }
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

function gameOver(currentState) {
  var possibleCorrect = currentState.characters.length
  var failures = 0
  for (var c = 0; c < possibleCorrect; c++){
    failures += currentState.characters[c].failure
  }
  return Math.floor(((possibleCorrect - failures) / possibleCorrect) * 100)
}

$phraseContainer.appendChild(renderPhrase(applicationState))

window.addEventListener('keydown', function (event) {
  var currentCharacter = applicationState.characters[applicationState.currentIndex]
  if (event.key !== currentCharacter.char && applicationState.currentIndex < applicationState.characters.length){
    currentCharacter.failure++
  }
  else {
    applicationState.currentIndex++
  }
  if(applicationState.currentIndex < applicationState.characters.length) {
  $phraseContainer.innerHTML = ''
  $phraseContainer.appendChild(renderPhrase(applicationState))
  }
  else {
    console.log(gameOver(applicationState))
  }
})

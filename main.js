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
var $window = document.getElementsByTagName('html')[0]

function renderChar(state, letterIndex) {
  var $currentChar = document.createElement('span')
  $currentChar.classList.add('char')
  $currentChar.textContent = state.characters[letterIndex].char
  if( state.currentIndex === letterIndex ){
    if (state.characters[letterIndex].failure !== 0){
      $currentChar.classList.add('failure')
    }
    else {
      $currentChar.classList.add('current-char')
    }
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

$phraseContainer.appendChild(renderPhrase(applicationState))

$window.addEventListener('keydown', function (event) {
  if (event.key !== applicationState.characters[applicationState.currentIndex].char){
    applicationState.characters[applicationState.currentIndex].failure += 1
  }
  else {
    applicationState.currentIndex++
  }
  $phraseContainer.innerHTML = ''
  $phraseContainer.appendChild(renderPhrase(applicationState))
})

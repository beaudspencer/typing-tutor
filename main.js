var phrase = 'grumpy wizards make toxic brew for the evil queen'
var array = []
for(var c = 0; c < phrase.length; c++) {
  var obj = {
  }
  obj[c] = phrase[c]
  array.push(obj)
}

function renderChar(obj) {
  var $currentChar = document.createElement('span')
  for(var k in obj)
    $currentChar.classList.add(k)
  return $currentChar
}

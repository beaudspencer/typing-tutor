var phrase = 'grumpy wizards make toxic brew for the evil queen'
var array = []
for(var c = 0; c < phrase.length; c++) {
  var obj = {
    char: ''
  }
  obj.char = phrase[c]
  array.push(obj)
}

console.log(array)

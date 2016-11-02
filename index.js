function theBeatlesPlay(musicians, instruments){
  var array = []
  for (let i=0; i < musicians.length; i++ ){
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array
}

function johnLennonFacts(array){
  var exclaim = []
  let i = 0
  while(i < array.length){
    exclaim.push(`${array[i]}!!!`)
    i++
  }
return exclaim
}

function iLoveTheBeatles(num){
  var array = []
  do {array.push("I love the Beatles!")
    num++
   } while (num < 15)
   return array
}
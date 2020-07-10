
let array = [];
for (var i=1; i<=100; i++) {
    array.push(i)
}


function even (array= [1,2,3,4,5,6,7,8,9,10,11,12]) {
  evenArray= [];
  for (var i=1; i<=array.length; i++)  {
    if (array[i]%2==0) {
      evenArray.push (array[i]);
    }
  }
  return evenArray;
}
console.log (even(array))



function odd (array= [1,2,3,4,5,6,7,8,9,10,11,12]) {
  oddArray=[];
  for (var i=0; i<array.length; i++) {
    if (array[i]%2==1) {
      oddArray.push (array[i]);
    }
  }
  return oddArray;
}
console.log (odd(array))


function convertArray(array) {
  let simpleArray = [];
  for (let i=0;i< array.length; i++)  {
      if (Array.isArray(array[i])) {
        simpleArray= simpleArray.concat(convertArray(array[i]));
     }else if (typeof array [i] == 'number'){
    simpleArray.push(array[i])
      }
    }
return simpleArray;
}
console.log (convertArray ([2, 3,['lol'],4,[1,2,3], 5, 'lal', ['lal','lol','lil', 1,[8,9,10, true]]]));
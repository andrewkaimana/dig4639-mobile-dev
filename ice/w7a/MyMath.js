export function Sum (a, b) {
  /**
   * The two parameters must be numbers, otherwise return undefined
   * @param a The first number
   * @param b The second number
   */
  if(typeof a == 'number' && typeof b == 'number')
    return (a + b);
  else
  return undefined;
}

let op1 = "Ten";
let op2 = 2;
let result = Sum(op1,op2);
if (result==op1+op2) {
  console.log("IT WORKED!");
  console.log(result);
} else {
  console.log("Expected " + op1+op2 + ", but got " + result);
}

export function AddList(list) {
  var result = 0; //can't add number to it if it's a non-zero number
  for (var i = 0; i < list.length; i++) {
    if(list[i] == undefined)
      return undefined;
    else
     result += list[i];
  }
  return result;
}

/*export function AddList (list) {
  for (var i = 0; i < list.length; i++) {
    if(typeof list[i] == 'number') {
      var total;
      total += list[i];
    }
    else if(typeof list[i] != 'number') {
      return undefined;
    }
  }
}*/

function DivideBy () {
  //second param is not zero
}

function ContainsString () {
  // 
}

function ReSortedNumbers () {

}

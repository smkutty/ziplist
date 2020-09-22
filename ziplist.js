/*
function called ziplist
 accepts two lists of equal length
 returns result of alternatingly taking elements
 cannot use underscore
*/
function ziplist(list1, list2){
  let final = [];
  let i = 0, n = 0;
  do{
    final[n] = list1[i];
    n++;
    final[n] = list2[i]
    i++;
    n++;
  }while(i < list1.length || i <list2.length);
  return final;
}
console.log("TESTING FUNCTION 1");
console.log(ziplist([1,2,3], ['a','b','c']));

/*
function called ziplistTheSimpleWay
 accepts two lists of equal length
 returns result of alternatingly taking elements
 must use underscore
*/
function ziplistTheSimpleWay(list1, list2){
  return _.flatten(_.zip(list1, list2));
}
console.log("TESTING FUNCTION 2");
console.log(ziplistTheSimpleWay([1,2,3], ['a','b','c']));


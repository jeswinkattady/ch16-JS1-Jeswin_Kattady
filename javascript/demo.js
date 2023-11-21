//Homework task 1-4
function fi(firstNames, secondName) {
  console.log(firstNames, secondName);
}
var name = ["harry", "tom"];
name.reverse();
// fi(name, "potter");

//wasent sure what 3 meant " returns the reversed array"

//Homework task 4-7 until every

var pets = [
  "cat", //0
  "dog", //1
  "fish", //2
  "bird", //3
  "snake", //4
  "lizard", //5
  "rat", //6
  "pig", //7
  "rabbits", //8
  "hamster", //9
];
pets.pop(4, 0); //is this okay or do you have to take it from end by keeping blank??
pets.push("pigeon");
pets.shift();
pets.unshift("hourse");
var pets2 = ["tortoise", "crab", "ferret"];
var allPets = pets.concat(pets2);
pets.splice(4, 5);
pets.slice(0, 5);
var indexOf = pets.indexOf("cat");
//(pets.reverse();) already done in part 1
//console.log(allPets);
//console.log(pets.join(" - "));
// pets.forEach(function (item, index, array) {
//   console.log(item, index, array);
// });
//console.log(pets.includes("dog"));
//console.log(indexOf);

//for spaceing

//Homework task 7(every)-7(end) until every (!!is there a way to use the rest on words or can they only be used on numbers)
var numbers = [1, 6, 12, 24, 36, 48];
function numberCheck(item) {
  //return item > 0;
  //return item > 26;
  //return item > 12;
  //return item.pets.includes("dog");(for findIndex) (not sure why not working)
}
//numbers.sort();
function numberOrder(firstItem, secondItem) {
  if (firstItem > secondItem) {
    return 1;
  }
  if (firstItem < secondItem) {
    return -1;
  }
  {
    return 0;
  }
}
numbers.sort(numberOrder);
//var bigNum = numbers.filter(numberCheck);
//var middle = numbers.find(numberCheck);
//var onePet = pets.findIndex(numberCheck); (for findIndex)
//console.log(numbers.every(numberCheck));
//console.log(numbers.some(numberCheck));
//console.log(bigNum);
//console.log(middle);
//console.log(onePet); (for findIndex)
//console.log(numbers);
//console.log(numbers);

//Question 7(map)

var devices = [
  { id: 1, title: "laptop", price: 100000 },
  { id: 2, title: "phone", price: 80000 },
  { id: 3, title: "monitor", price: 90000 },
  { id: 4, title: "PC", price: 100000 },
];

var html = devices.map(function (item) {
  return (
    "<P>" + item.title + "</P><P>£;" + Math.round(item.price / 100) + "</P>"
  );
});

//console.log(html); //.join("")

//Questions 8-11

var product1 = 200000;
var product2 = 100000;

// if ((product1 == product2, product1 <= product2)) {
//   console.log(
//     "there are two things at the same price or product 2 is more expensive"
//   );
// } else if (product1 > product2) {
//   console.log(
//     "there is nothing at the same price and product 1 is more expensive"
//   );
// }
//(homework task 8-10)

// switch ((product1, product2)) {
//   case product1 == product2:
//     console.log(
//       "there are two things at the same price or product 2 is more expensive"
//     );
//     break;
//   case product1 <= product2:
//     console.log(
//       "there are two things at the same price or product 2 is more expensive"
//     );
//     break;
//   case product1 > product2:
//     console.log(
//       "there is nothing at the same price and product 1 is more expensive"
//     );
//     break;
//   default:
//     break;
// }
//(can't figure out how to make it work)

switch (product1) {
  case 200000:
    console.log("it's the price you expected");
    break;
  case 100000:
    console.log("it's below the price you expected");
    break;
  case 300000:
    console.log("it's above the price you expected");
    break;

  default:
    break;
}

//NEED HELP WITH FOR loop

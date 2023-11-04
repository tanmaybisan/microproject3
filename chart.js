
const foodData = require('./food.json');

function listAllFoodItems() {
  return foodData;
}

function listVegetableFoodItems() {
  return foodData.filter((food) => food.category === 'Vegetable');
}

function listFruitFoodItems() {
  return foodData.filter((food) => food.category === 'Fruit');
}

function listProteinFoodItems() {
  return foodData.filter((food) => food.category === 'Protein');
}

function listNutsFoodItems() {
  return foodData.filter((food) => food.category === 'Nuts');
}

function listGrainsFoodItems() {
  return foodData.filter((food) => food.category === 'Grain');
}

function listDairyFoodItems() {
  return foodData.filter((food) => food.category === 'Dairy');
}

function listFood(food=''){
  if(food.length>0){
    return foodData.filter((food) => food.category === food)
  }
  else{
    return foodData
  }
}

listFood("Protein")
listFood('Nuts')
listFood()

function listFoodItemsAboveCalorie(calorie) {
  return foodData.filter((food) => food.calorie > calorie);
}

function listFoodItemsAboveCalorie(calorie) {
  return foodData.filter((food) => food.calorie < calorie);
}

function sortCalorie(condition){
  if(condition==='asec'){
    return foodData.filter((food) => food.calorie < calorie);
  }
  else if(condition==="desc"){
    return foodData.filter((food) => food.calorie > calorie)
  }
}

function listFoodItemsByProteinContent() {
  return foodData.sort((a,b) => b.proteins - a.proteins);
}

function listFoodItemsByCarbContent() {
  return foodData.sort((a,b) => b.cab - a.cab);
}

sortCalorie('asec')
sortCalorie('desc')
function sort(type){
  if(type==="protein"){
    return foodData.sort((a, b) => b.protiens - a.protiens)
  }
  else if(type==="carb"){
    return foodData.sort((a, b) => a.cab - b.cab)
  }
}
sort('protein')
sort('carb')

console.log(listAllFoodItems());

console.log(listVegetableFoodItems());

console.log(listFruitFoodItems());

console.log(listProteinFoodItems());

console.log(listNutsFoodItems());

console.log(listGrainsFoodItems());

console.log(listDairyFoodItems());

console.log(listFoodItemsAboveCalorie(100));

console.log(listFoodItemsBelowCalorie(100));

console.log(listFoodItemsByProteinContent());

console.log(listFoodItemsByCarbContent());

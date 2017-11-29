
var recipes = {
  prop: 1
}

function updateObjectWithKeyAndValue(recipes, key, value) {
  var recipes = {
    prop: 1
  }
  Object.assign({recipes}, {prop2: 2})
  return recipes
  var newRecipes = recipes
  Object.assign({newRecipes}, {prop2: 2})
  return newRecipes
}

function destructivelyUpdateObjectWithKeyAndValue(recipes, key, value) {
  var recipes = {
    prop: 1
  }
  recipes.prop2 = 2
  return recipes
}

function deleteFromObjectByKey(recipes, recipeName) {
  var newRecipes = recipes
  delete newRecipes.omnivore
  return newRecipes
}

function destructivelyDeleteFromObjectByKey(recipes, recipeName) {
  var recipes = {
    vegan: "muffins",
    vegetarian: "pizza",
    paleo: "steak",
    glutenFree: "brown rice pilaf"
  }
}

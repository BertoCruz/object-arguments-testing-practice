// you'll need to comment out the corresponding function below when you write it.

function getFavoriteFood(foodOpinions) {
  return foodOpinions.favoriteFood;
}

function findDifference(expenses) {
  return expenses.ipadCost - expenses.moneySaved;
}

function listFavoriteDestinations(destinations) {
  return destinations.favoriteDestinations;
}

function filterScores(subject, scores) {
  var newContainer = [];
  for(var i=0; i < scores[subject].length; i++){
    if(scores[subject][i] >= 70){
      // scores.splice(i, 1);
      // i--;
      //there will be times when we'll need to mutate the original array
      newContainer.push(scores[subject][i]);
    }
  }
  return newContainer;
}

module.exports = {
  getFavoriteFood,
  findDifference,
  listFavoriteDestinations,
  filterScores,
}

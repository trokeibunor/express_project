const express = require("express");

const router = express.Router();

// You'll add route handlers here in subsequent tasks
const { getAllRecipes, saveRecipe,getRecipe, updateRecipe, removeRecipe } = require("../controllers/recipes");


router.route('/').get(getAllRecipes).post(saveRecipe);
router.route('/:id').get(getRecipe).put(updateRecipe).delete(removeRecipe);

// Export the router
module.exports = router;
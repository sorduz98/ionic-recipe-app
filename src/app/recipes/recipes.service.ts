import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Schnitzel',
      imageUrl: 'https://i.blogs.es/1d1e82/foto-apertura/1024_2000.jpg',
      ingredients: ['Pork Meat', 'French fries', 'Salad']
    },
    {
      id: 'r2',
      title: 'Spaghetti',
      imageUrl: 'https://www.goya.com/media/4173/creole-spaghetti.jpg?quality=80',
      ingredients: ['Spaghetti', 'Meat', 'Tomatoes']
    },
  ];

  getAllRecipes(){
    return [...this.recipes];
  }

  getRecipe(recipeId: string){
    return {
      ...this.recipes.find(recipe=>{
        return recipe.id === recipeId ? true : false;
      })
    };
  }

  deleteRecipe(recipeId: string){
    this.recipes = this.recipes.filter(recipe=>{
      return recipe.id !== recipeId ? true : false;
    });
  }

  constructor() { }
}

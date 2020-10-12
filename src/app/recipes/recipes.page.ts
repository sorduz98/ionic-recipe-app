import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Recipe } from './recipe.model';
import { RecipesService } from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit, OnDestroy {
  recipes: Recipe[];
  recipeSub: Subscription;

  constructor(private recipesService: RecipesService) { }

  ngOnInit() {
    this.recipes = this.recipesService.getAllRecipes();
    this.recipeSub = this.recipesService.recipesChange.subscribe(
      (recipeChanges: Recipe[]) => {
        this.recipes = recipeChanges;
      }
    );
  }

  ngOnDestroy() {
    this.recipeSub.unsubscribe();
  }

}

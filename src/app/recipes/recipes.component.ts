import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  //recipes is an array, typecasted in Recipe class so that it can have only objects of type Recipe class.
  recipes: Recipe[] = [
    new Recipe('Test Recipe','Delicious fairly priced Fried Chicken','D:/AngularProjects/Images/FriedChicken.jpeg')
  ];
  
  constructor() { }

  ngOnInit() {
  }

}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { RecipesComponentComponent } from './recipes-component/recipes-component.component';
import { RecipeListComponentComponent } from './recipe-list-component/recipe-list-component.component';
import { RecipeDetailComponentComponent } from './recipe-detail-component/recipe-detail-component.component';
import { RecipeItemComponentComponent } from './recipe-item-component/recipe-item-component.component';
import { ShoppingListComponentComponent } from './shopping-list-component/shopping-list-component.component';
import { ShoppingEditComponentComponent } from './shopping-edit-component/shopping-edit-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    RecipesComponentComponent,
    RecipeListComponentComponent,
    RecipeDetailComponentComponent,
    RecipeItemComponentComponent,
    ShoppingListComponentComponent,
    ShoppingEditComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
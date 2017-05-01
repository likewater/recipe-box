import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <div class="jumbotron">
    <h1>India Recipe Box</h1>
    </div>
    <div class="row">
      <div class="col-lg-12">
        <h3>{{currentRecipe}}</h3>
        <ul>
          <li *ngFor="let currentRecipe of recipes">{{currentRecipe.description}}</li>
        </ul>
      </div>
    </div>
  </div>
  `
})

export class AppComponent {
  currentRecipe: string = 'Todays Recipe';
  recipes: Recipe[] = [
    new Recipe('Butter Chicken with Nan'),
    new Recipe('Idli with Sambar'),
    new Recipe('Mango Lassi')
  ];
}

export class Recipe {
  constructor(public description: string) { }
}

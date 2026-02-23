import { Routes } from '@angular/router';
import { Search } from './components/search/search';
import { RecipeDetail } from './components/recipe-detail/recipe-detail';

export const routes: Routes = [
  { path: '', component: Search },
  { path: 'recipe/:id', component: RecipeDetail },
  { path: '**', redirectTo: '' }
];
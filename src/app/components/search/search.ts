import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RecipeService } from '../../services/recipe';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './search.html',
  styleUrl: './search.css'
})
export class Search {
  query: string = '';
  meals: any[] = [];
  loading: boolean = false;
  noResults: boolean = false;

  constructor(private recipeService: RecipeService, private router: Router) {}

  search() {
    if (!this.query.trim()) return;
    this.loading = true;
    this.noResults = false;

    this.recipeService.searchMeals(this.query).subscribe(results => {
      this.meals = results;
      this.noResults = results.length === 0;
      this.loading = false;
    });
  }

  goToDetail(id: string) {
    this.router.navigate(['/recipe', id]);
  }
}
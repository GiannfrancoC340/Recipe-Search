import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private baseUrl = 'https://www.themealdb.com/api/json/v1/1';

  constructor(private http: HttpClient) {}

  searchMeals(query: string): Observable<any[]> {
    return this.http.get<any>(`${this.baseUrl}/search.php?s=${query}`).pipe(
      map(response => response.meals || [])
    );
  }

  getMealById(id: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/lookup.php?i=${id}`).pipe(
      map(response => response.meals[0])
    );
  }
}
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://localhost:8000/api';

  constructor(private http: HttpClient) {}


  addMouseStock(data: any): Observable<any> {
    const url = `${this.baseUrl}/add_stock_mouse`;
    return this.http.post(url, data);
  }

  addSystemInventory(data: any): Observable<any> {
    const url = `${this.baseUrl}/add_inventory`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post(url, data, { headers }).pipe(
      catchError(error => {
        console.error('Error adding system inventory data:', error);
        return throwError(error);
      })
    );
  }
}

  
  


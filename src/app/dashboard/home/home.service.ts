import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL } from 'src/app/Config';

@Injectable({ providedIn: 'root' })
export class HomeService {
  constructor(private http: HttpClient) {}

  getUserInfo(): Observable<any> {
    return this.http.get(
      `${API_URL}?q=Apple&from=2021-03-18&sortBy=popularity&apiKey=b0e3b0ae05c04572b1fb146c4e11caa7`
    );
  }
}

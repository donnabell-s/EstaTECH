import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'http://127.0.0.1:8000/api/Users/';

  constructor(private http: HttpClient) {
  }

  getUsers(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  addUser(userData: any): Observable<any> {
    const headers = new HttpHeaders({'Content-Type': 'application/json'}); 
    return this.http.post(`${this.baseUrl}register_user/`, userData, { headers });
  }

  logoutUser (): Observable<any> {
    const refreshToken = localStorage.getItem('refresh_token'); // Retrieve the refresh token
    const headers = new HttpHeaders({'Content-Type': 'application/json'}); 
    return this.http.post(`${this.baseUrl}logout_user/`, { refresh_token: refreshToken }, { headers })
      .pipe(
        tap(() => {
          // Clear tokens from local storage on successful logout
          localStorage.removeItem('token');
          localStorage.removeItem('refresh_token');
        })
      );
  }

  loginUser(userData: any): Observable<any> {
    console.log('Attempting to log in user with data:', userData);
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post(`${this.baseUrl}login_user/`, userData, { headers })
      .pipe(
        tap((response: any) => {
          // Store tokens in local storage on successful login
            console.log('Login successful, storing tokens:', response);
            console.log('Response from server:', response);
            if (response.token) {
              localStorage.setItem('token', response.token);
              console.log('Access Token:', response.token);
            }
            
            if (response.refresh_token) {
              localStorage.setItem('refresh_token', response.refresh_token);
              console.log('Refresh Token:', response.refresh_token);
            }
            
        })
      );
  }

  

}

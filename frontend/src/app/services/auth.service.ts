import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})


export class AuthService {
  private baseUrl = 'http://127.0.0.1:8000/api/Users/login_user'; // Adjust the URL as needed

  constructor(private http: HttpClient) {}

  private currentUserKey = 'currentuser';

  setCurrentUser(user: any): void {
    localStorage.setItem(this.currentUserKey, JSON.stringify(user));
  }

  // Get stored user data
  getCurrentUser(): any | null {
    //console.log("GET CURRENT USER: ", this.currentUserKey)
    const userData = localStorage.getItem(this.currentUserKey);
    return userData ? JSON.parse(userData) : null;
  }

    // Clear user data on logout
  clearCurrentUser(): void {
    localStorage.removeItem(this.currentUserKey);
  }

  saveToken(token: string): void {
    localStorage.setItem('access_token', token);
  }

  clearTokens(): void {
    console.debug('Clearing tokens from localStorage');
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    localStorage.removeItem('token');
    console.log('Tokens cleared');
  }

  getToken(): string | null {
    return localStorage.getItem('access_token');
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
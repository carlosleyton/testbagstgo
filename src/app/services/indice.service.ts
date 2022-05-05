import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class IndiceService {
  options = {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  };
  constructor(private http: HttpClient) {}

  getIndices() {
    return this.http.post(
      `${environment.apiUrl}/getIndices?access_token=${environment.userToken}`,
      this.options
    );
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/models/User/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl = 'http://localhost:8090'

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<User[]>(`${this.apiUrl}/users`)
  }

  getById(id: number){
    return this.http.get(`${this.apiUrl}/users/${id}`)
  }

  update(user: User) {
    return this.http.put(`${this.apiUrl}/users/${user.id}`, user);
}

delete(id: number) {
    return this.http.delete(`${this.apiUrl}/users/${id}`);
}

register(user: User) {
  return this.http.post(`${this.apiUrl}/users/register`, user);
}

}

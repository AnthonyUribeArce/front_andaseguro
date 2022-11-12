import { Rol } from './../model/rol';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RolService {
  url: string = "https://andaseguro.herokuapp.com/roles"

  constructor(private http:HttpClient) { }

  listar(){
    return this.http.get<Rol[]>(this.url);

  }
}

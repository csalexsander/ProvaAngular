import { Injectable } from '@angular/core';
import {pessoa} from './pessoa';
import {HttpClient, HttpHeaders,HttpClientModule} from '@angular/common/http'
import { Observable } from 'rxjs';
import {map, catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {
  HttpUrl : string = "localhost/"
  constructor(private http: HttpClient) { }

  getPessoas() : Observable<pessoa[]>{
    return this.http.get<pessoa[]>(this.HttpUrl + "/getPessoa")
  }

  setPessoa(Pessoa : pessoa) : Observable<number> {
   return this.http.post<pessoa>(this.HttpUrl + "/setpessoa",Pessoa).pipe(
     map( x => 1))
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Results, Result } from '../interfaces/result.interface';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  
  private apiUrl: string = 'http://localhost:8080/api';

  constructor( private http: HttpClient ) { }

  searchByQuery( query: string ): Observable<Results> {
    const url = `${ this.apiUrl }/items?q=${ query }`;
    
    return this.http.get<Results>( url );
  }
  
  searchById( id: string ): Observable<Result> {
    const url = `${ this.apiUrl }/items/${ id }`;
    
    return this.http.get<Result>( url );
  }
}

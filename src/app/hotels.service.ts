import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Hotel } from './hotels/Hotel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HotelsService {

  private endPoint: string = "http://almundoapi-portafolio.josecaceres.info/api/v1/hotels";

  constructor(private http: HttpClient) { }

  getAll(): Observable<Array<Hotel>> {
    return this.http.get<Array<Hotel>>(this.endPoint);
  }
}

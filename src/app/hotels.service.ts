import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Hotel } from './hotels/Hotel';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HotelsService {

  private name: string;
  private stars: number;
  private page: number;
  private lastAction: string;

  private endPoint: string = "https://almundoapi-portafolio.josecaceres.info/api/v1/hotels";

  public nameSubject: Subject<string>;
  public name$: Observable<string>;

  public starsSubject: Subject<number>;
  public stars$: Observable<number>;

  constructor(private http: HttpClient) {
    this.page = 1;

    this.nameSubject = new Subject<string>();
    this.name$ = this.nameSubject.asObservable();

    this.starsSubject =  new Subject<number>();
    this.stars$ = this.starsSubject.asObservable();
  }

  getAll(): Observable<Array<Hotel>> {
    this.page = 1;
    this.lastAction = 'listAll';
    return this.http.get<Array<Hotel>>(this.endPoint);
  }

  filterByName(name: string): Observable<Array<Hotel>> {
    this.page = 1;
    this.name = name;
    this.lastAction = 'filterByName';
    return this.http.get<Array<Hotel>>(`${this.endPoint}?name=${this.name}`);
  }

  filterByStars(stars: number): Observable<Array<Hotel>> {
    this.page = 1;
    this.stars = stars;
    this.lastAction = 'filterByStars';
    return this.http.get<Array<Hotel>>(`${this.endPoint}?stars=${this.stars}`);
  }

  paginate(): Observable<Array<Hotel>> {
    if (this.lastAction === 'listAll') {
      this.page++;
      return this.http.get<Array<Hotel>>(`${this.endPoint}?page=${this.page}`);
    }

    if (this.lastAction === 'filterByName') {
      this.page++;
      return this.http.get<Array<Hotel>>(`${this.endPoint}?name=${this.name}&page=${this.page}`);
    }

    if (this.lastAction === 'filterByStars') {
      this.page++;
      return this.http.get<Array<Hotel>>(`${this.endPoint}?stars=${this.stars}&page=${this.page}`);
    }
  }
}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProductsService {

  constructor(private http: HttpClient ) { }

  public getProducts(): Observable<any> {
    return this.http.get("../../assets/json/products.json");
  }
}

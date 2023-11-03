import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  // protected products: any[] = [];
  product: any;
  constructor(private http: HttpClient) {}

  getProducts() {
    // this.products
    return this.http.get('https://dummyjson.com/products');
  }

  getProductsById(id: number): any {
    return this.http.get(`https://dummyjson.com/products/${id}`);
  }

  transferProduct(product: any) {
    this.product = product;
  }

  getProduct() {
    return this.product;
  }
}

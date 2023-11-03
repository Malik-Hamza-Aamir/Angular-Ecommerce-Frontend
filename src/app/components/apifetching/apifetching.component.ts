import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-apifetching',
  templateUrl: './apifetching.component.html',
})
export class ApifetchingComponent implements OnInit {
  products: any = [];

  // declare service
  constructor(private dataService: DataService) {}

  // use service to get data
  ngOnInit(): void {
    this.dataService.getProducts().subscribe((data: any) => {
      this.products = data.products;
    });
  }

  // update a particular product and then sending updated data
  updateProduct(product: any) {
    this.products = { ...this.products, ...product };
  }
}

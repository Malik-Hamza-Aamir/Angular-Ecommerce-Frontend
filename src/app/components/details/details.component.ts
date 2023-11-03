import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
})
export class DetailsComponent implements OnInit {
  route: ActivatedRoute = inject(ActivatedRoute);
  productId = 0;
  product: any;

  constructor(private dataService: DataService) {
    this.productId = Number(this.route.snapshot.params['id']);
  }

  ngOnInit(): void {
    this.product = this.dataService.getProduct();
  }
}

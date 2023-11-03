import { Component, Input } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
import { MatDialog } from '@angular/material/dialog';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
})
export class ProductCardComponent {
  // products from api via apifetching component
  @Input() products: any;
  @Input() updateProduct: (product: any) => void;

  constructor(private dataService: DataService, private matDialog: MatDialog) {
    this.updateProduct = (product: any) => {}
  }

  // sending data to model without fetching the api
  openDialog(product: any) {
    this.matDialog.open(ModalComponent, {
      data: {
        product,
        updateProduct: this.updateProduct.bind(this)
      }
    });
  }
  
  // details page data displaying without api fetching
  passProductToDetails(product: any) {
    this.dataService.transferProduct(product);
  }
  
}

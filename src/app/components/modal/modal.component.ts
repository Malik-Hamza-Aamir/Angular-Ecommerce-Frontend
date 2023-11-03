import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class ModalComponent {
  inputTitle: string = '';
  inputBrand: string = '';
  inputDescription: string = '';
  inputPrice: number = 0;
  inputRating: number = 0;

  clicked: boolean = false;
  product: any = this.data.product;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<ModalComponent>) {}

  showEdit() {
    this.clicked = !this.clicked;
    if (this.clicked) {
      this.inputTitle = this.product.title;
      this.inputBrand = this.product.brand;
      this.inputDescription = this.product.description;
      this.inputPrice = this.product.price;
      this.inputRating = this.product.rating;
    }
  }

  // handling the form event
  handleSubmit(event: any) {
    event.preventDefault();
    const updatedProduct = {
      id: this.product.id,
      title: this.inputTitle,
      brand: this.inputBrand,
      description: this.inputDescription,
      price: this.inputPrice,
      rating: this.inputRating,
    };
    this.data.updateProduct(updatedProduct);
    this.clicked = !this.clicked;
    this.dialogRef.close();
  }
}

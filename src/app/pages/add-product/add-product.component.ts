import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TestService } from 'src/app/Services/test.service';
import { Products } from '../test/test';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  addProduct: FormGroup;
  submitted: boolean = false;
  newProductJSON;
  
  constructor(private formBuilder: FormBuilder,private router: Router, private testService:TestService,private routing:ActivatedRoute) { }

  ngOnInit(): void {
    this.addProduct = this.formBuilder.group({
      productName: [''],
      productDetails: [''],
      price: [''],
      eligibilityCriteria: [],
      img:[]
    });
  }
  
  onSubmit() {
    console.log("SUBMIT");
    if (this.addProduct.invalid) {
      return;
    }
  

  this.newProductJSON={
    "productName": this.addProduct.value.productName,
    "productDetails": this.addProduct.value.productDetails,
    "price": this.addProduct.value.price,
    "eligibilityCriteria": this.addProduct.value.eligibilityCriteria,
    "image":this.addProduct.value.image
  }


  console.log(this.newProductJSON);
  this.testService.addProduct(this.newProductJSON).subscribe(data => {
    this.router.navigate(['']);
  });
  }

processFile(imageInput:any){
  const file:File=imageInput.files[0];
  const reader = new FileReader();
   reader.readAsDataURL(file);

}

}
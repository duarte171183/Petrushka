import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { FormArray, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: any[];
  instances: any;
  elems:any;
  itemSelect: any;
  types: any;
  productForm: FormGroup;
  typeList: any;
  size: { "id": number; "size": string; }[];

   
  constructor(private productsService: ProductsService) {
    
   }
  public params :string;

  ngOnInit() {
    //materialize init modal
    this.elems = document.querySelectorAll('.modal');
    this.instances = M.Modal.init(this.elems);
    
    //get products service
    this.productsService.getProducts().subscribe(products => {
      this.products = products.products;
    });

  }

  viewDetail(id: string){
    this.instances[0].open();
    this.itemSelect=this.products.find(p => p._id==id);
    console.log({"item Select": this.itemSelect});
  }
  
  
  viewDetailAttribute(idattributes: string, productId: string){
    this.instances[0].open();
    this.products.filter(p => p._id);
    console.log(this.products);
  }
}

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

   get typesFormGroup() {
    return this.productForm.get('product_types') as FormArray;
  }

  constructor(private productsService: ProductsService, private fb: FormBuilder) {
    
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

    this.types =[
      {"id" :1, "type": "Vestido largo"},
      {"id" :2, "type": "Vestido corto"},
      {"id" :3, "type": "Short"}
    ];

    this.size=[
      {"id":1, "size": "ch"},
      {"id":2, "size": "m"},
      {"id":3, "size": "gd"},
      {"id":4, "size": "xg"}
    ]

    this.createForm();
  }

  ngAfterViewInit() {
    var select = document.querySelectorAll('select');
    var instances = M.FormSelect.init(select);
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

  openform(){
    this.instances[0].open();
  }

  createForm() {
    this.productForm = this.fb.group({
       style: ['', Validators.required ],
       mark: ['', Validators.required ],
       type: ['', Validators.required],
       product_types: this.fb.array([this.createType()])
    });
  
    this.typeList = this.productForm.get('product_types') as FormArray;
  }

  changeType(e){
    console.log(e.target.value);
    this.typeName.setValue(e.target.value, {
      onlySelf: true
    })
  }

  get typeName() {
    return this.productForm.get('type');
  }

  createType(): FormGroup {
    return this.fb.group({
      size: ['', Validators.compose([Validators.required])],
      quantity: ['', Validators.compose([Validators.required])],
      color: ['', Validators.compose([Validators.required])]
    });
  
  }

  addType(){
    this.typeList.push(this.createType());
  }

  removeType(index){
    if(index>0){
      this.typeList = this.productForm.get('product_types') as FormArray;
      this.typeList.removeAt(index);
    }
  }


  // // remove contact from group
  // removeContact(index) {
  //   // this.contactList = this.form.get('contacts') as FormArray;
  //   this.contactList.removeAt(index);
  // }

  // // triggered to change validation of value field type
  // changedFieldType(index) {
  //   let validators = null;

  //   if (this.getContactsFormGroup(index).controls['type'].value === 'email') {
  //     validators = Validators.compose([Validators.required, Validators.email]);
  //   } else {
  //     validators = Validators.compose([
  //       Validators.required,
  //       Validators.pattern(new RegExp('^\\+[0-9]?()[0-9](\\d[0-9]{9})$')) // pattern for validating international phone number
  //     ]);
  //   }

  //   this.getContactsFormGroup(index).controls['value'].setValidators(
  //     validators
  //   );

  //   this.getContactsFormGroup(index).controls['value'].updateValueAndValidity();
  // }

  // // get the formgroup under contacts form array
  // getContactsFormGroup(index): FormGroup {
  //   // this.contactList = this.form.get('contacts') as FormArray;
  //   const formGroup = this.contactList.controls[index] as FormGroup;
  //   return formGroup;
  // }

  // method triggered when form is submitted
  submit() {
    console.log(this.productForm.value);
  }

}

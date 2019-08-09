import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})
export class AddOrderComponent implements OnInit { 
  size: { "id": number; "size": string; }[];
  types: { "id": number; "type": string; "Ganacia": number; "Comision": number; }[];
  angForm: FormGroup;
  typeList:  FormArray;
  formList: FormArray;
  instancesCollapsible: any;

 
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.types =[
      {"id" :1, "type": "Vestido largo", "Ganacia": 250, "Comision": 23},
      {"id" :2, "type": "Vestido corto", "Ganacia": 350, "Comision": 25},
      {"id" :3, "type": "Short", "Ganacia": 150, "Comision": 22}
    ];

    this.size=[
      {"id":1, "size": "ch"},
      {"id":2, "size": "m"},
      {"id":3, "size": "gd"},
      {"id":4, "size": "xg"}
    ]

    this.createForm();
    // this.angForm.valueChanges.subscribe(data => this.validateForm());
    // this.validateForm();
  }

  
  ngAfterViewInit() {
    var select = document.querySelectorAll('select');
    var instances = M.FormSelect.init(select);
    this.initCollapsable();
  }

  initCollapsable(){
      var elems = document.querySelectorAll('.collapsible');
      this.instancesCollapsible = M.Collapsible.init(elems);
  }

  createForm() {
    this.angForm = this.fb.group({
       order_item: this.fb.array([this.createOrderItem()])
    });
  }

  createOrderItem(): FormGroup {
    return this.fb.group({
       dll: ['', Validators.required ],
       cambio_dia: ['', Validators.required],
       style: ['', Validators.required ],
       mark: ['', Validators.required ],
       type: ['', Validators.required],
       product_types: this.fb.array([this.createType()])
    });
  }

  
  createType(): FormGroup {
    return this.fb.group({
      size: ['', Validators.compose([Validators.required])],
      quantity: ['', Validators.compose([Validators.required])],
      color: ['', Validators.compose([Validators.required])]
    });
  
  }

  addOrder(){
    const control = <FormArray>this.angForm.controls['order_item'];
    control.push(this.createOrderItem());
  }

  removeOrder(index){
    const control = (<FormArray>this.angForm.controls['order_item']) as FormArray;
    control.removeAt(index);
  }

  addType(index){
    const control = (<FormArray>this.angForm.controls['order_item']).at(index).get('product_types') as FormArray;
    control.push(this.createType());
  }

  removeType(indexorder, indexproduct){
    const control = (<FormArray>this.angForm.controls['order_item']).at(indexorder).get('product_types') as FormArray;
    control.removeAt(indexproduct);
  }

  getOrderFormGroup(index){
    const formGroup = (<FormArray>this.angForm.controls['order_item']).at(index) as FormArray;
    return formGroup;
  }

  getTypesFormGroup(indexorder, indexproduct){
    const formGroup = (<FormArray>this.angForm.controls['order_item']).at(indexorder).get('product_types') as FormArray;
    return formGroup.at(indexproduct);
  }

  openCloseCollapse(index){
    var elems = document.querySelectorAll('.collapsible');
    this.instancesCollapsible = M.Collapsible.init(elems);
  }

  submit() {
    console.log(this.angForm.value);
  }


}

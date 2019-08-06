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

  
  get typesFormGroup() {
    return this.angForm.get('product_types') as FormArray;
  }

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
  }

  
  ngAfterViewInit() {
    var select = document.querySelectorAll('select');
    var instances = M.FormSelect.init(select);
  }

  createForm() {
    this.angForm = this.fb.group({
       style: ['', Validators.required ],
       mark: ['', Validators.required ],
       type: ['', Validators.required],
       product_types: this.fb.array([this.createType()])

    });
  
    this.typeList = this.angForm.get('product_types') as FormArray;
  }

  
  createType(): FormGroup {
    return this.fb.group({
      size: ['', Validators.compose([Validators.required])],
      quantity: ['', Validators.compose([Validators.required])],
      color: ['', Validators.compose([Validators.required])]
    });
  
  }

  changeType(event){
   
  }

  get typeName() {
    return this.angForm.get('product_types');
  }


  addType(){
    this.typeList.push(this.createType());
  }

  removeType(index){
    if(index>0){
      this.typeList = this.angForm.get('product_types') as FormArray;
      this.typeList.removeAt(index);
    }
  }
 
  changedFieldType(index) {
    let validators = null;
    this.getTypesFormGroup(index).controls['value'].setValidators(
      validators
    );

    this.getTypesFormGroup(index).controls['value'].updateValueAndValidity();
  }

  getTypesFormGroup(index): FormGroup {
    this.typeList = this.angForm.get('product_types') as FormArray;
    const formGroup = this.typeList.controls[index] as FormGroup;
    return formGroup;
  }

  submit() {
    console.log(this.angForm.value);
  }


}

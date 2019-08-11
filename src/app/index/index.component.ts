import { Component ,OnInit, Output ,EventEmitter,  } from '@angular/core';
import { AbstractControl, FormControl,FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'index',
  templateUrl: './index.component.html',
  styles: [
    `
      .dynamic-delete-button {
        cursor: pointer;
        position: relative;
        top: 4px;
        font-size: 24px;
        color: #999;
        transition: all 0.3s;
      }

      .dynamic-delete-button:hover {
        color: #777;
      }

      .passenger-input {
        width: 60%;
        margin-right: 8px;
      }

      [nz-form] {
        max-width: 600px;
      }

      .add-button {
        width: 60%;
      }
    `
  ]
})
export class IndexComponent  implements OnInit {
    validateForm: FormGroup;
    isAll;
    listOfControl: Array<{ i: number; controlInstance: string }> = [];
    @Output() mue:EventEmitter<any>=new EventEmitter();
    submitForm(): void {
      this.isAll=true;
      for (const i in this.validateForm.controls) {
        this.validateForm.controls[i].markAsDirty();
        this.validateForm.controls[i].updateValueAndValidity();
      }
      console.log(this.validateForm.value);
      for(let i in this.validateForm.value){
        if(this.validateForm.value[i]==null){
          this.isAll=false;
          return;
        }
      }
      if(this.isAll){
        var arr=[];
        for (let i in this.validateForm.value) {
          arr.push(this.validateForm.value[i]); //属性
        }
        var zzz=[];
        for(var i=0;i<arr.length;i++){
          if(i!=1){
            if(i===0){
              var obj=new Object();
              obj['title']=arr[i];
              obj['key']=i+1;
              obj['children']=[];
              zzz.push(obj);
            }else{
              var obj=new Object();
              obj['title']=arr[i];
              obj['key']=i;
              obj['children']=[];
              zzz[0].children.push(obj);
            }
          }
          
        }
        this.mue.emit(zzz);
      }
    }
  
    addField(event): void {
        this.listOfControl=[];
    
        ;
        for(var i=0;i<event;i++){
            var  control = {
                i,
                controlInstance: `passenger${i}`
              }
            var  index = this.listOfControl.push(control);
            this.validateForm.addControl(
                this.listOfControl[index - 1].controlInstance,
                new FormControl(null, Validators.required)
              );
        }
      }
  
    constructor(private fb: FormBuilder) {}
  
    ngOnInit(): void {
      this.validateForm = this.fb.group({
        note: [null, [Validators.required]],
        gender: [null, [Validators.required]]
      });
    }
}

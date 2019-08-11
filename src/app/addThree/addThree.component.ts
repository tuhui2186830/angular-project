import { Component ,OnInit, Output ,EventEmitter,Input  } from '@angular/core';
import { AbstractControl, FormControl,FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'addThree',
  templateUrl: './addThree.component.html',
  styles: [
    `
      [nz-form] {
        max-width: 600px;
      }
    `
  ]
})
export class AddThreeComponent  implements OnInit {
    validateForm: FormGroup;
    listOfControl: Array<{ i: number; controlInstance: string }> = [];
    isFinshAll;
    @Output() addThreeList:EventEmitter<any>=new EventEmitter();
    @Output() isFinshAdd:EventEmitter<boolean>=new EventEmitter();
    @Input() key:any;
    addToThree(): void {
      this.isFinshAll=true;
      for (const i in this.validateForm.controls) {
        this.validateForm.controls[i].markAsDirty();
        this.validateForm.controls[i].updateValueAndValidity();
      }
      var arr=[];
      for (let i in this.validateForm.value) {
        arr.push(this.validateForm.value[i]); //属性
      }
      for(let i in this.validateForm.value){
        if(this.validateForm.value[i]==null){
          this.isFinshAll=false;
          return;
        }
      }
      if(this.isFinshAll){
        var zzz=[];
        for(var i=0;i<arr.length;i++){
          if(i!=0){
            var qqq=new Object();
            qqq['title']=arr[i];
            qqq['key']=this.key;
            zzz.push(qqq);
          }
        }
        this.validateForm.reset();
        this.addThreeList.emit(zzz);
        this.isFinshAdd.emit(true);
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
            const index = this.listOfControl.push(control);
            this.validateForm.addControl(
                this.listOfControl[index - 1].controlInstance,
                new FormControl(null, Validators.required)
              );
        }
      }
  
    constructor(private fb: FormBuilder) {}
  
    ngOnInit(): void {
      this.validateForm = this.fb.group({
        gender: [null, [Validators.required]]
      });
    }
}
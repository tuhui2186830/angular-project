import { Component, EventEmitter, Input, Output,OnInit } from '@angular/core';
import { NzFormatEmitEvent } from 'ng-zorro-antd';

@Component({
    selector:'orglist',
    templateUrl:'orglists.component.html'
})

export class OrgListComponent implements OnInit{
    @Output() addThreeIs:EventEmitter<number>=new EventEmitter();
    @Input() orgLists:any;
    @Output() addExcelIs:EventEmitter<any>=new EventEmitter();
    firstTitle=null;
    firstChilrens;
    open=true;
    ngOnInit():void{
     this.firstTitle=this.orgLists[0].title;
     this.firstChilrens=this.orgLists[0].children;
    }
    addThree(e){
        this.addThreeIs.emit(e);
    }
    openExcel(e){
        this.addExcelIs.emit(e);
    }
}

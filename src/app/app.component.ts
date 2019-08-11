import { Component,OnInit,ViewChild } from '@angular/core';
import { IndexComponent } from './index/index.component'
import { from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  title = 'my-app';
  orgs;
  isNoMue=false;
  isAddThree=false;
  addThreeKey;
  isExcel=false;
  ngOnInit(){
  }
  getMue(e){
    if(e){
      this.isNoMue=true;
    }
    this.orgs=e;
  }
  getAddThreeKey(e){
    this.isAddThree=true;
    if(e){
      this.addThreeKey=e;
    }
  }
  getAddThree(e){
    for(var i=0;i<e.length;i++){
      for(var z=0;z<this.orgs[0].children.length;z++){
        if(e[i].key==this.orgs[0].children[z].key){
          this.orgs[0].children[z].children.push(e[i]);
        }
      }
    }
  }
  getFinsh(e){
    if(e){
      this.isAddThree=false;
    }
  }
  getExcel(e){
    console.log(e);
    if(e){
      this.isExcel=true;
    }
  }
}

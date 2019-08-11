import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import zh from '@angular/common/locales/zh';

import { IndexComponent } from './index/index.component';
import { OrgListComponent } from './org/orglists.component';
import { AddThreeComponent } from './addThree/addThree.component';
import { AddExcelComponent } from './addExcel/addExcel.component';
import { from } from 'rxjs';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    OrgListComponent,
    AddThreeComponent,
    AddExcelComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent]
})
export class AppModule { }

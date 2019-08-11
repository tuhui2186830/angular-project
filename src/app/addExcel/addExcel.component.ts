import { HttpClient, HttpRequest, HttpResponse } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { NzMessageService, UploadFile } from 'ng-zorro-antd';
import { filter } from 'rxjs/operators';

@Component({
    selector: 'addExcel',
    templateUrl: './addExcel.component.html'
  })
  export class AddExcelComponent   implements OnInit{
    //上传等待与文件数组
    uploading = false;
    fileList: UploadFile[] = [];

    //是否上传完成
    isFineshUpload=false;
  
    constructor(private http: HttpClient, private msg: NzMessageService) {}
  
    //上传之前的校验
    beforeUpload = (file: UploadFile): boolean => {
      this.fileList = this.fileList.concat(file);
      return false;
    };

    //预加载
    ngOnInit(){
      this.allArray.push(this.listOfData);
    }
  
    handleUpload(): void {
      const formData = new FormData();
      // tslint:disable-next-line:no-any
      this.fileList.forEach((file: any) => {
        formData.append('files[]', file);
        //预留电路板名称
        // formDataTask.append('markIds',this.marks);
      });
      this.uploading = true;
      // 上传地址
      const req = new HttpRequest('POST', 'URL', formData, {});
      this.http
        .request(req)
        .pipe(filter(e => e instanceof HttpResponse))
        .subscribe(
          //上传成功
          () => {
            this.isFineshUpload=true;
            this.uploading = false;
            this.fileList = [];
            this.msg.success('upload successfully.');
          },
           //上传失败
          () => {
            this.uploading = false;
            this.msg.error('upload failed.');
          }
        );
    };
    // 模拟后台传送数据
    allArray=[];
    // 模拟数据
    listOfData = [
      {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park'
      },
      {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park'
      },
      {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park'
      }
    ];

    //一级降档
    changeFirstTable(arr,arrObj,index){
      //当年行所有数据
      console.log(arrObj);
      //arr[index]=res.data
      //            })
      //post
      // var sendArr=[{"kindNum":arrObj.kindNum,'name':arrObj.name}]
      // this.http.post('url',{sendArr,'lowStatus':"1"})
      //          .subscribe((res)=>{
      //             if(res.code==200){
      //               console.log(res);
      //             }
      //          })
      //直接改变当前数组中的某一行数据，
      arr[index]={
        key: '1',
        name: '屁股',
        age: 32,
        address: 'New York No. 1 Lake Park'
      }
    }
    //二级降档
    changeSecondTable(arr,arrObj,index){
       //当年行所有数据
       console.log(arrObj);
       //前后台交互请求数据
      //  var sendArr=[{"kindNum":arrObj.kindNum,'name':arrObj.name}]
      // this.http.post('url',{sendArr,'lowStatus':"2"})
      //          .subscribe((res)=>{
      //             if(res.code==200){
      //               console.log(res);
      //             }
      //          })
       //直接改变当前数组中的某一行数据，
       arr[index]={
         key: '1',
         name: '屁股',
         age: 32,
         address: 'New York No. 1 Lake Park'
       }
    }
    //三级降档
    changeThirdTable(arr,arrObj,index ){
      //当年行所有数据
      console.log(arrObj);
      //前后台交互请求数据
      // var sendArr=[{"kindNum":arrObj.kindNum,'name':arrObj.name}]
      // this.http.post('url',{sendArr,'lowStatus':"3"})
      //         .subscribe((res)=>{
      //           if(res.code==200){
      //             console.log(res);
      //           }
      //         })
      //直接改变当前数组中的当前项
       arr[index]={
         key: '1',
         name: '屁股',
         age: 32,
         address: 'New York No. 1 Lake Park'
       }
    }
    changeAllFirstTable(){
      // var sendArr=[{"kindNum":arrObj.kindNum,'name':arrObj.name}]
      // this.http.post('url',{sendArr,'lowStatus':"3"})
      //         .subscribe((res)=>{
      //           if(res.code==200){
      //             console.log(res);
      //           }
      //         })
    }
    changeAllSecondTable(){
      // var sendArr=[{"kindNum":arrObj.kindNum,'name':arrObj.name}]
      // this.http.post('url',{sendArr,'lowStatus':"3"})
      //         .subscribe((res)=>{
      //           if(res.code==200){
      //             console.log(res);
      //           }
      //         })
    }
    changeAllThirdTable(){
      // var sendArr=[{"kindNum":arrObj.kindNum,'name':arrObj.name}]
      // this.http.post('url',{sendArr,'lowStatus':"3"})
      //         .subscribe((res)=>{
      //           if(res.code==200){
      //             console.log(res);
      //           }
      //         })
    }
  }
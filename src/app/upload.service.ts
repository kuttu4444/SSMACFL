import { Injectable } from '@angular/core';
import * as AWS from 'aws-sdk/global';
import * as S3 from 'aws-sdk/clients/s3';
@Injectable({
  providedIn: 'root'
})
export class UploadService {

  fileUpload(file,filename):boolean {
    const contentType = file.type;
    const bucket = new S3(
    {
    accessKeyId: 'AKIAYHJANHKNUVOSUXCO',
    secretAccessKey: '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',
    region: 'us-east-1',
    }
    );
    const params = {
    Bucket: 'satyasaifarmersfederation',
    Key: filename,
    Body: file,
    ACL: 'public-read',
    ContentType: contentType
    };
    bucket.upload(params).on('httpUploadProgress', function (evt) {
     // window.setTimeout('alert("Uploading file :'+evt.loaded + ' of ' + evt.total + ' Bytes");window.close();', 5000);
     var el = document.createElement("div");
     el.setAttribute("style","position:absolute;top:20%;left:10%;background-color:#eeeeee;");
     el.innerHTML = 'Uploading file :'+evt.loaded + ' of ' + evt.total + ' Bytes';
     setTimeout(function(){
      el.parentNode.removeChild(el);
     },500);
     document.body.appendChild(el);
    }).send(function (err, data) {
          if (err) {
              console.log('There was an error uploading your file: ', err);
              return false;
          }
          window.alert('File Uploaded Sucessfully');
          return true;
      }); 
    return false;
    }
  constructor() { }
}

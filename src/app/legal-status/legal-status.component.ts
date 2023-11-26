import { Component, OnInit } from '@angular/core';
import { LoadconfigService } from '../loadconfig.service';

@Component({
  selector: 'app-legal-status',
  templateUrl: './legal-status.component.html',
  styleUrls: ['./legal-status.component.css']
})
export class LegalStatusComponent implements OnInit {

  LegalStatusLine1:string;
LegalStatusLine2Heading:string;
LegalStatusLine2Value:string;
LegalStatusLine3Heading:string;
LegalStatusLine3Value:string;
LegalStatusLine4Heading:string;
LegalStatusLine4Value:string;
LegalStatusLine5Heading:string;
LegalStatusLine5Value:string;
LegalStatusLine6:string;
LegalStatusLine7:string;
LegalStatusLine8:string;
LegalStatusLine9Heading:string;
LegalStatusLine9Value:string;
LegalStatusLine10Heading:string;
LegalStatusLine10Value:string;
LegalStatusLine11Heading:string;
LegalStatusLine11Value:string;
LegalStatusLine12Heading:string;
LegalStatusLine12Value:string;
LegalStatusLine13Heading:string;
LegalStatusLine13Value:string;
LegalStatusLine14Heading:string;
LegalStatusLine14Value:string;
LegalStatusLine15Heading:string;
LegalStatusLine15Value:string;
LegalStatusLine16Heading:string;
LegalStatusLine16Value:string;
LegalStatusLine17Heading:string;
LegalStatusLine17Value:string;


  constructor(private configLoaderService: LoadconfigService) { }

  ngOnInit(): void {
    this.LegalStatusLine1=this.configLoaderService.LegalStatusLine1;
    this.LegalStatusLine2Heading=this.configLoaderService.LegalStatusLine2Heading;
    this.LegalStatusLine2Value=this.configLoaderService.LegalStatusLine2Value;
    this.LegalStatusLine3Heading=this.configLoaderService.LegalStatusLine3Heading;
    this.LegalStatusLine3Value=this.configLoaderService.LegalStatusLine3Value;
    this.LegalStatusLine4Heading=this.configLoaderService.LegalStatusLine4Heading;
    this.LegalStatusLine4Value=this.configLoaderService.LegalStatusLine4Value;
    this.LegalStatusLine5Heading=this.configLoaderService.LegalStatusLine5Heading;
    this.LegalStatusLine5Value=this.configLoaderService.LegalStatusLine5Value;
    this.LegalStatusLine6=this.configLoaderService.LegalStatusLine6;
    this.LegalStatusLine7=this.configLoaderService.LegalStatusLine7;
    this.LegalStatusLine8=this.configLoaderService.LegalStatusLine8;
    this.LegalStatusLine9Heading=this.configLoaderService.LegalStatusLine9Heading;
    this.LegalStatusLine9Value=this.configLoaderService.LegalStatusLine9Value;
    this.LegalStatusLine10Heading=this.configLoaderService.LegalStatusLine10Heading;
    this.LegalStatusLine10Value=this.configLoaderService.LegalStatusLine10Value;
    this.LegalStatusLine11Heading=this.configLoaderService.LegalStatusLine11Heading;
    this.LegalStatusLine11Value=this.configLoaderService.LegalStatusLine11Value;
    this.LegalStatusLine12Heading=this.configLoaderService.LegalStatusLine12Heading;
    this.LegalStatusLine12Value=this.configLoaderService.LegalStatusLine12Value;
    this.LegalStatusLine13Heading=this.configLoaderService.LegalStatusLine13Heading;
    this.LegalStatusLine13Value=this.configLoaderService.LegalStatusLine13Value;
    this.LegalStatusLine14Heading=this.configLoaderService.LegalStatusLine14Heading;
    this.LegalStatusLine14Value=this.configLoaderService.LegalStatusLine14Value;
    this.LegalStatusLine15Heading=this.configLoaderService.LegalStatusLine15Heading;
    this.LegalStatusLine15Value=this.configLoaderService.LegalStatusLine15Value;
    this.LegalStatusLine16Heading=this.configLoaderService.LegalStatusLine16Heading;
    this.LegalStatusLine16Value=this.configLoaderService.LegalStatusLine16Value;
    this.LegalStatusLine17Heading=this.configLoaderService.LegalStatusLine17Heading;
    this.LegalStatusLine17Value=this.configLoaderService.LegalStatusLine17Value;
  }

}

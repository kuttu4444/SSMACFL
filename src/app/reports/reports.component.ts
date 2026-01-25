import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { LoadconfigService } from '../loadconfig.service';
@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {
reportpath:string;
isOn:boolean;
Annualreport1:string;
Annualreport2:string;
Annualreport3:string;
Annualreport4:string;
Annualreport5:string;
Auditreport1:string;
Auditreport2:string;
Auditreport3:string;
Auditreport4:string;
Auditreport5:string;
Recentreport1:string;
Recentreport2:string;
Recentreport3:string;
Recentreport4:string;
Recentreport5:string;
Recentreport6:string;
LinkReportName:string;
  constructor(private configLoaderService: LoadconfigService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.Annualreport1=this.configLoaderService.Annualreport1;
    this.Annualreport2=this.configLoaderService.Annualreport2;
    this.Annualreport3=this.configLoaderService.Annualreport3;
    this.Annualreport4=this.configLoaderService.Annualreport4;
    this.Annualreport5=this.configLoaderService.Annualreport5;
    this.Auditreport1=this.configLoaderService.Auditreport1;
    this.Auditreport2=this.configLoaderService.Auditreport2;
    this.Auditreport3=this.configLoaderService.Auditreport3;
    this.Auditreport4=this.configLoaderService.Auditreport4;
    this.Auditreport5=this.configLoaderService.Auditreport5;
    this.Recentreport1=this.configLoaderService.Recentreport1;
    this.Recentreport2=this.configLoaderService.Recentreport2;
    this.Recentreport3=this.configLoaderService.Recentreport3;
    this.Recentreport4=this.configLoaderService.Recentreport4;
    this.Recentreport5=this.configLoaderService.Recentreport5;
    this.Recentreport6=this.configLoaderService.Recentreport6;
    this.isOn=true;
    this.route.queryParams
    .subscribe(params => {
     this.LinkReportName= params.report;
    (<HTMLIFrameElement>document.getElementById('pdfview')).src = "https://s3.us-east-1.amazonaws.com/srisatyasaifarmersfederation.org/" + this.LinkReportName + "#view=FitH&toolbar=0&scrollbar=0";
    }
  );
  if(!this.LinkReportName)
  {
    (<HTMLIFrameElement>document.getElementById('pdfview')).src = "https://s3.us-east-1.amazonaws.com/srisatyasaifarmersfederation.org/Annualreport1.pdf#view=FitH&toolbar=0&scrollbar=0";
  }
}
openReport(id:number)
{
  this.isOn=false;
  if(id===1)
  {
    (<HTMLIFrameElement>document.getElementById('pdfview')).src = "https://s3.us-east-1.amazonaws.com/srisatyasaifarmersfederation.org/Annualreport1.pdf#view=FitH&toolbar=0&scrollbar=0";
  }
  if(id===2)
  {
    (<HTMLIFrameElement>document.getElementById('pdfview')).src = "https://s3.us-east-1.amazonaws.com/srisatyasaifarmersfederation.org/Annualreport2.pdf#view=FitH&toolbar=0&scrollbar=0";
  }
  if(id===3)
  {
    (<HTMLIFrameElement>document.getElementById('pdfview')).src = "https://s3.us-east-1.amazonaws.com/srisatyasaifarmersfederation.org/Annualreport3.pdf#view=FitH&toolbar=0&scrollbar=0";
  }
  if(id===4)
  {
    (<HTMLIFrameElement>document.getElementById('pdfview')).src = "https://s3.us-east-1.amazonaws.com/srisatyasaifarmersfederation.org/Annualreport4.pdf#view=FitH&toolbar=0&scrollbar=0";
  }
  if(id===5)
  {
    (<HTMLIFrameElement>document.getElementById('pdfview')).src = "https://s3.us-east-1.amazonaws.com/srisatyasaifarmersfederation.org/Annualreport5.pdf#view=FitH&toolbar=0&scrollbar=0";
  }
  if(id===6)
  {
    (<HTMLIFrameElement>document.getElementById('pdfview')).src = "https://s3.us-east-1.amazonaws.com/srisatyasaifarmersfederation.org/Auditreport1.pdf#view=FitH&toolbar=0&scrollbar=0";
  }
  if(id===7)
  {
    (<HTMLIFrameElement>document.getElementById('pdfview')).src = "https://s3.us-east-1.amazonaws.com/srisatyasaifarmersfederation.org/Auditreport2.pdf#view=FitH&toolbar=0&scrollbar=0";
  }

  if(id===8)
  {
    (<HTMLIFrameElement>document.getElementById('pdfview')).src = "https://s3.us-east-1.amazonaws.com/srisatyasaifarmersfederation.org/Auditreport3.pdf#view=FitH&toolbar=0&scrollbar=0";
  }
  if(id===9)
  {
    (<HTMLIFrameElement>document.getElementById('pdfview')).src = "https://s3.us-east-1.amazonaws.com/srisatyasaifarmersfederation.org/Auditreport4.pdf#view=FitH&toolbar=0&scrollbar=0";
  }
  if(id===10)
  {
    (<HTMLIFrameElement>document.getElementById('pdfview')).src = "https://s3.us-east-1.amazonaws.com/srisatyasaifarmersfederation.org/Auditreport5.pdf#view=FitH&toolbar=0&scrollbar=0";
  }
  if(id===11)
  {
    (<HTMLIFrameElement>document.getElementById('pdfview')).src = "https://s3.us-east-1.amazonaws.com/srisatyasaifarmersfederation.org/Recentreport1.pdf#view=FitH&toolbar=0&scrollbar=0";
  }
  if(id===12)
  {
    (<HTMLIFrameElement>document.getElementById('pdfview')).src = "https://s3.us-east-1.amazonaws.com/srisatyasaifarmersfederation.org/Recentreport2.pdf#view=FitH&toolbar=0&scrollbar=0";
  }
  if(id===13)
  {
    (<HTMLIFrameElement>document.getElementById('pdfview')).src = "https://s3.us-east-1.amazonaws.com/srisatyasaifarmersfederation.org/Recentreport3.pdf#view=FitH&toolbar=0&scrollbar=0";
  }

  if(id===14)
  {
    (<HTMLIFrameElement>document.getElementById('pdfview')).src = "https://s3.us-east-1.amazonaws.com/srisatyasaifarmersfederation.org/Recentreport4.pdf#view=FitH&toolbar=0&scrollbar=0";
  }
  if(id===15)
  {
    (<HTMLIFrameElement>document.getElementById('pdfview')).src = "https://s3.us-east-1.amazonaws.com/srisatyasaifarmersfederation.org/Recentreport5.pdf#view=FitH&toolbar=0&scrollbar=0";
  }
  if(id===16)
  {
    (<HTMLIFrameElement>document.getElementById('pdfview')).src = "https://s3.us-east-1.amazonaws.com/srisatyasaifarmersfederation.org/Recentreport6.pdf#view=FitH&toolbar=0&scrollbar=0";
  }

}


}

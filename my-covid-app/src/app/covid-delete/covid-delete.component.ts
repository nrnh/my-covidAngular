import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CovidApiService } from '../covidapi.service';
import { ConfirmationDialogService } from '../confirmation-dialog/confirmation-dialog.service';
import { GlobalConstants } from 'src/environments/GlobalConstants';
import { CovidComponent } from '../covid/covid.component';

@Component({
  selector: 'app-covid-delete',
  providers: [CovidApiService, CovidComponent],
  styleUrls: ['../share/css/share.component.css'],
  templateUrl: './covid-delete.component.html',

})
export class CovidDeleteComponent implements OnInit {

    public covidTotalDesc: any[] = [];

    public desc: any;
  
    public descObject: any;
    
    public deleteObj : any;

  constructor(
    private httpClient: HttpClient,
    public covidApiService: CovidApiService,
    private confirmationDialogService: ConfirmationDialogService,
    public covidComponent: CovidComponent

  ) { }

  ngOnInit(): void {
    this.descObject = {};
    this.deleteObj = {};
    this.covidComponent.getCovidDesc();
    console.log("Covid Component Inited");
    
  }

  onSelectDesc(desc: any) {

    console.log("desc-->" + this.desc);
    if (this.desc[0]) {
      this.descObject = this.desc[0];
      console.log("desc id-->" + this.descObject.id);
      console.log("desc description-->" + this.descObject.description);
    }
  }

  deleteSoap() {
    console.log("covidTotalDesc length-->" + this.covidComponent.covidTotalDesc.length);

    if (this.covidComponent.covidTotalDesc.length == 0) {
      this.confirmationDialogService.confirm(GlobalConstants.errorMessageFE, "List is Empty");
    }
    else {
      this.covidApiService.deleteSoap(this.descObject.description).then(
        resolve => {
          this.covidComponent.getCovidDesc();
        });
    }
  }

  deleteDuplicate() {
    if (this.covidComponent.covidTotalDesc.length == 0) {
      this.confirmationDialogService.confirm(GlobalConstants.errorMessageFE, "List is Empty");
    }
    else {
      this.covidApiService.deleteDuplicate().then(
        resolve => {
          this.covidComponent.getCovidDesc();
        });
    }
  }
}

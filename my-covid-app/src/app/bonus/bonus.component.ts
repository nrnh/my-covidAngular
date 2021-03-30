import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GlobalConstants } from 'src/environments/GlobalConstants';
import { GlobalMethods } from 'src/environments/GlobalMethods';
import { ConfirmationDialogService } from '../confirmation-dialog/confirmation-dialog.service';
import { CovidApiService } from '../covidapi.service';

@Component({
  selector: 'app-bonus',
  providers: [CovidApiService],
  templateUrl: './bonus.component.html',
  styleUrls: ['./bonus.component.css']
})
export class BonusComponent implements OnInit {

  public covidTotalDaily: any;

  public bonus: any;

  public bonusTotal: any[] = [];

  public updatePutBonus: any;

  public addPostBonus: any;

  public bonusObject: any;

  public desc: any;

  public newBonus: any;

  constructor(
    private httpClient: HttpClient,
    public covidApiService: CovidApiService,
    private confirmationDialogService: ConfirmationDialogService
  ) { }

  ngOnInit(): void {
    this.updatePutBonus = {};
    this.addPostBonus = {};
    this.bonusObject = {};
    this.getCovid();
    this.getBonus();
  }

  getCovid(): any {
    this.covidTotalDaily = this.covidApiService.getCovid().subscribe((data: any) => {
      console.log(data); this.covidTotalDaily = data;
    },
    (error: { error: { message: string; }; }) => {
      console.log(error);
      this.confirmationDialogService.confirm(GlobalConstants.errorMessage, GlobalMethods.getError(error));
    });
    return this.covidTotalDaily;
  }

  getBonus(): any {
    this.covidApiService.getBonus().subscribe((data: any) => {
      console.log(data);
      this.bonusTotal = data;
      console.log("Total bonus = " + this.bonusTotal.length);
    });
    return this.bonusTotal;
  }

  addBonus() {
    this.covidApiService.addBonus(this.newBonus).then(
      resolve => {
        this.getBonus();
      }
    )
  }

  deleteBonus() {
    console.log("Total bonus length = " + this.bonusTotal.length);
    if(this.bonusTotal.length == 0) {
      this.confirmationDialogService.confirm(GlobalConstants.errorMessageFE, "Bonus list is Empty");
    }
    else {
      this.covidApiService.deleteBonus(this.bonusObject.id).then(
        resolve => {
          this.getBonus();
        }
      );
    }
  }

  putBonus() {
    this.covidApiService.putBonus(this.updatePutBonus).then(
      resolve => {
        this.getBonus();
      }
    );
  }

  postBonus() {
    this.covidApiService.postBonus(this.addPostBonus).then(
      resolve => {
        this.getBonus();
      }
    );
  }

  deleteBonusSoap() {
    console.log("Bonus length = " + this.bonusTotal.length);
    if (this.bonusTotal.length == 0) {
      this.confirmationDialogService.confirm(GlobalConstants.errorMessageFE, "Bonus list is empty");
    }
    else {
      this.covidApiService.deleteBonusSoap(this.bonusObject.description).then(
        resolve => {
          this.getBonus();
        }
      );
    }
  }

  onSelectUpdateBonus(desc: any) {
    console.log("updatePutBonus--> " + this.updatePutBonus);
    if(this.desc[0]) {
      let clonedDesc = Object.assign({}, this.desc[0]);
      this.updatePutBonus = clonedDesc;
      console.log("updatePutBonus id-->" + this.updatePutBonus.id);
      console.log("updatePutBonus description-->" + this.updatePutBonus.description);
    }
  }

  onSelectBonus(desc: any) {

    console.log("desc-->" + this.desc);
    if (this.desc[0]) {
      this.bonusObject = this.desc[0];
      console.log("bonus id-->" + this.bonusObject.id);
      console.log("bonus description-->" + this.bonusObject.description);
    }
  }
}

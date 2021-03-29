import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GlobalConstants } from 'src/environments/GlobalConstants';
import { GlobalMethods } from 'src/environments/GlobalMethods';
import { ConfirmationDialogService } from '../confirmation-dialog/confirmation-dialog.service';
import { MiningService } from '../mining.service';

@Component({
    selector: 'app-mining',
    templateUrl: './mining.component.html',
    styleUrls: ['./mining.component.css'],
})

export class MiningComponent implements OnInit {
  public mining: string = "";
    
    constructor(
        private httpClient: HttpClient,
        private miningService: MiningService,
        private confirmationDialogService: ConfirmationDialogService
    ) {}
    
    ngOnInit(): void {}

    public getMining(): any {
      this.httpClient.get(`http://localhost:8091/covid/mining/my`, { responseType: 'text' })
        .subscribe((data: any) => 
        {
            this.mining = "Data Mined Successfully. " + data;
        }
      ); 
    }
}

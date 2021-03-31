import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfirmationDialogService } from './confirmation-dialog/confirmation-dialog.service';
import { GlobalConstants } from 'src/environments/GlobalConstants';
import { GlobalMethods } from 'src/environments/GlobalMethods';

@Injectable({
  providedIn: 'root'
})
export class CovidApiService {

  constructor(private httpClient: HttpClient, private confirmationDialogService: ConfirmationDialogService) { }

  public getCovid(): any {
    return this.httpClient.get(`http://localhost:8081/covid/get/latest`, { responseType: 'text' });
  }

  //----- Desc table service start -----
  public getCovidDesc(): any {
    return this.httpClient.get(`http://localhost:8081/covid/get/desc`);
  }

  public deleteDesc(id: number): Promise<any> {
    return new Promise((resolve) => {
      return this.httpClient.delete(`http://localhost:8081/covid/delete?id=` + id).subscribe((data: any) => {
        console.log(data);
        resolve(data);
      },
      (error) => {
        console.log(error);
        this.confirmationDialogService.confirm(GlobalConstants.errorMessage, GlobalMethods.getError(error));
      })
    });
  }

  public deleteDuplicate(): Promise<any> {
    return new Promise((resolve) => {
      return this.httpClient.delete(`http://localhost:8081/covid/delete/duplicate`).subscribe((data: any) => {
        console.log(data);
        resolve(data);
      },
      (error) => {
        console.log(error);
        this.confirmationDialogService.confirm(GlobalConstants.errorMessage, GlobalMethods.getError(error));
      })
    });
  }

  public addDesc(desc: string): Promise<any> {
    return new Promise((resolve) => {
      return this.httpClient.get(`http://localhost:8081/covid/add?desc=` + desc).subscribe((data: any) => {
        console.log(data);
        resolve(data);
      },
      (error) => {
          console.log(error);
          this.confirmationDialogService.confirm(GlobalConstants.errorMessage, GlobalMethods.getError(error));
      })
    });
  }

  public putDesc(body: any): Promise<any> {
    return new Promise((resolve) => {
      return this.httpClient.put(`http://localhost:8081/covid/put`, body).subscribe((data: any) => {
        console.log(data);
        resolve(data);
      },
      (error) => {
        console.log(error);
        this.confirmationDialogService.confirm(GlobalConstants.errorMessage, GlobalMethods.getError(error));
      })
    });
  }

  public postDesc(body : any): Promise<any> {
    return new Promise((resolve) => {
      return this.httpClient.post(`http://localhost:8081/covid/post`, body).subscribe((data: any) => {
        console.log(data);
        resolve(data);
      },
      (error) => {
        console.log(error);
        this.confirmationDialogService.confirm(GlobalConstants.errorMessage, GlobalMethods.getError(error));
      })
    });
  }

  public deleteSoap(desc: string): Promise<any> {
    return new Promise((resolve) => {
      return this.httpClient.delete(`http://localhost:8081/covid/delete/soap?desc=` + desc).subscribe((data: any) => {
        console.log(data);
        resolve(data);
      },
      (error) => {
        console.log(error);
        this.confirmationDialogService.confirm(GlobalConstants.errorMessage, GlobalMethods.getError(error));
      })
    });
  }
  //----- Desc table service ends -----

  //----- Bonus table service start -----
  public getBonus(): any {
    return this.httpClient.get(`http://localhost:8081/covid/get/bonus`);
  }

  public addBonus(bonus: string): Promise<any> {
    return new Promise((resolve) => {
      return this.httpClient.get(`http://localhost:8081/covid/add/bonus?bonus=` + bonus).subscribe((data: any) => {
        console.log(data);
        resolve(data);
      },
      (error) => {
        console.log(error);
        this.confirmationDialogService.confirm(GlobalConstants.errorMessage, GlobalMethods.getError(error));
      })
    });
  }

  public deleteBonus(id: number): Promise<any> {
    return new Promise((resolve) => {
      return this.httpClient.delete(`http://localhost:8081/covid/delete/bonus?id=` + id).subscribe((data: any) => {
        console.log(data);
        resolve(data);
      },
      (error) => {
        console.log(error);
        this.confirmationDialogService.confirm(GlobalConstants.errorMessage, GlobalMethods.getError(error));
      })
    });
  }

  public putBonus(body: any): Promise<any> {
    return new Promise((resolve) => {
      return this.httpClient.put(`http://localhost:8081/covid/put/bonus`, body).subscribe((data: any) => {
        console.log(data);
        resolve(data);
      },
      (error) => {
        console.log(error);
        this.confirmationDialogService.confirm(GlobalConstants.errorMessage, GlobalMethods.getError(error));
      })
    })
  }

  public postBonus(body: any): Promise<any> {
    return new Promise((resolve) => {
      return this.httpClient.post(`http://localhost:8081/covid/post/bonus`, body).subscribe((data: any) => {
        console.log(data);
        resolve(data);
      },
      (error) => {
        console.log(error);
        this.confirmationDialogService.confirm(GlobalConstants.errorMessage, GlobalMethods.getError(error));
      })
    })
  }

  public deleteBonusSoap(bonus: string): Promise<any> {
    return new Promise((resolve) => {
      return this.httpClient.delete(`http://localhost:8081/covid/delete/bonus/soap?bonus=` + bonus).subscribe((data: any) => {
        console.log(data);
        resolve(data);
      },
      (error) => {
        console.log(error);
        this.confirmationDialogService.confirm(GlobalConstants.errorMessage, GlobalMethods.getError(error));
      })
    });
  }
  //----- Bonus table service ends -----
}


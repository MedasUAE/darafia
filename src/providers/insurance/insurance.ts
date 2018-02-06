import { Injectable } from '@angular/core';
import { sysOptions, appId } from '../../providers/system.constants';
import { HttpService } from '../httpapi/httpapi';

/*
  Generated class for the InsuranceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class InsuranceProvider {
  constructor(public http: HttpService) {}

  getInsuranceList(){
    return this.http.get("v1/getinsurances?client=" + appId);
  }

  transformList(insurances:any){
    let result = [],
    headingName = "name_" + sysOptions.systemLanguage,
    descriptionName = "description_" + sysOptions.systemLanguage;

    insurances.forEach((doc)=>{
      result.push({
        heading: doc[headingName],
        description: doc[descriptionName],
        img: doc.img
      });
    });
    return result;
  }
}

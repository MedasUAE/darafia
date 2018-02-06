// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { sysOptions } from '../../providers/system.constants'

/*
  Generated class for the DoctorProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DoctorProvider {

  doctors = [
    {
      "name_en":"Dr. Ammara Amber",
      "name_ar":"الدكتور عمار أمبر",
      "img":"http://icons.iconarchive.com/icons/icons-land/medical/256/People-Doctor-Female-icon.png",
      "degree_en":"BDS",
      "degree_ar":"دكتورالاسنان",
      "timings":["08:00 AM", "09:00 AM", "10:00 AM", "11:00 AM"]
    },
    {
      "name_en":"Dr. Frank Olive",
      "name_ar":"الدكتور عمار أمبر",
      "img":"http://icons.iconarchive.com/icons/icons-land/medical/256/People-Doctor-Male-icon.png",
      "degree_en":"MBBS, Ortho",
      "degree_ar":"دكتورالاسنان",
      "timings":["08:00 AM", "09:00 AM", "10:00 AM", "11:00 AM"]
    },
    {
      "name_ar":"الدكتور عمار أمبر",
      "name_en":"Dr. Jacob Phillip",
      "img":"http://icons.iconarchive.com/icons/icons-land/medical/256/People-Doctor-Male-icon.png",
      "degree_en":"MBBS, Gynaec",
      "degree_ar":"دكتورالاسنان",
      "timings":["08:00 AM", "09:00 AM", "10:00 AM", "11:00 AM", "10:00 AM", "11:00 AM", "10:00 AM", "11:00 AM"]
    }
  ];

  getDoctorList(){
    return this.transformList();
  }

  private transformList(){
    let result = [],
    headingName = "name_" + sysOptions.systemLanguage,
    descriptionName = "degree_" + sysOptions.systemLanguage;

    this.doctors.forEach((doc)=>{
      result.push({
        heading: doc[headingName],
        description: doc[descriptionName],
        img: doc.img
      });
    });

    return result;
  }
}

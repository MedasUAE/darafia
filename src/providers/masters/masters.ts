import { Injectable } from '@angular/core';
import { sysOptions, appId } from '../../providers/system.constants';
import { HttpService } from '../httpapi/httpapi';


@Injectable()
export class MastersProvider {

  constructor(public http: HttpService) {}
  pharmacy = [
    {
      "name_en":"Gulf Health Pharmacies",
      "name_ar":"الدكتور عمار أمبر",
      "description_en":"( Dammam and Khobar )",
      "description_ar":"دكتورالاسنان",
      "description2_en":`<ul>
      <li>Provide medicines</li>
      <li>Supplies for</li>
      <li>newborn-babiesWeight loss medicines</li>
      <li>Medical supplies for the disabled</li>
      <li>Medical equipment, Health insurance</li>
      </ul>`,
      "description2_ar":"دكتورالاسنان"
    }
  ];

  aboutus = [
    {
      "name_en":"ABOUT US",
      "name_ar":"الدكتور عمار أمبر",
      // "description_en":"( Dammam and Khobar )",
      "img":"http://darafia.com/MedServices/wp-content/uploads/darafia-logo211-copy.png",
      "description_ar":"دكتورالاسنان",
      "description2_en":`<p>We&rsquo;re a group of companies that provide medical care services to distinctive market segments. We import and distribute the best-of-breed medical devices to hospitals, medical centers, institutions, etc.</p>
      <p>Since 2008 we provide large drilling companies with a lot of medical services as we are accredited by Saudi Aramco as a Medical Provider. We&rsquo;re licensed and accredited by Saudi Aramco and FDA.</p>
      <p><strong>CONTACT DETAILS</strong></p>
      <p><strong>Tel. no.</strong>: +966-13-8050101<br /><strong>Fax no.:</strong>&nbsp;+966-13-8050103<br /><strong>Emails:</strong><br />opmgr@darafia.com<br />bmtech@darafia.com<br />info@darafia.com<br />cno@darafia.com<br /><strong>Address:</strong>&nbsp;Cornishe Road &ndash; Dammam<br /><strong>Postal Address:</strong>&nbsp;P.o. Box 72494 Zip Code 31518<br />Dammam &ndash; Kingdom of Saudi Arabia</p>`,
      "description2_ar":"دكتورالاسنان"
    },
    {
      "name_en":"MISSION",
      "name_ar":"الدكتور عمار أمبر",
      // "description_en":"( Dammam and Khobar )",
      // "img":"http://darafia.com/MedServices/wp-content/uploads/darafia-logo211-copy.png",
      "description_ar":"دكتورالاسنان",
      "description2_en":"Provide the best specialized medical services in the Eastern Province based on the most recent medical science and technical advances at a reasonable prices.",
      "description2_ar":"دكتورالاسنان"
    },
    {
      "name_en":"VISION",
      "name_ar":"الدكتور عمار أمبر",
      // "description_en":"( Dammam and Khobar )",
      // "img":"http://darafia.com/MedServices/wp-content/uploads/darafia-logo211-copy.png",
      "description_ar":"دكتورالاسنان",
      "description2_en":"Be the pioneers in providing the latest diagnostic and therapeutic methods. Also exten our success to the rest of the Arabian Gulf and Middle East Region.",
      "description2_ar":"دكتورالاسنان"
    }
  ]

  events = [
    {
      "name_en":"AXA",
      "name_ar":"الدكتور عمار أمبر",
      "img":"https://gulfmarketingreview.com/wp-content/uploads/2013/04/Logo-AXA-International.jpg",
      "description_en":"VIP, A.B.C",
      "description_ar":"دكتورالاسنان"
    },
    {
      "name_en":"BUPA",
      "name_ar":"الدكتور عمار أمبر",
      "img":"https://upload.wikimedia.org/wikipedia/commons/1/16/Bupa_Arabia_logo.jpg",
      "description_en":"VIP, A.B.C",
      "description_ar":"دكتورالاسنان"
    },
    {
      "name_ar":"الدكتور عمار أمبر",
      "name_en":"Arabian-shield",
      "img":"http://www.bnhgroup.com/upload/en/thetgroup/arabiantshield/Arabian%20Shield%20Logo.png",
      "description_en":"VIP, A.B.C",
      "description_ar":"دكتورالاسنان"
    }
  ];

  facilities = [
    {
      "name_en":"Dar Afia Medical Services",
      "name_ar":"الدكتور عمار أمبر",
      "description2_en":`<ul>
      <li>Operating and preparing companies Clinics As per Aramco Standard (MMSR)</li>
      <li>Providing High-Quality Medical Services for Remote Sites.</li>
      </ul>`
    },
    {
      "name_en":"Dar Afia Opticals",
      "name_ar":"الدكتور عمار أمبر",
      "description2_en":`<ul>
      <li>Check up</li>
      <li>Medical and Sun glasses</li>
      <li>Contact lenses</li>
      </ul>`
    },
    {
      "name_en":"Dar Afia Medical Center",
      "name_ar":"الدكتور عمار أمبر",
      "description_en":"(Dammam)",
      "description_ar":"(Dammam)",
      "description2_en":`<ul>
      <li>Emergency Room &amp; Ambulances</li>
      <li>Cardio World Center - Cardiac Catheterization</li>
      <li>One Day Surgery</li>
      <li>Iqama Checkup and Food Handler.</li>
      <li>Derma Life Center</li>
      <li>Physiotherapy</li>
      <li>Embassy Checkup
      <ul>
      <li>Australia</li>
      <li>Canada</li>
      <li>New Zealand</li>
      </ul>
      </li>
      <li>Out Patient Clinics
      <ul>
      <li>Dental</li>
      <li>Derm &amp; Laser</li>
      <li>Pedia</li>
      <li>Cardiac&nbsp;</li>
      <li>Ophthalmology</li>
      <li>ENT</li>
      <li>GI &amp; Internal Medicine</li>
      <li>Urology</li>
      <li>General Surgery</li>
      <li>Orthopedic</li>
      <li>OB/GYN</li>
      </ul>
      </li>
      <li>New Hospital under Construction</li>
      </ul>`
    }
  ]

  getDoctorList(){
    return this.http.get("v1/getdoctors?client=" + appId);
  }
  getPharmacyList(){
    // return this.transformPharmacyList();
    return this.http.get("v1/getpharmacies?client=" + appId);
  }

  getEventsList(){
    return this.http.get("v1/getnews?client=" + appId);
    // return this.transformEventsList();
  }

  getAboutUs(){
    return this.http.get("v1/getaboutus?client=" + appId);    
    // return this.transformArrayList(this.aboutus)
  }

  getFacilities(){
    return this.http.get("v1/getfacilities?client=" + appId);        
    // return this.transformArrayList(this.facilities)
  }

  // private transformPharmacyList(){
  //   let result = [],
  //   headingName = "name_" + sysOptions.systemLanguage,
  //   descriptionName = "description_" + sysOptions.systemLanguage,
  //   detailName = "description2_" + sysOptions.systemLanguage;

  //   this.pharmacy.forEach((doc)=>{
  //     result.push({
  //       heading: doc[headingName],
  //       description: doc[descriptionName],
  //       details: doc[detailName]
  //     });
  //   });
  //   return result;
  // }

  transformArrayList(array){
    let result = [],
    headingName = "name_" + sysOptions.systemLanguage,
    descriptionName = "description_" + sysOptions.systemLanguage,
    detailName = "description2_" + sysOptions.systemLanguage;

    array.forEach((doc)=>{
      result.push({
        heading: doc[headingName],
        description: doc[descriptionName],
        img: doc.img,
        details: doc[detailName]
      });
    });
    return result;
  }

  getData(){
    return this.http.getJSONData('./assets/lang/ar.json');
  }

  // private transformEventsList(){
  //   let result = [],
  //   headingName = "name_" + sysOptions.systemLanguage,
  //   descriptionName = "description_" + sysOptions.systemLanguage,
  //   detailName = "description2_" + sysOptions.systemLanguage;

  //   this.events.forEach((doc)=>{
  //     result.push({
  //       heading: doc[headingName],
  //       description: doc[descriptionName],
  //       img: doc.img,
  //       details: doc[detailName]
  //     });
  //   });
  //   return result;
  // }

}

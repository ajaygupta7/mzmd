import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import Swal from 'sweetalert2';
import { LanguageService } from 'src/app/core/services/language.service';

const yourHeader: HttpHeaders = new HttpHeaders({
  Authorization: 'Bearer fake-jwt-token'
});

const headerDict = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'Access-Control-Allow-Headers': 'Content-Type',
}

const requestOptions = {                                                                                                                                                                                 
  headers: new HttpHeaders(headerDict), 
};

@Component({
  selector: 'app-macro',
  templateUrl: './macro.component.html',
  styleUrls: ['./macro.component.scss']
})
export class MacroComponent implements OnInit {
  
  // bread crumb items
  breadCrumbItems!: Array<{}>;
  APIBasicPath: string = 'https://trigger.macrodroid.com/f7da250a-0121-42dd-ac51-2e6e5ad80e22/mzmd-basic';
  // APIBasicPath: string = 'https://trigger.macrodroid.com/69b39d25-9389-4186-b365-ba82fc441788/mzmd-basic';
  APIAdvancePath: string = 'https://trigger.macrodroid.com/69b39d25-9389-4186-b365-ba82fc441788/mzmd-advance';

  constructor(private http: HttpClient, public languageService: LanguageService) { }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Device' }, { label: 'My Zone', active: true }];
  }

  getCall(id: string) {
    setTimeout(() => {
      console.log("Delayed for "+this.languageService.delayTimer+" second.");
      console.log(id);
      // const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' }
      let URL = this.APIBasicPath + '?id='+id;
      this.http.get(URL, {responseType: 'text'}).subscribe(data => {
        console.log("Success: ", data);
        alert("Success: "+ data);
      })
    }, (this.languageService.delayTimer*1000));
  }


  // Advanced Settings

  // Dropdown Selectors
  async dropdownSwal(id: string) {
    const ipAPI = '//api.ipify.org?format=json'
    const inputValue = fetch(ipAPI)
      .then(response => response.json())
      .then(data => data.ip)

    let inputOptions = {};
    if(id == 'openApp') inputOptions = {'com.whatsapp': 'WhatsApp', 'com.ril.ajio': 'Ajio'};
    if(id == 'playAudio') inputOptions = {'1':'Whistle', '2':'F88k Off'};

    const { value: ipAddress } = await Swal.fire({
      title: 'Select Your choice',
      input: 'select',
      inputOptions: inputOptions,
      // inputLabel: '',
      inputPlaceholder: 'Select your choice',
      inputValue: inputValue,
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return 'You need to Select something!'
        }
      }
    });

    if (ipAddress) {
      // Swal.fire(`Your IP address is ${ipAddress}`)
      this.callWithParams(id, ipAddress);
    }
  }

  // Range Slider
  async rangeSwal(id: string) {
    const ipAPI = '//api.ipify.org?format=json'
    const inputValue = fetch(ipAPI)
      .then(response => response.json())
      .then(data => data.ip)

    const { value: ipAddress } = await Swal.fire({
      title: 'Adjust ' + id,
      input: 'range',
      // inputLabel: 'Your Message',
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return 'You need to write something!'
        }
      }
    });

    if (ipAddress) {
      // Swal.fire(`Your IP address is ${ipAddress}`)
      this.callWithParams(id,'', Number(ipAddress));
    }
  }

  async text2XSwal(id: any) {
    const ipAPI = '//api.ipify.org?format=json'
    const inputValue = fetch(ipAPI)
      .then(response => response.json())
      .then(data => data.ip)

    const { value: ipAddress } = await Swal.fire({
      title: 'Enter Your Value',
      html:
      '<input id="swal-input1" autofocus="true" style="width:80%" type="number" min="1000000000" max="9999999999" class="swal2-input" placeholder="Enter 10 digit Number">' +
      '<textarea id="swal-input2" class="swal2-input" rows="6" style="width:80%" placeholder="Enter Message here"> </textarea>',
    focusConfirm: true,
    preConfirm: () => {
      return [
        (document.getElementById('swal-input1') as HTMLInputElement).value,
        (document.getElementById('swal-input2') as HTMLInputElement).value,
        // document.getElementById('swal-input2').value
      ]
    },
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return 'You need to write something!'
        }
      }
    });

    if (ipAddress) {
      // Swal.fire(`Your IP address is ${ipAddress}`)
      this.callWithParams(id, ipAddress);
    }
  }

  async textSwal(id: any) {
    const ipAPI = '//api.ipify.org?format=json'
    const inputValue = fetch(ipAPI)
      .then(response => response.json())
      .then(data => data.ip)

    const { value: ipAddress } = await Swal.fire({
      title: 'Enter Your Value',
      input: 'text',
      inputLabel: 'Your Message',
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return 'You need to write something!'
        }
      }
    });

    if (ipAddress) {
      // Swal.fire(`Your IP address is ${ipAddress}`)
      this.callWithParams(id, ipAddress);
    }
  }

  callWithParams(id: string, str1: string, int1?: string | number | undefined, bool1?: string | undefined) {
    setTimeout(() => {
      console.log("Delayed for "+this.languageService.delayTimer+" second.");
      console.log(id, str1, int1, bool1);
      let URL = '';
      URL = this.APIAdvancePath + '?id=' + id;
      URL+= str1 ? "&mzmdStr1="+str1 : '';
      URL+= int1 ? "&mzmdInt1="+int1 : '';
      URL+= bool1 ? "&mzmdBool1="+bool1 : '';
      
      console.log('URL :', URL);
      this.http.get(URL, {responseType: 'text'}).subscribe(data => {
        console.log("Success: ", data);
      })
    }, (this.languageService.delayTimer*1000));
  }
}

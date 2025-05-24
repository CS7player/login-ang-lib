import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LsManagerService {
  static addJsonToLS(key: string, data: any) {
    localStorage.setItem(key, btoa(JSON.stringify(data)));
  }

  static addToLS(key: string, data: string) {
    localStorage.setItem(key, btoa(data));
  }

  static getJsonDataFromLS(key: string) {
    const encryptedData = localStorage.getItem(key);
    if (encryptedData !== null && encryptedData.length > 0) {
      return JSON.parse(atob(encryptedData));
    }
    return {};
  }

  static getDataFromLS(key: string) {
    var data = localStorage.getItem(key);
    console.log(data);
    if (data !== null && data !== undefined) {
      return atob(data);
    }
    return '';
  }

  static removeDataFromStorage(key: string) {
    localStorage.removeItem(key);
  }

  static clearLSData() {
    localStorage.clear();
  }
}

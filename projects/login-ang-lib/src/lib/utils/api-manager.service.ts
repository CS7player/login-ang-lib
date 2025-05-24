import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LsManagerService } from './ls-manager.service';

@Injectable({
  providedIn: 'root'
})
export class ApiManagerService {

 constructor(private http: HttpClient) { }
 getHeaders() {
  let headerBody = {
   'Content-Type': 'application/json',
   'Authorization': 'red_towel',
   'responseType': 'json'
  };
  let auth = LsManagerService.getDataFromLS('ls_auth');
  if (auth.length > 0) {
   headerBody['Authorization'] = auth;
  }
  return { 'headers': new HttpHeaders(headerBody) };
 }

 doGet(url: string) {
  return this.http.get<any>(url, this.getHeaders());
 }

 doPost(url: string, body: any) {
  return this.http.post<any>(url, body, this.getHeaders());
 }

 doPut(url: string, body: any) {
  return this.http.put<any>(url, body, this.getHeaders());
 }

 doDelete(url: string) {
  return this.http.delete<any>(url, this.getHeaders());
 }
}

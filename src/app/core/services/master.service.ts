import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

APIurl:string="https://projectapi.gerasim.in/api/BusBooking/";

  constructor(private http:HttpClient) { }

  getLocations():Observable<any[]>{
    return this.http.get<any[]>(this.APIurl+"GetBusLocations");
  }

  searchBus(from:number, to:number, travelDate:string):Observable<any[]>{
    return this.http.get<any[]>('${this.APIurl}searchBus?fromLocation=${from}&toLocation=${to}&travelDate=${travelDate}')
  }
}

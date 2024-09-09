import { Component, inject, OnInit } from '@angular/core';
import { MasterService } from '../../core/services/master.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule,AsyncPipe],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit{

  location$:Observable<any[]>=new Observable<any[]>;
  mastersrv=inject(MasterService);

  searchObj:any={
    fromLocation:'',
    toLocation:'',
    travelDate:''
  }

  constructor(private http:HttpClient){}

  ngOnInit(): void {
this.getAllLocations();
  }

  getAllLocations(){
this.location$=this.mastersrv.getLocations();
  }
}

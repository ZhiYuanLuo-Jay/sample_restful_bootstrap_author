import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {
  authorList = [];
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router){}

  ngOnInit() {
    this.getAuthors(); // Best practice is to invoke function in ngOnInit() not in the constructor.
  }

  getAuthors(){
    let observable = this._httpService.getAll();
    observable.subscribe(data => {
      console.log("Got our authors!", data);
      this.authorList = data['data'] 
      console.log("returned ",this.authorList);
    });
  }
  
  onRemove(id:String): void { 
    // console.log(`Click event is working with num param:${this.onePet['name']}, ${this.petId}`);
    let obserable = this._httpService.delOne(id);
    obserable.subscribe(info => {
      console.log(info);
      this.getAuthors();
    });  
  }






}

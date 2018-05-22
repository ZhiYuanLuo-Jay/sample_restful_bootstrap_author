import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  oneAuthor: any;
  authorId: string;
  err: string;
  editAuthor: any;

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router){}

  ngOnInit() {
    // this.oneAuthor = {
    //   name: "",
    // };
  
    this.editAuthor = {
      name: "",
      id: "",
    }

    this._route.params.subscribe((params: Params) => {
      console.log("Printing author ID: ", params['id']);
      this.authorId = params['id'] });

    this.getOneAuthor();
      
  }

  getOneAuthor() {
    let obserable = this._httpService.getOneAuthor(this.authorId);
    obserable.subscribe(info => {
      console.log(info);
      this.oneAuthor = info['info'];
      this.editAuthor = {
        name: this.oneAuthor.name,}
    })
  }

  onSubmit() {
    // Code to send off the form data (this.newTask) to the Service
    this.editAuthor = {
      name:this.editAuthor.name,
      id: this.authorId
    }
    console.log(this.editAuthor);  //capture the udpated info
    let obserable = this._httpService.updateAuthor(this.editAuthor);
      obserable.subscribe(postdata => {
      console.log("Got Updated data back", postdata);
      if (postdata['message'] == 'Error'){
        this.err = postdata['error']['message'];
        console.log("Got entry error.", postdata['error']['message']);
      } else {
        this._router.navigate(['/all']);
      }       
    })

  }



}

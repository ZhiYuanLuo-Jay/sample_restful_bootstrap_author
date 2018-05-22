import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  newAuthor: any;
  err: string;
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router,
  ){}

  ngOnInit() {
    this.newAuthor ={
      name: "",
    }

  }

  onSubmit() {
    // Code to send off the form data (this.newTask) to the Service
    this.newAuthor = {
      name: this.newAuthor.name,
    }
    
    let addObserable = this._httpService.addAuthor(this.newAuthor);
    addObserable.subscribe(postdata => {
      console.log("Got data from post back", postdata);
      if (postdata['message'] == 'Error'){
        this.err = postdata['error']['message'];
        console.log("Got entry error.", postdata['error']['message']);
      } else {
        this._router.navigate(['/all']);
      }
    })

    // Reset this.newTask to a new, clean object.
    this.newAuthor ={
      name: "",
    }
  }

}

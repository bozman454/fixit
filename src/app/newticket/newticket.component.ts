import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetticketService } from '../getticket.service';
@Component({
  selector: 'app-newticket',
  templateUrl: './newticket.component.html',
  styleUrls: ['./newticket.component.css']
})
export class NewticketComponent implements OnInit {
  new_id;
  constructor(private getticketservice: GetticketService, private router: Router) { }

  ngOnInit() {
  }


  newtick(cname, atech, dmodel, dnotes){
    if(cname && atech && dmodel && dnotes){
    let outobj = {
      customer_name: cname,
      assigned_technician: atech,
      device_model: dmodel,
      device_status: "Awaiting Repair",
      device_notes: dnotes
    }
    this.getticketservice.postTickets(outobj)
    .subscribe(res =>
      {
        if(res.success == 'true')
          this.router.navigateByUrl('/dashboard')
      }
      , err => console.log(err))
    
    }
  }
}

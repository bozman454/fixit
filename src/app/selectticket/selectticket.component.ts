import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetticketService } from '../getticket.service';
import { Router } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-selectticket',
  templateUrl: './selectticket.component.html',
  styleUrls: ['./selectticket.component.css']
})
export class SelectticketComponent implements OnInit {
  tickets = [];
  selectedticket;
  selected = {};


  constructor(private router: Router, private getticketservice: GetticketService, private route: ActivatedRoute) { 
    this.route.queryParams.subscribe(params => {
      this.selectedticket = params.ticket_id;
    });
  }



  ngOnInit() {
      this.getticketservice.getTickets()
      .subscribe(res => {
        if(res.success =='true'){
          this.tickets = res.rows;
          this.tickets.forEach(element => {
            if(element.ticket_id.toString() === this.selectedticket)
            
            this.selected = element;
          
            console.log(element.ticket_id);
          });
        }
      }
      , err => console.log(err));
    }
  

  deleteticket(id){
    this.getticketservice.deleteTickets(id)
    .subscribe(res => {
      if(res.success == 'true')
       this.router.navigateByUrl('/dashboard')

    },
    err => console.log(err))
  }

}

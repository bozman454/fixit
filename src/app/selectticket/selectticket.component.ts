import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetticketService } from '../getticket.service';

@Component({
  selector: 'app-selectticket',
  templateUrl: './selectticket.component.html',
  styleUrls: ['./selectticket.component.css']
})
export class SelectticketComponent implements OnInit {
  tickets = [];
  selectedticket;
  constructor(private getticketservice: GetticketService, private route: ActivatedRoute) { 
    this.route.queryParams.subscribe(params => {
      this.selectedticket = params.ticket_id;
    });
  }

  ngOnInit() {
      this.getticketservice.getTickets()
      .subscribe(res => {
        if(res.success =='true'){
          this.tickets = res.rows;
        }
      }
      , err => console.log(err));
      this.tickets.forEach(element => {
        if(element.ticket_id === this.selectedticket)
        console.log(element.ticket_id);
      });
      
    }
  

}

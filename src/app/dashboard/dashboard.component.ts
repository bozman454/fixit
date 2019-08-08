import { Component, OnInit } from '@angular/core';
import { GetticketService } from '../getticket.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  tickets = [];
  constructor(private getticketservice: GetticketService, private router: Router) { }

  ngOnInit() {

    this.getticketservice.getTickets()
    .subscribe(res => {
      if(res.success =='true')
        this.tickets = res.rows;
      }
    , err => console.log(err));
  }

  selectTicket(id){
    let navextra: NavigationExtras ={
      queryParams:{ ticket_id: id}
    }
    this.router.navigate(['/selectticket'],navextra);
  }

  gotonewticket(){
    this.router.navigateByUrl('/newticket');
  }

}

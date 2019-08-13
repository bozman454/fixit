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
  edittick: boolean;

  constructor(private router: Router, private getticketservice: GetticketService, private route: ActivatedRoute) { 
    this.route.queryParams.subscribe(params => {
      this.selectedticket = params.ticket_id;
    });
  }

  editticket(){
    this.edittick = true;
  }

  gotodash(){
    this.router.navigateByUrl("/dashboard");
  }

  submitedit(id, name, tech, model, status, notes){
    
    var out_name = name;
    if(out_name.length < 1)
      out_name = this.selected.customer_name;
    
    var out_tech = tech;
    if(out_tech.length < 1)
      out_tech = this.selected.assigned_technician;
    
    var out_model = model;
    if(out_model.length < 1)
      out_model = this.selected.device_model;

    var out_status = status;
    if(out_status.length < 1)
      out_status = this.selected.device_status;
    var out_notes = notes;
    if(out_notes.length < 1)
      out_notes = this.selected.device_notes;

    

    
    const out = {
      customer_name: out_name,
      assigned_technician: out_tech,
      device_model: out_model,
      device_notes: out_notes,
      device_status: out_status,
      ticket_id: id
    }

    this.getticketservice.editTicket(out)
    .subscribe(res =>{
      if(res.success == 'true')
        this.router.navigateByUrl('/dashboard')
      
    },
    err => console.log(err));

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
    this.edittick = false;
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

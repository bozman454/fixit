import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { __core_private_testing_placeholder__ } from '@angular/core/testing';

@Injectable({
  providedIn: 'root'
})
export class GetticketService {

  private url = 'http://localhost:7878/api/v1/tickets';

  constructor(private HttpClient: HttpClient) { }

  getTickets(){
    return this.HttpClient.get<any>(this.url);
  }
  postTickets(out){
    return this.HttpClient.post<any>(this.url, out);
  }
  deleteTickets(out){
    return this.HttpClient.delete<any>('http://localhost:7878/api/v1/tickets/' + out)
  }

  editTicket(out){
    return this.HttpClient.post<any>('http://localhost:7878/api/v1/tickets/editticket', out)
  }
}

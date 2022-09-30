import { Ticket } from './../Models/ticket';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TicketService {

  url:string = "http://localhost:49880/Ticket/All"
  constructor(private httpClient : HttpClient) { }

  public getAllTicket() : Observable<Ticket[]>
  {
    return this.httpClient.get<Ticket[]>(this.url);
  }

  public getTicket(id:Number) : Observable<Ticket>{
    const tempUrl = "http://localhost:49880/Ticket/" + id;
    return this.httpClient.get<Ticket>(tempUrl);
  }

  public updateTicket(tkt:Ticket):Observable<string>{
    const tempUrl = "http://localhost:49880/Ticket"
    return this.httpClient.put<string>(tempUrl,tkt);
  }

  public addTicket(tkt:Ticket) : Observable<string>{
    const tempUrl = "http://localhost:49880/Ticket"
    return this.httpClient.post<string>(tempUrl,tkt);
  }

  public deleteTicket(id:Number): Observable<string>{
    const tempUrl = "http://localhost:49880/Ticket/" + id ;
    return this.httpClient.delete<string>(tempUrl);
  }
}

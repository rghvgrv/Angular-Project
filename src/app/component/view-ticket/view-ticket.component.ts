import { ActivatedRoute } from '@angular/router';
import { Ticket } from './../../Models/ticket';
import { Component, OnInit } from '@angular/core';
import { TicketService } from 'src/app/Services/ticket.service';

@Component({
  selector: 'app-view-ticket',
  templateUrl: './view-ticket.component.html',
  styleUrls: ['./view-ticket.component.css']
})
export class ViewTicketComponent implements OnInit {

  ticketId : any;
  selected : Ticket = {} as Ticket;


  constructor(private tktService : TicketService , private activateRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe((map) =>{
      this.ticketId= map.get("id");
      if (this.ticketId !=null){
        this.tktService.getTicket(parseInt(this.ticketId)).subscribe((data)=>{
          this.selected = data as Ticket;
        })
      }
    })
  }

}

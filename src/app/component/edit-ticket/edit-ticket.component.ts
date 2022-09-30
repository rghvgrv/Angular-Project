import { ActivatedRoute } from '@angular/router';
import { Ticket } from './../../Models/ticket';
import { Component, OnInit } from '@angular/core';
import { TicketService } from 'src/app/Services/ticket.service';

@Component({
  selector: 'app-edit-ticket',
  templateUrl: './edit-ticket.component.html',
  styleUrls: ['./edit-ticket.component.css']
})
export class EditTicketComponent implements OnInit {

  foundTkt : Ticket = {} as Ticket;
  ticketId : any;

  constructor(private tktService:TicketService, private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((map) =>{
      this.ticketId = map.get("id")
      this.tktService.getTicket(parseInt(this.ticketId)).subscribe((data :Ticket)=>{
        this.foundTkt = data
      })
    })
  }

  onSubmit(){
    this.tktService.updateTicket(this.foundTkt).subscribe((data) =>{
      alert(data)
    })
  }

}

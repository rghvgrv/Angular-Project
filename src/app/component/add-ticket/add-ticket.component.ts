import { TicketService } from './../../Services/ticket.service';
import { Ticket } from './../../Models/ticket';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-ticket',
  templateUrl: './add-ticket.component.html',
  styleUrls: ['./add-ticket.component.css']
})
export class AddTicketComponent implements OnInit {

  tkt : Ticket = {} as Ticket

  constructor(private tktService : TicketService, private router: Router) { }

  ngOnInit(): void {
  }

  public addDataToDatabase()
  {
    this.tktService.addTicket(this.tkt).subscribe((data) =>{
    this.router.navigate(["/Ticket/All"])
  })

  }

}

import { TicketService } from './../../Services/ticket.service';
import { Ticket } from './../../Models/ticket';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-all-ticket',
  templateUrl: './all-ticket.component.html',
  styleUrls: ['./all-ticket.component.css']
})
export class AllTicketComponent implements OnInit {
  tktId:any;
  tktList:Ticket[] = [];
  selected : Ticket = {} as Ticket;



  constructor(private tktService:TicketService , private activatedRoute :ActivatedRoute) { }

  ngOnInit(): void {
    this.getAllTicketFromServer();
  }

  private getAllTicketFromServer()
  {
    this.tktService.getAllTicket().subscribe((tkt:Ticket[]) => {
      this.tktList = tkt;
    })
  }
  public deleteTicketFromDatabase(id:number)
  {

        this.tktService.deleteTicket(id).subscribe((data)=>{
            alert(data);
        })
  }

}

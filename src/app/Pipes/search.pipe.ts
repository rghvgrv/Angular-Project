import { Ticket } from './../Models/ticket';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(inputData: Ticket[], args: string): Ticket[] {
    if(args == "")
      return inputData
    else
      return inputData.filter((t) => t.ticketStatus.includes(args))
  }

}

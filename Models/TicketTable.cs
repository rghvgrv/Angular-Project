using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using Microsoft.EntityFrameworkCore;

namespace SampleTicketApp.Models
{
    public partial class TicketTable
    {
        [Key]
        public int TicketId { get; set; }
        public string TicketOwner { get; set; }
        public string TicketReason { get; set; }
        public string TicketStatus { get; set; }
    }


}

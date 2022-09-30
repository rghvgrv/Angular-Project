using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SampleTicketApp.Models;

namespace SampleTicketApp.Controllers
{
	//[Route("api/[controller]")]
	[ApiController]
	public class TicketController : ControllerBase
	{
		public GRV_DATABASEContext _context = null;
		public TicketController(GRV_DATABASEContext context)
		{
			_context = context;
		}
		[Route("Ticket/All")]
		public List<TicketTable> GetAll() => _context.TicketTable.ToList();
		[Route("Ticket/{id}")]
		public TicketTable GetEmp(int id) => _context.TicketTable.FirstOrDefault((t) => t.TicketId == id);

		[Route("Ticket")]
		[HttpPost]
		public string AddNew(TicketTable tkt)
		{
			_context.TicketTable.Add(tkt);
			_context.SaveChanges();
			return "Ticket Added to the Server";
		}

		[Route("Ticket")]
		[HttpPut]
		public string Update(TicketTable tkt)
		{
			var selected = _context.TicketTable.FirstOrDefault((t) => t.TicketId == tkt.TicketId);
			if (selected == null) return "Ticket Not Found to Update ";
			selected.TicketOwner = tkt.TicketOwner;
			selected.TicketReason = tkt.TicketReason;
			selected.TicketStatus = tkt.TicketStatus;
			_context.SaveChanges();
			return "Ticket updated in the Server";
		}

		[Route("Ticket/{id}")]
		[HttpDelete]

		public string Delete(int id)
		{
			var foundRec = _context.TicketTable.FirstOrDefault((t) => t.TicketId == id);
			if (foundRec == null) return "No Records Found";
			_context.TicketTable.Remove(foundRec);
			_context.SaveChanges();
			return "Data is Deleted";
		}
	}
}

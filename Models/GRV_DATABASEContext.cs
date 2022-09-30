using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace SampleTicketApp.Models
{
    public partial class GRV_DATABASEContext : DbContext
    {
        public GRV_DATABASEContext()
        {
        }

        public GRV_DATABASEContext(DbContextOptions<GRV_DATABASEContext> options)
            : base(options)
        {
        }
        public virtual DbSet<TicketTable> TicketTable { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer("Server=W-H44PY03-0;Database=GRV_DATABASE;User id=sa;Password=admin");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

            modelBuilder.Entity<TicketTable>(entity =>
            {
                entity.HasKey(e => e.TicketId)
                    .HasName("PK__TicketTa__712CC60750C6AC70");

                entity.Property(e => e.TicketOwner)
                    .IsRequired()
                    .HasMaxLength(200)
                    .IsUnicode(false);

                entity.Property(e => e.TicketReason)
                    .IsRequired()
                    .HasMaxLength(200)
                    .IsUnicode(false);

                entity.Property(e => e.TicketStatus)
                    .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(false);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}

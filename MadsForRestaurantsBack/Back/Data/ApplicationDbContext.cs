using Back.Models;
using Microsoft.EntityFrameworkCore;

namespace Back.Data
{
    public class ApplicationDbContext : DbContext
    {
        public DbSet<Client> Client { get; set; }
        public DbSet<Reservation> Reservation { get; set; }
        public DbSet<Table> Table { get; set; }
        public DbSet<Worker> Worker { get; set; }

        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                var connectionString = "server=localhost;user=root;password=root;database=BD_MR";

                var serverVersion = new MySqlServerVersion(new Version(10, 6, 5));
                optionsBuilder.UseMySql(connectionString, serverVersion);
            }
        }
    }
}
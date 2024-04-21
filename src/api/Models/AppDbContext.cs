using Microsoft.EntityFrameworkCore;

namespace api.Models
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {

        }

        public DbSet<Denuncia> Denuncias { get; set; }
        public DbSet<Depoimento> Depoimentos { get; set; }
    }
}
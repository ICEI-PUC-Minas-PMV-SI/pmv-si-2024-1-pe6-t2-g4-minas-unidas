using Microsoft.EntityFrameworkCore;

namespace api.Models
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<DenunciaUsuarios>()
                .HasKey(c => new { c.DenunciaId, c.UsuarioId });

            builder.Entity<DenunciaUsuarios>()
                .HasOne(c => c.Usuario).WithMany(c => c.Denuncias)
                .HasForeignKey(c => c.UsuarioId);

            builder.Entity<DepoimentoUsuarios>()
                .HasKey(c => new { c.DepoimentoId, c.UsuarioId });

            builder.Entity<DepoimentoUsuarios>()
                .HasOne(c => c.Usuario).WithMany(c => c.Depoimentos)
                .HasForeignKey(c => c.UsuarioId);
        }

        public DbSet<Denuncia> Denuncias { get; set; }
        public DbSet<Depoimento> Depoimentos { get; set; }
        public DbSet<Usuario> Usuarios { get; set; }
        public DbSet<DenunciaUsuarios> DenunciaUsuarios { get; set; }
        public DbSet<DepoimentoUsuarios> DepoimentoUsuarios { get; set; }
    }
}
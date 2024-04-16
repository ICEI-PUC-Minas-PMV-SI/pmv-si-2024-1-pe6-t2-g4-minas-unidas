using System.ComponentModel.DataAnnotations.Schema;

namespace api.Models
{
    [Table("DenunciaUsuarios")]
    public class DenunciaUsuarios
    {
        [ForeignKey("Denuncia")]
        public int DenunciaId { get; set; }
        public Denuncia Denuncia { get; set; }

        [ForeignKey("Usuario")]
        public int UsuarioId { get; set; }
        public Usuario Usuario { get; set; }
    }
}
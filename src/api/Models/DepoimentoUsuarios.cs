using System.ComponentModel.DataAnnotations.Schema;

namespace api.Models
{
    [Table("DepoimentoUsuarios")]
    public class DepoimentoUsuarios
    {
        [ForeignKey("Depoimento")]
        public int DepoimentoId { get; set; }
        public Depoimento Depoimento { get; set; }

        [ForeignKey("Usuario")]
        public int UsuarioId { get; set; }
        public Usuario Usuario { get; set; }
    }
}
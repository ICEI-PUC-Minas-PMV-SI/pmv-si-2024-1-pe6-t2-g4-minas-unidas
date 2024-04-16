using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace api.Models
{
    [Table("Denúncias")]
    public class Denuncia : LinksHATEOS
    {
        [Key]
        public int Id { get; set; }
        public TipoViolencia TipoViolencia { get; set; }
        [Required(ErrorMessage = "O campo 'Descrição' é obrigatório.")]
        public string Descricao { get; set; }

        public ICollection<DenunciaUsuarios> Usuarios { get; set; }
    }

    public enum TipoViolencia
    {
        [Display(Name = "Física")]
        Física,
        [Display(Name = "Psicológica")]
        Psicológica,
        [Display(Name = "Moral")]
        Moral,
        [Display(Name = "Sexual")]
        Sexual,
        [Display(Name = "Patrimonial")]
        Patrimonial
    }
}

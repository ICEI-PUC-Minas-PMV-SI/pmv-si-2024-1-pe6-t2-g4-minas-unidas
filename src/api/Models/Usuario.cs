using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace api.Models
{
    [Table("Usuários")]
    public class Usuario
    {
        [Key]
        public int Id { get; set; }
        public string? Nome { get; set; }
        [Required(ErrorMessage = "O campo 'Cidade' é obrigatório.")]
        public string Cidade { get; set; }
        [Required(ErrorMessage = "O campo 'Estado' é obrigatório.")]
        public string Estado { get; set; }
        [Required(ErrorMessage = "O campo 'Perfil' é obrigatório.")]
        public Perfil Perfil { get; set; }
        [Required(ErrorMessage = "O campo 'E-mail' é obrigatório.")]
        public string Email { get; set; }
        [Required(ErrorMessage = "O campo 'Senha' é obrigatório.")]
        [JsonIgnore]
        public string Senha { get; set; }

        public ICollection<DenunciaUsuarios> Denuncias { get; set; }

        public ICollection<DepoimentoUsuarios> Depoimentos { get; set; }
    }

    [JsonConverter(typeof(JsonStringEnumConverter))]
    public enum Perfil
    {
        [Display(Name = "Administrador")]
        Administrador,
        [Display(Name = "Usuário comum")]
        Usuario
    }
}
using System.ComponentModel.DataAnnotations;

namespace api.Models
{
    public class UsuarioDto
    {
        public int? Id { get; set; }
        public string? Nome { get; set; }

        [Required(ErrorMessage = "O campo 'Cidade' é obrigatório.")]
        public string Cidade { get; set; }

        [Required(ErrorMessage = "O campo 'Estado' é obrigatório.")]
        public string Estado { get; set; }

        [Required(ErrorMessage = "O campo 'Perfil' é obrigatório.")]
        public Perfil Perfil { get; set; }

        [Required(ErrorMessage = "O campo 'Email' é obrigatório.")]
        public string Email { get; set; }

        [Required(ErrorMessage = "O campo 'Senha' é obrigatório.")]
        public string Senha { get; set; }
    }
}

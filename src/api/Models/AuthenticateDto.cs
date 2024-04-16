using System.ComponentModel.DataAnnotations;

namespace api.Models
{
    public class AuthenticateDto
    {
        [Required]
        public int Id { get; set; }

        [Required]
        public string Senha { get; set; }
    }
}

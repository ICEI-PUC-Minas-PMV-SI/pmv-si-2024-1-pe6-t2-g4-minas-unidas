using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace api.Models
{
    [Table("Depoimentos")]
    public class Depoimento : LinksHATEOS
    {
        [Key]
        public int Id { get; set; }
        public string Descricao { get; set; }
    }
}

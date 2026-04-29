using System.ComponentModel.DataAnnotations;

namespace Desafio.Models;
public class Tarefa {
    public int Id { get; set; }

    [Required]
    [StringLength(100, ErrorMessage = "O título deve ter até 100 caracteres.")]
    public string Titulo { get; set; } = string.Empty;

    [StringLength(500, ErrorMessage = "A descrição deve ter até 500 caracteres.")]
    public string Descricao { get; set; } = string.Empty;

    [Required]
    [RegularExpression("Pendente|Concluída", ErrorMessage = "O status deve ser Pendente ou Concluída.")]
    public string Status { get; set; } = "Pendente";

    public DateTime DataCriacao { get; set; } = DateTime.UtcNow;
}

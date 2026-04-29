using Desafio.Data;
using Desafio.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
namespace Desafio.Controllers;
[Route("api/[controller]")] [ApiController]
public class TarefasController : ControllerBase {
    private readonly AppDbContext _context;
    public TarefasController(AppDbContext c) => _context = c;
    [HttpGet] public async Task<ActionResult<IEnumerable<Tarefa>>> Get() => await _context.Tarefas.ToListAsync();
    [HttpGet("{id}")] public async Task<ActionResult<Tarefa>> Get(int id) { var t = await _context.Tarefas.FindAsync(id); return t == null ? NotFound() : t; }
    [HttpPost] public async Task<ActionResult<Tarefa>> Post(Tarefa t) { t.DataCriacao = DateTime.UtcNow; _context.Tarefas.Add(t); await _context.SaveChangesAsync(); return CreatedAtAction(nameof(Get), new { id = t.Id }, t); }
    [HttpPut("{id}")] public async Task<IActionResult> Put(int id, Tarefa t) { if (id != t.Id) return BadRequest(); _context.Entry(t).State = EntityState.Modified; try { await _context.SaveChangesAsync(); } catch (DbUpdateConcurrencyException) { if (!_context.Tarefas.Any(e => e.Id == id)) return NotFound(); throw; } return NoContent(); }
    [HttpDelete("{id}")] public async Task<IActionResult> Delete(int id) { var t = await _context.Tarefas.FindAsync(id); if (t == null) return NotFound(); _context.Tarefas.Remove(t); await _context.SaveChangesAsync(); return NoContent(); }
}

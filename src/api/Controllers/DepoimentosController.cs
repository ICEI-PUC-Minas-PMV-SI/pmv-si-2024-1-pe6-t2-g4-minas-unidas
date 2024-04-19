using api.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace api.Controllers
{
    // [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class DepoimentosController : ControllerBase
    {
        private readonly AppDbContext _context;

        public DepoimentosController(AppDbContext context)
        {
            _context = context;
        }

        // [Authorize(Roles = "Usuario")]
        [HttpGet]
        public async Task<ActionResult> GetAll()
        {
            var model = await _context.Depoimentos.ToListAsync();
            return Ok(model);
        }

        // [Authorize(Roles = "Administrador,Usuário")]
        [HttpPost]
        public async Task<ActionResult<Depoimento>> Create(Depoimento model)
        {
            _context.Depoimentos.Add(model);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetById), new { id = model.Id }, model);
        }

        // [Authorize(Roles = "Administrador")]
        [HttpGet("{id}")]
        public async Task<ActionResult<Depoimento>> GetById(int id)
        {
            var model = await _context.Depoimentos.FindAsync(id);

            if (model == null) return NotFound();

            GerarLinks(model);
            return Ok(model);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, Depoimento model)
        {
            if (id != model.Id) return BadRequest();

            var modeloDb = await _context.Depoimentos.AsNoTracking()
                .FirstOrDefaultAsync(c => c.Id == id);

            if (modeloDb == null) return NotFound();

            _context.Depoimentos.Update(model);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var Depoimento = await _context.Depoimentos.FindAsync(id);

            if (Depoimento == null) return NotFound();

            _context.Depoimentos.Remove(Depoimento);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private void GerarLinks(Depoimento model)
        {
            model.Links.Add(new LinkDto(model.Id, Url.ActionLink(), rel: "self", metodo: "GET"));
            model.Links.Add(new LinkDto(model.Id, Url.ActionLink(), rel: "update", metodo: "PUT"));
            model.Links.Add(new LinkDto(model.Id, Url.ActionLink(), rel: "delete", metodo: "DELETE"));
        }

        [HttpPost("{id}/usuarios")]
        public async Task<ActionResult> AddUsuario(int id, DepoimentoUsuarios model)
        {
            if (id != model.DepoimentoId) return BadRequest();
            _context.DepoimentoUsuarios.Add(model);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetById", new { id = model.DepoimentoId }, model);
        }

        [HttpDelete("{id}/usuarios/{usuarioId}")]
        public async Task<ActionResult> DeleteUsuario(int id, int usuarioId)
        {
            var model = await _context.DepoimentoUsuarios
                .Where(c => c.DepoimentoId == id && c.UsuarioId == usuarioId)
                .FirstOrDefaultAsync();

            if (model == null) return NotFound();

            _context.DepoimentoUsuarios.Remove(model);
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}

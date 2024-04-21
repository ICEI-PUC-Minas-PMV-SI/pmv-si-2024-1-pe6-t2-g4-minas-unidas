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
    public class DenunciasController : ControllerBase
    {
        private readonly AppDbContext _context;

        public DenunciasController(AppDbContext context)
        {
            _context = context;
        }

        // [Authorize(Roles = "Usuario")]
        [HttpGet]
        public async Task<ActionResult> GetAll()
        {
            var model = await _context.Denuncias.ToListAsync();
            return Ok(model);
        }

        // [Authorize(Roles = "Administrador,Usuário")]
        [HttpPost]
        public async Task<ActionResult<Denuncia>> Create(Denuncia model)
        {
            _context.Denuncias.Add(model);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetById), new { id = model.Id }, model);
        }

        // [Authorize(Roles = "Administrador")]
        [HttpGet("{id}")]
        public async Task<ActionResult<Denuncia>> GetById(int id)
        {
            var model = await _context.Denuncias.FindAsync(id);

            if (model == null) return NotFound();

            GerarLinks(model);
            return Ok(model);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, Denuncia model)
        {
            if (id != model.Id) return BadRequest();

            var modeloDb = await _context.Denuncias.AsNoTracking()
                .FirstOrDefaultAsync(c => c.Id == id);

            if (modeloDb == null) return NotFound();

            _context.Denuncias.Update(model);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var denuncia = await _context.Denuncias.FindAsync(id);

            if (denuncia == null) return NotFound();
            
            _context.Denuncias.Remove(denuncia);
            await _context.SaveChangesAsync();
            
            return NoContent();
        }

        private void GerarLinks(Denuncia model)
        {
            model.Links.Add(new LinkDto(model.Id, Url.ActionLink(), rel: "self", metodo: "GET"));
            model.Links.Add(new LinkDto(model.Id, Url.ActionLink(), rel: "update", metodo: "PUT"));
            model.Links.Add(new LinkDto(model.Id, Url.ActionLink(), rel: "delete", metodo: "DELETE"));
        }
    }
}

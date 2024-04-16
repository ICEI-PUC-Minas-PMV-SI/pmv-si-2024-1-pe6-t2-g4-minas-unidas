using api.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;

namespace api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DenunciasController : ControllerBase
    {
        private readonly AppDbContext _context;

        public DenunciasController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Denuncia>>> GetAll()
        {
            var denuncias = await _context.Denuncias.ToListAsync();
            foreach (var denuncia in denuncias)
            {
                GerarLinks(denuncia);
            }
            return Ok(denuncias);
        }

        [HttpPost]
        public async Task<ActionResult<Denuncia>> Create(Denuncia model)
        {
            _context.Denuncias.Add(model);
            await _context.SaveChangesAsync();
            GerarLinks(model);
            return CreatedAtAction(nameof(GetById), new { id = model.Id }, model);
        }

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
            var existingDenuncia = await _context.Denuncias.FindAsync(id);
            if (existingDenuncia == null) return NotFound();
            _context.Entry(existingDenuncia).CurrentValues.SetValues(model);
            await _context.SaveChangesAsync();
            GerarLinks(model);
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

        private void GerarLinks(Denuncia denuncia)
        {
            var url = $"{HttpContext.Request.Scheme}://{HttpContext.Request.Host.ToUriComponent()}";
            denuncia.Links = new List<LinkDto>
            {
                new LinkDto(denuncia.Id, $"{url}/api/Denuncias/{denuncia.Id}", rel: "self", metodo: "GET"),
                new LinkDto(denuncia.Id, $"{url}/api/Denuncias/{denuncia.Id}", rel: "update", metodo: "PUT"),
                new LinkDto(denuncia.Id, $"{url}/api/Denuncias/{denuncia.Id}", rel: "delete", metodo: "DELETE")
            };
        }
    }
}

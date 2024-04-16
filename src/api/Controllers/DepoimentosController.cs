using api.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;

namespace api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DepoimentosController : ControllerBase
    {
        private readonly AppDbContext _context;

        public DepoimentosController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Depoimento>>> GetAll()
        {
            var Depoimentos = await _context.Depoimentos.ToListAsync();
            foreach (var Depoimento in Depoimentos)
            {
                GerarLinks(Depoimento);
            }
            return Ok(Depoimentos);
        }

        [HttpPost]
        public async Task<ActionResult<Depoimento>> Create(Depoimento model)
        {
            _context.Depoimentos.Add(model);
            await _context.SaveChangesAsync();
            GerarLinks(model);
            return CreatedAtAction(nameof(GetById), new { id = model.Id }, model);
        }

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
            var existingDepoimento = await _context.Depoimentos.FindAsync(id);
            if (existingDepoimento == null) return NotFound();
            _context.Entry(existingDepoimento).CurrentValues.SetValues(model);
            await _context.SaveChangesAsync();
            GerarLinks(model);
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

        private void GerarLinks(Depoimento Depoimento)
        {
            var url = $"{HttpContext.Request.Scheme}://{HttpContext.Request.Host.ToUriComponent()}";
            Depoimento.Links = new List<LinkDto>
            {
                new LinkDto(Depoimento.Id, $"{url}/api/Depoimentos/{Depoimento.Id}", rel: "self", metodo: "GET"),
                new LinkDto(Depoimento.Id, $"{url}/api/Depoimentos/{Depoimento.Id}", rel: "update", metodo: "PUT"),
                new LinkDto(Depoimento.Id, $"{url}/api/Depoimentos/{Depoimento.Id}", rel: "delete", metodo: "DELETE")
            };
        }
    }
}

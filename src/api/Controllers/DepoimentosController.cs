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
        public async Task<ActionResult> GetAll()
        {
            var model = await _context.Depoimentos.ToListAsync();
            return Ok(model);
        }

        [HttpPost]
        public async Task<ActionResult<Depoimento>> Create(Depoimento model)
        {
            _context.Depoimentos.Add(model);
            await _context.SaveChangesAsync();

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

            var modeloDb = await _context.Depoimentos.AsNoTracking()
                .FirstOrDefaultAsync(c => c.Id == id);

            if (modeloDb == null) return NotFound();

            _context.Entry(modeloDb).CurrentValues.SetValues(model);

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
    }
}

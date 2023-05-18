using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Back.Data;
using Back.Models;
using NuGet.Protocol;

namespace Back.Controllers
{
    [ApiController]
    [Route("worker")]
    public class WorkerController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public WorkerController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: worker
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Worker>>> GetWorkers()
        {
            var workers = await _context.Worker.ToListAsync();
            return Ok(workers.ToJson());
        }

        // GET: worker/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Worker>> GetWorker(int id)
        {
            var worker = await _context.Worker.FindAsync(id);

            if (worker == null)
            {
                return NotFound();
            }

            return Ok(worker.ToJson());
        }

        // POST: worker
        [HttpPost]
        public async Task<ActionResult<Worker>> CreateWorker(Worker worker)
        {
            _context.Worker.Add(worker);
            await _context.SaveChangesAsync();

            return Ok(worker.ToJson());
        }

        // PUT: worker/5
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateWorker(int id, Worker worker)
        {
            if (id != worker.id)
            {
                return BadRequest();
            }

            _context.Entry(worker).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!WorkerExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // DELETE: worker/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteWorker(int id)
        {
            var worker = await _context.Worker.FindAsync(id);
            if (worker == null)
            {
                return NotFound();
            }

            _context.Worker.Remove(worker);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool WorkerExists(int id)
        {
            return _context.Worker.Any(e => e.id == id);
        }
    }
}

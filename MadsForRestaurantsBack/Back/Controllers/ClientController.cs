using Back.Data;
using Back.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using NuGet.Protocol;

namespace Back.Controllers
{
    [ApiController]
    [Route("client")]
    public class ClientController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public ClientController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Client>>> GetClients()
        {
            var clients = await _context.Client.ToListAsync();

            return Ok(clients.ToJson());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Client>> GetClient(int id)
        {
            var client = await _context.Client.FindAsync(id);

            if (client == null)
            {
                return NotFound();
            }

            return Ok(client.ToJson());
        }

        [HttpGet("check")]
        public async Task<ActionResult<Client>> GetClientByNameAndPhone(string name, string phone)
        {
            var clientName = name;
            var clientPhone = phone;
            var client = await _context.Client
                .Where(c => c.name == clientName && c.phone == clientPhone)
                .Select(c => new
                {
                    c.id,
                    c.name,
                    c.secondName,
                    c.phone,
                    c.email,
                    c.reservations
                })
                .FirstOrDefaultAsync();


            if (client == null)
            {
                return NotFound();
            }

            Console.WriteLine(client);

            return Ok(client.ToJson());
        }


        // POST: client
        [HttpPost("add")]
        public async Task<ActionResult<Client>> PostClient(Client client)
        {
            _context.Client.Add(client);

            await _context.SaveChangesAsync();

            return Ok(client.ToJson());
        }

        // PUT: client/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutClient(int id, Client client)
        {
            Console.WriteLine(client);
            if (id != client.id)
            {
                return BadRequest();
            }

            _context.Entry(client).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ClientExists(id))
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

        // DELETE: client/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteClient(int id)
        {
            var client = await _context.Client.FindAsync(id);
            if (client == null)
            {
                return NotFound();
            }

            _context.Client.Remove(client);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ClientExists(int id)
        {
            return _context.Client.Any(e => e.id == id);
        }
    }
}
using Back.Data;
using Back.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using NuGet.Protocol;

namespace Back.Controllers
{
    [ApiController]
    [Route("table")]
    public class TableController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public TableController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Table>>> GetTables()
        {
            var tables = await _context.Table.ToListAsync();

            return Ok(tables.ToJson());
        }
        
      


        
    }
    
}
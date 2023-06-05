using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Back.Data;
using Back.Models;
using NuGet.Protocol;

namespace Back.Controllers
{
    [ApiController]
    [Route("reservation")]
    public class ReservationController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public ReservationController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: reservation
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Reservation>>> GetReservations()
        {
            var reservations = await _context.Reservation.ToListAsync();
            return Ok(reservations.ToJson());
        }

        // GET: reservation/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Reservation>> GetReservation(int id)
        {
            var reservation = await _context.Reservation.FindAsync(id);

            if (reservation == null)
            {
                return NotFound();
            }

            return Ok(reservation.ToJson());
        }

        [HttpGet]
        [Route("today")]
        public async Task<ActionResult<List<Reservation>>> GetReservationsToday(string date)
        {
            var currentDate = DateOnly.Parse(date);
            var reserves = await _context.Reservation
                .Where(r => r.date.Day == currentDate.Day)
                .ToListAsync();

            if (reserves == null || reserves.Count == 0)
            {
                return NotFound();
            }

            return Ok(reserves.ToJson());
        }


        [HttpGet]
        [Route("checkOccupiedReservation")]
        public async Task<ActionResult<bool>> CheckOccupiedReservation(string date, int tableId)
        {
            var currentDate = DateOnly.Parse(date);
            var reservationExists = await _context.Reservation
                .AnyAsync(r =>
                    r.date == currentDate &&
                    r.tableId == tableId
                );

            return Ok(reservationExists);
        }


        // POST: reservation
        [HttpPost]
        [Route("add")]

        public async Task<ActionResult<Reservation>> PostReservation(Reservation reservation)
        {
            _context.Reservation.Add(reservation);
            await _context.SaveChangesAsync();

            return Ok(reservation.ToJson());
        }

        // PUT: reservation/5
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateReservation(int id, Reservation reservation)
        {
            if (id != reservation.id)
            {
                return BadRequest();
            }

            _context.Entry(reservation).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ReservationExists(id))
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

        // DELETE: reservation/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteReservation(int id)
        {
            var reservation = await _context.Reservation.FindAsync(id);
            if (reservation == null)
            {
                return NotFound();
            }

            _context.Reservation.Remove(reservation);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ReservationExists(int id)
        {
            return _context.Reservation.Any(e => e.id == id);
        }
    }
}
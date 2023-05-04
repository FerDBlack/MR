using Microsoft.AspNetCore.Mvc;

namespace Back.Controllers;

public class HomeController : Controller
{
    // GET
    [HttpGet("favicon.ico")]
    public IActionResult Favicon()
    {
        return NoContent();
    }
}
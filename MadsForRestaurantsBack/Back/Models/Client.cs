using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Back.Models;
[Table("TbClient")]
public class Client
{
    [Key]
    public int id { get; set; }
    public string name { get; set; }
    public string secondName { get; set; }
    public string phone { get; set; }
    public string email { get; set; }
    
    public ICollection<Reservation> reservations { get; set; }

}

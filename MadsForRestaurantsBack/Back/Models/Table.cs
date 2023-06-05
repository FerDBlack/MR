using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Back.Models;
[Table("TbTable")]

public class Table
{
    [Key]
    public int id { get; set; }
    public string name { get; set; }
    public double x { get; set; }
    public double y { get; set; }
    public ICollection<Reservation> reservations { get; set; }

}


using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Back.Models;
[Table("TbReservation")]
public class Reservation
{
    [Key]
    public int id { get; set; }
    public DateOnly date { get; set; }
    public int numClients { get; set; }
    [ForeignKey("clientId")]
    public int clientId { get; set; }
    [ForeignKey("tableId")]
    public int tableId { get; set; }
    public string name { get; set; }

}
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Back.Models;
[Table("TbReservation")]
public class Reservation
{
    [Key]
    public int id { get; set; }
    public DateTime date { get; set; }
    public int numClients { get; set; }
    public int clientId { get; set; }
    public int tableId { get; set; }
    public string name { get; set; }

    public Client client { get; set; }
    public Table table { get; set; }
}
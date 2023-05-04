using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Back.Models;
[Table("TbWorker")]
public class Worker
{
    [Key]
    public int id { get; set; }
    public string name { get; set; }
    public string secondName { get; set; }
    public string phone { get; set; }
    public string email { get; set; }
    public string password { get; set; }
    public string charge { get; set; }
}
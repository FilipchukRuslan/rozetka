using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Model
{
    public class Order
    {
        public int Id { get; set; }
        public int Customer_Id { get; set; }
        public string OrderNo { get; set; }
        public DateTime OrderDate { get; set; }
        public Decimal OrderPrice { get; set; }
    }
}

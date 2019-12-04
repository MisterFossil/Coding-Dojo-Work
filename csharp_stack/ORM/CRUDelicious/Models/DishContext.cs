using Microsoft.EntityFrameworkCore;

namespace CRUDelicious.Models
{
    public class DishContext : DbContext
    {
        // base() calls the parent class' contructor passing the "options" parameter along
        public DishContext(DbContextOptions options) :base(options) {}
    }
}
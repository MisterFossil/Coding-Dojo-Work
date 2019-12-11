using Microsoft.EntityFrameworkCore;

namespace WeddingPlanner.Models
{
    public class MyContext : DbContext
    {
        public MyContext (DbContextOptions options) : base(options) {}

        // add project models going into SQL database here
        public DbSet<User> Users {get;set;}
        public DbSet<WeddingPlan> WeddingPlans {get;set;}
        public DbSet<GuestList> GuestLists {get;set;}
    }
}
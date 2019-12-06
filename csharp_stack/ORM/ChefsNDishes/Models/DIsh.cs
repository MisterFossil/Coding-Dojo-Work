using System.ComponentModel.DataAnnotations;
using System;
using System.Collections.Generic;

namespace ChefsNDishes.Models
{
    public class Dish
    {
        [Key]
        public int DishId {get;set;}
        public string Name {get;set;}
        public int Calories {get;set;}
        public string Description {get;set;}
        public int Tastiness {get;set;}
        public int ChefId {get;set;}
        // Navigation property for related chef objects
        public Chef Creator {get;set;}
        public DateTime CreatedAt {get;set;} = DateTime.Now;
        public DateTime UpdatedAt {get;set;} = DateTime.Now;

    }
}
using System.ComponentModel.DataAnnotations;
using System;
using System.Collections.Generic;

namespace ChefsNDishes.Models
{
    public class Dish
    {
        [Key]
        public int DishId {get;set;}
        [Required]
        [Display(Name="Name of Dish")]
        public string Name {get;set;}
        [Required]
        [Display(Name="# of Calories")]
        [Range(0,int.MaxValue, ErrorMessage = "Please enter a positive number for calories")]
        public int Calories {get;set;}
        [Required]
        public string Description {get;set;}
        [Required]
        [Range(1,5)]
        public int Tastiness {get;set;}
        [Required]
        [Display(Name="Chef")]
        public int ChefId {get;set;}
        // Navigation property for related chef objects
        public Chef Creator {get;set;}
        public DateTime CreatedAt {get;set;} = DateTime.Now;
        public DateTime UpdatedAt {get;set;} = DateTime.Now;

    }
}
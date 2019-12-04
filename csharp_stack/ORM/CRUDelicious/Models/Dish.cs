using System.ComponentModel.DataAnnotations;
using System;
using Microsoft.AspNetCore.Mvc.Rendering;
using System.Collections.Generic;


namespace CRUDelicious.Models
{
    public class Dish
    {
        [Key]
        public int DishId {get;set;}
        [Required]
        [MinLength(4)]
        public string Name {get;set;}
        [Required]
        [MinLength(4)]
        public string Chef {get;set;}
        [Required]
        public int Tastiness {get;set;}

        [Required]
        [Range(1,int.MaxValue, ErrorMessage="Please enter a positive calorie amount.")]
        public int Calories {get;set;}
        [Required]
        [MinLength(5)]
        public string Description {get;set;}
        public DateTime Created_At {get;set;} = DateTime.Now;
        public DateTime Updated_At {get;set;} = DateTime.Now;
    }
}
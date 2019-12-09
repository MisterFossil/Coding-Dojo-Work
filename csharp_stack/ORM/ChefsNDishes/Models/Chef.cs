using System.ComponentModel.DataAnnotations;
using System;
using System.Collections.Generic;

namespace ChefsNDishes.Models
{
    public class Chef
    {
        [Key]
        public int ChefId {get;set;}
        [Required]
        [Display(Name="First Name")]
        public string FirstName {get;set;}
        [Required]
        [Display(Name="Last Name")]
        public string LastName {get;set;}
        [Required]
        [Display(Name="Date of Birth")]
        [PastDate]
        public DateTime DateOfBirth {get;set;}
        //Navigation property for related Dish objects
        public List<Dish> CreatedDishes {get;set;}
        public DateTime CreatedAt {get;set;} = DateTime.Now;
        public DateTime UpdatedAt {get;set;} = DateTime.Now;

    }

    public class PastDateAttribute : ValidationAttribute
    {
        protected override ValidationResult IsValid(object value, ValidationContext validationContext)
        {
            DateTime today = DateTime.Today;
            if (((DateTime)value).Date > today)
            {
                return new ValidationResult("Date of birth must be in the past.");
            }
            return ValidationResult.Success;
        }
    }
}
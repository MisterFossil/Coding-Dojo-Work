using System;
using System.ComponentModel.DataAnnotations;
using System.Collections.Generic;

namespace WeddingPlanner.Models
{
    public class WeddingPlan
    {
        [Key]
        public int WeddingPlanId {get;set;}
        [Required]
        [Display(Name="Significant Other 1")]
        public string PartyOne {get;set;}
        [Required]
        [Display(Name="Significant Other 2")]
        public string PartyTwo {get;set;}
        [Required]
        [Display(Name="Event Date")]
        [DataType(DataType.Date)]
        [FutureDate]
        public DateTime EventDate {get;set;}
        [Required]
        public string Address {get;set;}
        public int UserId {get;set;}
        public DateTime CreatedAt {get;set;} = DateTime.Now;
        public DateTime UpdatedAt {get;set;} = DateTime.Now;

        // Navigation Fields Here
        public List<GuestList> Attendees {get;set;}
        public User Creator {get;set;}

    }

    public class FutureDateAttribute : ValidationAttribute
    {
        protected override ValidationResult IsValid(object value, ValidationContext validationContext)
        {
            DateTime today = DateTime.Today;
            if (((DateTime)value).Date < today)
            {
                return new ValidationResult("Date of wedding must be in the future.");
            }
            return ValidationResult.Success;
        }
    }
}
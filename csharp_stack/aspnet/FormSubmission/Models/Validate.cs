using System.ComponentModel.DataAnnotations;

namespace FormSubmission.Models
{
    public class User
    {
        [Required]
        [MinLength(4, ErrorMessage = "First Name must be longer than 4 characters.")]
        [Display(Name = "First Name:")]
        public string FirstName {get;set;}

        [Required]
        [MinLength(4, ErrorMessage = "Last Name must be longer than 4 characters.")]
        [Display(Name = "Last Name:")]
        public string LastName {get;set;}

        [Required]
        [Range(0,int.MaxValue, ErrorMessage = "Please enter a number larger than 0")]
        public int Age {get;set;}

        [Required]
        [EmailAddress]
        public string Email {get;set;}

        [Required]
        [MinLength(8)]
        [DataType(DataType.Password)]
        public string Password {get;set;}
    }
}
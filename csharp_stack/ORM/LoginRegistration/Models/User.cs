using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

public class User
{
    [Key]
    public int UserId {get;set;}
    [Required]
    [Display(Name = "First Name")]
    public string FirstName {get;set;}
    [Required]
    [Display(Name = "Last Name")]
    public string LastName {get;set;}
    [Required]
    [EmailAddress]
    public string Email {get;set;}
    [Required]
    [DataType(DataType.Password)]
    [MinLength(8, ErrorMessage="Password must be at least 8 characters.")]
    public string Password {get;set;}
    public DateTime CreatedAt {get;set;} = DateTime.Now;
    public DateTime UpdatedAt {get;set;} = DateTime.Now;

    // Will not be mapped to the table
    [NotMapped]
    [Compare("Password")]
    [Display(Name="Password Confirm")]
    [DataType(DataType.Password)]
    public string Confirm {get;set;}

}
using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

public class LUser
{
    [Required]
    [EmailAddress]
    [Display(Name = "Email")]
    public string LEmail {get;set;}
    [Required]
    [DataType(DataType.Password)]
    [Display(Name="Password")]
    public string LPassword {get;set;}

}
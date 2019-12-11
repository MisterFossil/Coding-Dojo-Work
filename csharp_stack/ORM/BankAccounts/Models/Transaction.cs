using System.ComponentModel.DataAnnotations;
using System;

namespace BankAccounts.Models
{
    public class Transaction
    {
        [Key]
        public int TransactionId {get;set;}
        [Required]
        [Display(Name="Deposit/Withdraw")]
        [DataType(DataType.Currency)]
        public decimal Amount {get;set;}
        [Required]
        public int UserId {get;set;}
        // Navigation Property for related User object
        public User AccountHolder {get;set;}
        public DateTime CreatedAt {get;set;} = DateTime.Now;
        public DateTime UpdatedAt {get;set;} = DateTime.Now;
    }
}
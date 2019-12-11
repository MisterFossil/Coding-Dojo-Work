using System;
using System.ComponentModel.DataAnnotations;

namespace WeddingPlanner.Models
{
    public class GuestList
    {
        [Key]
        public int GuestListId {get;set;}
        public int WeddingPlanId {get;set;}
        public int UserId {get;set;}
        public WeddingPlan WeddingPlan {get;set;}
        public User User {get;set;}
    }
}
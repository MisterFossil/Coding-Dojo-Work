using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Mvc.Rendering;
using System.Collections.Generic;

namespace Forms.Models
{
    public class Survey
    {
        [Required]
        [MinLength(2)]
        public string name {get;set;}
        [Required]
        public string location {get;set;}

        public List<SelectListItem> locations {get;} = new List<SelectListItem>
        {
            new SelectListItem { Value = "Arlington", Text = "Arlington"},
            new SelectListItem { Value = "Seattle", Text = "Seattle"},
            new SelectListItem { Value = "San Francisco", Text = "San Francisco"},

        };

        [Required]
        public string language {get;set;}

        public List<SelectListItem> languages {get;} = new List<SelectListItem>
        {
            new SelectListItem {Value = "C#", Text = "C#"},
            new SelectListItem {Value = "Java", Text = "Java"},
            new SelectListItem {Value = "Python", Text = "Python"},
        };

        [MinLength(20)]
        public string comment {get;set;}
    }
}
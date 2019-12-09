using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ChefsNDishes.Models;
using Microsoft.EntityFrameworkCore;

namespace ChefsNDishes.Controllers
{
    public class HomeController : Controller
    {
        private MyContext dbContext;

        public HomeController(MyContext context)
        {
            dbContext = context;
        }


        // Renders
        [HttpGet("")]
        public IActionResult Index()
        {
            ViewBag.AllChefs = dbContext.Chefs
                .Include(chef => chef.CreatedDishes)
                .ToList();
            return View();
        }

        [HttpGet("dishes")]
        public IActionResult Dishes()
        {
            ViewBag.AllDishes = dbContext.Dishes
                .Include(dish => dish.Creator)
                .ToList();
            return View();
        }

        [HttpGet("addAChef")]
        public IActionResult AddAChef()
        {
            return View();
        }

        [HttpGet("addADish")]
        public IActionResult AddADish()
        {
            ViewBag.AllChefs = dbContext.Chefs.ToList();
            return View();
        }

        // Data Manipulations Down Here

        [HttpPost("createChef")]
        public IActionResult CreateChef(Chef chef)
        {
            if(ModelState.IsValid)
            {
                dbContext.Add(chef);
                dbContext.SaveChanges();
                return RedirectToAction("Index");
            }
            return View("AddAChef");
        }

        [HttpPost("createDish")]
        public IActionResult CreateDish(Dish dish)
        {
            if(ModelState.IsValid)
            {
                dbContext.Add(dish);
                dbContext.SaveChanges();
                return RedirectToAction("Dishes");
            }
            ViewBag.AllChefs = dbContext.Chefs.ToList();
            return View("AddADish");
        }
    }
}

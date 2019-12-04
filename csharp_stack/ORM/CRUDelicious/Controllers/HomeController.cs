using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using CRUDelicious.Models;

namespace CRUDelicious.Controllers
{
    public class HomeController : Controller
    {
        private DishContext dbContext;

        public HomeController(DishContext context)
        {
            dbContext = context;
        }

        // ALL THE VIEWS

        [HttpGet("")]
        public IActionResult Index()
        {
            ViewBag.AllDishes = dbContext.Dishes.ToList().OrderByDescending(dish => dish.Created_At);
            return View();
        }

        [HttpGet("new")]
        public IActionResult NewDish()
        {
            var model = new Dish();
            return View(model);
        }

        // ALL THE RIDIRECTS
        [HttpPost("dish/add")]
        public IActionResult AddDish(Dish newDish)
        {
            if(ModelState.IsValid)
            {
                Console.WriteLine("*************The Model is Valid*****************");
                dbContext.Add(newDish);
                dbContext.SaveChanges();
                return RedirectToAction("Index");
            }
            Console.WriteLine("*************Your model si wrong*****************");
            var model = new Dish();
            return View("NewDish", model);
            
        }




        // Extras?
        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}

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
            ViewBag.AllDishes = dbContext.Dishes.ToList().OrderByDescending(dish => dish.Created_At).Take(5);
            return View();
        }

        [HttpGet("new")]
        public IActionResult NewDish()
        {
            var model = new Dish();
            return View(model);
        }

        [HttpGet("{dishId}")]
        public IActionResult ViewDish(int dishId)
        {
            ViewBag.Item = dbContext.Dishes.FirstOrDefault(dish => dish.DishId == dishId);
            return View();
        }

        [HttpGet("edit/{dishId}")]
        public IActionResult EditDish(int dishId)
        {
            ViewBag.DishEdit = dbContext.Dishes.FirstOrDefault(dish => dish.DishId == dishId);
            return View();
        }

        // ALL THE Table Manipulators
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

        [HttpGet("delete/{dishId}")]
        public IActionResult DeleteDish(int dishId)
        {
            Dish DishToDelete = dbContext.Dishes.FirstOrDefault(dish => dish.DishId == dishId);
            dbContext.Remove(DishToDelete);
            dbContext.SaveChanges();
            return RedirectToAction("Index");

        }

        [HttpPost("update/{DishId}")]
        public IActionResult UpdateDish(Dish UpDish, int DishId)
        {
            if(ModelState.IsValid)
            {
                Console.WriteLine("*****************Inside the model validator********************");
                Dish DishToUpdate = dbContext.Dishes.FirstOrDefault(dish => dish.DishId == DishId);
                DishToUpdate.Name = UpDish.Name;
                DishToUpdate.Chef = UpDish.Chef;
                DishToUpdate.Calories = UpDish.Calories;
                DishToUpdate.Tastiness = UpDish.Tastiness;
                DishToUpdate.Description = UpDish.Description;
                DishToUpdate.Updated_At = DateTime.Now;
                dbContext.SaveChanges();
                return RedirectToAction("ViewDish", new {DishId});
            }
            ViewBag.DishEdit = dbContext.Dishes.FirstOrDefault(dish => dish.DishId == DishId);
            Console.WriteLine("*****************Model isn't valid********************");
            return View("EditDish");
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

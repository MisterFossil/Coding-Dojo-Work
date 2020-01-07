using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WeddingPlanner.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Http;

namespace WeddingPlanner.Controllers
{
    public class HomeController : Controller
    {
        private MyContext dbContext;

        public HomeController(MyContext context)
        {
            dbContext = context;
        }

        // *********************
        // HTTPGets
        // *********************

        // Login/Register Page
        [HttpGet("")]
        public IActionResult Index()
        {
            HttpContext.Session.Clear();
            return View();
        }

        // Wedding Plan Dashboard
        [HttpGet("dashboard")]
        public IActionResult Dashboard(int userId)
        {
            int? LocalVar = HttpContext.Session.GetInt32("UserId");
            if (LocalVar == null)
            {
                return RedirectToAction("Index");
            }

            ViewBag.user = dbContext.Users.FirstOrDefault(i => i.UserId == (int)LocalVar);

            List<WeddingPlan> allPlans = dbContext.WeddingPlans
                .Include(c => c.Creator)
                .Include(g => g.Attendees)
                .ThenInclude(u => u.User)
                .ToList();

            ViewBag.allPlans = allPlans;

            return View();
        }

        // Create a Wedding Form
        [HttpGet("newWedding")]
        public IActionResult NewWedding()
        {
            int? LocalVar = HttpContext.Session.GetInt32("UserId");
            if (LocalVar == null)
            {
                return RedirectToAction("Index");
            }
            ViewBag.UserId = (int)LocalVar;
            return View();
        }

        // Wedding Details Page
        [HttpGet("wedding/{wedId}")]
        public IActionResult WeddingDetails(int wedId)
        {
            int? LocalVar = HttpContext.Session.GetInt32("UserId");
            if (LocalVar == null)
            {
                return RedirectToAction("Index");
            }

            ViewBag.UserId = (int)LocalVar;
            WeddingPlan wedding = dbContext.WeddingPlans
                .Include(g => g.Attendees)
                .ThenInclude(u => u.User)
                .FirstOrDefault(w => w.WeddingPlanId == wedId);

            ViewBag.wedding = wedding;

            return View("WeddingDetails");
        }
        
        // Registers a user to attend a wedding
        [HttpGet("attend/{wedId}/{uId}")]
        public IActionResult Attend(int wedId, int uId)
        {
            GuestList newGuest = new GuestList();
            newGuest.UserId = uId;
            newGuest.WeddingPlanId = wedId;
            dbContext.Add(newGuest);
            dbContext.SaveChanges();

            return RedirectToAction("Dashboard");
        }

        // delete a wedding that a user has created
        [HttpGet("delete/{wedId}")]
        public IActionResult DeleteWedding(int wedId)
        {
            WeddingPlan wed = dbContext.WeddingPlans.FirstOrDefault(i => i.WeddingPlanId == wedId);
            dbContext.WeddingPlans.Remove(wed);
            dbContext.SaveChanges();
            return RedirectToAction("Dashboard");
        }

        // Remove user from the wedding
        [HttpGet("unattend/{wedId}/{uId}")]
        public IActionResult Unattend(int wedId, int uId)
        {
            GuestList guest = dbContext.GuestLists.FirstOrDefault(w => w.WeddingPlanId == wedId && w.UserId == uId);
            dbContext.GuestLists.Remove(guest);
            dbContext.SaveChanges();
            return RedirectToAction("Dashboard");
        }



        // Logout Clears session and retuns user to login/register page
        [HttpGet("logout")]
        public IActionResult Logout()
        {
            HttpContext.Session.Clear();
            return RedirectToAction("Index");
        }

        // *********************
        // HTTPPosts
        // *********************

        // Checks to see if email is unique and adds user into database
        [HttpPost("CheckReg")]
        public IActionResult CheckReg(User user)
        {
            if(ModelState.IsValid)
            {
                // If a User exists with provided email
                if(dbContext.Users.Any(u => u.Email == user.Email))
                {
                    // Manually add a ModelState error to the Email field, with provided
                    // error message
                    ModelState.AddModelError("Email", "Email already in use!");                    
                    // You may consider returning to the View at this point
                    return View("Index");
                }
                PasswordHasher<User> Hasher = new PasswordHasher<User>();
                user.Password = Hasher.HashPassword(user, user.Password);
                dbContext.Add(user);
                dbContext.SaveChanges();
                HttpContext.Session.SetInt32("UserId", user.UserId);
                return RedirectToAction("Dashboard", new{user.UserId});
            }
            return View("Index");
        }

        // Checks the Login credentials vs the database
        [HttpPost("CheckLog")]
        public IActionResult CheckLogin(LogUser user)
        {
            if(ModelState.IsValid)
            {
                var userInDb = dbContext.Users.FirstOrDefault(u => u.Email == user.LogEmail);
                if(userInDb == null)
                {
                    ModelState.AddModelError("LogEmail", "Invalid Email/Password");
                    return View("Index");
                }
                var hasher = new PasswordHasher<LogUser>();
                var result = hasher.VerifyHashedPassword(user, userInDb.Password, user.LogPassword);
                if(result == 0)
                {
                    ModelState.AddModelError("LogEmail", "Invalid Email/Password");
                    return View("Index");
                }
                HttpContext.Session.SetInt32("UserId", userInDb.UserId);
                return RedirectToAction("Dashboard");
            }
            return View("Index");
        }

        [HttpPost("createWedding")]
        public IActionResult CreateWedding(WeddingPlan plan)
        {
            ViewBag.UserId = (int)HttpContext.Session.GetInt32("UserId");

            if(ModelState.IsValid)
            {
                dbContext.Add(plan);
                GuestList newlist = new GuestList();
                newlist.UserId = (int)HttpContext.Session.GetInt32("UserId");
                newlist.WeddingPlanId = plan.WeddingPlanId;
                dbContext.Add(newlist);
                dbContext.SaveChanges();
                return RedirectToAction("Dashboard");

            }
            return View("NewWedding");
        }
    }
}

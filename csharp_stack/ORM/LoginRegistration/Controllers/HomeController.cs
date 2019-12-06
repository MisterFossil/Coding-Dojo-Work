using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using LoginRegistration.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Http;

namespace LoginRegistration.Controllers
{
    public class HomeController : Controller
    {
        private LoginContext dbContext;

        public HomeController (LoginContext context)
        {
            dbContext = context;
        }

        // View Returns

        [HttpGet("")]
        public IActionResult Index()
        {
            return View();
        }

        [HttpGet("login")]
        public IActionResult Login()
        {
            return View();

        }

        [HttpGet("success")]
        public IActionResult Success()
        {
            string LocalVar = HttpContext.Session.GetString("UserEmail");
            if (LocalVar == null)
            {
                return RedirectToAction("Index");
            }
            return View();
        }

        [HttpGet("logout")]
        public IActionResult Logout()
        {
            HttpContext.Session.Clear();
            return RedirectToAction("Index");
        }

        // Data Manipulators
        [HttpPost("register")]
        public IActionResult RegisterUser(User user)
        {
            if (ModelState.IsValid)
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
                // Hash the password before storing it
                PasswordHasher<User> Hasher = new PasswordHasher<User>();
                user.Password = Hasher.HashPassword(user, user.Password);

                dbContext.Add(user);
                dbContext.SaveChanges();

                HttpContext.Session.SetString("UserEmail", user.Email);

                return RedirectToAction("Success");
            }
            return View("Login");
        }

        [HttpPost("checkLog")]
        public IActionResult checkLog(LUser luser)
        {
            if (ModelState.IsValid)
            {
                var userInDb = dbContext.Users.FirstOrDefault(u => u.Email == luser.LEmail);

                if(userInDb == null)
                {
                    ModelState.AddModelError("LEmail", "Invalid Email/Password");
                    return View("Login");
                }

                var hasher = new PasswordHasher<LUser>();

                var result = hasher.VerifyHashedPassword(luser, userInDb.Password, luser.LPassword);

                if (result == 0)
                {
                    ModelState.AddModelError("LEmail", "Invalid Email/Password");
                    return View("Login");
                }

                HttpContext.Session.SetString("UserEmail", luser.LEmail);
                return RedirectToAction("Success");
            }
            return View("Login");

        }

    }
}

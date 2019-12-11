using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using BankAccounts.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Http;

namespace BankAccounts.Controllers
{
    public class HomeController : Controller
    {
        private MyContext dbContext;

        public HomeController(MyContext context)
        {
            dbContext = context;
        }

        // Views

        [HttpGet("")]
        public IActionResult Index()
        {
            HttpContext.Session.Clear();
            return View();
        }

        [HttpGet("account/{userId}")]
        public IActionResult Transactions(int userId)
        {
            string LocalVar = HttpContext.Session.GetString("UserEmail");
            if (LocalVar == null)
            {
                return RedirectToAction("Index");
            }

            User user = dbContext.Users
                .Include(u => u.UserTransactions)
                .FirstOrDefault(u => u.UserId == userId);

            ViewBag.user = user;

            ViewBag.allUserTransactions = dbContext.Transactions
                .Where(u => u.AccountHolder.UserId == userId)
                .OrderByDescending(t => t.CreatedAt);

            decimal accountSum = user.UserTransactions.Sum(x => x.Amount);
            ViewBag.accountSum = accountSum;

            return View();
        }

        [HttpGet("logout")]
        public IActionResult Logout()
        {
            HttpContext.Session.Clear();
            return RedirectToAction("Index");
        }

        // Data Manipulations/Checks

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

                HttpContext.Session.SetString("UserEmail", user.Email);

                return RedirectToAction("Transactions", new{user.UserId} );

            }
            return View("Index");
        }


        // Checks the Login credentials vs the database
        [HttpPost("CheckLogin")]
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

                HttpContext.Session.SetString("UserEmail", user.LogEmail);

                return RedirectToAction("Transactions", new{userInDb.UserId});
            }
            return View("Index");
        }

        // Adding transactions to user's accounts
        [HttpPost("makeTransaction")]
        public IActionResult MakeTransaction(Transaction money)
        {
            User user = dbContext.Users
                .Include(u => u.UserTransactions)
                .FirstOrDefault(u => u.UserId == money.UserId);

            ViewBag.user = user;
            decimal accountSum = user.UserTransactions.Sum(x => x.Amount);
            ViewBag.accountSum = accountSum;

            ViewBag.allUserTransactions = dbContext.Transactions
                .Where(u => u.AccountHolder.UserId == money.UserId)
                .OrderByDescending(t => t.CreatedAt);

            if(ModelState.IsValid)
            {

                decimal balance = money.Amount + accountSum;
                if (balance < 0)
                {
                    ModelState.AddModelError("Amount","Must have available funds to withdraw money");
                    return View("Transactions");
                }
                dbContext.Add(money);
                dbContext.SaveChanges();

                return RedirectToAction("Transactions", new{user.UserId});
            }
            return View("Transactions");
        }
    }
}

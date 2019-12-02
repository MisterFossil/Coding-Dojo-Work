using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ModelFun.Models;

namespace ModelFun.Controllers
{
    public class HomeController : Controller
    {
        [HttpGet]
        [Route("")]
        public IActionResult Index()
        {
            Message text = new Message()
            {
                Text = "This is a message from the controller: 'Be Good, Santa's watching'"
            };
            return View(text);
        }

        [HttpGet("numbers")]
        public IActionResult Numbers()
        {
            Numbers numList = new Numbers()
            {
                nums = new int[]{1,2,3,10,43,5}
            };
            return View(numList);
        }

        [HttpGet("users")]
        public IActionResult Users()
        {
            Users userL = new Users()
            {
                userList = new string[]{"Moose Phillips","Sarah","Jerry","Rene Ricky","Barbarah"}
            };
            return View(userL);

        }

        [HttpGet("user")]
        public IActionResult UserDisp()
        {
            User moose = new User()
            {
                FirstName = "Moose",
                LastName = "Phillips"
            };
            return View("user", moose);
        }

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

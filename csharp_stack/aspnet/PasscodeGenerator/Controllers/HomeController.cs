using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using PasscodeGenerator.Models;
using Microsoft.AspNetCore.Http;

namespace PasscodeGenerator.Controllers
{
    public class HomeController : Controller
    {

        public static int code = 1;

        [HttpGet("")]
        public IActionResult Index()
        {
            StringGenerator gen = new StringGenerator();
            HttpContext.Session.SetInt32("Codes", code);
            ViewBag.num = HttpContext.Session.GetInt32("Codes");

            ViewBag.code = gen.PWGenerator(25);
            code += 1;
            return View();
        }
    }
}

using Microsoft.AspNetCore.Mvc;
using System;

namespace TimeDisplay.Controllers
{
    public class TimeController : Controller
    {
        [HttpGet]
        [Route("")]
        public ViewResult Index()
        {
            DateTime CurrentTime = DateTime.Now;
            ViewBag.date = CurrentTime.Date.ToString("MMM dd, yyyy");
            ViewBag.time = CurrentTime.ToString("hh:mm tt");
            return View();
        }
    }
}
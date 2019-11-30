using Microsoft.AspNetCore.Mvc;
using System;

namespace ProfileRedux.Controllers
{
    public class HomeController : Controller
    {
        // index route
        [HttpGet]
        [Route("")]
        public ViewResult Index()
        {
            // Here we assign the value "Hello From ViewBag!" to the property .Example
            // Property names are arbitrary and can be whatever you like
            ViewBag.Example = "Hello From ViewBag!";
            return View();
        }

        // projects render
        [HttpGet]
        [Route("projects")]
        public ViewResult Projects()
        {
            return View();
        }

        // contact render
        [HttpGet]
        [Route("contact")]
        public ViewResult Contact()
        {
            return View();
        }


        // video example
        [HttpGet("hello")]
        public RedirectToActionResult Hello()
        {
            Console.WriteLine("Hello THere, redirecting.....");
            // anonymous object - great for small instances of sending variable data, but if you start sending the same data over and over, make a class
            var param = new{username="Jon",location="Arlington"};
            return RedirectToAction("HelloUser", param);
        }

        // Still in the video example
        [HttpGet("users/{username}/{location}")]
        // A reason for using an IActionResult return type could be for form submission, if there are errors there may be different things we want to do with those responses
        public IActionResult HelloUser(string username, string location)
        {
            var response = new{user=username,place=location};
            if(location == "Arlington") 
            {
                return Json(response);
            } else if (location == "Seattle") 
            {
                // doesn't route to index, but shows the index page
                return View("Index");
            }
            // redirects back to the index page
            return RedirectToAction("Index");

        }

        // // Still in the video example
        // // making a copy for completeness
        // [HttpGet("users/{username}/{location}")]
        // public JsonResult HelloUser(string username, string location)
        // {
        //     var response = new{user=username,place=location};

        //     return Json(response);
        // }

    }
}
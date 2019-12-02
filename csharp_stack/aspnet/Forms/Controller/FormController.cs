using Microsoft.AspNetCore.Mvc;
using Forms.Models;

namespace Forms.Controllers
{
    public class FormController : Controller
    {
        // Render the Index Page
        [HttpGet]
        [Route("")]
        public ViewResult Index() {
            return View();
        }


        // Render the Results Page
        [HttpGet]
        [Route("result")]
        public ViewResult Result(Survey survey)
        {
            
            return View(survey);
        }

        [HttpPost("survey")]
        public IActionResult Submission(Survey survey)
        {
            return RedirectToAction("Result",survey);
        }
    }
}
using Microsoft.AspNetCore.Mvc;
using Forms.Models;

namespace Forms.Controllers
{
    public class DojoFormController : Controller
    {
        // Render the Index Page
        [HttpGet]
        [Route("")]
        public ViewResult Index() {
            var model = new Survey();
            return View(model);
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
            var model = new Survey();
            if(ModelState.IsValid)
            {
                return RedirectToAction("Result",survey);
            }
            return View("Index",model);

        }
    }
}
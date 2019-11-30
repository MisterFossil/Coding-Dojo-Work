using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;

namespace Portfolio.Controllers {

    public class PortfolioController : Controller {
        // Adding Routes for this controller to handle

        // index
        [HttpGet]
        [Route("")]
        public ViewResult Index() {
            return View();
        }

        // projects
        [HttpGet]
        [Route("projects")]
        public string Projects() {
            return "These are my projects!";
        }

        // contact
        [HttpGet]
        [Route("contact")]
        public string Contact(){
            return "This is my contact!";
        }
    }
}
using Microsoft.AspNetCore.Mvc;

namespace ProfileRedux.Controllers
{
    public class HomeController : Controller
    {
        // index route
        [HttpGet]
        [Route("")]
        public ViewResult Index()
        {
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

    }
}
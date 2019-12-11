using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ProductsAndCategories.Models;
using Microsoft.EntityFrameworkCore;

namespace ProductsAndCategories.Controllers
{
    public class HomeController : Controller
    {
        private MyContext dbContext;

        public HomeController(MyContext context)
        {
            dbContext = context;
        }

        [HttpGet("")]
        public IActionResult Index()
        {
            return Redirect("products");
        }

        [HttpGet("products")]
        public IActionResult Products()
        {
            ViewBag.AllProducts = dbContext.Products.ToList();
            return View();
        }

        [HttpGet("categories")]
        public IActionResult Categories()
        {
            ViewBag.AllCategories = dbContext.Categories.ToList();
            return View();
        }

        [HttpGet("products/{prodId}")]
        public IActionResult ProductPage(int prodId)
        {
            Product prod = dbContext.Products.FirstOrDefault(i => i.ProductId == prodId);
            ViewBag.prod = prod;

            Product myCats = dbContext.Products
                .Include(p => p.Categories)
                .ThenInclude(a => a.Category)
                .FirstOrDefault(pId => pId.ProductId == prodId);

            ViewBag.prodCats = myCats;

            var inCat = myCats.Categories.Select(c => c.Category);

            ViewBag.categoryMinus = dbContext.Categories.Except(inCat)
                .OrderBy(c => c.Name).ToList();

            // ViewBag.ProdBelong = dbContext.Products
            //     .Include(p => p.Categories)
            //     .ThenInclude(c => c.Category)
            //     .FirstOrDefault(a => a.ProductId == prodId);
            return View("ProductPage");
        }

        [HttpGet("categories/{catId}")]
        public IActionResult CategoryPage(int catId)
        {
            Category cat = dbContext.Categories.FirstOrDefault(i => i.CategoryId == catId);
            ViewBag.cat = cat;

            // Product myCats = dbContext.Products
            //     .Include(p => p.Categories)
            //     .ThenInclude(a => a.Category)
            //     .FirstOrDefault(pId => pId.ProductId == prodId);

            Category myProds = dbContext.Categories
                .Include(c => c.Products)
                .ThenInclude(a => a.Product)
                .FirstOrDefault(cId => cId.CategoryId == catId);

            ViewBag.catProds = myProds;

            var inProd = myProds.Products.Select(p => p.Product);

            ViewBag.prodMinus = dbContext.Products.Except(inProd)
                .OrderBy(p => p.Name).ToList();


            // ViewBag.products = dbContext.Products.ToList();
            return View("CategoryPage");
        }

        // HTTP POSTs
        [HttpPost("createProduct")]
        public IActionResult CreateProduct(Product prod)
        {
            ViewBag.AllProducts = dbContext.Products.ToList();

            if(ModelState.IsValid)
            {
                dbContext.Add(prod);
                dbContext.SaveChanges();
                return Redirect("products");

            }
            return View("Products");
        }

        [HttpPost("createCategory")]
        public IActionResult CreateCategory(Category cat)
        {
            ViewBag.AllCategories = dbContext.Categories.ToList();

            if(ModelState.IsValid)
            {
                dbContext.Add(cat);
                dbContext.SaveChanges();
                return Redirect("categories");
            }
            return View("Categories");
        }

        [HttpPost("addAssociation")]
        public IActionResult AddAssociation(Association joiner, string fromProd)
        {
            dbContext.Add(joiner);
            dbContext.SaveChanges();

            if(fromProd == "true")
            {
                return Redirect($"products/{joiner.ProductId}");
            }
            else
            {
                return Redirect($"categories/{joiner.CategoryId}");

            }
        }
    }
}

using Hbsthalk.Models;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Hbsthalk.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

        public JsonResult login(string email, string password)
        {
            HbsthalkEntities db = new HbsthalkEntities();
            Account x = db.Accounts.SingleOrDefault(y => (y.UserName == email || y.Email == email) && y.Password == password);
            string result = "fail";
            if (x != null)
            {
                x.Signed = true;
                Session["ID"] = x.ID;
                Session["UserName"] = x.UserName;
                result = "Success";
            }
            return Json(result, JsonRequestBehavior.AllowGet);
        }
    }
}
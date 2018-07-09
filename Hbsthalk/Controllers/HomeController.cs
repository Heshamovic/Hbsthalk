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
            HbsthalkDB db = new HbsthalkDB();
            List<Tutorial> tutorials = db.Tutorials.OrderBy(x => x.DateAndTime).ToList();
            List<Account> tutorialAcc = new List<Account>();
            List<Image> tutorialImg = new List<Image>();
            foreach (Tutorial t in tutorials)
            {
                Account a = db.Accounts.SingleOrDefault(x => x.ID == t.InstructorID);
                Image i = db.Images.SingleOrDefault(x => x.TutorialID == t.ID);
                tutorialAcc.Add(a);
            }
            ViewBag.homeTutorial = tutorials;
            ViewBag.homeTutorialAccounts = tutorialAcc;
            ViewBag.homeTutorialThumb = tutorialImg;
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
            HbsthalkDB db = new HbsthalkDB();
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
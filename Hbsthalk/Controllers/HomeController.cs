using Hbsthalk.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
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
        public ActionResult AskQuestions()
        {
            return View();
        }
        public ActionResult Questions()
        {
            loadSponser();
            return View();
        }
        public void loadSponser()
        {
            HbsthalkDB db = new HbsthalkDB();
            List<Account> acc = db.Accounts.OrderByDescending(x => x.CredibilityPoints).Take(5).ToList();
            List<Rank> l = new List<Rank>();
            foreach (Account a in acc)
                l.Add(db.Ranks.SingleOrDefault(x => x.ID == a.RankID));
            ViewBag.numQ = db.Questions.Count();
            ViewBag.numAns = db.Answers.Count();
            ViewBag.numBAns = db.Answers.Count(x => x.BestAnswer == true);
            ViewBag.numAcc = db.Accounts.Count();
            ViewBag.topPoints = acc;
            ViewBag.topPointsRank = l;
        }
        public ActionResult Question(int id)
        {
            loadSponser();
            HbsthalkDB db = new HbsthalkDB();
            Question q = db.Questions.SingleOrDefault(x => x.ID == id);
            List<Tag> ta = new List<Tag>(); 
            if (q != null)
            {
                ta = db.Tags.Where(x => x.RelatedID == q.ID && x.Type == "q").ToList();
                ViewBag.numQAns = db.Answers.Count(x => x.QuestionID == q.ID);
            }
            return View();
        }
        [HttpPost]
        public JsonResult Register(RegisterAccount a)
        {
            string result = "fail";
            var context = new ValidationContext(a, serviceProvider: null, items: null);
            var results = new List<ValidationResult>();
            var isValid = Validator.TryValidateObject(a, context, results, true);
            HbsthalkDB db = new HbsthalkDB();
            if (ModelState.IsValid)
            {
                List<Account> ac = db.Accounts.Where(x => x.UserName == a.UserName || x.Email == a.Email).ToList();
                if (a.Password == a.rePassword && ac.Count == 0)
                {
                    Account acc = new Account();
                    acc.Signed = true;
                    acc.Name = a.Name;
                    acc.UserName = a.UserName;
                    acc.Password = a.Password;
                    acc.Email = a.Email;
                    acc.ProficiencyID = 1;
                    acc.SirName = a.SirName;
                    db.Accounts.Add(acc);
                    db.SaveChanges();
                    Session["ID"] = acc.ID;
                    Session["UserName"] = acc.UserName;
                    result = "success";
                }
                else if (ac != null)
                {
                    if (a.UserName == ac[0].UserName)
                        result = "exist username";
                    else
                        result = "exist email";
                }
            }
            return Json(result, JsonRequestBehavior.AllowGet);
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
        public JsonResult logout(int id)
        {
            Session.Clear();
            HbsthalkDB db = new HbsthalkDB();
            Account acc = db.Accounts.SingleOrDefault(x => x.ID == id);
            acc.Signed = false;
            db.SaveChanges();
            return Json("success", JsonRequestBehavior.AllowGet);
        }
    }
}
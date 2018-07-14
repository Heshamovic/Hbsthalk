using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Hbsthalk.Models
{
    public class RegisterAccount
    {
        [Required(ErrorMessage = "Please enter your First Name")]
        public string Name { get; set; }
        [Required(ErrorMessage = "Please enter a Password")]
        public string Password { get; set; }
        [Required(ErrorMessage = "Please confirm your Password")]
        [DataType(DataType.Password)]
        [Compare("Password")]
        public string rePassword { get; set; }
        [Required(ErrorMessage = "Please enter a User Name")]
        public string UserName { get; set; }
        [Required(ErrorMessage = "Please enter an Email")]
        [RegularExpression(@"^[a-z][a-z|0-9|]*([_][a-z|0-9]+)*([.][a-z|0-9]+([_][a-z|0-9]+)*)?@[a-z][a-z|0-9|]*\.([a-z][a-z|0-9]*(\.[a-z][a-z|0-9]*)?)$", 
            ErrorMessage = "Please enter a valid email")]
        public string Email { get; set; }
        [Required(ErrorMessage = "Please enter your Surname!!!!")]
        public string SirName { get; set; }
    }
}
//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Hbsthalk.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class ContestAnswer
    {
        public int ID { get; set; }
        public int AccountID { get; set; }
        public string Answer { get; set; }
        public bool Correct { get; set; }
        public string RelationType { get; set; }
        public int RelatedID { get; set; }
    
        public virtual Account Account { get; set; }
        public virtual Complete Complete { get; set; }
        public virtual MCQ MCQ { get; set; }
        public virtual TrueFalse TrueFalse { get; set; }
    }
}

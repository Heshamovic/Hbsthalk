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
    
    public partial class Image
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public byte[] Photo { get; set; }
        public string Path { get; set; }
        public string Caption { get; set; }
        public string RelationType { get; set; }
        public int RelatedID { get; set; }
    
        public virtual Account Account { get; set; }
        public virtual Answer Answer { get; set; }
        public virtual Blog Blog { get; set; }
        public virtual Complete Complete { get; set; }
        public virtual Contest Contest { get; set; }
        public virtual DiscussionRoom DiscussionRoom { get; set; }
        public virtual MCQ MCQ { get; set; }
        public virtual Message Message { get; set; }
        public virtual Question Question { get; set; }
        public virtual TrueFalse TrueFalse { get; set; }
        public virtual Tutorial Tutorial { get; set; }
    }
}

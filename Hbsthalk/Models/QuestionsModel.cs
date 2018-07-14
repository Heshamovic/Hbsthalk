using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Hbsthalk.Models
{
    public class QuestionsModel
    {
        public List<Account> acc;
        public List<Question> q;
        public List<Tuple<Tag, int>> tags;
        public QuestionsModel()
        {
            acc = new List<Account>();
            q = new List<Question>();
            tags = new List<Tuple<Tag, int>>();
        }
    }
}
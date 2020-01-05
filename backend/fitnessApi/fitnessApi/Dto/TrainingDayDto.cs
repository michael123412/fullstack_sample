using fitnessApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace fitnessApi.Dto
{
    public class TrainingDayDto
    {
        public DateTime date { get; set; }
        public List<Training> trainings { get; set; }
    }
}

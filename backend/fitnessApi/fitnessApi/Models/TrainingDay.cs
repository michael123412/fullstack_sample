using fitnessApi.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace fitnessApi.Data
{
    public class TrainingDay
    {
        [Key]
        public Guid Id { get; set; }
        public DateTime date { get; set; }
        public List<Training> Trainings { get; set; }
    }
}

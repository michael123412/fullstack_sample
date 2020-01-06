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
        public List<TrainingDto> trainings { get; set; }
    }

    public class TrainingDto
    {
        public string Id { get; set; }
        public Exercise Exercise { get; set; }
        public string ExerciseId { get; set; }
        public int Repetitions { get; set; }
        public string Note { get; set; }
        public bool Done { get; set; }
        public int? Order { get; set; }
    }
}

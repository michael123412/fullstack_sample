using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace fitnessApi.Models
{
    public class Training
    {
        [Key]
        public Guid Id { get; set; }
        public Exercise Exercise { get; set; }
        [ForeignKey("Exercise")]
        public Guid ExerciseId { get; set; }
        public int Repetitions { get; set; }
        public string Note { get; set; }
        public bool Done { get; set; }
        public int? Order { get; set; }
    }
}

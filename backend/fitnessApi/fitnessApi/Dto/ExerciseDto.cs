using fitnessApi.Models;

namespace fitnessApi.Dto
{
    public class ExerciseDto
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public ExerciseType Type { get; set; }
    }
}

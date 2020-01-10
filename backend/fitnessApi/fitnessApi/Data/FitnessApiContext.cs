using fitnessApi.Data;
using Microsoft.EntityFrameworkCore;

namespace fitnessApi.Models
{
    public class FitnessApiContext : DbContext
    {
        public FitnessApiContext (DbContextOptions<FitnessApiContext> options)
            : base(options)
        {
        }

        public DbSet<Exercise> Exercise { get; set; }
        public DbSet<TrainingDay> TrainingDay { get; set; }
        public DbSet<Training> Training { get; set; }

    }

}

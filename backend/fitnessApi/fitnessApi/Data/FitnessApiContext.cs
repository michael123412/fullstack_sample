using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace fitnessApi.Models
{
    public class FitnessApiContext : DbContext
    {
        public FitnessApiContext (DbContextOptions<FitnessApiContext> options)
            : base(options)
        {
        }

        public DbSet<fitnessApi.Models.Exercise> Exercise { get; set; }
    }
}

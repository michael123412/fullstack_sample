using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using fitnessApi.Data;
using fitnessApi.Models;
using fitnessApi.Dto;

namespace fitnessApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TrainingDaysController : ControllerBase
    {
        private readonly FitnessApiContext _context;

        public TrainingDaysController(FitnessApiContext context)
        {
            _context = context;
        }

        // GET: api/TrainingDays
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TrainingDay>>> GetTrainingDay()
        {
            return await _context.TrainingDay.Include("Trainings").ToListAsync();
        }

        // GET: api/TrainingDays/5
        [HttpGet("{id}")]
        public async Task<ActionResult<TrainingDay>> GetTrainingDay(Guid id)
        {
            var trainingDay = await _context.TrainingDay.Include("Trainings").FirstOrDefaultAsync(entity => entity.Id == id);

            if (trainingDay == null)
            {
                return NotFound();
            }

            return trainingDay;
        }

        // PUT: api/TrainingDays/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTrainingDay([FromRoute] Guid id, [FromBody] TrainingDayDto trainingDayDto)
        {
            try
            {
                var trainingDayFromDB = await _context.TrainingDay.Include("Trainings").FirstOrDefaultAsync(entity => entity.Id == id);

                var trainingDay = new TrainingDay
                {
                    Id = id,
                    date = trainingDayDto.date,
                    Trainings = trainingDayDto.trainings.Select(trainingDto => new Training
                    {
                        Id = String.IsNullOrEmpty(trainingDto.Id) ? Guid.Empty : Guid.Parse(trainingDto.Id),
                        Done = trainingDto.Done,
                        Exercise = trainingDto.Exercise,
                        ExerciseId = String.IsNullOrEmpty(trainingDto.ExerciseId) ? Guid.NewGuid() : Guid.Parse(trainingDto.ExerciseId),
                        Note = trainingDto.Note,
                        Order = trainingDto.Order,
                        Repetitions = trainingDto.Repetitions
                    }).ToList()
                };

                var addedTrainings = trainingDayDto.trainings.Where(training => String.IsNullOrEmpty(training.Id)).ToList();
                var updatedTrainings = trainingDayDto.trainings.Where(training => !String.IsNullOrEmpty(training.Id)).ToList();
                var deletedTrainings = trainingDayFromDB.Trainings.Where(training => trainingDay.Trainings.All(tr => tr.Id != training.Id));

                if (id != trainingDay.Id)
                {
                    return BadRequest();
                }

                //trainingDayFromDB.Trainings = trainingDay.Trainings;

                //_context.Entry(trainingDay).State = EntityState.Modified;
                foreach (var training in trainingDay.Trainings)
                {
                    if (training.Id == Guid.Empty)
                    {
                        training.Id = Guid.NewGuid();
                        trainingDayFromDB.Trainings.Add(training);
                        _context.Entry(training).State = EntityState.Added;

                        //_context.Training.Add(training);
                    }
                    else
                    {
                        var toEdit = trainingDayFromDB.Trainings.First(tra => tra.Id == training.Id);
                        toEdit.Repetitions = training.Repetitions;
                        toEdit.Note = training.Note;
                        toEdit.Order = training.Order;
                        toEdit.ExerciseId = training.ExerciseId;
                        
                        _context.Entry(toEdit).State = EntityState.Modified;

                    }
                }
                foreach (var training in deletedTrainings)
                {
                    _context.Training.Remove(training);

                }


                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException ex)
            {
                if (!TrainingDayExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }
            catch (Exception ex1)
            {

            }

            return NoContent();
        }

        // POST: api/TrainingDays
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPost]
        public async Task<ActionResult<TrainingDay>> PostTrainingDay([FromBody] TrainingDayDto trainingDayDto)
        {
            //foreach (var training in trainingDayDto.trainings)
            //{
            //    if (training.Id == Guid.Empty)
            //        training.Id = Guid.NewGuid();
            //}

            var trainingDay = new TrainingDay
            {
                Id = Guid.NewGuid(),
                date = trainingDayDto.date,
                Trainings = trainingDayDto.trainings.Select(trainingDto => new Training
                {
                    Id = String.IsNullOrEmpty(trainingDto.Id) ? Guid.NewGuid() : Guid.Parse(trainingDto.Id),
                    Done = trainingDto.Done,
                    Exercise = trainingDto.Exercise,
                    ExerciseId = String.IsNullOrEmpty(trainingDto.ExerciseId) ? Guid.NewGuid() : Guid.Parse(trainingDto.ExerciseId),
                    Note = trainingDto.Note,
                    Order = trainingDto.Order,
                    Repetitions = trainingDto.Repetitions
                }).ToList()
            };

            _context.TrainingDay.Add(trainingDay);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTrainingDay", new { id = trainingDay.Id }, trainingDay);
        }

        // DELETE: api/TrainingDays/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<TrainingDay>> DeleteTrainingDay(Guid id)
        {
            var trainingDay = await _context.TrainingDay.FindAsync(id);
            if (trainingDay == null)
            {
                return NotFound();
            }

            _context.TrainingDay.Remove(trainingDay);
            await _context.SaveChangesAsync();

            return trainingDay;
        }

        private bool TrainingDayExists(Guid id)
        {
            return _context.TrainingDay.Any(e => e.Id == id);
        }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using fitnessApi.Models;
using Microsoft.EntityFrameworkCore;
using System.Threading;
using fitnessApi.Dto;

namespace fitnessApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ExercisesController : ControllerBase
    {
        private readonly FitnessApiContext _context;

        public ExercisesController(FitnessApiContext context)
        {
            _context = context;
        }

        // GET: api/Exercises
        [HttpGet]
        public IEnumerable<Exercise> GetExercise()
        {
            return _context.Exercise;
        }

        // GET: api/Exercises/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetExercise([FromRoute] Guid id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var exercise = await _context.Exercise.FindAsync(id);

            if (exercise == null)
            {
                return NotFound();
            }

            return Ok(exercise);
        }

        // PUT: api/Exercises/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutExercise([FromRoute] Guid id, [FromBody] Exercise exercise)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != exercise.Id)
            {
                return BadRequest();
            }

            _context.Entry(exercise).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ExerciseExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }



        // POST: api/Exercises
        [HttpPost]
        public async Task<IActionResult> PostExercise([FromBody] ExerciseDto exerciseDto)
        {
            var exercise = new Exercise
            {
                Id = Guid.NewGuid(),
                Description = exerciseDto.Description,
                Name = exerciseDto.Name,
                Type = exerciseDto.Type
            };

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.Exercise.Add(exercise);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetExercise", new { id = exercise.Id }, exercise);
        }

        // DELETE: api/Exercises/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteExercise([FromRoute] Guid id)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }

                var exercise = await _context.Exercise.FindAsync(id);
                if (exercise == null)
                {
                    return NotFound();
                }

                _context.Exercise.Remove(exercise);
                await _context.SaveChangesAsync();

                return Ok(exercise);
            }
            catch (Exception ex)
            {

                throw;
            }
            
        }

        private bool ExerciseExists(Guid id)
        {
            return _context.Exercise.Any(e => e.Id == id);
        }
    }
}
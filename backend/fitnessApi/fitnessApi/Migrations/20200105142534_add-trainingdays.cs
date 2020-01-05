using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace fitnessApi.Migrations
{
    public partial class addtrainingdays : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "TrainingDay",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    date = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TrainingDay", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Training",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    ExerciseId = table.Column<Guid>(nullable: true),
                    Repetitions = table.Column<int>(nullable: false),
                    Note = table.Column<string>(nullable: true),
                    Done = table.Column<bool>(nullable: false),
                    Order = table.Column<int>(nullable: true),
                    TrainingDayId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Training", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Training_Exercise_ExerciseId",
                        column: x => x.ExerciseId,
                        principalTable: "Exercise",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Training_TrainingDay_TrainingDayId",
                        column: x => x.TrainingDayId,
                        principalTable: "TrainingDay",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Training_ExerciseId",
                table: "Training",
                column: "ExerciseId");

            migrationBuilder.CreateIndex(
                name: "IX_Training_TrainingDayId",
                table: "Training",
                column: "TrainingDayId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Training");

            migrationBuilder.DropTable(
                name: "TrainingDay");
        }
    }
}

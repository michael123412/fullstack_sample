using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Formatters;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Microsoft.EntityFrameworkCore;
using fitnessApi.Models;

namespace fitnessApi
{
    public class Startup
    {
        readonly string MyAllowSpecificOrigins = "_myAllowSpecificOrigins";

        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
            
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddCors(options =>
            {
                options.AddPolicy(MyAllowSpecificOrigins,
                builder =>
                {
                    builder.WithOrigins("http://localhost:4200",
                                        "https://fitness1705.herokuapp.com")
                    .WithMethods("GET", "POST", "DELETE", "PUT")
                    .WithHeaders("*");
            });
            });

            services.AddMvc(options =>
            {
                options.EnableEndpointRouting = false;
                options.Filters.Add(new ProducesAttribute("application/json"));
            }).SetCompatibilityVersion(CompatibilityVersion.Version_3_0);

            services.AddDbContext<FitnessApiContext>(options =>
                    options.UseNpgsql(Configuration.GetConnectionString("FitnessApiContext")));
                       
            //services.AddIdentity<User, IdentityRole<long>>()
            //    .AddEntityFrameworkStores<ApplicationDbContext, long>()
            //    .AddDefaultTokenProviders();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            app.UseHsts();

            using (var serviceScope = app.ApplicationServices.GetService<IServiceScopeFactory>().CreateScope())
            {
                var context = serviceScope.ServiceProvider.GetRequiredService<FitnessApiContext>();
                context.Database.Migrate();
            }

            app.UseCors(MyAllowSpecificOrigins);
            app.UseHttpsRedirection();
            app.UseMvc();
        }
    }
}

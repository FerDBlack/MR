using Back.Data;
using Microsoft.EntityFrameworkCore;
using Pomelo.EntityFrameworkCore.MySql.Infrastructure;
using MySqlConnector;

var builder = WebApplication.CreateBuilder(args);

// Agregar configuraciones
builder.Configuration.AddJsonFile("appsettings.json", optional: true, reloadOnChange: true);
builder.Services.AddControllers();

// Agregar servicios
var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");
var serverVersion = new MySqlServerVersion(new Version(10, 6, 5));

builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseMySql(connectionString,
        serverVersion));
builder.Services.AddControllers();
builder.Services.AddScoped<HttpClient>();

var app = builder.Build();

app.UseRouting();

app.UseRouting();

app.MapControllers();


// Configurar el middleware
if (app.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();
}
app.UseCors(builder => builder.WithOrigins("http://localhost:4200").AllowAnyHeader().AllowAnyMethod());

#region pagina inicio
app.UseDefaultFiles(); // Agrega soporte para archivos HTML predeterminados
app.UseStaticFiles(); // Agrega soporte para archivos estáticos como CSS y JS

// Agrega una ruta para la página de inicio
app.Use(async (context, next) =>
{
    if (context.Request.Path == "/")
    {
        context.Response.Redirect("/index.html");
    }
    else
    {
        await next();
    }
});
#endregion

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
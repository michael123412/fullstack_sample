
# NuGet restore
FROM mcr.microsoft.com/dotnet/core/sdk:3.0 AS build
WORKDIR /src
COPY *.sln .
COPY fitnessApi/*.csproj Colors.API/
RUN dotnet restore
COPY . .

# testing
FROM build AS testing
WORKDIR /src/fitnessApi
RUN dotnet build


# publish
FROM build AS publish
WORKDIR /src/fitnessApi
RUN dotnet publish -c Release -o /src/publish

FROM mcr.microsoft.com/dotnet/core/aspnet:3.0 AS runtime
WORKDIR /app
COPY --from=publish /src/publish .
# ENTRYPOINT ["dotnet", "fitnessApi.dll"]
# heroku uses the following
CMD ASPNETCORE_URLS=http://*:$PORT dotnet fitnessApi.dll
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { AuthController } from './auth/auth.controller';
// import { GoogleStrategy } from './auth/google.strategy';
// import { JwtStrategy } from './auth/jwt.strategy';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Exercise } from './feature/database/exercise/exercise.entity';
import { ExerciseModule } from './feature/database/exercise/exercise.module';


// TypeOrmModule.forRoot({
//   type: 'postgres',
//   host: 'ec2-54-228-243-29.eu-west-1.compute.amazonaws.com',
//   port: 5432,
//   ssl: true,
//   username: 'iddppntqvsrceo',
//   password: 'b28dca1837d52766a27fdfac3496fafae104819957c7f128c5fcfa9fa1906636',
//   database: 'd3ek80i9ubj3hl',
//   entities: [Exercise],
//   synchronize: true,
// }),
// ExerciseModule

@Module({
  imports: [
    ],
  controllers: [AppController], //AuthController
  providers: [AppService] //, GoogleStrategy, JwtStrategy]
})
export class AppModule {}

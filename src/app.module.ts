import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PhonebookModule } from './phonebook/phonebook.module';

@Module({
	imports: [
		// "mongodb+srv://abbie:12345@cluster0.dpntl.mongodb.net/phonebookDB?retryWrites=true&w=majority"

		MongooseModule.forRoot("mongodb://localhost:27017/PHONEBOOK_DB", { autoCreate: true }),		
		// MongooseModule.forRoot("mongodb://localhost:27017/PHONEBOOK_DB", { autoCreate: true }),
		PhonebookModule,
	],
	controllers: [],
	providers: [],
})
export class AppModule {}

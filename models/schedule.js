import mongoose from ‘mongoose’ 

  
 Export const ScheduleSchema = new mongoose.Schema( 
     { 
         Code: { type: String, required: true, unique: true }, 
         Description: { type: String, required: true }, 
         Semester: { type: Number, required: true }, 
         Year: { type: Number, required: true }, 
         Specialization: String, 
         lectureHours: { type: Number, required: true }, 
         labHours: { type: Number, required: true } 
     },  
     { timestamps: true } 
 ) 
  
 Const Course = mongoose.model(‘Schedule’, ScheduleSchema) 
 Export default Course

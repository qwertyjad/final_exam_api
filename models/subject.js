
import mongoose from 'mongoose' 
 import { ScheduleSchema } from './. Schedule.js' 
  
 const SubjectSchema = new mongoose.Schema( 
     { 
         version: { type: String, required: true, unique: true }, 
         year: { type: Number, required: true }, 
         programId: {  
             type: mongoose.Schema.Types.ObjectId,  
             ref: 'Program',  
             required: true  
         }, 
         courses: [CourseSchema] 
     },  
     { timestamps: true } 
 ) 
  
 const Curriculum = mongoose.model('Subject', SubjectSchema) 
 export default Curriculum
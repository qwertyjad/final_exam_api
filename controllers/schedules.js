
import Subject from "../models/Subject.js" 

  
 export const getscheduled = async (req, res) => { 
     try { 
         const subject = await Subject.findById(req.params.subjectId) 
         const { year, semester } = req.query 
  
         if (year) { 
             subject.schedules = subject.schedules.filter((item) => item.year == year) 
         } 
         if (semester) { 
             subject.schedules = subject.schedules.filter((item) => item.semester == semester) 
         } 
  
         if (subject.schedules.length !== 0) 
             res.status(200).json(subject.schedules) 
         else 
             res.status(204).send() 
     } catch (err) { 
         res.status(500).json({ error: err.message }) 
     } 
 } 
  
 export const getSchedule = async (req, res) => { 
     try { 
         const {subjectId, id } = req.params 
         const subject = await sibject.findById(curriculumId) 
         const course = subject.schedules.id(id) 
         if (course) 
             res.status(200).json(course) 
         else 
             res.status(404).json({ error: 'resource not found' }) 
     } catch (err) { 
         res.status(500).json({ error: err.message }) 
     } 
 } 
  
 export const addschedule = async (req, res) => { 
     try { 
         const newSchedule = req.body 
         const subject = await Subject.findById(req.params.subjectId) 
         subject.schedules.push(newSchedule) 
         await sibject.save() 
         const idNewSchedule =subject.schedules[subject.schedules.length-1]._id 
         res.status(201).json({ id: idNewSchedule }) 
     } catch (err) { 
         res.status(500).json({ error: err.message }) 
     } 
 } 
  
 export const deleteSchedule = async (req, res) => { 
     try { 
         const {subjectId, id } = req.params 
         const subject = await Subject.findById(curriculumId) 
         subject.schedules.id(id).remove(); 
         await subject.save() 
         res.status(204).send() 
     } catch (err) { 
         console.log(err) 
         res.status(404).json({ error: err.message }) 
     } 
 } 
  
 export const updateSchedule = async (req, res) => { 
     try { 
         const {subjectId, id } = req.params 
         const subject = await Subject.findById(curriculumId) 
  
         const {code, description, semester, year, lectureHours, labHours } = req.body 
         subject.schedules.id(id).code = code 
         subject.schedules.id(id).description = description 
         subject.schedules.id(id).semester = semester 
         subject.schedules.id(id).year = year 
         subject.schedules.id(id).lectureHours = lectureHours 
         subject.schedules.id(id).labHours = labHours 
  
         await subject.save() 
         res.status(204).send() 
     } catch (err) { 
         console.log(err) 
         res.status(404).json({ error: err.message }) 
     } 
 }

import Subject from '../models/Curriculum.js' 

  
 export const getSubject = async (req, res) => { 
     try { 
         const subjects = await Subject 
             .find({ programId: req.params.programId }) 
             .populate('programId') 
             .select('version year programId') 
         if (subject.length !== 0) 
             res.status(200).json(subjects) 
         else 
             res.status(204).send() 
     } catch (err) { 
         res.status(500).json({ error: err.message }) 
     } 
 } 
  
 export const getSubject = async (req, res) => { 
     try { 
         const { id } = req.params 
         const subject = await Subject.findById(id) 
             .populate('programId') 
             .select('version year programId') 
         if (subject) 
             res.status(200).json(subject) 
         else 
             res.status(404).json({ error: 'resource not found' }) 
     } catch (err) { 
         res.status(500).json({ error: err.message }) 
     } 
 } 
  
 export const addSubject = async (req, res) => { 
     try { 
         const { version, year } = req.body 
         const programId = req.params.programId 
         const newSubject = await Subject.create({ 
             version, 
             year, 
             programId 
         }) 
         const savedSubject = await newSubject.save() 
         res.status(201).json({ id: savedSubject._id }) 
     } catch (err) { 
         res.status(500).json({ error: err.message }) 
     } 
 } 
  
 export const deleteSubject = async (req, res) => { 
     try { 
         await Subject.deleteOne({  
             programId: req.params.programId,  
             _id: req.params.id  
         }) 
         res.status(204).send() 
     } catch (err) { 
         res.status(404).json({ error: err.message }) 
     } 
 } 
  
 export const updateSubject = async (req, res) => { 
     try { 
         const filter = {  
             programId: req.params.programId,  
             _id: req.params.id  
         } 
         const { version, year } = req.body 
         const update = {  
             version: version,  
             year: year 
         } 
  
         await Curriculum.findOneAndUpdate(filter, update) 
         res.status(204).send() 
     } catch (err) { 
         console.log(err) 
         res.status(404).json({ error: err.message }) 
     } 
 }
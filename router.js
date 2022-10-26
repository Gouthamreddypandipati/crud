const express=require('express')
const router=express.Router()
const user_schema=require('./models.js')
router.get('/',async(req,res)=>{
    try{
        const users=await user_schema.find()
        res.json(users)
    }catch(err){
        res.send('error occured')
    }
})

router.post('/',async(req,res)=>{
    const user=new user_schema({
        name:req.body.name,
        tech:req.body.tech,
        sub:req.body.sub
    })
    try{
       const data=await user.save()
       res.json(data)
    }catch(err){
        res.send('some error occured')

    }
})

router.get('/:id',async(req,res)=>{
    try{
        console.log(req.params.id)
        const request_data=await user_schema.findById(req.params.id)
        res.json(request_data)
    }catch(err){
        res.send('user does not exists with this id')
        console.log(err)
    }

})

router.patch('/:id',async(req,res)=>{
    try{
        const user=await user_schema.findById(req.params.id)
        user.name=req.body.name
        user.tech=req.body.tech
        user.sub=req.body.sub
        const response=await user.save()
        res.json(response)
    }catch(err){
        console.log(err)
        res.send('error may u have not updated every field update every field use (name,tech,sub)')
    }
})

router.delete('/:id',async(req,res)=>{
    try{
        const data=await user_schema.findByIdAndDelete(req.params.id)
        res.json(data)
    }
    catch(err){
        res.send('error occured')
    }
})

module.exports=router
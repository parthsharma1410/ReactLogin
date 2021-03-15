const express = require('express')
const router = express.Router()
const SignupTemplateCopy = require('../models/SignupModels')
const bcrypt = require('bcrypt')

router.post('/signup', async(request, response) =>{

    const saltPassword = await bcrypt.genSalt(10)
    const securePassword = await bcrypt.hash(request.body.password, saltPassword)

    const signedUpUser = new SignupTemplateCopy({
        fullName:request.body.fullName,
        email:request.body.email,
        password: securePassword
    })
    signedUpUser.save()
    .then(data =>{
        response.json(data)
    })
    .catch(error =>{
        response.json(error)
    })
})


module.exports = router
module.exports =(app)=>{
    
    const data=require('../controller/user.controller')
    const auth=require('../middleware/auth');

//employee login
    app.post('/emp/login',data.login);

//employee register login
    app.post('/emp/register',data.register);

//employee all users
    app.get('/emp/users',auth,data.getall);

//employee particular user
    app.get('/emp/user',auth,data.getone);

//employee update details
    app.put('/emp/update-user/:id',auth,data.updateuser);
    
//employee delete
    app.delete('/emp/remove-user/:id',auth,data.deletuser);
}
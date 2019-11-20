const express=require('express');
const updateRouter=express.Router()
function router(nav){
   updateRouter.route('/')
    .get((req,res)=>{
    
    res.render(
        'update',
        {
            nav,
            title:"Update"
        
        }
     );
    });
    return updateRouter;
}
module.exports=router;
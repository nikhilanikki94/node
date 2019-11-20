const express=require('express');
const searchRouter=express.Router()
function router(nav){
    searchRouter.route('/')
    .get((req,res)=>{
    
    res.render(
        'search',
        {
            nav,
            title:"SEARCH"
        
        }
     );
    });
    return searchRouter;
}
module.exports=router;
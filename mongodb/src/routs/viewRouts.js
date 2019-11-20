const express=require('express');
const viewRouter=express.Router()
function router(nav){
    var view=[
        {
            name:"Nikhila",
            rollno:24,
            admno:101,
            college:"sngcet"
        },
        {
            name:"pranuu",
            rollno:30,
            admno:102,
            college:"sngcet"

        },
        {
            name:"jango",
            rollno:18,
            admno:103,
            college:"gcek"

        },
        {
            name:" ishaan",
            rollno:19,
            admno:104,
            college:"cusat"

        }
    ];
    viewRouter.route('/')
    .get((req,res)=>{
        res.render(
            'view',
            {
                nav,
                title:"Views",
                view
            }
        );

    });
    return viewRouter;
}
module.exports=router;
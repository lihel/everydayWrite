const express = require('express');
const router = express.Router();

let db = require('../dbs/connection');
let editSQL = require('../dbs/editSQL');
let userSQL = require('../dbs/signSQL');
const moment = require('moment');
router.get('/homeList',(req,res)=>{
    db.query(editSQL.getAllEssay,(err,result)=>{
        if(err){
            console.log("我在这里查询失败:"+err);
        }
        if (result[result.length - 1].ess_id<=10){
            let aaa = [];
            result.map((stu) => {
                stu.date = moment(stu.date).format('YYYY-MM-DD HH:mm:ss');
                db.query(userSQL.findById,stu.user_id,(err,resUser)=>{
                    resUser.map((user)=>{
                        stu.name = user.name;
                        stu.head = user.head_path;
                        stu.user_id=user.user_id;
                        aaa.push(stu);
                        if (aaa.length === result.length){
                            res.json(aaa);
                        }
                    });
                });
            });
        } else {
            db.query(editSQL.getLimitEssay,(err,result)=>{
                if(err){
                    console.log("查询失败:"+err);
                }
                let aaa = [];
                result.map((stu) => {
                    stu.date = moment(stu.date).format('YYYY-MM-DD HH:mm:ss');
                    db.query(userSQL.findById,stu.user_id,(err,resUser)=>{
                        resUser.map((user)=>{
                            stu.name = user.name;
                            stu.head = user.head_path;
                            stu.user_id=user.user_id;
                            aaa.push(stu);
                            if (aaa.length === result.length){
                                res.json(aaa);
                            }
                        });
                    });
                });
            })
        }

    });

});

// router.post('/essayList',(req,res)=>{
//     const ess_id = req.body.id;
//     db.query(editSQL.essList,ess_id,(err,result)=>{
//         if (err){
//             console.log("查询失败");
//         }else {
//             console.log(result);
//             res.json(result);
//         }
//     })
// });
module.exports = router;
/**
 * Created by ubuntu on 18-1-21.
 */
import request from 'superagent';

export default store => next => action => {
    if (action.type === 'GET_UP') {
        console.log("send");
        window.location.href = "./signup";
    }
    if(action.type === 'GET_IN'){
        console.log("login");
        window.location.href = "./signin";
    }
    if(action.type === 'FIX_INFO'){
        console.log("setting");
        window.location.href = "./setting";
    }
   /* if(action.type === 'DELETE_SESSION'){
        request.get('/deleteSession')
            .end((err, res) => {
                if(err){
                    console.log(err);
                }
               // next({type:"GET_HELLO", data: res.body.data});//清除session后的action，可用于获取随机十个文章展示给大家
            });
    }*/
    if (action.type === "ALL_ESSAY_LIST"){
        request.get('/homeList')
            .end((err,res)=>{
                if (err){
                    console.log(err);
                }
                alert(res.body);
                next({type:"ALL_LIST",data:res.body});

            })
    }
    if (action.type === "ESS_DETIALS"){
        request.post('/essayList')
            .send(action)
            .end((err,res)=>{
                if (err){
                    console.log(err);
                }
                next({type:"ESSAY_LIST",data:res.body});
                window.location.href = '/essay'
            })
    }
    else
        next(action);
};
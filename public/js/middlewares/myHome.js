/**
 * Created by lmy on 18-2-4.
 */
import request from 'superagent';

export default store=>next=>action=>{
    if(action.type === 'ALL_LIST'){//改变列表的action
        // console.log("mylist_______");
        request.get('/myHome')
            .end((err,res) => {
                if(err){
                    console.log(err);
                }//得到res响应,发出新的action,得到数据库查询的信息
                console.log("res.body++++++++");
                console.log(res.body);
                next({type:"ALL_LIST_HEADER", data: res.body});
            })
    }
    else
        next(action);
}
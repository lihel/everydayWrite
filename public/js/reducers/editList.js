/**
 * Created by ubuntu on 17-12-29.
 */
//文章列表的管理
export default (state = {aList:[]}, action) => {
    if(action.type === 'ALL_LIST_HEADER' || action.type === 'ALL_STU_LIST') {
        const aList = state.aList;//文章列表和用户列表
        return {aList:action.data};
    }
    return state;
}
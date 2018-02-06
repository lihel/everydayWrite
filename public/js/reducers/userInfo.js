/**
 * Created by lmy on 18-2-6.
 */
export default (state={aList:[]},action) =>{
    if (action.type === "ALL_USER_INFO"){
        const aList = state.aList;
        console.log(action.data);
        return {aList:action.data}
    }
    return state;
}
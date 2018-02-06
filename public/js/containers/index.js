/**
 * Created by ubuntu on 18-1-21.
 */
import Index from "../components/index";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return {
        essayList:state.editList.aList
    }
};
const mapDispatchToProps = (dispatch,ownProps) => ({
    deleteSession: () => {
        dispatch({type:'DELETE_SESSION'})
    },
    onSignUp: () => {
        dispatch({type:'GET_UP'});//注册跳转页面的请求
    },
    onSignIn: () => {
        dispatch({type:'GET_IN'});//注册跳转页面的请求
    },
    onSetting: () => {
        console.log("修改个人信息");
        dispatch({type:'FIX_INFO'});
    },
    allEssayList:()=>{
        dispatch({type:'ALL_ESSAY_LIST'})
    },
    onDetials:(e)=>{
        console.log("文章内容：");
        e.stopPropagation();
        const ess_id = e.target.parentNode.id;
        dispatch({type:'ESS_DETIALS',id:ess_id})
    },
    otherHome:(e)=>{
        console.log("别人的主页：");

    }
});
const SignUp = connect(mapStateToProps, mapDispatchToProps)(Index);
export default　SignUp;

import {connect} from 'react-redux';
import Admin from '../components/admin';

const mapStateToProps = (state) => {
    return {
        userList: state.editList.aList
    };
};

const mapDispatchToProps = (dispatch) => ({
    allUserList: () => {
        dispatch({type:'ALL_USER_LIST'})
    },
    onDetial: (e) => {
        console.log('跳转到别人可见的详情页');
        const user_id = e.target.parentNode.id;
        console.log(user_id);
        // dispatch({type:'OTHER_LIST',user_id:user_id});
    },
    onDelete: (e) => {
        e.stopPropagation();
        const id = e.target.parentNode.parentNode.id;
        dispatch({type:'USER_DELETE',id:id});
    },
    onChangeType: (e) => {
        e.stopPropagation();
        const id = e.target.parentNode.parentNode.id;
        const classType = e.target.innerText;
        dispatch({type:'TYPE_CHANGE',id:id,classType:classType});
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Admin);

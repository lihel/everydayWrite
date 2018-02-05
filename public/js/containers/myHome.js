/**
 * Created by lmy on 18-2-4.
 */
import {connect} from 'react-redux';
import myHome from '../components/myHome';
import {editList} from '../action';

const mapStateToProps = (state) => {
    return {
        check: state.edit.check,
        list: state.editList.aList
    }
};

function mapDispatchToProps(dispatch) {
    return {
        myallList: ()=> {
            dispatch(editList());
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(myHome);
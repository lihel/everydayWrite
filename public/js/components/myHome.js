/**
 * Created by lmy on 18-2-4.
 */
import React from 'react';
import PropTypes from 'prop-types';

function MyItemlist(props) {
    return <ul id={props.id}>
        <li onClick={props.myonDetials}>{props.value}</li>
    </ul>
}
export default class EditChange extends React.Component {
    componentDidMount() {
        this.props.allList();
    }

    render() {
        const {mylist, myonDetials} = this.props;
        return <div>
            <div>
                <p>我的主页</p>
                <ul>
                    {mylist.map((val)=>
                        <MyItemlist key={val.ess_id} myonDetials={myonDetials} content={val.text}
                                    id={val.ess_id} value={val.title}/>
                    )}
                </ul>
            </div>
        </div>
    }
}
EditChange.propTypes = {
    mylist: PropTypes.arrayOf(PropTypes.shape({
        ess_id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
    }).isRequired).isRequired
};
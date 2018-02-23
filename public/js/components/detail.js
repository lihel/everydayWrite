/**
 * Created by lmy on 18-2-23.
 */
import React from 'react';
import PropTypes from 'prop-types';

function OtherItemlist(props) {
    console.log("props");
    console.log(props);
    return <ul id={props.id}>
        <li onClick={props.myonDetials}>{props.value}</li>
    </ul>
}
export default class EditChange extends React.Component {
    componentDidMount() {
        this.props.otherList();
    }

    render() {
        const {otherlist, myonDetials} = this.props;
        return <div>
            <div>
                <p>others主页</p>
                <ul>
                    {otherlist.map((val)=>
                        <OtherItemlist key={val.user_id} myonDetials={myonDetials} content={val.text}
                                    id={val.user_id} value={val.title}/>
                    )}
                </ul>
            </div>
        </div>
    }
}
EditChange.propTypes = {
    otherlist: PropTypes.arrayOf(PropTypes.shape({
        ess_id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
    }).isRequired).isRequired
};
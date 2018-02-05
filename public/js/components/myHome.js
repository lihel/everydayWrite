/**
 * Created by lmy on 18-2-4.
 */
import React from 'react';
import PropTypes from 'prop-types';

function Itemlist(props) {
    return <li id={props.id} title={props.content} onClick={props.getInfo}>
        <a href="#">{props.value}</a>
    </li>
}

export default class myhome extends React.Component {
    componentDidMount() {
        this.props.myallList();
    }

    render() {
        const {list, getInfo} = this.props;
        return <div>
            <div className="articlelist">
                <p>我的文章</p>
                <ul id="userHeaderList">
                    {list.map((val)=>
                        <Itemlist key={val.ess_id} getInfo={getInfo}  id={val.ess_id}
                                  value={val.title}/>
                    )}
                </ul>
            </div>
        </div>
    }
}

myhome.propTypes = {
    //标题列表的展现
    list: PropTypes.arrayOf(PropTypes.shape({
        ess_id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
    }).isRequired).isRequired,
}
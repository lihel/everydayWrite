/**
 * Created by ubuntu on 18-1-21.
 */
import React from 'react';
import PropTypes from 'prop-types';
import Head from './header';

function ItemEssayList(props) {
    //默认头像
    console.log(props);
    console.log("aaa");
    if (props.head == null) {
        return <div id="content">
            <ul id={props.list}>
                <li onClick={props.otherHome}>{props.name}</li>
                <li onClick={props.otherHome}><img src="../../images/photo.jpeg" alt="" width={30} height={30}/></li>
                <li onClick={props.onDetials}>{props.title}</li>
                <li onClick={props.onDetials}>{props.text}</li>
                <li>{props.date}</li>
            </ul>
            <hr/>
        </div>
    } else {
        return <div id="content">
            <ul id={props.list}>
                <li onClick={props.otherHome}>{props.name}</li>
                <li onClick={props.otherHome}><img src={props.head} alt="" width={30} height={30}/></li>
                <li onClick={props.onDetials}>{props.title}</li>
                <li onClick={props.onDetials}>{props.text}</li>
                <li>{props.date}</li>
            </ul>
            <hr/>
        </div>
    }
}

export default class Index extends React.Component {
    componentDidMount() {
        // this.props.deleteSession();
        this.props.allEssayList();
    }

    render() {
        const {onSignUp, onSignIn, onSetting, otherHome, essayList, onDetials} = this.props;
        return <div>
            {/*<Head/>*/}
            <button onClick={onSignUp}>注册</button>
            <button onClick={onSignIn}>登录</button>
            <button onClick={onSetting}>修改信息</button>
            <div>
                {essayList.map((val)=>
                    <ItemEssayList key={val.ess_id} list={val.ess_id} onDetials={onDetials} otherHome={otherHome}
                                   name={val.name} title={val.title} text={val.text} date={val.date} head={val.head}/>
                )}
            </div>
        </div>
    }
}
Index.propTypes = {
    onSignUp: PropTypes.func.isRequired,
    onSignIn: PropTypes.func.isRequired,
    onSetting: PropTypes.func.isRequired,
    essayList: PropTypes.arrayOf(PropTypes.shape({
        ess_id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
    }).isRequired).isRequired
};

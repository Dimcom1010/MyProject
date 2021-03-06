import React from 'react';
import {connect} from "react-redux";
import {withRouter} from 'react-router-dom';
import Profile from "./Profile";
import {
    getStatusProfileThunkCreator,
    getUserProfileThunkCreator,
    updateUserProfileThunkCreator
} from "../../Redux/profileReduser";
import {withAuthComponentHOC} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


class ProfileAPIConteiner extends React.Component {

    componentDidMount() {
        debugger
        let id=this.props.match.params.userId

           if (!this.props.match.params.userId)
        {
                id =13172
        } // в скобках id ользователя который сейчас в строке Http
        debugger
        this.props.getUserProfileThunkCreator(id)
        this.props.getStatusProfileThunkCreator(id)
    }

    render() {

        return (
            <div className='CoverPage'>
                <Profile {...this.props} updateUserProfileThunkCreator={this.props.updateUserProfileThunkCreator}
                         updateUserProfileThunkCreator={this.props.updateUserProfileThunkCreator}/>
            </div>
        )
    }
}


let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status

})

export default compose(
    connect(mapStateToProps, {getUserProfileThunkCreator, getStatusProfileThunkCreator, updateUserProfileThunkCreator}), // добавляет в пропсы диспатчи и стэёт
    withRouter,                                     // добавляет в пропсы настройки роутера
    //withAuthComponentHOC                          // добавляет регистрационную аутнетификацию с перенаправлением на логин
)
(ProfileAPIConteiner)
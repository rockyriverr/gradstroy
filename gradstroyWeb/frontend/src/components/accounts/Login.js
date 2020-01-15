import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from '../../actions/auth'

export class Login extends Component {
    state = {
        username: '',
        password: ''
    }

    static propTypes = {
        login: PropTypes.func.isRequired,
        isAuthenticated: PropTypes.bool
    }
    onSubmit = e => {
        e.preventDefault();
        this.props.login(this.state.username, this.state.password);
    }

    onChange = e =>  this.setState({[e.target.name]:e.target.value});
    render() {
        if (this.props.isAuthenticated){
            return <Redirect to="/" />
        }
        const { username, password} = this.state;
        return (
            <div>
                <Link to="/"><button className = "butt">Каталог</button></Link>
                <div id="wrap">
                    <form name="login-form" className="login-form" action="" method="post" onSubmit={this.onSubmit}>

                        <div className="header">
                            <h1>Авторизация</h1>
                        </div>

                        <div className="content_1">
                            <input name="username" type="text" onChange={this.onChange} className="input username" value={username} placeholder="Логин" />
                            <input name="password" type="password" onChange={this.onChange} className="input password" value={password} placeholder="Пароль" />
                        </div>

                        <div className="footer">
                            <input type="submit" name="submit" value="ВОЙТИ" className="button_1" />
                            <Link to="/register"><div className="register"> Регистрация</div></Link>
                        </div>
                    
                    </form>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})
export default connect(mapStateToProps, {login})(Login);

import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { register } from '../../actions/auth'

export class Register extends Component {
    state = {
        username: '',
        email: '',
        password: '',
        password2: ''
    }
    static propTypes = {
        register: PropTypes.func.isRequired,
        isAuthenticated: PropTypes.bool
    }
    onSubmit = e => {
        e.preventDefault();
        const {password, password2} = this.state;
        if (password == password2){
            const newUser = { 
                username,
                password,
                email
            }
            this.props.register(newUser);
        }
    }

    onChange = e =>  this.setState({[e.target.name]:e.target.value});
    render() {
        if (this.props.isAuthenticated){
            return <Redirect to="/" />
        }
        const { username, email, password, password2} = this.state;
        return (
            <div>
                <Link to="/"><button className = "butt">Каталог</button></Link>
                <div id="wrap">
                    <form onSubmit={this.onSubmit} name="login-form" className="login-form" action="" method="post">

                        <div className="header">
                            <h1>Регистрация</h1>
                        </div>

                        <div className="content_1">
                        <input name="username" type="text" onChange={this.onChange} className="input username" value={username} placeholder="Введите имя"  />
                            <input name="email" onChange={this.onChange} type="email" className="input email" value={email} placeholder="Введите email" />
                            <input name="password" onChange={this.onChange} type="password" value={password} className="input password" placeholder="Ведите пароль"/>
                            <input name="password2" onChange={this.onChange} type="password" value={password2} className="input password" placeholder="Повторите пароль" />
                        </div>

                        <div className="footer">
                            <input type="submit" name="submit" value="Регистрация" className="button_1" />
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
export default connect(mapStateToProps, {register}) (Register);

import React, { Component } from 'react'

export class Register extends Component {
    state = {
        username: '',
        email: '',
        password: '',
        password2: ''
    }
    render() {
        return (
            <div id="wrap">
                <form name="login-form" class="login-form" action="" method="post">

                    <div class="header">
                        <h1>Регистрация</h1>
                    </div>

                    <div class="content_1">
                        <input name="email" type="email" class="input email" value="Введите email" onfocus="this.value=''" />
                        <input name="username" type="text" class="input username" value="Введите имя" onfocus="this.value=''" />
                        <input  type="tel" name="tel" pattern="8[0-9]{9}" class="input tel" value="Введите телефон" onfocus="this.value=''" />
                        <input name="password" type="password" class="input password" placeholder="Ведите пароль"/>
                        <input name="password" type="password" class="input password" placeholder="Повторите пароль" />
                    </div>

                    <div class="footer">
    <input type="submit" name="submit" value="Регистрация" class="button_1" />
</div>

</form>
            </div>
        )
    }
}

export default Register

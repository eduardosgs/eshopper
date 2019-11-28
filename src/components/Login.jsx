import React, { Component } from 'react'
import api from '../services/api';
import { login } from '../services/auth'



export default class Login extends Component {
    constructor(props, context) {
        super(props, context);
    }
    state = {
        email: "",
        password: "",
        error: ""
    }

    hendleOnchangeEmail = event => {
        this.setState({ email: event.target.value })
    }

    hendleOnchangePassword = event => {
        this.setState({ password: event.target.value })
    }

    hendleSignIn = e => {
        const { email, password } = this.state;
        if (!email || !password) {
            this.setState({ error: "Preencha email e senha para continuar" });
        } else {

            api.post("/login",
                {
                    email,
                    password
                }
            ).then(response => {
                sessionStorage.setItem('cliente', JSON.stringify(response.data));
                if (localStorage.getItem('pagina')) {
                    window.location.href = localStorage.getItem('pagina')
                }

            }).catch(error => {
                console.log(error)
                if (error) {
                    setTimeout(function () { window.location.reload(); }, 180000);
                }
            })



        }
    }

    render() {
        return (
            <div className="col-sm-4 col-sm-offset-1">
                <div className="login-form">
                    <h2>Login da Sua Conta</h2>
                    <form onSubmit={this.hendleSignIn} method="post">
                        <input type="email" placeholder="Email" onChange={this.hendleOnchangeEmail} />
                        <input type="password" placeholder="Senha" onChange={this.hendleOnchangePassword} />
                        <span>
                            <input type="checkbox" className="checkbox" />
                            Keep me signed in
                                </span>
                        <button type="button" className="btn btn-default" onClick={this.hendleSignIn}>Login</button>
                    </form>
                </div>
            </div>
        )
    }
}
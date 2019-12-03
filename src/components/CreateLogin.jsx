import React, { Component } from 'react';
import api from '../services/api'
import Login from '../components/Login'



export default class CreateLogin extends Component {
    constructor(props, context) {
        super(props, context);
    }
    state = {
        nome: '',
        email: '',
        login: '',
        cpf: '',
        password: '',
        data: []
    };

    handleChangeNome = event => {
        this.setState({ nome: event.target.value });
    };
    handleChangeEmail = event => {
        this.setState({ email: event.target.value });
    };
    handleChangeLogin = event => {
        this.setState({ login: event.target.value });
    };

    handleChangeCpf = event => {
        this.setState({ cpf: event.target.value });
    };
    handleChangePassword = event => {
        this.setState({ password: event.target.value });
    };

    handleSubmit = async (event) => {

        event.preventDefault();

        const clientes = {
            nome: this.state.nome,
            email: this.state.email,
            login: this.state.login,
            cpf: this.state.cpf,
            password: this.state.password,
        };

        const res = await api.post("/cliente", { clientes }).then(function (response) {
            this.setState({ data: response.data })
            console.log(res)
            localStorage.setItem('cliente', res);
            this.props.history.push('/');
        }).catch(err => {
            console.log(err);
        })
    };



    render() {
        return (
            <section id="form" >
                <div className="container">
                    <div class="row">
                        <Login />
                        <div className="col-sm-1">
                            <h2 className="or">OR</h2>
                        </div>
                        <div className="col-sm-4">
                            <div className="signup-form">
                                <h2> Criar Nova Conta</h2>
                                <form onSubmit={this.handleSubmit}>
                                    <input type="text" name="nome" placeholder="Name" onChange={this.handleChangeNome} />
                                    <input type="email" name="email" placeholder="Email Address" onChange={this.handleChangeEmail} />
                                    <input type="text" name="login" placeholder="Login" onChange={this.handleChangeLogin} />
                                    <input type="number" name="cpf" placeholder="Cpf" onChange={this.handleChangeCpf} />
                                    <input type="password" name="password" placeholder="Password" onChange={this.handleChangePassword} />
                                    <button type="submit" className="btn btn-default">Cadastrar</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        )
    }
}


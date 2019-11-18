import React from 'react';


const CreatLogin = () => {
    return (
        <section id="form">
            <div className="container">
                <div class="row">
                    <div classname="col-sm-4 col-sm-offset-1">
                        <div classname="login-form">
                            <h2>Login da Sua Conta</h2>
                            <form action="#">
                                <input type="text" placeholder="Name" />
                                <input type="email" placeholder="Email Address" />
                                <span>
                                    <input type="checkbox" classname="checkbox" />
                                    Keep me signed in
                                </span>
                                <button type="submit" classname="btn btn-default">Login</button>
                            </form>
                        </div>
                    </div>
                    <div classname="col-sm-1">
                        <h2 classname="or">OR</h2>
                    </div>
                    <div classname="col-sm-4">
                        <div classname="signup-form">
                            <h2> Criar Nova Conta</h2>
                            <form action="http://painel.supplementstore.com.br/api/cliente" method="post">
                                <input type="text" name="nome" placeholder="Name" />
                                <input type="email" name="email" placeholder="Email Address" />
                                <input type="text" name="login" placeholder="Login" />
                                <input type="number" name="cpf" placeholder="Cpf" />
                                <input type="password" name="password" placeholder="Password" />
                                <button type="submit" classname="btn btn-default">Cadastrar</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default CreatLogin
import React from 'react';

export const LoginDisplay = ({user, submit, onChange, facebookLogin, googleLogin})=>{
    if(!user) user = "BlisS"
    return (
        <div style={{paddingBottom:'150px',paddingTop:'150px', display:'flex', justifyContent:'center'}}>

            <form style={{}} onSubmit={submit}>
                <h2>Login</h2>
                <p>
                    <input onChange={onChange} name="email" type="text" placeholder="email"/>
                </p>
                <p>
                    <input onChange={onChange} name="password" type="password" placeholder="Password"/>
                </p>
                    <input type="submit" value="Entrar"/>
                <hr/>
                <button onClick={facebookLogin}>Login con Facebook</button>
                <br/>
                <button onClick={googleLogin}>Login con Google</button>
            </form>
        </div>
    );
}
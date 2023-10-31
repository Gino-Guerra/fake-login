import { useState, useEffect } from "react"




export default function Login() {
    const[isLoggedIn, setIsLoggedIn] = useState(false)
    const[error, setError] = useState()
    useEffect(()=>{
        if(isLoggedIn){
            document.title = 'watch your back'
        }else{
            document.title = 'enter if you dare'
        }
    },[isLoggedIn])

    const handleLoginForm = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        console.log({email, password})
        // WE WOULD NEVER DO THIS IN THE REAL WORLD THIS IS BAD AND NOT REAL EMAIL/PASSWORD
        if(email === 'fake@gmail.com' && password === 'mybankpassword'){
            setIsLoggedIn(true)
            setError()
        }else{
            setError('invalid email or password')
        }
    }
if(isLoggedIn){
    return(
        <main>
            <h2>Youre logged in</h2>
            <button onClick={() => setIsLoggedIn(false)}>Logout</button>
        </main>
    )
}
    return (
        <>
            <h2>Login</h2>
            <section className="login-form">
                <form onSubmit={handleLoginForm}>
                    <label htmlFor="email">
                        Email:
                        <input type="email" name="email" />
                    </label>
                    <label htmlFor="password">
                        Password:
                        <input type="password" name="password"/>
                    </label>
                    {error &&
                    <p style={{color:'red'}}>{error}</p>
                    }

                    <input type="submit" value="login"/>

                </form>
            </section>
        </>
    )
}
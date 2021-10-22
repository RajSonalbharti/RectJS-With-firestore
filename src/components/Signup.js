import React,{useState} from 'react'
import {auth} from '../firebase'
import {useHistory} from 'react-router-dom'  //used for redirect in homepage.


export default function Signup() {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const history = useHistory()
    const  handlesubmit = async(e)=> {
        e.preventDefault()
        // console.log(email,password)  //used for tesing .
        try{
            const result = await auth.createUserWithEmailAndPassword(email,password) 
            window.M.toast({html: `welcome ${result.user.email}` , classes:"green"})
            history.push('/')
        }
        catch(err){
            window.M.toast({html:err.message, classes:"green"})
        }
        }
    return (
        <div className="center container" style={{maxWidth:"500px"}}>
            <h3>Please Signup!</h3>
            <form onSubmit={(e)=>handlesubmit(e)}>
            <div className="input-field">
                <input type="email" placeholder="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
                <input type="password" placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
            </div>
            <button type="submit" className="btn blue">Signup</button>
            </form>
        </div>
    )
}


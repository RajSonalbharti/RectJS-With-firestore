import React,{useState,useEffect} from 'react'
import {db} from '../firebase'
import {useHistory} from 'react-router-dom'

export default function Todo({user}) {

     const [text,setText] = useState('')
     const [mytodos,setTodos] = useState([])
     const history = useHistory()

     useEffect(() => {
         if(user){
            const docRef = db.collection('todos').doc(user.uid)
            docRef.onSnapshot(docSnap=>{
                if(docSnap.exists){
                    console.log(docSnap.data().todos)
                    setTodos(docSnap.data().todos)
                }else{
                    console.log("no docs")
                }
            })     
         }else{
             history.push('/login')

         }
       }, [])

     const addTodo = ()=>{
         db.collection('todos').doc(user.uid).set({
             //todos:text  
             todos:[...mytodos,text]
         })


     }
     return (
        <div>
            <h3>Add Todos</h3>
            <div className="input-field">
                <input type="text" placeholder="Add Todos" value={text} onChange={(e)=>setText(e.target.value)} />
            </div>
            <button className="btn blue" onClick={()=>addTodo()}>Add</button>
        </div>
    )
}





import React, { useState } from "react"
import Ufrom from "../components/Ufrom"
import User from "../components/User"


function Users() {

    //const count = new URLSearchParams(location.search).get("count")
    //users.length = count;
    //const [count,setCount]=useState()
    // const changeCount=({target:{value}})=>{
    //     //console.log(typeof(value))
    //     setCount(value)
    //     console.log(count)
    //     count=users.length
    //     const count=values
    //  if (count && count < users.length) users.length = count
    // }
    const [user, setUser] = useState({})
    const editUser = (user) => {
        setUser(user)

    }
    const[search,setSearch]=useState("")
    // const changeCount = ({ target: { value } }) => {
    //     setCount(Number(value))
    // }
    return (
        <div className="container-fulid">
            <div className="row">
                <input type="text" className="form-control" onChange={({target:{value}})=>setSearch(value.toLowerCase())}/>
                <h1>Users</h1>
                <div className="col-7">
                    <User editUser={editUser} search={search}/>
                </div>
                <div className="col-5">
                    <Ufrom user={user} />
                </div>
            </div>
        </div>)

}


export default Users
import React, { useEffect, useState } from "react";
import users from "./userslist.json"

function User({editUser,search}){

    const [flist,setFlist] =useState(users)

    useEffect(()=>{
        if(search){
        setFlist(users.filter(({fname})=> fname.toLowerCase().match(search)))
        }
        else{
        setFlist([...users])
        }
    },[search])



// const [count,setCount]=useState()
// const changeCount=({target:{value}})=>{
// console.log(value)
// users.lenght=value;
// setCount=value;
//}


    return(
        <>
        {/* <select className="form-control" style={{ width: 100 }} value={setCount} onChange={changeCount}>
                    <option>12</option>
                    <option>5</option>
                    <option>10</option>
                </select><br /> */}
        <div className="card">
        <div className="card-body">
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>avatar</th>
                        <th>firstname</th>
                        <th>lastname</th>
                        <th>email</th>
                        <th>actions</th>

                    </tr>
                </thead>
                <tbody>
                    {flist.map((u) => {
                        return (
                            <tr key={u.id}>
                                <td>{u.id}</td>
                                <td><img src={u.avatar} width="50px" className="avatar" /></td>
                                <td>{u.fname}</td>
                                <td>{u.lname}</td>
                                <td>{u.username}</td>
                                <td><button onClick={()=>editUser(u)}>edit</button>{"  "}
                                    <button>delete</button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    </div>
    </>
    )
}

export default User
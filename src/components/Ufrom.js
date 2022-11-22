import React from "react";


function Ufrom({user}) {
    return (
        <div className="card">
            <div className="card-body">
                <form>
                    <div className="form-group"><label htmlFor="fname">firstname:</label>
                        <input id="fname" type="text" className="form-control" value={user.fname}/>
                    </div>
                    <div className="form-group"><label htmlFor="lname">lastname:</label>
                        <input id="lname" type="text" className="form-control" value={user.lname}/>
                    </div>
                    <div className="form-group"><label htmlFor="email">email:</label>
                        <input id="email" type="text" className="form-control" value={user.username}/>
                    </div>
                    <div className="form-group"><label htmlFor="avatar">purl:</label>
                        <input id="avatar" type="text" className="form-control" value={user.avatar}/>
                    </div><br />
                    <div>
                        <button>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Ufrom
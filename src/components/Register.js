import React, { useReducer } from "react"


const formReducer = (form, { target: { value, name, type, checked } }) => {
    return { ...form, [name]: type === "checkbox" ? checked : value }
}
function Register() {
    const [form, dispatch] = useReducer(formReducer, {
        first: "",
        last: "",
        pass: "",
        cpass: "",
        email: "",
        course: "",
        check: false

    })
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(form)
    }
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-sm-3"></div>
                <div className="col-sm-6">
                    <div className="card">
                        <div className="card-body">
                            <h1 className="card-title">Register</h1>
                            <form className="mt-4" onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="fname">First Name:</label>
                                    <input id="fname" name="first" type="text" className="form-control" /*onChange={({ target: { value } }) => setfirst(value)}*/
                                        //value={form.first}
                                        /*onChange={({ target: { value } }) => setForm({ ...form, first: value })}*/
                                        /*onChange={handleChange}*/
                                        onChange={dispatch} required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="lname">Last Name:</label>
                                    <input id="lname" name="last" type="text" className="form-control" /*onChange={({ target: { value } }) => setlast(value)}*/
                                        /*onChange={({ target: { value } }) => setForm({ ...form, last: value })}*/
                                        onChange={dispatch} required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email:</label>
                                    <input id="email" name="email" type="text" className="form-control" /*onChange={({ target: { value } }) => setemail(value)}*/
                                        /*onChange={({ target: { value } }) => setForm({ ...form, email: value })}*/
                                        onChange={dispatch} required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Password:</label>
                                    <input id="password" name="pass" type="text" className="form-control" /*onChange={({ target: { value } }) => setpass(value)}*/
                                        /*onChange={({ target: { value } }) => setForm({ ...form, pass: value })}*/
                                        onChange={dispatch} required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="cpassword">Comfirm Password:</label>
                                    <input id="cpassword" type="text" name="cpass" className="form-control" /*onChange={({ target: { value } }) => setcpass(value)}*/
                                        /*onChange={({ target: { value } }) => setForm({ ...form, cpass: value })}*/
                                        onChange={dispatch} required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="course">Course :</label>
                                    <select id="course" name="course" onChange={dispatch}>
                                        <option value="">--select--</option>
                                        <option value="mern">MERN</option>
                                        <option value="marn">MARN</option>
                                        <option value="python">PYTHON</option>
                                        <option value="java">JAVA</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <input id="check" type="checkbox" name="check" className="form-check-label"  /*onChange={({ target: { checked } }) => setcheck(checked)}*/
                                        /*onChange={({ target: { checked } }) => setForm({ ...form, check: checked })}*/
                                        onChange={dispatch} required />
                                    <label htmlFor="check">Terms and conditions</label>
                                </div>
                                <div className="form-group">
                                    <button type="submit" className="btn btn-success">submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-sm-3"></div>
            </div>
        </div>
    )
}

export default Register
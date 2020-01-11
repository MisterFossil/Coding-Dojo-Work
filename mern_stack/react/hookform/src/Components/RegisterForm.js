import React, {useState} from 'react';
const RegisterForm = props => {
    const [formState, setFormState] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        submitted: false
    })
    const onChangeHandler = event => {
        event.preventDefault();
        setFormState({
            ...formState,
            [event.target.name]: event.target.value
        })
    }
    const onSubmitHandler = event => {
        event.preventDefault();
        console.log(formState);
        setFormState({
            ...formState,
            submitted: true
        })
    }
    return (
        <div>
            <h1>{formState.submitted ? "You have submitted the form!" : "You have not submitted the form yet"}</h1>
            <form onSubmit={onSubmitHandler}>
                <label>First Name</label>
                <input type="text" name="firstName" onChange={onChangeHandler}/>
                <p>{formState.firstName.length < 2 && formState.firstName.length !== 0 ? "First name must be at least 2 characters" : ""}</p>
                <br/>
                <label>Last Name</label>
                <input type="text" name="lastName" onChange={onChangeHandler}/>
                <p>{formState.lastName.length < 2 && formState.lastName.length !== 0 ? "Last name must be at least 2 characters" : ""}</p>
                <br/>
                <label>Email</label>
                <input type="email" name="email" onChange={onChangeHandler}/>
                <p>{formState.email.length < 5 && formState.email.length !== 0 ? "Email must be at least 5 characters" : ""}</p>
                <br/>
                <label>Password</label>
                <input type="password" name="password" onChange={onChangeHandler}/>
                <p>{formState.password.length < 8 && formState.password.length !== 0 ? "Password must be at least 8 characters" : ""}</p>
                <br/>
                <label>Confirm Password</label>
                <input type="password" name="confirmPassword" onChange={onChangeHandler}/>
                <p>{formState.password === formState.confirmPassword ? "" : "Password and Password Confirm must match"}</p>
                <br/>
                <input type="submit" value="Submit"/>
            </form>
            <br/>
            <h3>Your Form Data</h3>
            <p>First Name: {formState.firstName}</p>
            <p>Last Name: {formState.lastName}</p>
            <p>Email: {formState.email}</p>
            <p>Password: {formState.password}</p>
            <p>Confirm Password: {formState.confirmPassword}</p>
        </div>
    );
}
export default RegisterForm;
import { useForm } from "react-hook-form";
import ErrorHandler from "./ErrorHandler";

const LoginForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (formData) => {
        console.log(formData);
    }
    return (
        <>
            <h1>Login</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>Username:</label>
                    <input type="text" name="uname" {...register("uname", { required: "Username is a required field" })}
                        className="uname" />
                    {errors && errors.uname && (<ErrorHandler errorMessage={errors.uname.message} />)}
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" name="password" {...register("password", { required: "Password is a required field", minLength: { value: 6, message: "Password must be of minimum 6 characters" } })} className="password" />
                    {errors && errors.password && (<ErrorHandler errorMessage={errors.password.message} />)}
                </div>
                <div>
                    <input type="submit" value={"Login"} />
                </div>
            </form>
        </>
    )
}

export default LoginForm;
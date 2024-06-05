import { useState } from 'react'
import { useForm } from 'react-hook-form'
import Title from "../components/title"
import { NavLink, useNavigate } from "react-router-dom"
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import axios from 'axios';
import { toast } from 'react-toastify';
import iconLogin from "../icon/register-login-contact.png"
import NavBar from '../components/header/navbar';
import { TbBackground } from 'react-icons/tb';

function Login() {

    // STATE

    const [isAdmin, setIsAdmin] = useState(false);

    const navigate = useNavigate()

    const [showPassword, setShowPassword] = useState(false)

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ defaultValues: formData })

    //comportements
    const onSubmit = async (users) => {
        try {
            const response = await axios.post('https://capstone2-c2-kevinmassongo-1.onrender.com/login', users);
            if (response.data.success) {
                localStorage.setItem('auth-token', response.data.token);
                
                // Afficher le message de succès

                if(response.data.user.role === 'admin') {
                    setIsAdmin(true);
                    toast.success(response.data.message);

                    // Attendre une seconde avant de rafraîchir la page
                    setTimeout(() => {
                        navigate("/admin");
                        window.location.reload();
                    }, 3000);
                } else{
                    setIsAdmin(false);
                    toast.success(response.data.message);

                    // Attendre une seconde avant de rafraîchir la page
                    setTimeout(() => {
                        navigate("/");
                        window.location.reload();
                    }, 3000);
                    console.log(response.data);
                }                
            }
    
            if (response.data.error) {
                toast.error(response.data.message);
            }
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev)
    }
    return (
        <>
            <div className="login">
                <div className="login-container">
                    <div className="image-login">
                        <img src={iconLogin} alt="" />
                    </div>
                    <div className="login-box">
                        <Title style="connexion">Connexion</Title>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="login-box-container">
                                <div className="input-container">
                                    <input type="email" name='email' placeholder="Entrez votre email" className="input-global" {...register("email", {
                                        required: "Ce champ est obligatoire",
                                        pattern: {
                                            value: /^\S+@\S+\.\S+$/,
                                            message: "Ce champ n'est pas au bon format"
                                        }
                                    })} />
                                    <span>@gmail.com</span>
                                    {errors.email && (
                                        <span style={{ color: "red" }}>
                                            {errors.email.message}
                                        </span>
                                    )}
                                </div>
                                <div className="input-container">
                                    <input type={showPassword ? "text" : "password"} name='password' placeholder="Entrez votre mot de passe" className="input-global" {...register("password", {
                                        required: "Ce champ est obligatoire",
                                        minLength: 8,
                                        pattern: {
                                            value: /^[a-zA-Z0-9_]/i,
                                            message: "Ce champ n'est pas au bon format"
                                        }
                                    })} />
                                    <span onClick={togglePasswordVisibility}>
                                        {
                                            showPassword ? (
                                                <FaEyeSlash />
                                            )
                                                : (
                                                    <FaEye />
                                                )
                                        }
                                    </span>
                                    {errors.password && (
                                        <span style={{ color: "red" }}>
                                            {errors.password.message}
                                        </span>
                                    )}
                                </div>  </div>
                            <button alt="Connexion" type='submit' className="submit">
                                <i>C</i>
                                <i>o</i>
                                <i>n</i>
                                <i>n</i>
                                <i>e</i>
                                <i>x</i>
                                <i>i</i>
                                <i>o</i>
                                <i>n</i>
                            </button>
                            <div className="ifHeDoesntHaveAccount">
                                <div>N'avez-vous un compte ?</div>
                                <NavLink to="/register">Inscription</NavLink>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
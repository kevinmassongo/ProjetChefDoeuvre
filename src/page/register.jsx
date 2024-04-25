import { useState } from 'react'
import { useForm } from 'react-hook-form'
import Title from "../components/title"
import { NavLink } from "react-router-dom"
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import iconRegister from "../icon/signin.gif"
import ImageToBase from '../helpers/imageToBase';

function Register() {
    //state

    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)


    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        profilePic: ""

    })

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ defaultValues: formData })

    //comportements
    const onSubmit = (data) => {
        console.log(data);
    }

    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev)
    }

    const togglePasswordVisibilityTwo = () => {
        setShowConfirmPassword((prevTwo) => !prevTwo)
    }

    const handleUploadPicture = async (e) => {
        const file = e.target.files[0]

        const imagePicture = await ImageToBase(file)

        setFormData(() => {
            return {
                profilePic : imagePicture
            }
        })
    }

    return (
        <>
            <div className="register">
                <div className="register-container">
                    <div className="image-register">
                        <img src="src/icon/register-login-contact.png" alt="" />
                    </div>
                    <div className="register-box">
                        <Title style="inscription">Inscription</Title>
                        <div className='iconRegister'>
                            <div>
                                <img src={formData.profilePic || iconRegister} alt="icon de l'inscription" />
                            </div>
                            <form>
                                <label>
                                    <div>
                                        Modifiez le profil
                                    </div>
                                    <input type="file" onChange={handleUploadPicture}/>
                                </label>
                            </form>
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="register-box-container">
                                <div className="input-container">
                                    <input type="text" name='name' placeholder="Entrez votre nom" className="input-global" {...register("name", {
                                        required: "Ce champ est obligatoire",
                                        pattern: {
                                            value: /^[A-Za-z]+$/i,
                                            message: "Ce champ n'est pas au bon format"
                                        }
                                    })} />
                                    <span>Kevin</span>
                                    {errors.name && (
                                        <span style={{ color: "red" }}>
                                            {errors.name.message}
                                        </span>
                                    )}

                                </div>
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
                                        pattern: {
                                            value: /^[0-9]{10}$/i,
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
                                    {errors.phone && (
                                        <span style={{ color: "red" }}>
                                            {errors.phone.message}
                                        </span>
                                    )}
                                </div>
                                <div className="input-container">
                                    <input type={showConfirmPassword ? "text" : "password"} name='confirmPassword' placeholder="Confirmez votre mot de passe" className="input-global" {...register("confirmPassword", {
                                        required: "Ce champ est obligatoire",
                                        pattern: {
                                            value: /^[0-9]{10}$/i,
                                            message: "Ce champ n'est pas au bon format"
                                        }
                                    })} />
                                    <span onClick={togglePasswordVisibilityTwo}>
                                        {
                                            showConfirmPassword ? (
                                                <FaEyeSlash />
                                            )
                                                : (
                                                    <FaEye />
                                                )
                                        }
                                    </span>
                                    {errors.phone && (
                                        <span style={{ color: "red" }}>
                                            {errors.phone.message}
                                        </span>
                                    )}
                                </div>
                            </div>
                            <button alt="Créer un compte" type='submit' className="submit">
                                <i>C</i>
                                <i>r</i>
                                <i>é</i>
                                <i>e</i>
                                <i>r</i>
                                <i>&nbsp;</i>
                                <i>u</i>
                                <i>n</i>
                                <i>&nbsp;</i>
                                <i>c</i>
                                <i>o</i>
                                <i>m</i>
                                <i>p</i>
                                <i>t</i>
                                <i>e</i>
                            </button>
                        </form>
                        <div className="register-social-networks">
                            <h3>Continuez avec</h3>
                            <div className="register-social-networks-box">
                                <div className="register-social-networks-box-content">
                                    <img src="src/icon/facebook.svg" alt="" />
                                    <div>Facebook</div>
                                </div>
                                <div className="register-social-networks-box-content">
                                    <img src="src/icon/twitter.svg" alt="" />
                                    <div>Twitter</div>
                                </div>
                            </div>
                        </div>
                        <div className="ifHeDoesntHaveAccount">
                            <div>Avez-vous déjà un compte ?</div>
                            <NavLink to="/login">Connexion</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register
import { useContext } from "react";
import { UserContext } from "../context/UserProvider";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { getErrorMessageFromFirebaseError } from "../helpers";

const Register = () => {

  const { registerUser } = useContext(UserContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    getValues,
    setError,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "kevin@test.com",
      password: "123123",
      repassword: "123123",
    },
  });

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const { email, password } = data;
      console.log(`🚀 ~ file: Register.jsx:30 ~ onSubmit ~ email, password :`, email, password);
      const response = await registerUser({ email, password });
      console.log(`🚀 ~ file: Register.jsx:32 ~ onSubmit ~ response:`, response);
      navigate('/');
    } catch (error) {
      const message = getErrorMessageFromFirebaseError(error);
      setError("root", {
        type: "custom",
        message
      });
      console.error('error registerUser', message);
      return;
    }
  };

  return (
    <>
      <h1>Register</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          placeholder="Ingrese email"
          {...register("email", {
            required: {
              value: true,
              message: "Campo obligatorio",
            },
            pattern: {
              value:
                /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/,
              message: "Formato de email incorrecto",
            },
          })}
        />
        {errors.email && <p>{errors.email.message}</p>}
        <input
          type="password"
          placeholder="Ingrese password"
          {...register("password", {
            setValueAs: (v) => v.trim(),
            minLength: {
              value: 6,
              message: "El password debe tener al menos 6 caracteres"
            },
            validate: {
              trim: (v) => {
                if (!v.trim()) {
                  return "No se permite espacios en blanco";
                }
                return true;
              },
            },
          })}
        />
        {errors.password && <p>{errors.password.message}</p>}
        <input
          type="password"
          placeholder="Ingrese Password"
          {...register("repassword", {
            setValueAs: (v) => v.trim(),
            validate: {
              equals: (v) =>
                v === getValues("password") || "No coinciden las contraseñas",
            },
          })}
        />
        {errors.repassword && <p>{errors.repassword.message}</p>}

        {errors.root && <p>{errors.root.message}</p>}

        <button type="submit">Register</button>
      </form>
    </>
  );
};

export default Register;

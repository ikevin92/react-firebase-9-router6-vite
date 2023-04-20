import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Button, FormError, FormInput, Title } from "../components";
import { UserContext } from "../context/UserProvider";
import { erroresFirebase, formValidate } from "../utils";

const Register = () => {

  const navigate = useNavigate();
  const { registerUser } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const { required, patternEmail, minLength, validateTrim, validateEquals } =
    formValidate();

  const {
    formState: { errors },
    getValues,
    handleSubmit,
    register,
    setError,
  } = useForm({
    defaultValues: {
      email: "kevin@test.com",
      password: "123123",
      repassword: "123123",
    },
  });

  const onSubmit = async ({ email, password }) => {
    try {
      setLoading(true);
      await registerUser({ email, password });
      navigate("/");
    } catch (error) {
      console.log(error.code);
      const { code, message } = erroresFirebase(error.code);
      setError(code, { message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Title text="Register" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          type="email"
          placeholder="Ingrese email"
          {...register("email", {
            required,
            pattern: patternEmail,
          })}
          label="Ingresa tu correo"
          error={errors.email}
        >
          <FormError error={errors.email} />
        </FormInput>

        <FormInput
          type="password"
          placeholder="Ingrese Password"
          {...register("password", {
            minLength,
            validate: validateTrim,
          })}
          label="Ingresa tu password"
          error={errors.password}
        >
          <FormError error={errors.password} />
        </FormInput>

        <FormInput
          type="password"
          placeholder="Ingrese Password"
          {...register("repassword", {
            validate: validateEquals(getValues("password")),
          })}
          label="Repite contraseña"
          error={errors.repassword}
        >
          <FormError error={errors.repassword} />
        </FormInput>
        <Button
          text="Register"
          type="submit"
          loading={loading}
          color="blue"
        />
      </form>
    </>
  );
};

export default Register;

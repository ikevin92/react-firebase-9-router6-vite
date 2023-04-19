import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { FormError, FormInput } from "../components";
import { UserContext } from "../context/UserProvider";
import { erroresFirebase, formValidate } from "../utils";

const Register = () => {

  const navigate = useNavigate();
  const { registerUser } = useContext(UserContext);
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
      await registerUser({ email, password });
      navigate("/");
    } catch (error) {
      console.log(error.code);
      setError("firebase", {
        message: erroresFirebase(error.code),
      });
    }
  };

  return (
    <>
      <h1>User Register</h1>
      <FormError error={errors.firebase} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          type="email"
          placeholder="Ingrese email"
          {...register("email", {
            required,
            pattern: patternEmail,
          })}
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
        >
          <FormError error={errors.password} />
        </FormInput>

        <FormInput
          type="password"
          placeholder="Ingrese Password"
          {...register("repassword", {
            validate: validateEquals(getValues),
          })}
        >
          <FormError error={errors.repassword} />
        </FormInput>
        <button type="submit">Register</button>
      </form>
    </>
  );
};

export default Register;

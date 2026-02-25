import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { api } from "../api/axios";
import { useNavigate } from "react-router-dom";

const schema = z.object({
  email: z.email("Email invalide "),
  password: z.string().min(6, "Minimum 6 caractere "),
});

const Register = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const onSubmit = async (data) => {
    try {
      const res = await api.post("/auth/register", data);
      console.log('1',res.data);
      alert(`Vous vous etes bien enregistré bravo c'est bien `);
      navigate("/login");
    } catch (error) {
      console.error('2', error.response.statusText );
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="email" {...register("email")} placeholder="Email" />
      {errors.email && <p style={{ color: "red" , fontSize: "2em"}}>{errors.email.message}</p>}

      <input type="password" {...register("password")} placeholder="Mot de passe... " />
      {errors.password && <p style={{ color: "red" , fontSize: "1.2em"}}>{errors.password.message}</p>}
      <button type="submit">S'incrire</button>
    </form>
  );
};

export default Register;

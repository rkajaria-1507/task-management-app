import { useNavigate } from "@tanstack/react-router";
import { signup } from "../api/auth";

export default function Signup() {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      await signup(email, password);
      navigate({ to: "/login" });
    } catch (error) {
      console.error("Signup failed:", error);
    }
  };

  return (
    <div>
      <h1>Signup</h1>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Email" required />
        <input type="password" name="password" placeholder="Password" required />
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}
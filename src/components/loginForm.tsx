import { Input } from "./ui/input";
import { Button } from "./ui/button"; 
import { login } from "@/app/actions";

const LoginForm = () => {
  return (
    <form action={login}>
      <Input type="text" name="username" required placeholder="username" />
      <Input type="password" name="password" required placeholder="password" />
      <Button>LogIn</Button>
    </form>
  );
};

export default LoginForm;

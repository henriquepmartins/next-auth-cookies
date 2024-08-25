"use client";

import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { login } from "@/app/actions";
import { useFormState } from "react-dom";
import { error } from "console";

const LoginForm = () => {
  const [state, formAction] = useFormState<any, FormData>(login, undefined);
  return (
    <form action={formAction}>
      <Input type="text" name="username" required placeholder="username" />
      <Input type="password" name="password" required placeholder="password" />
      <Button>LogIn</Button>
      {state?.error && <p>{state.error}</p>}
    </form>
  );
};

export default LoginForm;

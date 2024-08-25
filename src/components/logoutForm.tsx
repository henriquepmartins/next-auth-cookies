import { logout } from "@/app/actions";
import React from "react";

function LogoutForm() {
  return (
    <form action={logout}>
      <button>logout</button>
    </form>
  );
}

export default LogoutForm;

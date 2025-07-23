import {
  Anchor,
  Button,
  Checkbox,
  PasswordInput,
  TextInput,
} from "@mantine/core";
import { IconAt, IconLock } from "@tabler/icons-react";
import React from "react";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="w-1/2 px-20 flex flex-col justify-center gap-3">
      <div className="text-2xl font-semibold">Create Account</div>
      <TextInput withAsterisk label="Full Name" placeholder="Your Name" />
      <TextInput
        withAsterisk
        leftSection={<IconAt size={16} />}
        label="Email"
        placeholder="Your email"
      />
      <PasswordInput
        withAsterisk
        leftSection={<IconLock size={16} stroke={1.5} />}
        label="Password"
        placeholder="Password"
      />
      <PasswordInput
        withAsterisk
        leftSection={<IconLock size={16} stroke={1.5} />}
        label="Confirm Password"
        placeholder="Confirm Password"
      />
      <Checkbox
        autoContrast
        label={
          <>
            I accept the <Anchor>terms & conditions</Anchor>
          </>
        }
      />
      <Button autoContrast variant="filled">
        Sign Up
      </Button>
      <div className="mx-auto">
        Have an account?{" "}
        <Link to="/login" className="text-bright-sun-400 hover:underline">
          Login
        </Link>
      </div>
    </div>
  );
}

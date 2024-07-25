import React from "react";
import Button from "./Button.jsx";
import Input from "./Input.jsx";

export default function LoginForm() {
  return (
    <form>
      <div className="flex flex-col rounded-sm bg-coconut px-6 space-y-4">
        <div className="max-w-prose">
          <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium text-licorice"
              htmlFor="email"
            >
              Email
            </label>
            <div className="relative">
              <Input
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email address"
                required
                minLength={6}
              />
            </div>
          </div>
          <div className="mt-4">
            <label
              className="mb-3 mt-5 block text-xs font-medium text-licorice"
              htmlFor="password"
            >
              Password
            </label>
            <div className="relative">
              <Input
                id="password"
                type="password"
                name="password"
                placeholder="Enter password"
                required
                minLength={6}
              />
            </div>
          </div>
        </div>
        <Button className="block w-1/6">Log in</Button>
      </div>
    </form>
  );
}

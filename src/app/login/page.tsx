"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@nextui-org/button";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import Link from "next/link";

// Define validação usando Zod
const loginSchema = z.object({
  email: z.string().nonempty("Can’t be empty"),
  password: z.string().nonempty("Can’t be empty"),
});

// Define o tipo para os dados do formulário
type LoginFormInputs = z.infer<typeof loginSchema>;

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginFormInputs) => {
    console.log(data);
    // Adicione a lógica de autenticação aqui
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-950">
      <Card className="p-8 bg-slate-700 w-[400px] mx-4 sm:mx-0 bg-background">
        <CardHeader className="text-white text-3xl font-normal">
          Login
        </CardHeader>
        <CardBody className="flex flex-col gap-4">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4 w-full"
          >
            <div className="flex flex-col gap-2 relative">
              <input
                type="text"
                className={`custom-input py-2 pl-4 pr-8 ${
                  errors.email ? "custom-input-error" : ""
                }`}
                placeholder="Email address"
                {...register("email")}
              />
              {errors.email && (
                <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-primary text-sm font-extralight">
                  {errors.email.message as string}
                </span>
              )}
            </div>
            <div className="relative flex flex-col gap-2">
              <input
                type="password"
                className={`custom-input py-2 pl-4 pr-8 ${
                  errors.password ? "custom-input-error" : ""
                }`}
                placeholder="Password"
                {...register("password")}
              />
              {errors.password && (
                <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-primary text-sm font-extralight">
                  {errors.password.message as string}
                </span>
              )}
            </div>
            <Button
              type="submit"
              className="mt-5 rounded-md bg-primary text-white text-base font-normal cursor-pointer"
            >
              Login to your account
            </Button>
          </form>
        </CardBody>
        <CardFooter className="flex items-center justify-center gap-2">
          <span className="text-white font-light">Don’t have an account?</span>
          <Link href="/register" className="text-primary font-normal">
            Sign Up
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default LoginPage;

"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@nextui-org/button";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import Link from "next/link";

// Define validação usando Zod
const loginSchema = z
  .object({
    email: z.string().email("Can’t be empty"),
    password: z.string().min(6, "Can’t be empty"),
    confirmPassword: z.string().min(6, "Password is not match"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords must match",
    path: ["confirmPassword"],
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
    <div className="flex min-h-screen items-center justify-center bg-slate-950">
      <Card className="mx-4 w-[400px] bg-background bg-slate-700 p-8 sm:mx-0">
        <CardHeader className="text-3xl font-normal text-white">
          Login
        </CardHeader>
        <CardBody className="flex flex-col gap-4">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex w-full flex-col gap-4"
          >
            <div className="relative flex flex-col gap-2">
              <input
                type="text"
                className={`custom-input py-2 pl-4 pr-8 ${errors.email ? "custom-input-error" : ""}`}
                placeholder="Email address"
                {...register("email")}
              />
              {errors.email && (
                <span className="absolute right-4 top-1/2 -translate-y-1/2 transform text-sm font-extralight text-primary">
                  {errors.email.message as string}
                </span>
              )}
            </div>
            <div className="relative flex flex-col gap-2">
              <input
                type="password"
                className={`custom-input py-2 pl-4 pr-8 ${errors.password ? "custom-input-error" : ""}`}
                placeholder="Password"
                {...register("password")}
              />
              {errors.password && (
                <span className="absolute right-4 top-1/2 -translate-y-1/2 transform text-sm font-extralight text-primary">
                  {errors.password.message as string}
                </span>
              )}
            </div>
            <div className="relative flex flex-col gap-2">
              <input
                type="password"
                className={`custom-input py-2 pl-4 pr-8 ${errors.confirmPassword ? "custom-input-error" : ""}`}
                placeholder="Repeat password"
                {...register("confirmPassword")}
              />
              {errors.confirmPassword && (
                <span className="absolute right-4 top-1/2 -translate-y-1/2 transform text-sm font-extralight text-primary">
                  {errors.confirmPassword.message as string}
                </span>
              )}
            </div>
            <Button
              type="submit"
              className="mt-5 cursor-pointer rounded-md bg-primary text-base font-normal text-white"
            >
              Create an account
            </Button>
          </form>
        </CardBody>
        <CardFooter className="flex items-center justify-center gap-2">
          <span className="font-light text-white">
            Already have an account?
          </span>
          <Link href="/login" className="font-normal text-primary">
            Login
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default LoginPage;

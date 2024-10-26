import React from "react";
import { Button } from "@nextui-org/button";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import "@/app/globals.css";
import Link from "next/link";

const LoginPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-950">
      <Card className="p-8 bg-slate-700 w-[400px] mx-4 sm:mx-0 bg-background">
        <CardHeader className="text-white text-3xl font-normal">
          Login
        </CardHeader>
        <CardBody className="flex flex-col gap-4 ">
          <div className="flex flex-col gap-4 w-full">
            <input
              type="text"
              className="custom-input py-2 pl-4"
              placeholder="Email adress"
            />
            <input
              type="password"
              className="custom-input py-2 pl-4"
              placeholder="Password"
            />
          </div>
          <Button className="mt-5 rounded-md bg-primary text-white text-base font-normal cursor-pointer">
            Login to your account
          </Button>
        </CardBody>
        <CardFooter className="flex items-center justify-center gap-2">
          <span className="text-white font-light">Don’t have an account?</span>
          <Link href="#" className="text-primary font-normal">Sign Up</Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default LoginPage;

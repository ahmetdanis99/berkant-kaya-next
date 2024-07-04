"use client";

import { FaGoogle } from "react-icons/fa";
import AuthContainer from "../containers/AuthContainer";
import Button from "../general/Button";
import Heading from "../general/Heading";
import Input from "../general/Input";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import Link from "next/link";
import axios from "axios";
import toast from "react-hot-toast";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { User } from "@prisma/client";
import { useEffect } from "react";

interface RegisterClientProps {
  currentUser: User | null | undefined;
}

export default function RegisterClient({ currentUser }: RegisterClientProps) {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FieldValues>();
  
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    axios.post("/api/register", data).then(() => {
      toast.success("Kullanıcı oluşturuldu");
      signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: false,
      }).then((callback) => {
        if (callback?.ok) {
          router.push("/cart");
          router.refresh();
          toast.success("Login işlemi basarılı");
        }

        if (callback?.error) {
          toast.error(callback.error);
        }
      });
    });
  };
  useEffect(() => {
    if (currentUser) {
      router.push("/cart");
      router.refresh();
    }
  }, []);
  return (
    <AuthContainer>
      <div className="w-full md:w-[500px] p-3 shadow-lg rounded-md">
        <Heading text="Register" center />
        <Input placeholder="Ad" type="text" id="name" register={register} errors={errors} required />
        <Input placeholder="E-posta" type="text" id="email" register={register} errors={errors} required />
        <Input placeholder="Parola" type="password" id="password" register={register} errors={errors} required />
        <Button text="Kayıt Ol" onClick={handleSubmit(onSubmit)} />
        <div className="text-center my-2 text-sm text-red-500">
          Daha Önce Kayıt OLduysan{" "}
          <Link className="underline" href="/login">
            buraya tıkla
          </Link>
        </div>
        <div className="text-center my-2 font-bold">YADA</div>
        <Button text="Google ile üye ol" icon={FaGoogle} outline onClick={() => signIn("google")} />
      </div>
    </AuthContainer>
  );
}

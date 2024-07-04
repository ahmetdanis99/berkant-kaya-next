"use client";
import type { User } from "@prisma/client";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";

interface UserProps {
  currentUser: User | null | undefined;
}

export default function User({ currentUser }: UserProps) {
  const router = useRouter();
  const [openMenu, setOpenMenu] = useState(false);

  console.log(currentUser);

  const menuFunc = (type: any) => {
    setOpenMenu(false);
    if (type == "logout") {
      signOut();
      router.push("/login");
    } else if (type == "register") {
      router.push("/register");
    } else {
      router.push("/login");
    }
  };

  return (
    <div className="hidden md:flex relative">
      <div onClick={() => setOpenMenu(!openMenu)} className="flex items-center gap-2 cursor-pointer">
        <AiOutlineUser size="25" />
        <div>{currentUser ? currentUser.name : "User"}</div>
      </div>
      <div>
        {openMenu && (
          <div className="absolute w-[200px] top-10 bg-white shadow-lg right-0 p-2 rounded-md text-slate-600 space-y-1 cursor-pointer">
            {currentUser ? (
              <div>
                <div onClick={() => router.push("/admin")}>Admin</div>
                <div
                  onClick={() => {
                    menuFunc("logout");
                  }}
                >
                  Logout
                </div>
              </div>
            ) : (
              <div>
                <div
                  onClick={() => {
                    menuFunc("register");
                  }}
                >
                  Register
                </div>
                <div
                  onClick={() => {
                    menuFunc("login");
                  }}
                >
                  Login
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

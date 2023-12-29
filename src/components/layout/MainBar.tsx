import { useSideBarStore, useTokenStore, useUserStore } from "@/stores";
import { Mail, Menu, UserCog } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { Separator } from "../ui/separator";

export default function MainBar(): JSX.Element {
  const navigate = useNavigate();

  const toggleSideBar = useSideBarStore((state) => state.toggle);
  const [user, removeUser] = useUserStore((state) => [state.user, state.removeUser]);
  const removeToken = useTokenStore((state) => state.removeToken);

  function logout(): void {
    removeUser();
    removeToken();

    navigate("/");
  }

  return (
    <div
      className="w-full flex items-center justify-between p-2 bg-white border-b-slate-500 shadow"
    >
      <Menu
        className="w-8 h-8 cursor-pointer hover:bg-slate-200 rounded-full p-1"
        onClick={toggleSideBar}
      />

      <DropdownMenu>
        <DropdownMenuTrigger>
          <Avatar
            className="cursor-pointer hover:bg-slate-200 rounded-full p-1"
          >
            <AvatarFallback>
              {user?.getInitials()}
            </AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className="w-64 p-0 mr-2"
        >
          <div
            className="flex p-2"
          >
            <Avatar
              className="mr-2"
            >
              <AvatarFallback>
                {user?.getInitials()}
              </AvatarFallback>
            </Avatar>
            <div
              className="flex flex-col"
            >
              <span
                className="text-black line-clamp-2 font-bold"
              >
                {user?.getName()}
              </span>
              <span
                className="text-gray-500 line-clamp-1"
              >
                {user?.getRole().getName()}
              </span>
              <span
                className="text-gray-500 line-clamp-1 text-xs flex items-center"
              >
                <Mail
                  className="mr-1"
                  size={12}
                />
                {user?.getEmail()}
              </span>
            </div>
          </div>
          <Separator
            className="my-2"
          />
          <div
            className="p-1 pt-0"
          >
            <a
              href="/account"
              className="flex items-center hover:bg-blue-100 rounded"
            >
              <UserCog
                className="p-1 text-blue-600 bg-blue-100 rounded mr-2 h-full"
                size={40}
              />
              <div
                className="flex flex-col"
              >
                <span
                  className="text-black font-semibold"
                >
                  Minha Conta
                </span>
                <span
                  className="text-gray-500 text-sm"
                >
                  Configurações da conta
                </span>
              </div>
            </a>
          </div>
          <Separator
            className="my-2"
          />
          <div
            className="p-1 pt-0"
          >
            <Button
              className="w-full text-left h-8 px-2 bg-red-500 hover:bg-red-600 text-white"
              onClick={logout}
            >
              Sair
            </Button>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
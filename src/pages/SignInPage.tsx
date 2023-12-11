import { Alert } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AlertVariant } from "@/enums";
import { EmptyFieldError } from "@/errors";
import { ISignInResponse } from "@/responses";
import { AuthService } from "@/services";
import { X } from "lucide-react";
import React, { useState } from "react";

export default function SignInPage(): JSX.Element {
  const [alertOpen, setAlertOpen] = useState<boolean>(false);
  const [alertVariant, setAlertVariant] = useState<AlertVariant>(AlertVariant.DEFAULT);
  const [alertMessage, setAlertMessage] = useState<string>("");

  const [email, setEmail] = useState<string>("");
  const [validEmail, setValidEmail] = useState<boolean>(true);

  const [password, setPassword] = useState<string>("");
  const [validPassword, setValidPassword] = useState<boolean>(true);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>): Promise<void> {
    try {
      e.preventDefault();

      const signInResponse: ISignInResponse = await AuthService.signIn(email, password);

      console.log(signInResponse);
    } catch (error: any) {
      if (error instanceof EmptyFieldError) {
        email.length === 0 && setValidEmail(false);
        password.length === 0 && setValidPassword(false);
      }
      
      setAlertOpen(true);
      setAlertVariant(error.AlertVariant || AlertVariant.DANGER);
      setAlertMessage(error.message || "Erro inesperado ao fazer login.");
    }
  }

  return (
    <div
      className="h-full container flex flex-col items-center justify-center"
    >
      {
        alertOpen && (
          <Alert
            variant={alertVariant}
            className="w-1/3 mb-4"
          >
            <div
              className="w-full flex items-center justify-end cursor-pointer"
            >
              <X
                className="w-4 h-4 text-gray-500 hover:text-gray-700 hover:bg-gray-200 rounded-full"
                onClick={() => setAlertOpen(false)}
              />
            </div>
            {alertMessage}
          </Alert>
        )
      }
      <form
        className="w-1/3 bg-white rounded p-4 shadow"
        onSubmit={handleSubmit}
      >
        <div
          className="mb-4"
        >
          <h4
            className="text-3xl font-bold"
          >
            Desbravadores
          </h4>
          <span
            className="text-gray-500"
          >
            Faça login para acessar o sistema
          </span>
        </div>
        <div
          className="mb-2"
        >
          <Label
            htmlFor="email"
            className="text-base"
          >
            Email
          </Label>
          <Input
            id="email"
            type="email"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              const text: string = e.target.value;

              setValidEmail(text.length > 0);

              setEmail(text);
            }}
          />
          {
            !validEmail && (
              <span
                className="text-red-500 text-sm"
              >
                Campo obrigatório
              </span>
            )
          }
        </div>
        <div
          className="mb-2"
        >
          <Label
            htmlFor="password"
            className="text-base"
          >
            Senha
          </Label>
          <Input
            id="password"
            type="password"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              const text: string = e.target.value;

              setValidPassword(text.length > 0);

              setPassword(text);
            }}
          />
          {
            !validPassword && (
              <span
                className="text-red-500 text-sm"
              >
                Campo obrigatório
              </span>
            )
          }
        </div>
        <Button
          className="w-full mt-2 bg-blue-500 hover:bg-blue-700"
          type="submit"
        >
          Entrar
        </Button>
      </form>
    </div>
  );
}
import { TokenService } from "@/services";
import { ReactNode, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { LoaderPage } from "..";

interface IPrivatePageProps {
  children: ReactNode;
}

export default function PrivatePage({ children }: IPrivatePageProps): JSX.Element {
  const [tokenValid, setTokenValid] = useState<boolean | null>(null);

  useEffect(() => {
    async function init(): Promise<void> {
      try {
        await TokenService.tokenVerify();

        setTokenValid(true);
      } catch (error: any) {
        setTokenValid(false);
      }
    }

    init();
  }, []);

  if (tokenValid === null) {
    return (
      <LoaderPage>
        Carregando...
      </LoaderPage>
    );
  }

  return tokenValid ? (
    <>
      {children}
    </>
  ) : <Navigate to="/" />
}
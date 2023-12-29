import { BasePage, PrivatePage } from "@/components";

export default function AccountPage(): JSX.Element {
  return (
    <PrivatePage>
      <BasePage.Root>
        <BasePage.Header>
          <h4
            className="text-black font-semibold text-2xl"
          >
            Configurações da Conta
          </h4>
          <BasePage.Breadcrumbs>
            <a
              href="/home"
              className="text-gray-500 hover:underline text-sm font-semibold"
            >
              Início
            </a>
            <span
              className="text-gray-500 text-sm"
            >
              Configurações da Conta
            </span>
          </BasePage.Breadcrumbs>
        </BasePage.Header>
        <BasePage.Body>
          teste cabuloso
        </BasePage.Body>
      </BasePage.Root>
    </PrivatePage>
  );
}
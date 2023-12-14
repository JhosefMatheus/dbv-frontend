import { PrivatePage } from "@/components";
import { BasePage } from "@/components";

export default function HomePage(): JSX.Element {
  return (
    <PrivatePage>
      <BasePage.Root>
        <BasePage.Alert />
        <BasePage.Header
          className="mt-2"
        >
          Teste
        </BasePage.Header>
      </BasePage.Root>
    </PrivatePage>
  );
}
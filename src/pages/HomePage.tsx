import { PrivatePage } from "@/components";
import { BasePage } from "@/components";

export default function HomePage(): JSX.Element {
  return (
    <PrivatePage>
      <BasePage.Root>
        <BasePage.Header
          className="mt-2"
        >
          Teste
          <BasePage.SubHeader>
            teste
          </BasePage.SubHeader>
        </BasePage.Header>
        <BasePage.Body
          className="flex flex-col"
        >
          home page
        </BasePage.Body>
      </BasePage.Root>
    </PrivatePage>
  );
}
import { useAlertStore, useSideBarStore } from "@/stores";
import MainBar from "../MainBar";
import SideBar from "../SideBar";
import BasePageAlert from "./BasePageAlert";

interface IBasePageRootProps {
  children?: React.ReactNode;
}

export default function BasePageRoot({ children }: IBasePageRootProps): JSX.Element {
  const isSideBarOpen: boolean = useSideBarStore((state) => state.isOpen);
  const isAlertOpen: boolean = useAlertStore((state) => state.isOpen);

  return (
    <div
      className="w-full h-full flex"
    >
      {
        isSideBarOpen && <SideBar />
      }
      <div
        className="w-full h-full overflow-hidden"
      >
        <MainBar />
        <div
          className="w-full h-full p-2 overflow-y-auto pb-16"
        >
          {
            isAlertOpen && <BasePageAlert />
          }
          {children}
        </div>
      </div>
    </div>
  );
}
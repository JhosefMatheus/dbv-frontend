import MainBar from "../MainBar";
import SideBar from "../SideBar";

interface IBasePageRootProps {
  children: React.ReactNode;
}

export default function BasePageRoot({ children }: IBasePageRootProps): JSX.Element {
  return (
    <div
      className="w-full h-full flex"
    >
      <SideBar />
      <div
        className="w-full h-full overflow-hidden"
      >
        <MainBar />
        <div
          className="w-full h-full p-2 overflow-y-auto pb-16"
        >
          {children}
        </div>
      </div>
    </div>
  );
}
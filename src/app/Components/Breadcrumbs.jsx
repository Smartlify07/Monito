import { useLocation } from "react-router-dom";

const Breadcrumbs = () => {
  const location = useLocation();
  const crumbs = location.pathname
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb) => {
      return (
        <p
          className="text-[#667479] flex items-center gap-2 text-sm font-medium"
          key={crumb}
        >
          {crumb} <span>{">"}</span>
        </p>
      );
    });

  return (
    <div className="flex items-center gap-2 mt-10 mb-5 px-3 lg:mt-1 lg:mb-0 lg:px-0 ">
      {crumbs}
    </div>
  );
};

export default Breadcrumbs;

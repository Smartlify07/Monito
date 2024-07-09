import { Link, useLocation } from "react-router-dom";

const Breadcrumbs = () => {
  const location = useLocation();
  let currentLink = "";
  const crumbs = location.pathname
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb) => {
      currentLink += `${crumb}`;
      return (
        <Link
          className="text-[#667479] flex items-center gap-2 text-sm font-medium"
          key={crumb}
          to={"/" + currentLink}
        >
          {crumb} <span>{">"}</span>
        </Link>
      );
    });

  return (
    <div className="flex items-center gap-2 mt-10 mb-5 px-3 lg:mt-1 lg:mb-0 lg:px-0 ">
      {crumbs}
    </div>
  );
};

export default Breadcrumbs;

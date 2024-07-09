/* eslint-disable react/prop-types */
const ProductInfoTable = ({ productInfo }) => {
  console.log(productInfo);
  const renderedTable = (
    <ul key={productInfo} className=" mt-5 flex flex-col gap-4 lg:w-9/12">
      <li className="flex w-full justify-between items-center text-[#667479] font-medium border-b-2 border-[#EBEEEF]">
        <span>SKU</span>
        <span>:{productInfo.sku}</span>
      </li>
      <li className="flex w-full justify-between items-center text-[#667479] font-medium border-b border-[#EBEEEF]">
        <span>Gender</span>
        <span>:{productInfo.gender}</span>
      </li>
      <li className="flex w-full justify-between items-center text-[#667479] font-medium border-b border-[#EBEEEF]">
        <span>age</span>
        <span>:{productInfo.age}</span>
      </li>
      <li className="flex w-full justify-between items-center text-[#667479] font-medium border-b border-[#EBEEEF]">
        <span>Size</span>
        <span>:{productInfo.size}</span>
      </li>
      <li className="flex w-full justify-between items-center text-[#667479] font-medium border-b border-[#EBEEEF] ">
        <span>Color</span>
        <span>:{productInfo.color}</span>
      </li>
      <li className="flex w-full justify-between items-center text-[#667479] font-medium border-b border-[#EBEEEF]">
        <span>Vaccinated</span>
        <span>:{productInfo.vaccinated ? "Yes" : "No"}</span>
      </li>
      <li className="flex w-full justify-between items-center text-[#667479] font-medium border-b border-[#EBEEEF]">
        <span>Dewormed</span>
        <span>:{productInfo.dewormed ? "Yes" : "No"}</span>
      </li>
      <li className="flex w-full justify-between items-center text-[#667479] font-medium border-b border-[#EBEEEF]">
        <span>cert</span>
        <span>:{productInfo.certified ? "Yes" : "No"}</span>
      </li>
      <li className="flex w-full justify-between items-center text-[#667479] font-medium border-b border-[#EBEEEF]">
        <span>Microchip</span>
        <span>:{productInfo.microchip ? "Yes" : "No"}</span>
      </li>
      <li className="flex w-full justify-between items-center text-[#667479] font-medium border-b border-[#EBEEEF]">
        <span>Location</span>
        <span>:{productInfo.location}</span>
      </li>
      <li className="flex w-full justify-between items-center text-[#667479] font-medium border-b border-[#EBEEEF]">
        <span>Published Date</span>
        <span>:{productInfo.publishedDate}</span>
      </li>
    </ul>
  );
  return renderedTable;
};
export default ProductInfoTable;

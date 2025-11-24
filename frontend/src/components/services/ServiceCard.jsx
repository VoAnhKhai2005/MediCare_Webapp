import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

const ServiceCard = ({ item, index }) => {
  const { name, desc, bgColor, textColor, icon, slug } = item;

  return (
    <div
      className="relative p-6 rounded-2xl shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
      style={{ background: bgColor }}
    >
      {/* Icon */}
      <div
        className="w-[45px] h-[45px] rounded-xl flex items-center justify-center mb-4"
        style={{ background: `${textColor}20` }}
      >
        <img src={icon} alt={name} className="w-7 h-7" />
      </div>

      <h2 className="text-[22px] font-[700] text-[#181A1E]">{name}</h2>

      <p className="text-[15px] leading-6 text-[#555] mt-3">{desc}</p>

      <div className="flex items-center justify-between mt-6">
        <Link
          to={`/services/${slug}`}
          className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] flex items-center justify-center group hover:bg-primaryColor hover:border-none transition"
        >
          <BsArrowRight className="group-hover:text-white w-6 h-5" />
        </Link>

        <span
          className="w-[42px] h-[42px] flex items-center justify-center text-[17px] font-[700] rounded-lg"
          style={{ background: textColor, color: "#fff" }}
        >
          {index + 1}
        </span>
      </div>
    </div>
  );
};

export default ServiceCard;

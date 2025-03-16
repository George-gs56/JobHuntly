import { Link } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";
import PropTypes from "prop-types";

const SectionText = ({ title, subTitle, ctaName }) => {
  return (
    <div className="flex items-center justify-between w-full">
      <h2 className="text-2xl font-semibold lg:text-5xl text-textDarkColor font-clashDisplay">
        {title}
        <span className="text-secondryColor "> {subTitle}</span>
      </h2>
      <Link
        to="all-jobs"
        className="flex group items-center gap-[5px] font-semibold md:text-base text-sm text-nowrap text-primaryColor transition duration-300"
      >
        {ctaName}
        <GoArrowRight
          size={23}
          className="transition duration-300 group-hover:translate-x-1"
        />
      </Link>
    </div>
  );
};

SectionText.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  ctaName: PropTypes.string.isRequired,
};

export default SectionText;

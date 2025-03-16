import brand1 from "../../assets/images/brands/brand1.png";
import brand2 from "../../assets/images/brands/brand2.png";
import brand3 from "../../assets/images/brands/brand3.png";
import brand4 from "../../assets/images/brands/brand4.png";
import brand5 from "../../assets/images/brands/brand5.png";

const brands = [
  { name: "Vodafone image", image: brand1 },
  { name: "Intel image", image: brand2 },
  { name: "Tesla image ", image: brand3 },
  { name: "AMD image", image: brand4 },
  { name: "Talkit image", image: brand5 },
];

const Brands = () => {
  return (
    <section className="py-10 ">
      <div className="container">
        <p className="font-normal text-[20px] leading-7 text-[#202430] opacity-50 text-left">
          Companies we helped to grow
        </p>
        <div className="w-full mt-5 ">
          <div className="flex flex-wrap items-center justify-start gap-3 sm:justify-between">
            {brands.map((brand, index) => (
              <div key={index} className="w-24 ml-1 h-max">
                <img
                  className="md:h-[100px] h-12 opacity-80 object-contain"
                  src={brand.image}
                  alt={brand.name}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;

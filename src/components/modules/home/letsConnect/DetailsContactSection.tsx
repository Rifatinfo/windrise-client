const OUTFIT_IMAGE_URL = "/assets/Left Section.png";
const SEATED_MODEL_IMAGE_URL = "/assets/right-section.png";
import { ArrowUpRight } from "lucide-react";

const WINDRISE_WORDMARK_URL =
  '/assets/connect.png'
const DetailsContactSection = () => {
  return (
    <section
      className="w-full overflow-hidden  text-black"
      aria-labelledby="details-heading"
    >
      <div className="relative z-50 mb-10 md:mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="relative h-[248px] mb-20  md:mb-20  bg-[#f3f3ed] md:h-[417px] mt-30  md:mt-40">
            <img
              src={OUTFIT_IMAGE_URL}
              alt="Windrise outfit with shirt, denim, loafers, and shopping bag"
              className="absolute z-50 bottom-[-66px] left-1/2 md:h-auto w-[252px] h-[370px] -translate-x-1/2 md:bottom-[-128px] md:w-[452px] "
            />
          </div>

          <div className="relative h-[349px] bg-[#8b8975]   px-[15px] pt-[31px] text-white md:h-[417px] md:px-0 md:pt-[53px] md:mt-40">
            <div className="md:ml-[66px]">
              <h2
                id="details-heading"
                className="mt-6  md:mt-0 text-xl font-medium leading-[1.08] tracking-[-0.025em] md:text-[32px]"
              >
                The beauty lies in the
                <br />
                details.
              </h2>
              <p className="mt-[20px] max-w-[320px] text-[14px] leading-[1.38] text-white/95 md:mt-[15px] md:max-w-[362px] md:text-[16px]">
                Premium fabrics, refined construction and thoughtful details
                define every Windrise essential.
              </p>
              <a
                href="#details"
                className="mt-[48px] font-semibold inline-flex border-b border-white pb-px text-[11px] md:text-[14px] font-medium leading-none text-white transition-opacity hover:opacity-65 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white md:mt-[38px] "
              >
                Explore
              </a>
            </div>
            <img
              src={SEATED_MODEL_IMAGE_URL}
              alt="Seated model wearing a white shirt and olive trousers"
              className="absolute bottom-[-150px] left-[20px] z-10 md:h-auto h-[324px] w-[324px] md:bottom-[-255px] md:left-auto md:right-[11%] md:w-[549px]"
            />
          </div>
        </div>

        <div className="relative md:mb-20 min-h-[270px]   px-[15px] pb-8  pt-[106px] md:min-h-[250px] md:px-0 md:py-0">
          <div className="md:absolute md:left-[16%] md:top-[120px]  mt-20 md:mt-0">
            <h2 className="text-[18px] font-medium leading-none tracking-[-0.035em] text-black md:text-4xl ">
              Let’s connect.
            </h2>
            <p className="mt-2 text-[12px] text-[#868686] md:text-lg">
              We’re here whenever you need us.
            </p>
          </div>

          <div className="mt-[25px]  max-w-[270px] md:absolute md:left-[54%] md:top-[70px] md:mt-0 md:max-w-[350px] ">
            <p className="text-[11px] leading-[1.45] text-[#868686] md:text-[16px]">
              We believe in thoughtful connections. Reach out to our team for
              styling advice, order inquiries or to learn more about the world
              of Windrise.
            </p>

            <a
              href="#contact"
              className="mt-[22px] inline-flex items-center gap-1 text-[12px] font-medium text-black transition-opacity hover:opacity-55 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black md:mt-[31px] md:text-[16px]"
            >
              Get in Touch
              <ArrowUpRight className="h-3 w-3 md:h-4 md:w-4" />
            </a>
          </div>
        <img
            src={WINDRISE_WORDMARK_URL}
            alt=""
            aria-hidden="true"
            className="pointer-events-none  absolute bottom-[-50px] left-[15px] h-auto w-[290px] select-none opacity-100 md:bottom-[-120px]  md:left-auto md:right-[6%] md:w-[762px]"
          />
        </div>
        
        
      </div>
    </section>
  );
};

export default DetailsContactSection;

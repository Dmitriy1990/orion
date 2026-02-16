import { Button } from '../button/button';
import { heroImg } from '../../assets';

export const Banner = () => {
  return (
    <section className="pt-[121px] pb-[150px]">
      <div className="container1">
        <div className="flex items-center justify-center xl:justify-between xl:flex-row flex-col">
          <div className="max-w-179 mb-8">
            <h1 className="text-[58px] md:text-[72px] mb-5 leading-[112.5%] tracking-tighter[-0.01em] bg-linear-to-r from-[rgba(109,156,246,0.7)] from-[-11.46%] to-white to-[46.19%] bg-clip-text text-transparent mix-blend-normal">
              Revolutionize your DevOps journey with DevOptima
            </h1>
            <p className="text-grey-200 font-light text-[20px] leading-[150%] tracking-[-0.02em] max-w-165 mb-8">
              Empower teams to innovate faster through streamlined development, efficient automated
              workflows, and reliable scaling.
            </p>
            <div className="">
              <form>
                <div className="max-w-[464px] p-[5px] flex items-center h-[56px] bg-gradient-to-r border border-[#322047] from-[rgba(24,38,74,0.8)] from-22.75% to-[rgba(15,22,49,0.8)] to-93.35% rounded-[30px] relative">
                  <input
                    className="w-full border-0 caret-gray-200 outline-0 ml-[19px] font-light text-[16px] leading-[1.25] focus:outline-0 tracking-tighter[-0.01em] bg-gradient-to-r from-[#C8D6F2] via-[#ADC2EC] via-[#9EB7E8] to-[#97B1E6] bg-clip-text text-transparent opacity-80"
                    type="text"
                    placeholder="Your business email..."
                  />
                  <Button variant="primary">Free trial</Button>
                  <p className="absolute -bottom-8 left-5 font-medium text-[16px] leading-[125%] tracking-[-0.01em] text-[#F04242] opacity-80">
                    Email is a required field
                  </p>
                </div>
              </form>
            </div>
          </div>
          <div className="relative ">
            <div className="absolute t-0 r-40 w-[716px] h-[396px] bg-[rgba(20,_28,_72,_0.6)] filter blur-[200px]"></div>
            <img className="-mr-[27px] pt-[27px]" src={heroImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

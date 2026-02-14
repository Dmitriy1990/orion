import {
  Icon1,
  Icon2,
  Icon3,
  Icon4,
  Icon5,
  Icon6,
  IconDiscord,
  IconGithub,
  IconLinkedin,
  IconTwitter,
  Logo,
  LogoFooter,
  bgTop,
  heroImg,
  img1,
  img2,
  img3,
  imgAva,
  imgAva1,
  whatImg,
} from './assets';
import { Button } from './components';

function App() {
  return (
    <div className="min-h-150 relative overflow-hidden font-inter">
      <div className="absolute w-[800px] h-[800px] -left-[400px] -top-[402px] bg-[rgba(20,_28,_72,_0.6)] pointer-events-none filter blur-[200px] z-[-1]"></div>
      <img
        src={bgTop}
        className="w-full left-[121px] -top-[3px] absolute -z-1 pointer-events-none"></img>

      <header className="py-4 absolute t-0 mx-auto w-full">
        <div className="container1">
          <div className="flex items-start justify-between">
            <a href="#">
              <Logo />
            </a>
            <nav className="pr-10">
              <ul className="text-base text-white flex gap-12 mt-3">
                <li>
                  <a
                    href="#"
                    className="tracking-[-0.02em] opacity-90 hover:opacity-100 transition-all">
                    About us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="tracking-[-0.02em] opacity-90 hover:opacity-100 transition-all">
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="tracking-[-0.02em] opacity-90 hover:opacity-100 transition-all">
                    Why DevOptima
                  </a>
                </li>
              </ul>
            </nav>
            <Button variant="outline">Get started</Button>
          </div>
        </div>
      </header>
      <section className="pt-[121px] pb-[150px]">
        <div className="container1">
          <div className="flex items-center justify-between">
            <div className="max-w-179 ">
              <h1 className="text-[72px] mb-5 leading-[112.5%] tracking-tighter[-0.01em] bg-linear-to-r from-[rgba(109,156,246,0.7)] from-[-11.46%] to-white to-[46.19%] bg-clip-text text-transparent mix-blend-normal">
                Revolutionize your DevOps journey with DevOptima
              </h1>
              <p className="text-grey-200 font-light text-[20px] leading-[150%] tracking-[-0.02em] max-w-165 mb-8">
                Empower teams to innovate faster through streamlined development, efficient
                automated workflows, and reliable scaling.
              </p>
              <div className="">
                <form>
                  <div className="max-w-[464px] p-[5px] flex items-center h-[56px] bg-gradient-to-r border border-[#322047] from-[rgba(24,38,74,0.8)] from-22.75% to-[rgba(15,22,49,0.8)] to-93.35% rounded-[30px] ">
                    <input
                      className="w-full border-0 caret-gray-200 outline-0 ml-[19px] font-light text-[16px] leading-[1.25] focus:outline-0 tracking-tighter[-0.01em] bg-gradient-to-r from-[#C8D6F2] via-[#ADC2EC] via-[#9EB7E8] to-[#97B1E6] bg-clip-text text-transparent opacity-80"
                      type="text"
                      placeholder="Your business email..."
                    />
                    <Button variant="primary">Free trial</Button>
                  </div>
                </form>
              </div>
            </div>
            <div className="relative">
              <div className="absolute t-0 r-40 w-[716px] h-[396px] bg-[rgba(20,_28,_72,_0.6)] filter blur-[200px]"></div>
              <img className="-mr-[27px] pt-[27px]" src={heroImg} alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="pb-[150px]">
        <div className="container1">
          <div className="flex items-center">
            <div className="relative mr-[86px]">
              <div className="w-[300px] h-[300px] absolute -z-1 -right-[80px] -top-[50px] bg-[rgba(20,_28,_72,_0.3)] filter blur-[50px]"></div>
              <img src={whatImg} alt="" />
            </div>
            <div className="max-w-[630px]">
              <h2 className="text-[48px] text-white leading-[112.5%] mix-blend-normal mb-5">
                What is DevOptima?
              </h2>
              <p className="font-light text-[20px] leading-[150%] text-grey-200 mb-12">
                At DevOptima, we are a team of passionate DevOps experts committed to transforming
                the way businesses approach software development and operations.
              </p>
              <div className="flex flex-wrap gap-x-20 gap-y-10">
                <div className="w-[242px]">
                  <div className="w-[36px] h-[36px] relative  flex items-center justify-center mb-3">
                    <div className="bg-[#0054ff] opacity-80 filter blur-[19.2857px] inset-0 absolute"></div>
                    <div className="border-gradient"></div>
                    <Icon1 width={22} height={22} />
                  </div>
                  <h3 className="font-medium text-[20px] leading-[125%] tracking-[-0.02em] text-white mb-2">
                    DevOps transformation
                  </h3>
                  <p className="font-light text-base leading-[137.5%] text-grey-200">
                    Reshaping businesses with DevOps expertise.
                  </p>
                </div>
                <div className="w-[242px]">
                  <div className="w-[36px] h-[36px] relative  flex items-center justify-center mb-3">
                    <div className="bg-[#0054ff] opacity-80 filter blur-[19.2857px] inset-0 absolute"></div>
                    <div className="border-gradient"></div>
                    <Icon2 width={22} height={22} />
                  </div>
                  <h3 className="font-medium text-[20px] leading-[125%] tracking-[-0.02em] text-white mb-2">
                    Efficient operations
                  </h3>
                  <p className="font-light text-base leading-[137.5%] text-grey-200">
                    Streamline processes for productivity gains.
                  </p>
                </div>
                <div className="w-[242px]">
                  <div className="w-[36px] h-[36px] relative  flex items-center justify-center mb-3">
                    <div className="bg-[#0054ff] opacity-80 filter blur-[19.2857px] inset-0 absolute"></div>
                    <div className="border-gradient"></div>
                    <Icon3 width={22} height={22} />
                  </div>
                  <h3 className="font-medium text-[20px] leading-[125%] tracking-[-0.02em] text-white mb-2">
                    CI/CD implementation
                  </h3>
                  <p className="font-light text-base leading-[137.5%] text-grey-200">
                    Seamless software delivery pipeline.
                  </p>
                </div>
                <div className="w-[242px]">
                  <div className="w-[36px] h-[36px] relative  flex items-center justify-center mb-3">
                    <div className="bg-[#0054ff] opacity-80 filter blur-[19.2857px] inset-0 absolute"></div>
                    <div className="border-gradient"></div>
                    <Icon4 width={22} height={22} />
                  </div>
                  <h3 className="font-medium text-[20px] leading-[125%] tracking-[-0.02em] text-white mb-2">
                    Automation mastery
                  </h3>
                  <p className="font-light text-base leading-[137.5%] text-grey-200">
                    Unlock full automation potential.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="">
        <div className="mx-auto max-w-[537px] text-center mb-13">
          <h2 className="font-normal text-[48px] leading-[112.5%] tracking-[-0.01em] text-white mb-5">
            Innovative solutions <br />
            for operational excellence
          </h2>
          <p className="font-light text-[20px] leading-[150%] tracking-[-0.02em] text-grey-200">
            Tailored DevOps expertise driving your business momentum. Personalized solutions for
            growth and evolution.
          </p>
        </div>

        <div className="flex gap-10 justify-center relative">
          <div className="w-[1220px] h-[396px] absolute l-0 r-0 mx-auto -z-1 bg-[rgba(20,_28,_72,_0.6)] filter blur-[150px]"></div>
          <div className="w-[380px] card-gradient relative bg-[linear-gradient(180deg,_rgba(33,_66,_136,_0.25)_0%,_rgba(8,_20,_43,_0.25)_100%)] [box-shadow:0px_10px_40px_rgba(0,_0,_0,_0.3)] backdrop-filter backdrop-blur-xl rounded-[16px]">
            <img src={img1} className="" alt="" />
            <div className="px-8 pb-8">
              <h4 className="not-italic font-medium text-[20px] leading-[125%] tracking-[-0.02em] text-white mb-3">
                Continuous Integration & Deployment
              </h4>
              <p className="font-light text-base leading-[137.5%] text-grey-200">
                Streamline your development process with our advanced CI/CD solutions, ensuring
                faster and more reliable code deployment.
              </p>
            </div>
          </div>
          <div className="w-[380px] card-gradient relative bg-[linear-gradient(180deg,_rgba(33,_66,_136,_0.25)_0%,_rgba(8,_20,_43,_0.25)_100%)] [box-shadow:0px_10px_40px_rgba(0,_0,_0,_0.3)] backdrop-filter backdrop-blur-xl rounded-[16px]">
            <img src={img2} className="" alt="" />
            <div className="px-8 pb-8">
              <h4 className="not-italic font-medium text-[20px] leading-[125%] tracking-[-0.02em] text-white mb-3">
                Cloud Solutions & Infrastructure Management
              </h4>
              <p className="font-light text-base leading-[137.5%] text-grey-200">
                Leverage the cloud for scalability and efficiency. We provide comprehensive cloud
                infrastructure management and optimization services.
              </p>
            </div>
          </div>
          <div className="w-[380px] card-gradient relative bg-[linear-gradient(180deg,_rgba(33,_66,_136,_0.25)_0%,_rgba(8,_20,_43,_0.25)_100%)] [box-shadow:0px_10px_40px_rgba(0,_0,_0,_0.3)] backdrop-filter backdrop-blur-xl rounded-[16px]">
            <img src={img3} className="" alt="" />
            <div className="px-8 pb-8">
              <h4 className="not-italic font-medium text-[20px] leading-[125%] tracking-[-0.02em] text-white mb-3">
                Automated Testing & Quality Assurance
              </h4>
              <p className="font-light text-base leading-[137.5%] text-grey-200">
                Enhance product quality with our automated testing services, designed to detect
                issues early and reduce time-to-market.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-[250px] pb-[280px]">
        <div className="flex justify-center relative">
          <div className="absolute border4 w-[1px] top-0 bottom-0 my-auto left-0 right-0 mx-auto h-[890px]"></div>{' '}
          <div className="absolute border3 w-full h-[1px] bottom-0 -z-1"></div>
          <div className="absolute border3 w-full h-[1px] top-0 -z-1"></div>
          <div className="max-w-[610px] w-full pr-[60px] px-[44px] py-[40px] border1 relative ">
            <div className="absolute border4 w-[1px] h-[890px] top-0 bottom-0 my-auto -z-1 -left-[1px]"></div>
            <div className="w-[64px] h-[64px] relative  flex items-center justify-center mb-4">
              <div className="bg-blue-200/30 filter blur-[19.2857px] inset-0 absolute"></div>
              <div className="border-gradient"></div>
              <Icon5 width={36} height={36} className="block" />
            </div>
            <p className="font-light text-[24px] leading-[150%] tracking-[-0.01em] text-grey-200 mb-8">
              Thanks to DevOptima, our team can focus more on{' '}
              <span className="font-normal text-grey-100">innovation</span> and less on operational
              challenges. Their{' '}
              <span className="font-normal text-grey-100">cloud management solutions</span> are
              top-notch.
            </p>
            <div className="flex items-center">
              <div className="relative w-[44px] h-[44px] mr-3">
                <img
                  src={imgAva1}
                  className="overflow-hidden absolute top-[0] left-[0] w-full h-full [border-radius:inherit] object-cover object-center"
                  alt=""
                />
              </div>
              <div className="">
                <h5 className="font-light text-[18px] leading-[125%] tracking-[-0.02em] text-white">
                  John Smith
                </h5>
                <p className="font-light text-[15px] leading-[125%] tracking-[-0.02em] text-grey-200">
                  IT Director at Reflex
                </p>
              </div>
            </div>
          </div>
          <div className="max-w-[610px] w-full px-[44px] pr-[60px] py-[40px] border1 relative">
            <div className="absolute border4 w-[1px] h-[890px] -z-1 top-0 bottom-0 my-auto -right-[1px]"></div>
            <div className="w-[64px] h-[64px] relative  flex items-center justify-center mb-4">
              <div className="bg-blue-200/30 filter blur-[19.2857px] inset-0 absolute"></div>
              <div className="border-gradient"></div>
              <Icon6 width={36} height={36} className="block" />
            </div>
            <p className="font-light text-[24px] leading-[150%] tracking-[-0.01em] text-grey-200 mb-8">
              DevOptima has been a game-changer for us. With their support, we've shifted our{' '}
              <span className="font-normal text-grey-100">
                focus from operational hurdles to pushing boundaries in innovation.
              </span>
            </p>
            <div className="flex items-center">
              <div className="relative w-[44px] h-[44px] mr-3">
                <img
                  src={imgAva}
                  className="overflow-hidden absolute top-[0] left-[0] w-full h-full [border-radius:inherit] object-cover object-center"
                  alt=""
                />
              </div>
              <div className="">
                <h5 className="font-light text-[18px] leading-[125%] tracking-[-0.02em] text-white">
                  Jane Doe
                </h5>
                <p className="font-light text-[15px] leading-[125%] tracking-[-0.02em] text-grey-200">
                  Tech Lead at Dribble
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-[150px]">
        <div className="container1">
          <div className="mb-10">
            <h2 className="text-center text-[48px] font-normal leading-[112.5%] tracking-tighter bg-gradient-to-r from-[rgba(109,156,246,0.7)] via-[rgba(195,214,251,0.876516)] via-white via-[rgba(208,223,252,0.90333)] to-[rgba(109,156,246,0.7)] bg-clip-text text-transparent mb-5">
              Ready to elevate your DevOps strategy?
            </h2>
            <p className="max-w-[716px] text-[20px] leading-[150%] text-center tracking-[-0.02em] font-light text-grey-200 mx-auto">
              Join the multitude of companies benefiting from optimized DevOps practices. Contact us
              to discover how DevOptima can help your business.
            </p>
          </div>
          <div className="flex gap-[18px] justify-center">
            <Button>Contact us</Button>
            <Button variant="outline">Try for free</Button>
          </div>
        </div>
      </section>

      <footer className="border border-t border-blue-400 pt-8 pb-13">
        <div className="container1">
          <div className="flex justify-between text-white">
            <LogoFooter />
            <div className="flex flex-1 gap-[176px] justify-end">
              <div className=" w-[120px]">
                <h5 className="mb-4 font-medium text-[16px] leading-[150%] tracking-[-0.02em]">
                  Resources
                </h5>
                <ul>
                  <li className="mb-3">
                    <a
                      href="#"
                      className="font-light text-[16px] leading-[150%] tracking-[-0.02em] text-grey-200 hover:text-grey-100 transition-colors">
                      Docs
                    </a>
                  </li>
                  <li className="mb-3">
                    <a
                      href="#"
                      className="font-light text-[16px] leading-[150%] tracking-[-0.02em] text-grey-200 hover:text-grey-100 transition-colors">
                      Release notes
                    </a>
                  </li>
                  <li className="mb-3">
                    <a
                      href="#"
                      className="font-light text-[16px] leading-[150%] tracking-[-0.02em] text-grey-200 hover:text-grey-100 transition-colors">
                      Security
                    </a>
                  </li>
                </ul>
              </div>
              <div className=" w-[120px]">
                <h5 className="mb-4 font-medium text-[16px] leading-[150%] tracking-[-0.02em]">
                  Community
                </h5>
                <ul>
                  <li className="mb-3">
                    <a
                      href="#"
                      className="font-light text-[16px] leading-[150%] tracking-[-0.02em] text-grey-200 flex items-center gap-2.5 hover:text-grey-100 transition-colors">
                      <IconTwitter /> Twitter
                    </a>
                  </li>
                  <li className="mb-3">
                    <a
                      href="#"
                      className="font-light text-[16px] leading-[150%] tracking-[-0.02em] text-grey-200 flex items-center gap-2.5 hover:text-grey-100 transition-colors">
                      <IconLinkedin /> LinkedIn
                    </a>
                  </li>
                  <li className="mb-3">
                    <a
                      href="#"
                      className="font-light text-[16px] leading-[150%] tracking-[-0.02em] text-grey-200 flex items-center gap-2.5 hover:text-grey-100 transition-colors">
                      <IconGithub /> GitHub
                    </a>
                  </li>
                  <li className="mb-3">
                    <a
                      href="#"
                      className="font-light text-[16px] leading-[150%] tracking-[-0.02em] text-grey-200 flex items-center gap-2.5 hover:text-grey-100 transition-colors">
                      <IconDiscord /> Discourse
                    </a>
                  </li>
                </ul>
              </div>
              <div className=" w-[120px]">
                <h5 className="mb-4 font-medium text-[16px] leading-[150%] tracking-[-0.02em]">
                  Legal
                </h5>
                <ul>
                  <li className="mb-3">
                    <a
                      href="#"
                      className="font-light text-[16px] leading-[150%] tracking-[-0.02em] text-grey-200 hover:text-grey-100 transition-colors">
                      Privacy policy
                    </a>
                  </li>
                  <li className="mb-3">
                    <a
                      href="#"
                      className="font-light text-[16px] leading-[150%] tracking-[-0.02em] text-grey-200 hover:text-grey-100 transition-colors">
                      Terms of service
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <p className="font-light text-[14px] leading-[150%] tracking-[-0.02em] text-grey-200">
            Devoptima 2023 © All rights reserved
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;

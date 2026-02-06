import { Logo, Pattern, bgTop } from './assets';

function App() {
  return (
    <div className="h-150 relative overflow-hidden font-inter">
      <div className="absolute w-[800px] h-[800px] -left-[400px] -top-[402px] bg-[rgba(20,_28,_72,_0.6)] pointer-events-none filter blur-[200px] z-[-1]"></div>
      <img
        src={bgTop}
        className="w-full left-[121px] -top-[3px] absolute z-1 pointer-events-none"></img>
      <header>
        <div className="container">
          <div className="flex items-center justify-between">
            <Logo />
            <nav>
              <ul className="text-base text-white flex gap-12">
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
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;

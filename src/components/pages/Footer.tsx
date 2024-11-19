export const Footer = () => {
    return (
      <footer className="ml-6 mr-6 rounded-t-xl bg-gradient-to-br from-neutralOne via-neutralTwo to-neutralThree">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between md:items-start">
            {/* Logo Section */}
            <div className="mb-6 md:mb-0">
              <a href="#" className="flex items-center">
                {/* Logo */}
                {/* <img src="#" className="h-8 me-3" alt="SeyLogo" /> */}
                <span className="self-center text-2xl font-semibold whitespace-nowrap font-mina dark:text-primaryOne">
                  Seynation
                </span>
              </a>
            </div>
  
            {/* Links Section */}
            <div className="flex flex-wrap gap-8 justify-between">
              {/* Quick Links Column */}
              <div>
                <h2 className="mb-6 text-sm font-semibold text-black uppercase font-mina dark:text-white">
                  Quick Links
                </h2>
                <ul className="text-gray-500 dark:text-gray-400">
                  <li className="mb-4">
                    <a href="#" className="hover:underline font-inter text-sm text-white">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline font-inter text-sm text-white">
                      Portfolio
                    </a>
                  </li>
                </ul>
              </div>
  
              <div>
                <h2 className="mb-6 text-sm font-semibold text-black uppercase font-mina dark:text-white">
                  Services
                </h2>
                <ul className="text-gray-500 dark:text-gray-400">
                  <li className="mb-4">
                    <a href="#" className="hover:underline font-inter text-sm text-white">
                      Web Design
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline font-inter text-sm text-white">
                      Branding
                    </a>
                  </li>
                </ul>
              </div>
  
              <div>
                <h2 className="mb-6 text-sm font-semibold text-black uppercase font-mina dark:text-white">
                  Follow Us
                </h2>
                <ul className="text-gray-500 dark:text-gray-400">
                  <li className="mb-4">
                    <a href="#" className="hover:underline font-inter text-sm text-white">
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline font-inter text-sm text-white">
                      GitHub
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
  
          {/* Divider */}
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
  
          {/* Bottom Section */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <span className="text-sm text-white sm:text-center dark:text-gray-400">
              © 2025{" "}
              <a href="https://seynation.co/" className="hover:underline">
                Seynation Digital Limited™
              </a>
              . All Rights Reserved.
            </span>
            <div className="flex mt-4 sm:justify-center sm:mt-0 space-x-6">
              {/* Social Icons */}
              <a href="#" className="text-white hover:text-gray-900 dark:hover:text-white">
                <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 21 16">
                  {/* Instagram SVG */}
                  <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04..." />
                </svg>
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-white hover:text-gray-900 dark:hover:text-white">
                <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                  {/* X SVG */}
                  <path d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074..." />
                </svg>
                <span className="sr-only">X</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
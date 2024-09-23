import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-darkBlue fixed bottom-0 w-full font-apple ">
      <div className="px-12 py-10 mx-auto sm:px-6 lg:px-12 max-w-7xl">
        <div className="text-center xl:flex xl:items-center xl:justify-between xl:text-left">
          <div className="xl:flex xl:items-center xl:justify-start">
            <p className="text-sm text-white xl:ml-6 ">
              © Copyright 2024 CONTENT CREATION
            </p>
          </div>

          <div className="items-center mt-8 xl:mt-0 xl:flex xl:justify-end xl:space-x-8">
            <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 xl:justify-end">
              <li>
                <a
                  href="/home"
                  title=""
                  className="text-sm text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="/home"
                  title=""
                  className="text-sm text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                >
                  Services
                </a>
              </li>

              <li>
                <a
                  href="https://timechainlabs.io/"
                  title=""
                  className="text-sm text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                >
                  Privacy Policy
                </a>
              </li>

              <li>
                <a
                  href="https://timechainlabs.io/"
                  title=""
                  className="text-sm text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                >
                  Terms & Conditions
                </a>
              </li>

              <li>
                <a
                  href="https://timechainlabs.io/"
                  title=""
                  className="text-sm text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                >
                  Support
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

import { Helmet } from "react-helmet-async";

const TermsOfService = () => {
  return (
    <div className="container mx-auto lg:px-20 lg:py-">
      <Helmet>
        <title>Hoas | Terms of Service</title>
      </Helmet>
      <div className="-mx-4 flex flex-wrap p-8 ">
        <div className="w-full px-4 md:w-1/2 lg:w-1/3">
          <div className="mb-9 rounded-xl py-8 px-7 shadow-md transition-all hover:shadow-lg sm:p-9 lg:px-6 xl:px-9">
            <div className="mx-auto mb-7 inline-block">
              <img
                className="w-20 h-20 "
                src="/intellectual.png"
                alt="Intellectual"
              />
            </div>
            <div>
              <h3 className="mb-4 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
                Intellectual Property
              </h3>
              <p className="text-base font-medium text-body-color">
                All content on our website, including text, graphics, logos,
                images, and software, is the property of our company or its
                licensors and is protected by copyright and other intellectual
                property laws.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full px-4 md:w-1/2 lg:w-1/3">
          <div className="mb-9 rounded-xl py-8 px-7 shadow-md transition-all hover:shadow-lg sm:p-9 lg:px-6 xl:px-9">
            <div className="mx-auto mb-7 inline-block">
            <img
                className="w-20 h-20 "
                src="/acceptance.jpg"
                alt="acceptance"
              />
            </div>
            <div>
              <h3 className="mb-4 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
                Acceptance of Terms
              </h3>
              <p className="text-base font-medium text-body-color">
                By accessing or using our website, you agree to be bound by
                these Terms of Service. If you do not agree with any part of
                these terms, you may not access the website.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full px-4 md:w-1/2 lg:w-1/3">
          <div className="mb-9 rounded-xl py-8 px-7 shadow-md transition-all hover:shadow-lg sm:p-9 lg:px-6 xl:px-9">
            <div className="mx-auto mb-7 inline-block">
              <img className="w-20 h-20 "
                src="/userConduct.jpg"
                alt="userConduct"></img>
              
            </div>
            <div>
              <h3 className="mb-4 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
                User Conduct
              </h3>
              <p className="text-base font-medium text-body-color">
                You agree to use our website only for lawful purposes and in a
                manner that does not infringe upon the rights of others. You
                must not engage in any conduct that disrupts with
                the website.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full px-4 md:w-1/2 lg:w-1/3">
          <div className="mb-9 rounded-xl py-8 px-7 shadow-md transition-all hover:shadow-lg sm:p-9 lg:px-6 xl:px-9">
            <div className="mx-auto mb-7 inline-block">
            <img
                className="w-20 h-20 "
                src="/disclaimer.png"
                alt="disclaimer"
              />
            </div>
            <div>
              <h3 className="mb-4 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
                Disclaimer of Warranties{" "}
              </h3>
              <p className="text-base font-medium text-body-color">
                We provide our website on an and available basis, without any
                warranties of any kind, whether express or implied. We do not
                warrant that our website will be uninterrupted, error-free,
                other harmful components.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full px-4 md:w-1/2 lg:w-1/3">
          <div className="mb-9 rounded-xl py-8 px-7 shadow-md transition-all hover:shadow-lg sm:p-9 lg:px-6 xl:px-9">
            <div className="mx-auto mb-7 inline-block">
            <img
                className="w-20 h-20 "
                src="/privacy.png"
                alt="privacy"
              />
            </div>
            <div>
              <h3 className="mb-4 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
                Privacy Policy
              </h3>
              <p className="text-base font-medium text-body-color">
                Your use of our website is also subject to our Privacy Policy,
                which outlines how we collect, use, and disclose your personal
                information. Please review our Privacy Policy carefully.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full px-4 md:w-1/2 lg:w-1/3">
          <div className="mb-9 rounded-xl py-8 px-7 shadow-md transition-all hover:shadow-lg sm:p-9 lg:px-6 xl:px-9">
            <div className="mx-auto mb-7 inline-block">
            <img
                className="w-20 h-20 "
                src="/limitation.png"
                alt="limitation"
              />
             
            </div>
            <div>
              <h3 className="mb-4 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
                Limitation of Liability
              </h3>
              <p className="text-base font-medium text-body-color">
                In no event shall we be liable for any indirect, incidental,
                special, punitive damages arising out of or in connection with
                your use of our website, even if we have been advised of the
                possibility of such damages.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;

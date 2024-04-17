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
              <svg
                width="52"
                height="60"
                viewBox="0 0 52 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.2787 7.3766C12.4639 7.3766 11.8033 8.03716 11.8033 8.85201V15.2455H8.85248V8.85201C8.85248 6.40747 10.8342 4.42578 13.2787 4.42578H46.7213C49.1659 4.42578 51.1476 6.40747 51.1476 8.85201V51.1471C51.1476 53.5916 49.1659 55.5733 46.7213 55.5733H37.8689V52.6225H46.7213C47.5362 52.6225 48.1967 51.9619 48.1967 51.1471V8.85201C48.1967 8.03716 47.5362 7.3766 46.7213 7.3766H13.2787Z"
                  fill="#6A64F1"
                ></path>
                <path
                  d="M7.8689 22.6223C7.8689 22.079 8.30927 21.6387 8.8525 21.6387L30.4918 21.6387C31.0351 21.6387 31.4755 22.079 31.4755 22.6223C31.4755 23.1655 31.0351 23.6059 30.4918 23.6059L8.8525 23.6059C8.30927 23.6059 7.8689 23.1655 7.8689 22.6223Z"
                  fill="#ABA8F7"
                ></path>
                <path
                  d="M7.8689 29.507C7.8689 28.9638 8.30927 28.5234 8.8525 28.5234L30.4918 28.5234C31.0351 28.5234 31.4755 28.9638 31.4755 29.507C31.4755 30.0503 31.0351 30.4907 30.4918 30.4907L8.8525 30.4907C8.30927 30.4907 7.8689 30.0503 7.8689 29.507Z"
                  fill="#ABA8F7"
                ></path>
                <path
                  d="M7.8689 36.3928C7.8689 35.8496 8.30927 35.4092 8.8525 35.4092L30.4918 35.4092C31.0351 35.4092 31.4755 35.8496 31.4755 36.3928C31.4755 36.936 31.0351 37.3764 30.4918 37.3764L8.8525 37.3764C8.30927 37.3764 7.8689 36.936 7.8689 36.3928Z"
                  fill="#ABA8F7"
                ></path>
                <path
                  d="M7.8689 43.2776C7.8689 42.7343 8.30927 42.2939 8.8525 42.2939L30.4918 42.2939C31.0351 42.2939 31.4755 42.7343 31.4755 43.2776C31.4755 43.8208 31.0351 44.2612 30.4918 44.2612L8.8525 44.2612C8.30927 44.2612 7.8689 43.8208 7.8689 43.2776Z"
                  fill="#ABA8F7"
                ></path>
                <path
                  d="M15.7377 2.95082C15.7377 1.32113 17.0589 0 18.6886 0H23.6066C25.2363 0 26.5574 1.32113 26.5574 2.95082V5.74152C26.5574 6.28475 26.117 6.72512 25.5738 6.72512C25.0306 6.72512 24.5902 6.28475 24.5902 5.74152V2.95082C24.5902 2.40759 24.1498 1.96721 23.6066 1.96721H18.6886C18.1453 1.96721 17.7049 2.40759 17.7049 2.95082V24.5902C17.7049 25.1334 18.1453 25.5738 18.6886 25.5738H20.6558C21.199 25.5738 21.6394 25.1334 21.6394 24.5902V10.7016C21.6394 10.1584 22.0797 9.71803 22.623 9.71803C23.1662 9.71803 23.6066 10.1584 23.6066 10.7016V24.5902C23.6066 26.2199 22.2855 27.541 20.6558 27.541H18.6886C17.0589 27.541 15.7377 26.2199 15.7377 24.5902V2.95082Z"
                  fill="#6A64F1"
                ></path>
                <path
                  d="M36.3934 16.7213H2.95082V48.9L11.181 57.0492H36.3934V16.7213ZM2.95082 13.7705H36.3934C38.0231 13.7705 39.3443 15.0916 39.3443 16.7213V57.0492C39.3443 58.6789 38.0231 60 36.3934 60H11.181C10.4034 60 9.65727 59.6931 9.10474 59.146L0.874608 50.9968C0.314904 50.4426 0 49.6876 0 48.9V16.7213C0 15.0916 1.32113 13.7705 2.95082 13.7705Z"
                  fill="#6A64F1"
                ></path>
                <path
                  d="M10.3279 50.6558H1.96721V47.7049H10.8197C12.1777 47.7049 13.2787 48.8059 13.2787 50.1639V58.0328H10.3279V50.6558Z"
                  fill="#6A64F1"
                ></path>
              </svg>
            </div>
            <div>
              <h3 className="mb-4 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
                Limitation of Liability{" "}
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

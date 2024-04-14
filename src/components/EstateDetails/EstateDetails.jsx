import { useLoaderData, useParams } from "react-router-dom";

const EstateDetails = () => {
  const estateDetails = useLoaderData();
  const { id } = useParams();

  const idInt = parseInt(id);

  const estate = estateDetails.find((estate) => estate.id === idInt);
  console.log(estate);

  const {
    image,
    estate_title,
    segment,
    status,
    price,
    location,
    description,
    facilities,
    area,
  } = estate;

  return (
    <section>
      <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center md:px-10 lg:px-32 dark:text-gray-50">
        <section className="dark:bg-gray-100 dark:text-gray-800">
          <div className="container max-w-xl mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-center sm:text-5xl dark:text-gray-900">
                {estate_title}{" "}
              </h2>
              <p className="max-w-3xl mx-auto mt-4 text-xl text-center dark:text-gray-600">
                {location}{" "}
              </p>
              <p className="max-w-3xl mx-auto mt-4 text-xl text-center dark:text-gray-600">
                {description}{" "}
              </p>
            </div>
            <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
              <div>
                <h3 className="text-2xl font-bold tracking-tight sm:text-3xl dark:text-gray-900">
                  Ad vix debet docendi
                </h3>
                <p className="mt-3 text-lg dark:text-gray-600">
                  Ne dicta praesent ocurreret has, diam theophrastus at pro. Eos
                  etiam regione ut, persius eripuit quo id. Sit te euismod
                  tacimates.
                </p>
                <div className="mt-12 space-y-12">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-600 dark:text-gray-50">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="w-7 h-7"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium leading-6 dark:text-gray-900">
{price}                      </h4>
                     
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-600 dark:text-gray-50">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="w-7 h-7"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium leading-6 dark:text-gray-900">
{status}                      </h4>
                   
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-600 dark:text-gray-50">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="w-7 h-7"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium leading-6 dark:text-gray-900">
{area}                      </h4>
                     
                    </div>
                  </div>
                </div>
              </div>
              <div aria-hidden="true" className="mt-10 lg:mt-0">
                <img
                  src={image}
                  alt=""
                  className="mx-auto rounded-lg shadow-lg dark:bg-gray-500"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default EstateDetails;

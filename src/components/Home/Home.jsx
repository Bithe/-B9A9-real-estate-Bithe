import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { NavLink } from "react-router-dom";
import ResidentialCard from "../ResidentialCard/ResidentialCard";


const Home = () => {
  const user = useContext(AuthContext);
  console.log(user);

  const [residentials, setResidential] = useState([]);

  useEffect(() => {
    fetch("residentialData.json")
      .then((res) => res.json())
      .then((data) => setResidential(data));
  }, []);
  console.log(residentials);

  return (
    <section className="dark:bg-gray-100 dark:text-gray-800">
      <div className="container p-6 mx-auto space-y-6 sm:space-y-12  ">
        {/* BANNER */}
        <div className=" flex bg-[#1313130D] rounded-3xl ">
          <a
            rel="noopener noreferrer"
            href="#"
            className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-50"
          >
            <div className="lg:p-20 space-y-2 lg:col-span-7  justify-center items-center py-8">
              <h3 className="text-2xl lg:text-6xl py-4 font-semibold sm:text-4xl ">
                Books to freshen up your bookshelf{" "}
              </h3>
              <NavLink to="/listedBooks" className="">
                <button className="btn text-xl font-bold bg-[#23BE0A] text-white">
                  View The List
                </button>
              </NavLink>{" "}
              <div className="banner animate__animated animate__fadeIn">
                {/* Content of your banner */}
                <h1>Welcome to Our Website</h1>
                <p>Discover amazing deals and discounts!</p>
              </div>
            </div>
          </a>
        </div>

        {/*  */}

        {/* CARDS */}
        <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 ">
          {residentials.map((residential) => (
            <ResidentialCard
              key={residential.id}
              residential={residential}
            ></ResidentialCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;

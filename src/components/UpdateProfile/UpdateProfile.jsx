import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { updateProfile } from "firebase/auth";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";


const UpdateProfile = () => {
  const { user, setReload } = useContext(AuthContext);

  const handleUpdateProfile = (e) => {
    // e.preventDefault();

    const name = e.target.name.value;
    const photoURL = e.target.photoURL.value;

    updateProfile(user, { displayName: name, photoURL: photoURL })
      .then(() => {
        console.log("Profile updated successfully");
        setReload(true);
        toast("Profile Updated Successful");
      })
      .catch((error) => {
        console.error("Error updating profile:", error);
        toast("Profile not updated");
      });
  };

  return (
    <form
      onSubmit={handleUpdateProfile}
      className="max-w-sm mx-auto border rounded-xl p-8 m-8"
    >
      <div className="mb-5">

      <Helmet>
          <title>Hoas | Update Profile</title>
         </Helmet>
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Your Email: {user.email}
        </label>
  
      </div>

      <div className="mb-5">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Your Name
        </label>
        <input
          type="text"
          id="name"
          defaultValue={user.displayName}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Your name"
          required
        />
      </div>
      <div className="mb-5">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Photo URL
        </label>
        <input
          type="url"
          id="photoURL"
          defaultValue={user.photoURL}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Photo URL"
          required
        />
      </div>

      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Update
      </button>
    </form>
  );
};

export default UpdateProfile;

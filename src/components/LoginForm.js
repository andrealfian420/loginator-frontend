import { Link } from 'react-router-dom';

const LoginForm = () => {
  return (
    <div className="flex xl:block justify-center items-center">
      <form className="w-full max-w-md mt-12 mb-4 md:mx-4">
        <div className="mb-4">
          <label
            for="user_credential"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Username / Email
          </label>
          <input
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Masukkan username / email anda"
            id="user_credential"
          />
        </div>

        <div className="mb-2">
          <label
            for="password"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Password
          </label>
          <input
            type="password"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Masukkan password anda"
            id="password"
          />
        </div>

        <div className="flex justify-between items-center mb-4">
          <label className="block text-gray-500 font-bold">
            <input
              type="checkbox"
              className="mr-2 leading-tight cursor-pointer"
            />
            <span className="text-sm">Ingat saya</span>
          </label>

          <Link
            to="/forgotpassword"
            className="text-sm text-gray-400 hover:text-gray-700 font-semibold cursor-pointer"
          >
            Lupa password?
          </Link>
        </div>

        <button
          type="submit"
          class="w-full p-2 font-semibold bg-blue-500 hover:bg-blue-400 text-gray-300 rounded"
        >
          Masuk
        </button>
      </form>
    </div>
  );
};

export default LoginForm;

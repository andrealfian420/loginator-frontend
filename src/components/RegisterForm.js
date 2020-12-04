const RegisterForm = () => {
  return (
    <div className="flex justify-center items-center xl:block">
      <form className="md:mx-4 w-full max-w-md mt-12 mb-4">
        <div className="grid grid-cols-6 gap-x-2 mb-4">
          <div className="col-span-3">
            <label
              for="firstName"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Nama Depan
            </label>
            <input
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Masukkan nama depan"
              id="firstName"
            />
          </div>
          <div className="col-span-3">
            <label
              for="lastName"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Nama Belakang
            </label>
            <input
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Masukkan nama belakang"
              id="lastName"
            />
          </div>
        </div>
        <div className="mb-4">
          <label
            for="username"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Username
          </label>
          <input
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Masukkan username anda"
            id="username"
          />
        </div>
        <div className="mb-4">
          <label
            for="email"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Email
          </label>
          <input
            type="email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Masukkan email anda"
            id="email"
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

        <button
          type="submit"
          className="w-full p-2 mt-4 font-semibold bg-blue-500 hover:bg-blue-400 text-gray-300 rounded"
        >
          Daftar
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;

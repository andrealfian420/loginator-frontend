import { useForm } from 'react-hook-form';

const RegisterForm = () => {
  const { register, errors, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="flex justify-center items-center xl:block">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="md:mx-4 w-full max-w-md mt-12 mb-4"
      >
        <div className="grid grid-cols-6 gap-x-2 mb-4">
          <div className="col-span-3">
            <label
              htmlFor="firstName"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Nama Depan
            </label>
            <input
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Masukkan nama depan"
              id="firstName"
              name="firstName"
              ref={register({
                required: {
                  value: true,
                  message: 'Please fill this field',
                },
                maxLength: {
                  value: 50,
                  message: 'The first name is too long',
                },
              })}
            />
            {errors.firstName && (
              <span className="text-sm font-semibold text-red-500">
                {errors.firstName.message}
              </span>
            )}
          </div>
          <div className="col-span-3">
            <label
              htmlFor="lastName"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Nama Belakang
            </label>
            <input
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Masukkan nama belakang"
              id="lastName"
              name="lastName"
              ref={register({
                required: {
                  value: true,
                  message: 'Please fill this field',
                },
                maxLength: {
                  value: 50,
                  message: 'The last name is too long',
                },
              })}
            />
            {errors.lastName && (
              <span className="text-sm font-semibold text-red-500">
                {errors.lastName.message}
              </span>
            )}
          </div>
        </div>
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Username
          </label>
          <input
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Masukkan username anda"
            id="username"
            name="userName"
            ref={register({
              required: {
                value: true,
                message: 'Please fill this field',
              },
              maxLength: {
                value: 20,
                message: 'The username is too long',
              },
            })}
          />
          {errors.userName && (
            <span className="text-sm font-semibold text-red-500">
              {errors.userName.message}
            </span>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Email
          </label>
          <input
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Masukkan email anda"
            id="email"
            name="email"
            ref={register({
              required: { value: true, message: 'Please fill this field' },
              pattern: {
                value: /^[^@]+@[^@]+\.[^@]+$/,
                message: 'Invalid email format. example: john@doe.com',
              },
            })}
          />
          {errors.email && (
            <span className="text-sm font-semibold text-red-500">
              {errors.email.message}
            </span>
          )}
        </div>
        <div className="mb-2">
          <label
            htmlFor="password"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Password
          </label>
          <input
            type="password"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Masukkan password anda"
            id="password"
            name="password"
            ref={register({
              required: { value: true, message: 'Please fill this field' },
              minLength: {
                value: 8,
                message: 'Password should contain at least 8 characters',
              },
              pattern: {
                value: /^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}$/,
                message:
                  'Password should at least have one lower case, one upper case, one of the following unique character (!@#$%^&*) and a number',
              },
            })}
          />
          {errors.password && (
            <span className="text-sm font-semibold text-red-500">
              {errors.password.message}
            </span>
          )}
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

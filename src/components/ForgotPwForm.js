import Swal from 'sweetalert2';

const ForgotPwForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    return Swal.fire({
      icon: 'info',
      title: 'Ouch!',
      text: 'Fitur ini masih dalam pengembangan, kembali lagi nanti ya!',
      confirmButtonText: 'Oke',
      allowOutsideClick: false,
    });
  };

  return (
    <div className="flex justify-center items-center xl:block">
      <form
        onSubmit={handleSubmit}
        className="md:mx-4 w-full max-w-md mt-16 xl:mt-12 mb-4"
      >
        <div className="mb-4">
          <label
            htmlFor="email"
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

        <button
          type="submit"
          className="w-full p-2 bg-blue-500 hover:bg-blue-400 font-semibold text-gray-300 rounded"
        >
          Kirim link verifikasi
        </button>
      </form>
    </div>
  );
};

export default ForgotPwForm;

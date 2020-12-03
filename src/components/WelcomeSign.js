const WelcomeSign = ({ currentPage }) => {
  if (currentPage === 'login') {
    return (
      <div className="text-center mt-8 xl:mt-20">
        <h1 className="mb-3 text-xl text-gray-600 font-semibold">
          Selamat Datang!
        </h1>
        <span className="text-gray-400">
          Silahkan isi informasi dibawah ini sebelum melanjutkan
        </span>
      </div>
    );
  } else if (currentPage === 'register') {
    return (
      <div className="text-center mt-5">
        <h1 className="mb-3 text-xl text-gray-600 font-semibold">
          Ayo bergabung!
        </h1>
        <span className="text-gray-400">
          Silahkan isi informasi dibawah ini
        </span>
      </div>
    );
  }
};

export default WelcomeSign;

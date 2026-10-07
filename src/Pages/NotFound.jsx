import { Link } from "react-router";

function NotFound() {
  return (
    <section className="min-h-[70vh] flex flex-col items-center justify-center">
      <h1 className="text-8xl font-bold">404</h1>

      <h2 className="text-2xl font-semibold mt-5">
        Halaman Tidak Ditemukan
      </h2>

      <p className="text-gray-500 mt-2">
        Halaman yang kamu cari tidak tersedia.
      </p>

      <Link
        to="/"
        className="mt-8 bg-black text-white px-6 py-3 rounded-xl"
      >
        Kembali ke Home
      </Link>
    </section>
  );
}

export default NotFound;
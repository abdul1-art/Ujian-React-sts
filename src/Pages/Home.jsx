import { Link } from "react-router";
import { faqs } from "../data/faqs";

function Home() {
  return (
    <section className="bg-zinc-50 px-8 py-10">
      <div className="mb-14">
        <p className="mb-4 text-xl text-zinc-900">Pusat Bantuan</p>

        <h1 className="text-5xl font-bold text-zinc-950">Pertanyaan Umum</h1>

        <p className="mt-5 text-xl text-zinc-500">
          Temukan jawaban dari pertanyaan yang sering ditanyakan.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {faqs.map((faq) => (
          <div
            key={faq.id}
            className="rounded-2xl border bg-white p-9 shadow-sm"
          >
            <div className="mb-9 flex h-14 w-14 items-center justify-center rounded-xl bg-zinc-200 text-xl font-semibold">
              {faq.id}
            </div>

            <h2 className="text-2xl font-semibold">{faq.title}</h2>

            <p className="mt-5 text-lg text-zinc-500">{faq.description}</p>

            <Link
              to={`/home/${faq.id}`}
              className="mt-10 inline-block text-lg font-medium text-black hover:underline"
            >
              Lihat detail
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Home;

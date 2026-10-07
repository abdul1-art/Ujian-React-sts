import { Link, useParams } from "react-router";
import { faqs } from "../data/faqs";
import NotFound from "./NotFound";

function HomeDetail() {
  const { id } = useParams();
  const faq = faqs.find((item) => item.id === Number(id));

  if (!faq) {
    return <NotFound />;
  }

  return (
    <section className="min-h-[70vh] bg-zinc-50 px-8 py-10">
      <p className="mb-4 text-xl text-zinc-900">Pusat Bantuan</p>
      <h1 className="text-4xl font-bold text-zinc-950">{faq.title}</h1>
      <p className="mt-5 max-w-3xl text-xl leading-relaxed text-zinc-600">
        {faq.answer}
      </p>
      <Link
        to="/"
        className="mt-8 inline-block text-lg font-medium text-black hover:underline"
      >
        ← Kembali ke pertanyaan umum
      </Link>
    </section>
  );
}

export default HomeDetail;
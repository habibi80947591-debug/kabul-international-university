import { Link } from "react-router-dom";

export default function About() {
  return (
    <div>
      <section className="bg-gradient-to-br from-slate-200 via-slate-100 to-white px-5 py-20 sm:py-28">
        <div className="mx-auto max-w-5xl text-center">
          <span className="rounded-full border border-slate-300 bg-white/80 px-4 py-2 text-sm font-bold text-slate-600">
            درباره ما
          </span>
          <h1 className="mt-7 text-4xl font-black leading-tight text-slate-800 sm:text-6xl">
            شناخت دانشگاه،
            <span className="block text-slate-500">شناخت فرصت‌ها</span>
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-9 text-slate-600">
            آموزش عالی می‌تواند زمینه‌ای برای رشد دانش، تقویت مهارت‌ها و
            آماده‌شدن نسل جوان برای مسئولیت‌های آینده باشد.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-2 lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-xl shadow-slate-300/30">
        <img
  src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=1200&q=85"
  alt="Modern university library"
  className="h-[360px] w-full rounded-3xl object-cover"
/>
   
        </div>

        <div>
          <p className="font-bold text-slate-500">معرفی</p>
          <h2 className="mt-3 text-3xl font-black leading-relaxed text-slate-800">
            آموزش برای رشد فرد و جامعه
          </h2>
          <p className="mt-5 leading-9 text-slate-600">
            دانشگاه بین‌المللی کابل موضوع اصلی این وب‌سایت معرفی‌شده است.
            هدف این طرح، ایجاد یک فضای دیجیتال منظم برای معرفی محیط
            دانشگاهی، برنامه‌های آموزشی و راه‌های ارتباطی است.
          </p>
          <p className="mt-4 leading-9 text-slate-600">
            برای نشر نسخه رسمی، تاریخچه، اعتبار علمی، اهداف و معلومات
            اختصاصی دانشگاه باید با منابع رسمی دانشگاه مطابقت داده شوند.
          </p>

          <Link
            to="/services"
            className="mt-7 inline-flex rounded-xl bg-slate-700 px-6 py-3 font-bold text-white transition hover:bg-slate-900"
          >
            مشاهده خدمات آموزشی ←
          </Link>
        </div>
      </section>

      <section className="bg-white px-5 py-16">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          {[
            {
              title: "چشم‌انداز",
              text: "حرکت به سوی جامعه‌ای آگاه، خلاق و برخوردار از دانش.",
              icon: "◎",
            },
            {
              title: "رسالت",
              text: "تشویق یادگیری، تحقیق و رشد توانایی‌های فردی.",
              icon: "✦",
            },
            {
              title: "ارزش‌ها",
              text: "احترام، مسئولیت‌پذیری، صداقت و تلاش برای پیشرفت.",
              icon: "◇",
            },
          ].map((item) => (
            <article
              key={item.title}
              className="rounded-3xl border border-slate-200 bg-slate-50 p-8 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="text-3xl text-slate-500">{item.icon}</span>
              <h3 className="mt-5 text-xl font-extrabold text-slate-800">
                {item.title}
              </h3>
              <p className="mt-3 leading-8 text-slate-600">{item.text}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
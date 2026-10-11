import { Link } from "react-router-dom";

const features = [
  {
    icon: "🎓",
    title: "آموزش باکیفیت",
    text: "ایجاد زمینه برای یادگیری، رشد علمی و توسعه مهارت‌های فردی.",
  },
  {
    icon: "📚",
    title: "محیط علمی",
    text: "تشویق مطالعه، تحقیق، تفکر انتقادی و یادگیری دوام‌دار.",
  },
  {
    icon: "🌐",
    title: "نگاه جهانی",
    text: "آمادگی برای فرصت‌های علمی و حرفه‌ای در دنیای امروز.",
  },
];

export default function Home() {
  return (
    <div>
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-slate-100 via-slate-200 to-slate-300">
        <div className="absolute -right-24 -top-24 -z-10 h-80 w-80 rounded-full bg-white/60 blur-3xl" />
        <div className="absolute -bottom-32 left-0 -z-10 h-96 w-96 rounded-full bg-blue-200/40 blur-3xl" />

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 md:py-28 lg:grid-cols-2 lg:px-8">
          <div className="animate-[fadeIn_.8s_ease-out]">
            <span className="inline-flex rounded-full border border-slate-300 bg-white/70 px-4 py-2 text-sm font-bold text-slate-600 shadow-sm">
              ✦ به آینده خود خوش آمدید
            </span>

            <h1 className="mt-7 text-4xl font-black leading-tight tracking-tight text-slate-800 sm:text-5xl lg:text-6xl">
              دانش امروز،
              <span className="mt-2 block text-slate-500">
                آینده روشن‌تر
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
              آموزش، نوآوری و رشد علمی را در مرکز مسیر آینده خود قرار دهید.
              برای شناخت بیشتر محیط دانشگاهی و خدمات آموزشی، صفحات ما را
              بررسی کنید.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                to="/about"
                className="rounded-2xl bg-slate-700 px-7 py-4 font-bold text-white shadow-xl shadow-slate-400/30 transition duration-300 hover:-translate-y-1 hover:bg-slate-800"
              >
                درباره دانشگاه ←
              </Link>

              <Link
                to="/contact"
                className="rounded-2xl border border-slate-400 bg-white/70 px-7 py-4 font-bold text-slate-700 transition duration-300 hover:-translate-y-1 hover:bg-white"
              >
                درخواست معلومات
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-slate-600">
              <span>✓ رشد علمی</span>
              <span>✓ مهارت‌آموزی</span>
              <span>✓ آینده‌سازی</span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-3 rounded-[2rem] bg-white/40 blur-xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/80 bg-white/60 p-3 shadow-2xl shadow-slate-400/30">
              <img
                src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=85"
                alt="نمای معماری یک ساختمان دانشگاهی"
                className="h-[340px] w-full rounded-[1.5rem] object-cover sm:h-[440px]"
              />
              <div className="absolute bottom-7 right-7 left-7 rounded-2xl border border-white/60 bg-white/90 p-5 shadow-xl backdrop-blur-md">
                <p className="text-sm font-semibold text-slate-500">
                  مسیر شما به سوی موفقیت
                </p>
                <h2 className="mt-1 text-xl font-extrabold text-slate-800">
                  یادگیری، نوآوری، پیشرفت
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="font-bold text-slate-500">چرا آموزش اهمیت دارد؟</p>
          <h2 className="mt-3 text-3xl font-black text-slate-800 sm:text-4xl">
            پایه‌های یک آینده موفق
          </h2>
          <p className="mt-4 leading-8 text-slate-500">
            یک محیط آموزشی خوب، زمینه رشد دانش، شخصیت و توانایی‌های حرفه‌ای
            را فراهم می‌سازد.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {features.map((item, index) => (
            <article
              key={item.title}
              style={{ animationDelay: `${index * 120}ms` }}
              className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-300/30"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-3xl transition group-hover:bg-slate-200">
                {item.icon}
              </div>
              <h3 className="mt-6 text-xl font-extrabold text-slate-800">
                {item.title}
              </h3>
              <p className="mt-3 leading-8 text-slate-500">{item.text}</p>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-3xl bg-slate-800 px-6 py-10 text-center text-white sm:px-12">
          <h2 className="text-2xl font-black sm:text-3xl">
            قدم بعدی خود را با آگاهی بردارید
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-8 text-slate-300">
            برای دریافت معلومات درباره برنامه‌ها و خدمات آموزشی، با ما تماس
            بگیرید.
          </p>
          <Link
            to="/contact"
            className="mt-7 inline-flex rounded-xl bg-white px-6 py-3 font-bold text-slate-800 transition hover:bg-slate-200"
          >
            تماس با ما
          </Link>
        </div>
      </section>
    </div>
  );
}
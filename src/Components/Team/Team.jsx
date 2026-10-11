import { Link } from "react-router-dom";

const groups = [
  {
    icon: "👨‍🏫",
    title: "استادان و آموزگاران",
    text: "راهنمایی علمی، انتقال دانش و تشویق محصلان به تفکر و تحقیق.",
    tag: "Academic Faculty",
  },
  {
    icon: "🎓",
    title: "محصلان",
    text: "یادگیری فعال، همکاری گروهی و مشارکت در فعالیت‌های علمی.",
    tag: "Student Community",
  },
  {
    icon: "🧭",
    title: "کارمندان و مشاوران",
    text: "راهنمایی متقاضیان و کمک به بهبود تجربه آموزشی و اداری.",
    tag: "Student Support",
  },
];

export default function Team() {
  return (
    <div>
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-300 via-slate-100 to-white px-5 py-24 text-center">
        <div className="absolute -left-16 top-0 h-60 w-60 rounded-full bg-white/70 blur-3xl" />
        <div className="relative mx-auto max-w-3xl">
          <p className="font-bold text-slate-500">جامعه دانشگاهی</p>
          <h1 className="mt-4 text-4xl font-black leading-tight text-slate-800 sm:text-6xl">
            رشد علمی با همکاری یکدیگر
          </h1>
          <p className="mt-6 text-lg leading-9 text-slate-600">
            استادان، محصلان و کارمندان با همکاری و تبادل دانش می‌توانند
            محیطی سازنده برای یادگیری و پیشرفت ایجاد کنند.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl font-black text-slate-800">
            اعضای جامعه علمی
          </h2>
          <p className="mt-3 leading-8 text-slate-500">
            آشنایی با نقش‌های مهم در یک محیط دانشگاهی.
          </p>
        </div>

        <div className="grid gap-7 md:grid-cols-3">
          {groups.map((group) => (
            <article
              key={group.title}
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-slate-300/30"
            >
              <div className="flex h-44 items-center justify-center bg-gradient-to-br from-slate-200 to-slate-100">
                <div className="flex h-24 w-24 items-center justify-center rounded-full border border-white bg-white/80 text-5xl shadow-lg transition duration-300 group-hover:scale-110">
                  {group.icon}
                </div>
              </div>

              <div className="p-7">
                <p className="text-xs font-bold tracking-widest text-slate-400">
                  {group.tag}
                </p>
                <h3 className="mt-3 text-xl font-extrabold text-slate-800">
                  {group.title}
                </h3>
                <p className="mt-3 leading-8 text-slate-500">
                  {group.text}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-3xl border border-slate-200 bg-slate-100 p-8 sm:p-10">
          <h2 className="text-2xl font-black text-slate-800">
            معرفی رسمی اعضای هیئت علمی
          </h2>
          <p className="mt-4 max-w-3xl leading-8 text-slate-600">
            در نسخه نهایی می‌توانید نام، عکس، درجه تحصیلی، تخصص و سوابق
            استادان را با استفاده از معلومات تأییدشده دانشگاه اضافه کنید.
          </p>
          <Link
            to="/contact"
            className="mt-6 inline-flex rounded-xl bg-slate-700 px-6 py-3 font-bold text-white transition hover:bg-slate-900"
          >
            ارتباط با ما
          </Link>
        </div>
      </section>
    </div>
  );
}
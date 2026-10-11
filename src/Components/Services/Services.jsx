import { Link } from "react-router-dom";

const services = [
  {
    icon: "📖",
    title: "برنامه‌های آموزشی",
    text: "معرفی رشته‌ها، نصاب‌های درسی و فرصت‌های یادگیری برای متقاضیان.",
  },
  {
    icon: "🔬",
    title: "تحقیق و پژوهش",
    text: "تشویق مطالعه علمی، جست‌وجوی منابع و توسعه تفکر انتقادی.",
  },
  {
    icon: "💻",
    title: "مهارت‌های دیجیتال",
    text: "آشنایی با تکنالوژی، ابزارهای دیجیتال و مهارت‌های مورد نیاز امروز.",
  },
  {
    icon: "📚",
    title: "منابع مطالعاتی",
    text: "معرفی کتابخانه‌ها، منابع علمی و راه‌های دسترسی به معلومات.",
  },
  {
    icon: "🤝",
    title: "راهنمایی محصلان",
    text: "ارائه معلومات درباره مراحل درخواست، شرایط پذیرش و امور محصلان.",
  },
  {
    icon: "🌱",
    title: "رشد حرفه‌ای",
    text: "توجه به مهارت‌های ارتباطی، کار گروهی و آمادگی برای بازار کار.",
  },
];

export default function Services() {
  return (
    <div>
      <section className="bg-gradient-to-br from-slate-200 to-slate-50 px-5 py-20 text-center sm:py-24">
        <p className="font-bold text-slate-500">خدمات و فرصت‌ها</p>
        <h1 className="mt-4 text-4xl font-black text-slate-800 sm:text-5xl">
          مسیر یادگیری خود را پیدا کنید
        </h1>
        <p className="mx-auto mt-5 max-w-2xl leading-9 text-slate-600">
          آشنایی با خدمات آموزشی و امکاناتی که می‌توانند مسیر رشد علمی و
          حرفه‌ای شما را بهتر سازند.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-slate-400 hover:shadow-xl hover:shadow-slate-300/30"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-100 text-3xl transition duration-300 group-hover:rotate-3 group-hover:bg-slate-200">
                {service.icon}
              </div>
              <p className="mt-6 text-xs font-bold tracking-widest text-slate-400">
                SERVICE 0{index + 1}
              </p>
              <h2 className="mt-2 text-xl font-extrabold text-slate-800">
                {service.title}
              </h2>
              <p className="mt-3 leading-8 text-slate-500">{service.text}</p>
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-6 rounded-3xl bg-slate-800 p-8 text-white sm:flex-row sm:items-center sm:p-10">
          <div>
            <h2 className="text-2xl font-black">به معلومات بیشتر نیاز دارید؟</h2>
            <p className="mt-3 leading-7 text-slate-300">
              برای پرسش درباره برنامه‌های آموزشی، درخواست معلومات کنید.
            </p>
          </div>
          <Link
            to="/contact"
            className="shrink-0 rounded-xl bg-white px-6 py-3 font-bold text-slate-800 transition hover:bg-slate-200"
          >
            تماس با ما ←
          </Link>
        </div>

        <p className="mt-6 text-sm leading-7 text-slate-500">
          توجه: این بخش‌ها نمونه‌های طراحی وب‌سایت هستند؛ خدمات و رشته‌های
          واقعی دانشگاه را مطابق معلومات رسمی آن تنظیم کنید.
        </p>
      </section>
    </div>
  );
}
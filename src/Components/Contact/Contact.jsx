import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "General Inquiry",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
    setSubmitted(false);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <div>
      <section className="bg-gradient-to-br from-slate-200 via-slate-100 to-white px-5 py-20 text-center">
        <p className="font-bold text-slate-500">ما آماده شنیدن صدای شما هستیم</p>
        <h1 className="mt-4 text-4xl font-black text-slate-800 sm:text-5xl">
          با ما در تماس شوید
        </h1>
        <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-600">
          برای دریافت معلومات درباره برنامه‌های آموزشی، پذیرش یا سایر
          پرسش‌های خود، پیام بفرستید.
        </p>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-5 lg:px-8">
        <div className="space-y-6 lg:col-span-2">
          <div>
            <h2 className="text-2xl font-black text-slate-800">
              راه‌های ارتباطی
            </h2>
            <p className="mt-3 leading-8 text-slate-500">
              برای تماس با بخش مربوطه، از اطلاعات رسمی دانشگاه استفاده کنید.
            </p>
          </div>

          {[
            {
              icon: "📍",
              title: "آدرس",
              detail: "آدرس رسمی دانشگاه را اینجا وارد کنید.",
            },
            {
              icon: "✉️",
              title: "ایمیل",
              detail: "ایمیل رسمی دانشگاه را اینجا وارد کنید.",
            },
            {
              icon: "☎️",
              title: "شماره تماس",
              detail: "شماره تماس تأییدشده را اینجا وارد کنید.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 transition hover:shadow-md"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-2xl">
                {item.icon}
              </div>
              <div>
                <h3 className="font-extrabold text-slate-800">{item.title}</h3>
                <p className="mt-1 text-sm leading-7 text-slate-500">
                  {item.detail}
                </p>
              </div>
            </div>
          ))}

          <div className="rounded-2xl bg-slate-800 p-6 text-white">
            <h3 className="text-lg font-bold">سوال یا پیشنهاد دارید؟</h3>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              پیام خود را واضح بنویسید تا موضوع درخواست شما مشخص باشد.
            </p>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-300/20 sm:p-9 lg:col-span-3">
          <h2 className="text-2xl font-black text-slate-800">
            پیام خود را بنویسید
          </h2>
          <p className="mt-2 text-sm leading-7 text-slate-500">
            خانه‌های زیر را تکمیل کنید.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-bold text-slate-700"
                >
                  نام کامل
                </label>
                <input
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="نام خود را وارد کنید"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-slate-500 focus:bg-white focus:ring-4 focus:ring-slate-100"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-bold text-slate-700"
                >
                  ایمیل
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="example@email.com"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-slate-500 focus:bg-white focus:ring-4 focus:ring-slate-100"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="subject"
                className="mb-2 block text-sm font-bold text-slate-700"
              >
                موضوع پیام
              </label>
              <select
                id="subject"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-slate-500 focus:ring-4 focus:ring-slate-100"
              >
                <option value="General Inquiry">درخواست معلومات عمومی</option>
                <option value="Admissions">پذیرش و ثبت‌نام</option>
                <option value="Academic Programs">برنامه‌های آموزشی</option>
                <option value="Other">سایر موارد</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-bold text-slate-700"
              >
                متن پیام
              </label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="پیام خود را اینجا بنویسید..."
                className="w-full resize-y rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-slate-500 focus:bg-white focus:ring-4 focus:ring-slate-100"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-slate-700 px-6 py-4 font-bold text-white shadow-lg shadow-slate-300/30 transition duration-300 hover:-translate-y-0.5 hover:bg-slate-900 sm:w-auto"
            >
              ثبت پیام ←
            </button>

            {submitted && (
              <p
                role="status"
                className="rounded-xl bg-amber-50 p-4 text-sm leading-7 text-amber-800"
              >
                معلومات فرم در همین صفحه ثبت شده است؛ برای ارسال واقعی پیام،
                باید فرم به یک سرویس یا Backend متصل شود.
              </p>
            )}
          </form>
        </div>
      </section>
    </div>
  );
}
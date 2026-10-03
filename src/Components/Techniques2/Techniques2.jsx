import React from "react";

export default function Techniques2() {
  return (
    <>
      <main className="flex-grow pt-20">
        <article className="bg-[#0a0a0a] min-h-screen">
          <div className="relative h-[60vh] min-h-[500px] overflow-hidden">
            <img
              alt="قواعد التكوين الفوتوغرافي: كيف تجعل صورك أكثر جاذبية"
              className="absolute inset-0 w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=800&h=400&fit=crop"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/30 to-transparent" />
            <div className="absolute top-8 right-8 left-8">
              <nav className="inline-flex items-center gap-2 px-4 py-2 bg-black/30 backdrop-blur-md rounded-full text-sm border border-white/10">
                <a
                  className="text-white/70 hover:text-white transition-colors"
                  href="/"
                  data-discover="true"
                >
                  <i className="fa-solid fa-home" />
                </a>
                <i className="fa-solid fa-chevron-left text-white/30 text-xs" />
                <a
                  className="text-white/70 hover:text-white transition-colors"
                  href="/blog"
                  data-discover="true"
                >
                  المدونة
                </a>
                <i className="fa-solid fa-chevron-left text-white/30 text-xs" />
                <span className="text-orange-400 font-medium truncate max-w-[200px]">
                  تقنيات
                </span>
              </nav>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
              <div className="max-w-5xl mx-auto">
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <a
                    className="px-4 py-2 bg-orange-500 text-white text-sm font-bold rounded-full hover:bg-orange-600 transition-colors"
                    href="/blog?category=تقنيات"
                    data-discover="true"
                  >
                    تقنيات
                  </a>
                  <div className="flex items-center gap-4 text-white/70 text-sm">
                    <span className="flex items-center gap-2">
                      <i className="fa-regular fa-calendar" />٥ يناير ٢٠٢٦
                    </span>
                    <span className="flex items-center gap-2">
                      <i className="fa-regular fa-clock" />9 دقائق للقراءة
                    </span>
                  </div>
                </div>
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight max-w-4xl">
                  قواعد التكوين الفوتوغرافي: كيف تجعل صورك أكثر جاذبية
                </h1>
                <div className="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 w-fit">
                  <img
                    alt="ليث محمود"
                    className="w-14 h-14 rounded-full object-cover ring-2 ring-orange-500/50"
                    src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face"
                  />
                  <div>
                    <p className="font-bold text-white">ليث محمود</p>
                    <p className="text-sm text-white/60">فنان بصري</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid lg:grid-cols-[1fr_300px] gap-12">
              <div className="order-2 lg:order-1">
                <div className="p-6 bg-gradient-to-r from-orange-500/10 to-yellow-500/5 rounded-2xl border border-orange-500/20 mb-10">
                  <p className="text-lg text-neutral-200 leading-relaxed italic">
                    "تعلم قواعد التكوين الأساسية التي يستخدمها المصورون
                    المحترفون لإنشاء صور مؤثرة بصرياً."
                  </p>
                </div>
                <div className="prose-custom">
                  <p className="text-neutral-300 leading-relaxed mb-6 text-lg">
                    التكوين هو الفرق بين صورة عادية وصورة استثنائية. إنه كيفية
                    ترتيب العناصر داخل الإطار لتوجيه عين المشاهد وإيصال رسالتك.
                  </p>
                  <h2
                    id="section-0"
                    className="text-2xl md:text-3xl font-bold text-white mt-14 mb-6 flex items-center gap-4 scroll-mt-24"
                  >
                    <span className="flex items-center justify-center w-10 h-10 bg-orange-500/10 rounded-xl border border-orange-500/30">
                      <i className="fa-solid fa-camera text-orange-500" />
                    </span>
                    قاعدة الأثلاث
                  </h2>
                  <p className="text-neutral-300 leading-relaxed mb-6 text-lg">
                    قسّم الإطار إلى تسعة أجزاء متساوية بخطين أفقيين وعموديين. ضع
                    العناصر المهمة على هذه الخطوط أو تقاطعاتها للحصول على توازن
                    بصري جذاب.
                  </p>
                  <h2
                    id="section-1"
                    className="text-2xl md:text-3xl font-bold text-white mt-14 mb-6 flex items-center gap-4 scroll-mt-24"
                  >
                    <span className="flex items-center justify-center w-10 h-10 bg-orange-500/10 rounded-xl border border-orange-500/30">
                      <i className="fa-solid fa-camera text-orange-500" />
                    </span>
                    الخطوط التوجيهية
                  </h2>
                  <p className="text-neutral-300 leading-relaxed mb-6 text-lg">
                    استخدم الخطوط الطبيعية في المشهد - طريق، نهر، سور - لقيادة
                    عين المشاهد نحو الموضوع الرئيسي.
                  </p>
                  <h2
                    id="section-2"
                    className="text-2xl md:text-3xl font-bold text-white mt-14 mb-6 flex items-center gap-4 scroll-mt-24"
                  >
                    <span className="flex items-center justify-center w-10 h-10 bg-orange-500/10 rounded-xl border border-orange-500/30">
                      <i className="fa-solid fa-camera text-orange-500" />
                    </span>
                    الإطار داخل الإطار
                  </h2>
                  <p className="text-neutral-300 leading-relaxed mb-6 text-lg">
                    استخدم عناصر في المقدمة كإطار طبيعي: باب، نافذة، أغصان شجرة.
                    هذا يضيف عمقاً ويركز الانتباه.
                  </p>
                  <h2
                    id="section-3"
                    className="text-2xl md:text-3xl font-bold text-white mt-14 mb-6 flex items-center gap-4 scroll-mt-24"
                  >
                    <span className="flex items-center justify-center w-10 h-10 bg-orange-500/10 rounded-xl border border-orange-500/30">
                      <i className="fa-solid fa-camera text-orange-500" />
                    </span>
                    التماثل والأنماط
                  </h2>
                  <p className="text-neutral-300 leading-relaxed mb-6 text-lg">
                    التماثل يخلق شعوراً بالهدوء والتوازن. الأنماط المتكررة تجذب
                    العين. كسر النمط يخلق نقطة اهتمام قوية.
                  </p>
                  <h2
                    id="section-4"
                    className="text-2xl md:text-3xl font-bold text-white mt-14 mb-6 flex items-center gap-4 scroll-mt-24"
                  >
                    <span className="flex items-center justify-center w-10 h-10 bg-orange-500/10 rounded-xl border border-orange-500/30">
                      <i className="fa-solid fa-camera text-orange-500" />
                    </span>
                    المساحة السلبية
                  </h2>
                  <p className="text-neutral-300 leading-relaxed mb-6 text-lg">
                    لا تخف من الفراغ. المساحة الفارغة حول الموضوع يمكن أن تكون
                    قوية بنفس قوة الموضوع نفسه.
                  </p>
                  <h2
                    id="section-5"
                    className="text-2xl md:text-3xl font-bold text-white mt-14 mb-6 flex items-center gap-4 scroll-mt-24"
                  >
                    <span className="flex items-center justify-center w-10 h-10 bg-orange-500/10 rounded-xl border border-orange-500/30">
                      <i className="fa-solid fa-camera text-orange-500" />
                    </span>
                    كسر القواعد
                  </h2>
                  <p className="text-neutral-300 leading-relaxed mb-6 text-lg">
                    اعرف القواعد جيداً، ثم اكسرها بوعي. أحياناً الصورة غير
                    التقليدية هي الأقوى تأثيراً.
                  </p>
                  <h2
                    id="section-6"
                    className="text-2xl md:text-3xl font-bold text-white mt-14 mb-6 flex items-center gap-4 scroll-mt-24"
                  >
                    <span className="flex items-center justify-center w-10 h-10 bg-orange-500/10 rounded-xl border border-orange-500/30">
                      <i className="fa-solid fa-camera text-orange-500" />
                    </span>
                    الخلاصة
                  </h2>
                  <p className="text-neutral-300 leading-relaxed mb-6 text-lg">
                    التكوين مهارة تتطور مع الممارسة. صوّر كثيراً، ادرس أعمال
                    المصورين العظماء، وطور عينك الفنية.
                  </p>
                </div>
                <div className="mt-14 p-6 bg-[#111111] rounded-2xl border border-[#262626]">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-orange-500/10 rounded-xl flex items-center justify-center border border-orange-500/30">
                      <i className="fa-solid fa-tags text-orange-500" />
                    </div>
                    <h3 className="font-bold text-white">الوسوم</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-4 py-2 bg-[#1a1a1a] text-neutral-400 text-sm rounded-full border border-[#262626] hover:border-orange-500/50 hover:text-orange-500 transition-colors cursor-pointer">
                      #تكوين
                    </span>
                    <span className="px-4 py-2 bg-[#1a1a1a] text-neutral-400 text-sm rounded-full border border-[#262626] hover:border-orange-500/50 hover:text-orange-500 transition-colors cursor-pointer">
                      #قواعد التصوير
                    </span>
                    <span className="px-4 py-2 bg-[#1a1a1a] text-neutral-400 text-sm rounded-full border border-[#262626] hover:border-orange-500/50 hover:text-orange-500 transition-colors cursor-pointer">
                      #فن
                    </span>
                  </div>
                </div>
                <div className="mt-6 p-6 bg-[#111111] rounded-2xl border border-[#262626]">
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-orange-500/10 rounded-xl flex items-center justify-center border border-orange-500/30">
                        <i className="fa-solid fa-share-nodes text-orange-500" />
                      </div>
                      <h3 className="font-bold text-white">شارك المقال</h3>
                    </div>
                    <div className="flex gap-2">
                      <button className="w-11 h-11 bg-[#1a1a1a] border border-[#262626] rounded-xl flex items-center justify-center text-neutral-400 hover:bg-[#1da1f2] hover:text-white hover:border-transparent transition-all duration-300">
                        <i className="fa-brands fa-x-twitter" />
                      </button>
                      <button className="w-11 h-11 bg-[#1a1a1a] border border-[#262626] rounded-xl flex items-center justify-center text-neutral-400 hover:bg-[#0077b5] hover:text-white hover:border-transparent transition-all duration-300">
                        <i className="fa-brands fa-linkedin-in" />
                      </button>
                      <button className="w-11 h-11 bg-[#1a1a1a] border border-[#262626] rounded-xl flex items-center justify-center text-neutral-400 hover:bg-[#25d366] hover:text-white hover:border-transparent transition-all duration-300">
                        <i className="fa-brands fa-whatsapp" />
                      </button>
                      <button className="w-11 h-11 bg-[#1a1a1a] border border-[#262626] rounded-xl flex items-center justify-center text-neutral-400 hover:bg-orange-500 hover:text-white hover:border-transparent transition-all duration-300">
                        <i className="fa-solid fa-link" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="mt-6 p-8 bg-gradient-to-br from-[#161616] to-[#111111] rounded-2xl border border-[#262626]">
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                    <img
                      alt="ليث محمود"
                      className="w-24 h-24 rounded-2xl object-cover ring-4 ring-orange-500/20"
                      src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face"
                    />
                    <div className="text-center sm:text-right flex-1">
                      <span className="text-xs text-orange-500 font-semibold uppercase tracking-wider">
                        كاتب المقال
                      </span>
                      <h3 className="text-xl font-bold text-white mt-1">
                        ليث محمود
                      </h3>
                      <p className="text-neutral-500 text-sm mb-3">فنان بصري</p>
                      <p className="text-neutral-400 text-sm leading-relaxed">
                        مصور محترف شغوف بمشاركة المعرفة والخبرات في عالم التصوير
                        الفوتوغرافي.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <aside className="order-1 lg:order-2">
                <div className="lg:sticky lg:top-24 space-y-6">
                  <div className="p-6 bg-[#111111] rounded-2xl border border-[#262626]">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-10 h-10 bg-orange-500/10 rounded-xl flex items-center justify-center border border-orange-500/30">
                        <i className="fa-solid fa-list text-orange-500" />
                      </div>
                      <h3 className="font-bold text-white">محتويات المقال</h3>
                    </div>
                    <nav className="space-y-2">
                      <a
                        href="#section-0"
                        className="flex items-center gap-3 p-3 rounded-xl text-neutral-400 hover:text-orange-500 hover:bg-orange-500/5 transition-all duration-300 group"
                      >
                        <span className="flex items-center justify-center w-6 h-6 bg-[#1a1a1a] rounded-lg text-xs font-bold text-neutral-500 group-hover:bg-orange-500/10 group-hover:text-orange-500 transition-colors">
                          1
                        </span>
                        <span className="text-sm">قاعدة الأثلاث</span>
                      </a>
                      <a
                        href="#section-1"
                        className="flex items-center gap-3 p-3 rounded-xl text-neutral-400 hover:text-orange-500 hover:bg-orange-500/5 transition-all duration-300 group"
                      >
                        <span className="flex items-center justify-center w-6 h-6 bg-[#1a1a1a] rounded-lg text-xs font-bold text-neutral-500 group-hover:bg-orange-500/10 group-hover:text-orange-500 transition-colors">
                          2
                        </span>
                        <span className="text-sm">الخطوط التوجيهية</span>
                      </a>
                      <a
                        href="#section-2"
                        className="flex items-center gap-3 p-3 rounded-xl text-neutral-400 hover:text-orange-500 hover:bg-orange-500/5 transition-all duration-300 group"
                      >
                        <span className="flex items-center justify-center w-6 h-6 bg-[#1a1a1a] rounded-lg text-xs font-bold text-neutral-500 group-hover:bg-orange-500/10 group-hover:text-orange-500 transition-colors">
                          3
                        </span>
                        <span className="text-sm">الإطار داخل الإطار</span>
                      </a>
                      <a
                        href="#section-3"
                        className="flex items-center gap-3 p-3 rounded-xl text-neutral-400 hover:text-orange-500 hover:bg-orange-500/5 transition-all duration-300 group"
                      >
                        <span className="flex items-center justify-center w-6 h-6 bg-[#1a1a1a] rounded-lg text-xs font-bold text-neutral-500 group-hover:bg-orange-500/10 group-hover:text-orange-500 transition-colors">
                          4
                        </span>
                        <span className="text-sm">التماثل والأنماط</span>
                      </a>
                      <a
                        href="#section-4"
                        className="flex items-center gap-3 p-3 rounded-xl text-neutral-400 hover:text-orange-500 hover:bg-orange-500/5 transition-all duration-300 group"
                      >
                        <span className="flex items-center justify-center w-6 h-6 bg-[#1a1a1a] rounded-lg text-xs font-bold text-neutral-500 group-hover:bg-orange-500/10 group-hover:text-orange-500 transition-colors">
                          5
                        </span>
                        <span className="text-sm">المساحة السلبية</span>
                      </a>
                      <a
                        href="#section-5"
                        className="flex items-center gap-3 p-3 rounded-xl text-neutral-400 hover:text-orange-500 hover:bg-orange-500/5 transition-all duration-300 group"
                      >
                        <span className="flex items-center justify-center w-6 h-6 bg-[#1a1a1a] rounded-lg text-xs font-bold text-neutral-500 group-hover:bg-orange-500/10 group-hover:text-orange-500 transition-colors">
                          6
                        </span>
                        <span className="text-sm">كسر القواعد</span>
                      </a>
                      <a
                        href="#section-6"
                        className="flex items-center gap-3 p-3 rounded-xl text-neutral-400 hover:text-orange-500 hover:bg-orange-500/5 transition-all duration-300 group"
                      >
                        <span className="flex items-center justify-center w-6 h-6 bg-[#1a1a1a] rounded-lg text-xs font-bold text-neutral-500 group-hover:bg-orange-500/10 group-hover:text-orange-500 transition-colors">
                          7
                        </span>
                        <span className="text-sm">الخلاصة</span>
                      </a>
                    </nav>
                  </div>
                  <div className="p-6 bg-[#111111] rounded-2xl border border-[#262626]">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 bg-[#0a0a0a] rounded-xl">
                        <i className="fa-regular fa-clock text-orange-500 text-xl mb-2" />
                        <p className="text-white font-bold">9 دقائق للقراءة</p>
                        <p className="text-neutral-500 text-xs">وقت القراءة</p>
                      </div>
                      <div className="text-center p-4 bg-[#0a0a0a] rounded-xl">
                        <i className="fa-regular fa-calendar text-orange-500 text-xl mb-2" />
                        <p className="text-white font-bold text-sm">٥ يناير</p>
                        <p className="text-neutral-500 text-xs">تاريخ النشر</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 bg-gradient-to-br from-orange-500/10 to-yellow-500/5 rounded-2xl border border-orange-500/20">
                    <div className="text-center">
                      <div className="w-14 h-14 bg-orange-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <i className="fa-solid fa-envelope text-orange-500 text-xl" />
                      </div>
                      <h3 className="font-bold text-white mb-2">
                        لا تفوّت جديدنا
                      </h3>
                      <p className="text-neutral-400 text-sm mb-4">
                        اشترك للحصول على أحدث المقالات
                      </p>
                      <a
                        className="block w-full py-3 bg-orange-500 text-white font-semibold rounded-xl hover:bg-orange-600 transition-colors text-center"
                        href="/blog"
                        data-discover="true"
                      >
                        تصفح المزيد
                      </a>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
            <div className="mt-20 pt-12 border-t border-[#262626]">
              <div className="flex items-center justify-between mb-10">
                <div className="flex items-center gap-4">
                  <span className="w-12 h-12 bg-orange-500/10 rounded-2xl flex items-center justify-center border border-orange-500/30">
                    <i className="fa-solid fa-images text-orange-500 text-xl" />
                  </span>
                  <div>
                    <h2 className="text-2xl font-bold text-white">
                      مقالات قد تعجبك
                    </h2>
                    <p className="text-neutral-500 text-sm">
                      استكشف المزيد من المحتوى المميز
                    </p>
                  </div>
                </div>
                <a
                  className="hidden sm:flex items-center gap-2 text-orange-500 hover:text-orange-400 transition-colors group"
                  href="/blog"
                  data-discover="true"
                >
                  عرض الكل
                  <i className="fa-solid fa-arrow-left group-hover:-translate-x-1 transition-transform" />
                </a>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <a
                  className="group relative bg-[#111111] rounded-2xl overflow-hidden border border-[#262626] hover:border-orange-500/30 transition-all duration-500"
                  href="/blog/camera-settings-basics"
                  data-discover="true"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      alt="أساسيات إعدادات الكاميرا: مثلث التعريض الضوئي"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&h=400&fit=crop"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111111] to-transparent" />
                    <span className="absolute top-4 right-4 px-3 py-1 bg-orange-500 text-white text-xs font-bold rounded-full">
                      تقنيات
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-white group-hover:text-orange-500 transition-colors line-clamp-2 mb-3">
                      أساسيات إعدادات الكاميرا: مثلث التعريض الضوئي
                    </h3>
                    <div className="flex items-center justify-between text-sm text-neutral-500">
                      <span className="flex items-center gap-2">
                        <img
                          alt="داود خالد"
                          className="w-6 h-6 rounded-full"
                          src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face"
                        />
                        داود خالد
                      </span>
                      <span>7 دقائق للقراءة</span>
                    </div>
                  </div>
                </a>
                <a
                  className="group relative bg-[#111111] rounded-2xl overflow-hidden border border-[#262626] hover:border-orange-500/30 transition-all duration-500"
                  href="/blog/food-photography-basics"
                  data-discover="true"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      alt="تصوير الطعام: كيف تجعل أطباقك تبدو شهية"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      src="https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=800&h=400&fit=crop"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111111] to-transparent" />
                    <span className="absolute top-4 right-4 px-3 py-1 bg-orange-500 text-white text-xs font-bold rounded-full">
                      تقنيات
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-white group-hover:text-orange-500 transition-colors line-clamp-2 mb-3">
                      تصوير الطعام: كيف تجعل أطباقك تبدو شهية
                    </h3>
                    <div className="flex items-center justify-between text-sm text-neutral-500">
                      <span className="flex items-center gap-2">
                        <img
                          alt="هاني الشمري"
                          className="w-6 h-6 rounded-full"
                          src="https://images.unsplash.com/photo-1552058544-f2b08422138a?w=100&h=100&fit=crop&crop=face"
                        />
                        هاني الشمري
                      </span>
                      <span>8 دقائق للقراءة</span>
                    </div>
                  </div>
                </a>
                <a
                  className="group relative bg-[#111111] rounded-2xl overflow-hidden border border-[#262626] hover:border-orange-500/30 transition-all duration-500"
                  href="/blog/black-white-photography"
                  data-discover="true"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      alt="التصوير بالأبيض والأسود: فن الضوء والظل"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      src="https://images.unsplash.com/photo-1533134486753-c833f0ed4866?w=800&h=400&fit=crop"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111111] to-transparent" />
                    <span className="absolute top-4 right-4 px-3 py-1 bg-orange-500 text-white text-xs font-bold rounded-full">
                      تقنيات
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-white group-hover:text-orange-500 transition-colors line-clamp-2 mb-3">
                      التصوير بالأبيض والأسود: فن الضوء والظل
                    </h3>
                    <div className="flex items-center justify-between text-sm text-neutral-500">
                      <span className="flex items-center gap-2">
                        <img
                          alt="فارس العلي"
                          className="w-6 h-6 rounded-full"
                          src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=100&h=100&fit=crop&crop=face"
                        />
                        فارس العلي
                      </span>
                      <span>9 دقائق للقراءة</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </article>
      </main>
    </>
  );
}

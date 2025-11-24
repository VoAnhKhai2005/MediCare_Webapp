import React from "react";

const Contact = () => {
  const address = `02 Võ Oanh, Phường 25, Bình Thạnh, Thành phố Hồ Chí Minh (Trường Đại Học Giao Thông Vận Tải Thành Phố Hồ Chí Minh - Cơ sở 1)`;
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;
  return (
    <section>
      <div className="px-4 mx-auto max-w-screen-md ">
        {/* Google Map Embed - now above heading */}
        <div className="mb-12">
          <h3 className="text-[20px] font-[700] text-headingColor mb-4 text-center">Vị trí của chúng tôi</h3>
          <div className="w-full rounded-lg overflow-hidden shadow-md">
            <div className="w-full h-[320px] sm:h-[420px] md:h-[520px]">
              <iframe
                title="Vị trí - Đại Học Giao Thông Vận Tải TP.HCM - Cơ sở 1"
                src={mapSrc}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
        <h2 className="heading text-center">Liên hệ với chúng tôi</h2>
        <p className="mb-8 lg:mb-16 font-light text-center text__para">
          Gặp sự cố kỹ thuật? Muốn gửi phản hồi? Hãy cho chúng tôi biết.
        </p>
        <form action="#" className="space-y-8">
          <div>
            <label
              htmlFor="email"
              className="form__label text-textColor font-semibold text-[16px] leading-7 mb-2"
            >
              Email của bạn
            </label>
            <input
              type="email"
              id="email"
              placeholder="example@gmail.com"
              className="form_input mt-1 w-full px-4 py-3 border border-solid border-[#0066ff61] focus:outline-none 
             focus:border-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor 
                cursor-pointer rounded-md"
            />
          </div>

          <div>
            <label
              htmlFor="Subject"
              className="form__label text-textColor font-semibold text-[16px] leading-7 mb-2"
            >
              Vấn đề bạn gặp phải
            </label>
            <input
              type="text"
              id="Subject"
              placeholder="Cho chúng tôi biết chúng tôi có thể giúp bạn như thế nào"
              className="form_input mt-1 w-full px-4 py-3 border border-solid border-[#0066ff61] focus:outline-none 
             focus:border-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor 
                cursor-pointer rounded-md"
            />
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="form__label text-textColor font-semibold text-[16px] leading-7 mb-2"
            >
              Lời nhắn của bạn
            </label>
            <textarea
              rows="6"
              type="text"
              id="message"
              className="form_input mt-1 w-full px-4 py-3 border border-solid border-[#0066ff61] focus:outline-none 
             focus:border-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor 
                cursor-pointer rounded-md"
            />
          </div>
          <button type="submit" className="btn rounded sm:w-fit ">
            Gửi phản hồi
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

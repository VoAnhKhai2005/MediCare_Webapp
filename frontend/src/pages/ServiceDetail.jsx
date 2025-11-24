import { useParams, Link } from "react-router-dom";
import { services } from "../assets/data/services";
import { BsArrowRight, BsCheckCircle } from "react-icons/bs";
import { useState, useEffect } from "react";
import { BASE_URL } from "../config";

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);
  const [doctors, setDoctors] = useState([]);
  const [loadingDoctors, setLoadingDoctors] = useState(false);

  // Fetch doctors from backend
  useEffect(() => {
    const fetchDoctors = async () => {
      setLoadingDoctors(true);
      try {
        const response = await fetch(`${BASE_URL}/doctors`);
        const data = await response.json();
        if (data.success) {
          setDoctors(data.data);
        }
      } catch (error) {
        console.error("Lỗi khi tải danh sách bác sĩ:", error);
      } finally {
        setLoadingDoctors(false);
      }
    };

    fetchDoctors();
  }, []);

  if (!service) {
    return (
      <section className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-[24px] font-[700] text-headingColor mb-4">
            Không tìm thấy dịch vụ
          </h2>
          <Link to="/services" className="text-primaryColor hover:underline">
            ← Quay lại danh sách dịch vụ
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white">
      {/* ================= HEADER SECTION ================= */}
      <div
        className="w-full py-12 px-6 rounded-xl"
        style={{ background: `${service.bgColor}` }}
      >
        <div className="max-w-[1170px] mx-auto">
          <Link
            to="/services"
            className="text-gray-600 text-sm flex items-center mb-4 hover:text-gray-800"
          >
            ← Quay lại danh sách dịch vụ
          </Link>

          <div className="flex items-start gap-6">
            <div
              className="min-w-[80px] w-[80px] h-[80px] rounded-3xl flex items-center justify-center flex-shrink-0"
              style={{
                background: `${service.textColor}20`,
              }}
            >
              {/* ICON IMG */}
              <img
                src={service.icon}
                alt={service.name}
                className="w-12 h-12 object-contain"
              />
            </div>

            <div>
              <h1 className="text-[32px] lg:text-[42px] font-[700] text-[#181A1E] mb-2">
                {service.name}
              </h1>

              <p className="text-gray-600 text-[14px] lg:text-[16px] leading-7 max-w-2xl">
                {service.desc}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ================= MAIN CONTENT ================= */}
      <div className="max-w-[1170px] mx-auto px-5 mt-12 mb-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* LEFT COLUMN */}
          <div className="lg:col-span-2">
            {/* INTRODUCTION */}
            <div className="p-8 bg-white rounded-2xl shadow-md mb-8">
              <h2 className="text-[24px] font-[700] text-headingColor mb-4">
                Giới thiệu
              </h2>

              <p className="text-gray-600 text-[15px] leading-7 mb-4">
                {service.introduction}
              </p>

              <p className="text-gray-600 text-[15px] leading-7">
                Chúng tôi cam kết mang lại dịch vụ y tế chất lượng cao, với sự
                tận tâm và chuyên nghiệp.
              </p>
            </div>

            {/* BENEFITS */}
            <div className="p-8 bg-white rounded-2xl shadow-md">
              <h2 className="text-[24px] font-[700] text-headingColor mb-6">
                Dịch vụ chính
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.benefits.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <BsCheckCircle
                      className="w-6 h-6 flex-shrink-0 mt-0.5"
                      style={{ color: `${service.textColor}99` }}
                    />
                    <p className="text-gray-600 text-[14px] leading-6">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN – BOOKING CARD */}
          <div>
            <div
              className="p-8 rounded-2xl text-[#181A1E] sticky top-24"
              style={{
                background: `linear-gradient(135deg, ${service.textColor}30, ${service.textColor}10)`,
              }}
            >
              <h3 className="text-[24px] font-[700] mb-3">Đặt lịch khám</h3>

              <p className="text-sm opacity-80 mb-6 leading-6">
                Liên hệ với chúng tôi để được tư vấn và đặt lịch khám với các
                chuyên gia hàng đầu.
              </p>

              <Link to="/doctors">
                <button
                  className="w-full py-3 bg-white text-center rounded-full font-[600] border border-gray-300 hover:shadow-lg transition"
                  style={{ color: "#181A1E" }}
                >
                  Đặt lịch ngay
                </button>
              </Link>

              <div className="mt-6 space-y-3 border-t border-gray-300 pt-6">
                <div className="flex items-center gap-3">
                  <span className="text-xl">📞</span>
                  <span className="text-sm">1900 1234</span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-xl">✉️</span>
                  <span className="text-sm">info@medicare.vn</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SPECIALISTS SECTION */}
        <div className="mt-14">
          <h2 className="text-[28px] font-[700] text-headingColor mb-8 text-center">
            Đội ngũ chuyên gia
          </h2>

          <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
            Chúng tôi tự hào sở hữu đội ngũ bác sĩ và chuyên gia giàu kinh
            nghiệm, tận tâm và luôn đặt sức khỏe bệnh nhân lên hàng đầu.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {loadingDoctors ? (
              <div className="col-span-full text-center py-12">
                <p className="text-gray-600">Đang tải danh sách bác sĩ...</p>
              </div>
            ) : doctors.length > 0 ? (
              doctors.map((doc) => (
                <div
                  key={doc._id}
                  className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition"
                >
                  {/* Avatar */}
                  <div
                    className="w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4"
                    style={{ background: `${service.textColor}20` }}
                  >
                    <div className="w-14 h-14 rounded-full bg-[#181A1E] flex items-center justify-center text-white font-[700] text-lg">
                      {doc.name.charAt(0)}
                    </div>
                  </div>

                  <div className="text-center">
                    <h3 className="text-[18px] font-[700] text-headingColor mb-1">
                      {doc.name}
                    </h3>
                    <p className="text-sm text-gray-700 font-[600]">Bác sĩ</p>
                    <p className="text-gray-500 text-[13px] mb-3">
                      {doc.specialization || "Chuyên gia"}
                    </p>

                    <div className="text-xs text-gray-500">
                      ⭐ {doc.averageRating?.toFixed(1) || "0"} (
                      {doc.totalRating || "0"} đánh giá)
                    </div>
                  </div>

                  <Link to={`/doctors/${doc._id}`}>
                    <button className="w-full mt-4 py-2 rounded-lg font-[600] text-sm border border-gray-300 hover:bg-gray-100 transition">
                      Xem hồ sơ
                    </button>
                  </Link>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-gray-600">Không có bác sĩ nào</p>
              </div>
            )}
          </div>
        </div>

        {/* CTA SECTION */}
        <div
          className="mt-16 p-12 rounded-3xl text-center text-white"
          style={{
            background: `linear-gradient(135deg, ${service.textColor}CC, ${service.textColor}99)`,
          }}
        >
          <h2 className="text-[28px] font-[700] mb-4">Bạn có câu hỏi?</h2>

          <p className="opacity-90 mb-8 max-w-2xl mx-auto">
            Đội ngũ hỗ trợ khách hàng luôn sẵn sàng giúp bạn giải đáp mọi thắc
            mắc.
          </p>

          <Link to="/contact">
            <button
              className="px-8 py-3 bg-white rounded-full font-[600] inline-flex items-center gap-2 hover:shadow-lg transition"
              style={{ color: "#181A1E" }}
            >
              Liên hệ ngay <BsArrowRight />
            </button>
          </Link>
        </div>
      </div>

      {/* FOOTER BACK-LINK */}
      <div className="bg-gray-50 py-8 mt-12">
        <div className="max-w-[1170px] mx-auto px-5 text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-primaryColor font-[600] hover:gap-3 transition-all"
          >
            ← Quay lại danh sách dịch vụ
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetail;

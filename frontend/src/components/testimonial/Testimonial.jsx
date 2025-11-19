import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import patientAvatar from "../../assets/images/patient-avatar.png";
import patientAvatar1 from "../../assets/images/patient-avatar1.jpg";
import patientAvatar2 from "../../assets/images/patient-avatar2.jpg";
import patientAvatar3 from "../../assets/images/patient-avatar3.png";
import { HiStar } from "react-icons/hi";

const Testimonial = () => {
  return (
    <div className="mt-[30px] lg:mt-[55px]">
      <Swiper
        modules={[Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-3">
            <div className="flex items-center gap-[13px]">
              {/* Đã thêm: w-14 h-14 rounded-full object-cover */}
              <img
                src={patientAvatar}
                alt="Ảnh đại diện bệnh nhân"
                className="w-14 h-14 rounded-full object-cover"
              />
              <div>
                <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                  Nguyễn Văn An
                </h4>
                <div className="flex items-center gap-[2px]">
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                </div>
              </div>
            </div>
            <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
              "Tôi đã sử dụng dịch vụ y tế của họ. Họ điều trị rất tốt và họ
              đang cung cấp những dịch vụ y tế tốt nhất."
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-3">
            <div className="flex items-center gap-[13px]">
              <img
                src={patientAvatar1}
                alt="Ảnh đại diện bệnh nhân"
                className="w-14 h-14 rounded-full object-cover"
              />
              <div>
                <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                  Lê Văn Cường
                </h4>
                <div className="flex items-center gap-[2px]">
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                </div>
              </div>
            </div>
            <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
              "Tôi rất hài lòng với sự chăm sóc và chuyên môn của đội ngũ bác
              sĩ. Đây là nơi tôi tin tưởng để chăm sóc sức khỏe."
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-3">
            <div className="flex items-center gap-[13px]">
              <img
                src={patientAvatar2}
                alt="Ảnh đại diện bệnh nhân"
                className="w-14 h-14 rounded-full object-cover"
              />
              <div>
                <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                  Trần Thị Bình
                </h4>
                <div className="flex items-center gap-[2px]">
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                </div>
              </div>
            </div>
            <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
              "Dịch vụ nhanh chóng, nhân viên thân thiện và các chuyên gia có
              kinh nghiệm. Tôi hoàn toàn giới thiệu dịch vụ này cho mọi người."
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-3">
            <div className="flex items-center gap-[13px]">
              <img
                src={patientAvatar3}
                alt="Ảnh đại diện bệnh nhân"
                className="w-14 h-14 rounded-full object-cover"
              />
              <div>
                <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                  Phạm Thu Duyên
                </h4>
                <div className="flex items-center gap-[2px]">
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                </div>
              </div>
            </div>
            <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
              "Kinh nghiệm khám bệnh tuyệt vời! Mọi thứ đều được giải thích rõ
              ràng và tôi cảm thấy rất thoải mái trong suốt quá trình."
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
export default Testimonial;

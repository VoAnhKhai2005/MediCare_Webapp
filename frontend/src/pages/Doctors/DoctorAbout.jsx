import { formateDate } from "../../utils/formateDate";

const DoctorAbout = () => {
  return (
    <div>
      <div>
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2">
          Thông tin về
          <span className="text-irisBlueColor font-bold text-[24px] leading-9">
            BS. Đỗ Nam Sơn
          </span>
        </h3>
        <p className="text__para">
          Tiến sĩ, Bác sĩ chuyên khoa cấp II, với hơn 15 năm kinh nghiệm
          trong lĩnh vực thần kinh học và đột quỵ. Chuyên tư vấn và điều trị
          chuyên sâu về các bệnh lý thoái hóa thần kinh (như Parkinson,
          Alzheimer), rối loạn vận động, đau đầu mãn tính, và phục hồi chức năng
          sau đột quỵ. Đã từng công tác tại các bệnh viện hàng đầu trong nước.
        </p>
      </div>

      <div className="mt-12">
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">
          Học vấn
        </h3>

        <ul className="pt-4 md:p-5">
          <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
            <div>
              <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                {formateDate("09-01-2000")} - {formateDate("06-05-2006")}
              </span>
              <p className="text-[16px] leading-6 font-medium text-textColor">
                Bác sĩ Đa khoa
              </p>
            </div>
            <p className="text-[14px] leading-5 font-medium text-textColor">
              Đại học Y Dược TP. Hồ Chí Minh.
            </p>
          </li>
          <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
            <div>
              <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                {formateDate("10-09-2010")} - {formateDate("12-12-2012")}
              </span>
              <p className="text-[16px] leading-6 font-medium text-textColor">
                Thạc sĩ Chuyên ngành Thần kinh
              </p>
            </div>
            <p className="text-[14px] leading-5 font-medium text-textColor">
              Đại học Y Hà Nội.
            </p>
          </li>
          <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
            <div>
              <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                {formateDate("01-03-2015")} - {formateDate("08-10-2018")}
              </span>
              <p className="text-[16px] leading-6 font-medium text-textColor">
                Tiến sĩ Y học
              </p>
            </div>
            <p className="text-[14px] leading-5 font-medium text-textColor">
              Học viện Quân y.
            </p>
          </li>
        </ul>
      </div>

      <div className="mt-12">
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">
          Kinh nghiệm
        </h3>

        <ul className="grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5">
          <li className="p-4 rounded bg-[#fff9ea]">
            <span className="text-yellowColor text-[15px] leading-6 font-semibold">
              {formateDate("01-01-2007")} - {formateDate("05-08-2012")}
            </span>
            <p className="text-[16px] leading-6 font-medium text-textColor">
              Bác sĩ điều trị
            </p>
            <p className="text-[14px] leading-6 font-medium text-textColor">
              Khoa Thần kinh, Bệnh viện Chợ Rẫy.
            </p>
          </li>
          <li className="p-4 rounded bg-[#fff9ea]">
            <span className="text-yellowColor text-[15px] leading-6 font-semibold">
              {formateDate("06-09-2012")} - Hiện tại
            </span>
            <p className="text-[16px] leading-6 font-medium text-textColor">
              Trưởng khoa Thần kinh
            </p>
            <p className="text-[14px] leading-6 font-medium text-textColor">
              Bệnh viện Đại học Y Dược TP. Hồ Chí Minh.
            </p>
          </li>
          <li className="p-4 rounded bg-[#fff9ea]">
            <span className="text-yellowColor text-[15px] leading-6 font-semibold">
              {formateDate("01-01-2019")} - Hiện tại
            </span>
            <p className="text-[16px] leading-6 font-medium text-textColor">
              Giảng viên kiêm nhiệm
            </p>
            <p className="text-[14px] leading-6 font-medium text-textColor">
              Đại học Y Dược TP. Hồ Chí Minh.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DoctorAbout;
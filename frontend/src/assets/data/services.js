import cancerIcon from "../images/icons/cancer.png";
import babyIcon from "../images/icons/baby.png";
import heartIcon from "../images/icons/heart.png";
import spiritIcon from "../images/icons/spirit.png";
import brainIcon from "../images/icons/brain.png";
import burnIcon from "../images/icons/burn.png";

export const services = [
  {
    id: 1,
    name: "Điều trị ung thư",
    slug: "dieu-tri-ung-thu",
    desc: "Chăm sóc ung thư toàn diện, từ phòng thí nghiệm đến phòng khám. Tiếp cận các phác đồ điều trị tiên tiến, đội ngũ chuyên gia tận tâm và sự hỗ trợ toàn diện về thể chất lẫn tinh thần trong suốt hành trình chiến đấu với bệnh tật.",
    bgColor: "rgba(254, 182, 13, .2)",
    textColor: "#FEB60D",
    icon: cancerIcon,
    introduction: "Trung tâm điều trị ung thư của chúng tôi cung cấp dịch vụ chăm sóc toàn diện với đội ngũ chuyên gia hàng đầu. Chúng tôi sử dụng những công nghệ điều trị tiên tiến nhất và áp dụng các phương pháp điều trị hiện đại để mang lại kết quả tốt nhất cho bệnh nhân. Từ chẩn đoán sớm, lập kế hoạch điều trị cho đến chăm sóc sau điều trị, chúng tôi luôn đồng hành cùng bệnh nhân.",
    benefits: [
      "Chẩn đoán ung thư chính xác với công nghệ hình ảnh tiên tiến",
      "Phẫu thuật ung thư với độ an toàn cao",
      "Chăm sóc giảm nhẹ và hỗ trợ tâm lý",
      "Theo dõi liệu pháp và hỗ trợ sau điều trị",
      "Liệu pháp miễn dịch và điều trị dịch",
      "Theo dõi sau điều trị định hạn"
    ],
    specialists: [
      {
        id: 1,
        name: "BS. Nguyễn Văn An",
        title: "Bác sĩ Ung thư",
        experience: "15 năm kinh nghiệm",
        specialization: "Ung thư đại trực tràng"
      },
      {
        id: 2,
        name: "BS. Trần Thị Bình",
        title: "Chuyên gia Xạ trị",
        experience: "12 năm kinh nghiệm",
        specialization: "Xạ trị tuyến tỵ"
      },
      {
        id: 3,
        name: "BS. Lê Minh Cường",
        title: "Phẫu thuật viên Ung thư",
        experience: "18 năm kinh nghiệm",
        specialization: "Phẫu thuật ung thư vú"
      }
    ]
  },
  {
    id: 2,
    name: "Thai sản",
    slug: "thai-san",
    desc: "Trải nghiệm thai sản an toàn. Chúng tôi cung cấp sự chăm sóc chu đáo từ giai đoạn tiền sản, theo dõi sát sao quá trình chuyển dạ, đến hỗ trợ sinh nở với sự hỗ trợ của đội ngũ chuyên gia sản khoa giàu kinh nghiệm.",
    bgColor: "rgba(151, 113, 255, .2)",
    textColor: "#9771FF",
    icon: babyIcon,
    introduction: "Dịch vụ thai sản của chúng tôi được thiết kế để cung cấp sự chăm sóc toàn diện và an toàn từ giai đoạn tiền sản, quá trình mang thai, cho đến sau sinh. Đội ngũ sản khoa và nhi khoa giàu kinh nghiệm sẵn sàng hỗ trợ bạn.",
    benefits: [
      "Chăm sóc tiền sản và kiểm tra sức khỏe định kỳ",
      "Siêu âm thai kỳ và chẩn đoán trước sinh",
      "Hỗ trợ sinh nở tự nhiên và sinh mổ khi cần",
      "Chăm sóc sau sinh và hỗ trợ cho mẹ",
      "Chăm sóc sơ sinh và tầm soát bệnh",
      "Tư vấn nuôi con bằng sữa mẹ"
    ],
    specialists: [
      {
        id: 1,
        name: "TS.BS. Phạm Thị Hương",
        title: "Chuyên gia Sản phụ khoa",
        experience: "20 năm kinh nghiệm",
        specialization: "Sản phụ khoa"
      },
      {
        id: 2,
        name: "BS. Hoàng Minh Tuấn",
        title: "Bác sĩ Nhi khoa",
        experience: "14 năm kinh nghiệm",
        specialization: "Chăm sóc sơ sinh"
      },
      {
        id: 3,
        name: "BS. Nguyễn Thị Thanh",
        title: "Hộ sinh viên",
        experience: "16 năm kinh nghiệm",
        specialization: "Hỗ trợ sinh nở"
      }
    ]
  },
  {
    id: 3,
    name: "Tim mạch",
    slug: "tim-mach",
    desc: "Chẩn đoán, điều trị và chăm sóc sức khỏe tim mạch chuyên sâu. Đội ngũ bác sĩ tim mạch hàng đầu sẵn sàng tư vấn về các vấn đề liên quan đến tim và hệ thống mạch máu, giúp bạn duy trì một trái tim khỏe mạnh.",
    bgColor: "rgba(1, 181, 197, .2)",
    textColor: "#01B5C5",
    icon: heartIcon,
    introduction: "Bộ phận Tim mạch của chúng tôi cung cấp các dịch vụ chẩn đoán, điều trị và quản lý bệnh tim mạch. Với công nghệ hiện đại và đội ngũ chuyên gia hàng đầu, chúng tôi cam k承đem lại những giải pháp điều trị hiệu quả.",
    benefits: [
      "Khám và đánh giá tim mạch toàn diện",
      "Điện tâm đồ và siêu âm tim",
      "Catheter tim và can thiệp mạch vành",
      "Phẫu thuật tim hở",
      "Quản lý suy tim và các bệnh lý mãn tính",
      "Tái habilitation sau can thiệp tim"
    ],
    specialists: [
      {
        id: 1,
        name: "PGS.TS.BS. Trần Đức Hùng",
        title: "Chuyên gia Tim mạch",
        experience: "22 năm kinh nghiệm",
        specialization: "Bệnh lý tim thiên bẩm"
      },
      {
        id: 2,
        name: "BS. Lý Văn Hải",
        title: "Bác sĩ Can thiệp tim",
        experience: "16 năm kinh nghiệm",
        specialization: "Can thiệp mạch vành"
      },
      {
        id: 3,
        name: "BS. Đặng Thị Vân",
        title: "Chuyên gia Suy tim",
        experience: "13 năm kinh nghiệm",
        specialization: "Quản lý suy tim"
      }
    ]
  },
  {
    id: 4,
    name: "Sức khỏe tinh thần",
    slug: "suc-khoe-tinh-than",
    desc: "Dịch vụ tư vấn chuyên nghiệp giúp bạn giảm căng thẳng, lo âu, cải thiện chất lượng giấc ngủ và làm chủ sức khỏe tinh thần một cách hiệu quả.",
    bgColor: "rgba(1, 181, 197, .2)",
    textColor: "#01B5C5",
    icon: spiritIcon,
    introduction: "Bộ phận Sức khỏe tinh thần của chúng tôi cung cấp các dịch vụ tư vấn, đánh giá và điều trị cho các vấn đề sức khỏe tâm lý. Chúng tôi cam k承đem lại một môi trường hỗ trợ, không kỳ thị và bảo mật.",
    benefits: [
      "Tư vấn và điều trị rối loạn trầm cảm",
      "Quản lý lo âu và rối loạn hoảng loạn",
      "Tư vấn về khủng hoảng cuộc sống",
      "Hỗ trợ nghiện chất và cai nghiện",
      "Trị liệu nhận thức - hành vi",
      "Quản lý stress và cân bằng công việc-cuộc sống"
    ],
    specialists: [
      {
        id: 1,
        name: "PGS.TS. Vũ Thanh Hùng",
        title: "Chuyên gia Tâm lý học lâm sàng",
        experience: "19 năm kinh nghiệm",
        specialization: "Rối loạn tâm lý"
      },
      {
        id: 2,
        name: "BS. Ngô Thị Hà",
        title: "Bác sĩ Tâm thần",
        experience: "12 năm kinh nghiệm",
        specialization: "Phong thoả và rối loạn nhân cách"
      },
      {
        id: 3,
        name: "TS. Trịnh Văn Mạnh",
        title: "Tư vấn viên Tâm lý",
        experience: "15 năm kinh nghiệm",
        specialization: "Tư vấn cải thiện hành vi"
      }
    ]
  },
  {
    id: 5,
    name: "Thần kinh",
    slug: "than-kinh",
    desc: "Tư vấn chuyên sâu về đột quỵ, động kinh, đau đầu mãn tính, Parkinson và các bệnh lý thần kinh khác, với mục tiêu phục hồi chức năng tối ưu.",
    bgColor: "rgba(254, 182, 13, .2)",
    textColor: "#FEB60D",
    icon: brainIcon,
    introduction: "Bộ phận Thần kinh của chúng tôi chuyên điều trị các bệnh lý thần kinh từ chẩn đoán sớm, điều trị tích cực đến phục hồi chức năng. Với công nghệ chẩn đoán hiện đại, chúng tôi mang lại hy vọng cho các bệnh nhân.",
    benefits: [
      "Chẩn đoán các bệnh lý thần kinh như đột quỵ, động kinh",
      "Điều trị cấp cứu đột quỵ ngôn ngữ",
      "Quản lý bệnh Parkinson và các bệnh khác",
      "Xử lý cơn động kinh và chứng hoảng loạn",
      "Phục hồi chức năng thần kinh sau đột quỵ",
      "Tư vấn bệnh đau đầu mãn tính"
    ],
    specialists: [
      {
        id: 1,
        name: "PGS.TS.BS. Đỗ Quang Huy",
        title: "Chuyên gia Thần kinh",
        experience: "21 năm kinh nghiệm",
        specialization: "Đột quỵ và bệnh mạch máu não"
      },
      {
        id: 2,
        name: "BS. Kiều Nguyệt Hà",
        title: "Bác sĩ Thần kinh",
        experience: "14 năm kinh nghiệm",
        specialization: "Bệnh Parkinson và rối loạn vận động"
      },
      {
        id: 3,
        name: "BS. Cao Văn Tuấn",
        title: "Chuyên gia Phục hồi chức năng",
        experience: "17 năm kinh nghiệm",
        specialization: "Phục hồi sau đột quỵ"
      }
    ]
  },
  {
    id: 6,
    name: "Trị bỏng",
    slug: "tri-bong",
    desc: "Tiếp cận quy trình điều trị hiện đại, giảm đau, ngăn ngừa nhiễm trùng và hỗ trợ phục hồi làn da, giảm thiểu di chứng một cách hiệu quả nhất.",
    bgColor: "rgba(151, 113, 255, .2)",
    textColor: "#9771FF",
    icon: burnIcon,
    introduction: "Bộ phận Trị bỏng của chúng tôi chuyên về điều trị vết bỏng cấp tính và mãn tính. Chúng tôi cung cấp các liệu pháp tiên tiến giúp giảm đau, hạn chế nhiễm trùng và tăng cường phục hồi da.",
    benefits: [
      "Điều trị cấp cứu vết bỏng và sơ cứu",
      "Quản lý cơn đau và chia sẻ vết thương",
      "Phẫu thuật ghép da và tái tạo",
      "Phục hồi vết bỏng và chăm sóc sẹo",
      "Tư vấn phòng chống bỏng và an toàn",
      "Hỗ trợ tâm lý và xã hội hóa sau bỏng"
    ],
    specialists: [
      {
        id: 1,
        name: "PGS.TS.BS. Lương Quốc Khánh",
        title: "Chuyên gia Trị bỏng",
        experience: "23 năm kinh nghiệm",
        specialization: "Bỏng nặng và phối hợp"
      },
      {
        id: 2,
        name: "BS. Vũ Thị Linh",
        title: "Bác sĩ Trị bỏng",
        experience: "13 năm kinh nghiệm",
        specialization: "Ghép da và tái tạo"
      },
      {
        id: 3,
        name: "BS. Trần Minh Quang",
        title: "Chuyên gia Phục hồi",
        experience: "11 năm kinh nghiệm",
        specialization: "Phục hồi chức năng sau bỏng"
      }
    ]
  },
];

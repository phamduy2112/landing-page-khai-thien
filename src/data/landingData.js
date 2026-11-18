export const brandInfo = {
  name: "Khải Thiên Furnishing",
  subName: "Nội Thất Khải Thiên",
  tagline: "Kiến Tạo Không Gian Sống Chuẩn Gu – Giá Gốc Tại Xưởng Sản Xuất",
  hotline1: "07 666666 33",
  hotline2: "0931 337 737",
  contactPerson: "Mr. Thành Tín",
  email: "khaithienfurniture@gmail.com",
  website: "noithatkhaithien.com",
  addressOffice: "129/8K Nguyễn Trãi, Phường Chợ Quán, TP. Hồ Chí Minh",
  zaloUrl: "https://zalo.me/0766666633",
  stats: [
    { value: "99%", label: "Chuẩn xác phối cảnh 3D", desc: "Từng đường nét, tỉ lệ & màu sắc vật liệu" },
    { value: "100%", label: "Gỗ An Cường chính hãng", desc: "Ván MDF chống ẩm lõi xanh chuẩn E1" },
    { value: "0 ĐỒNG", label: "Phí thiết kế 3D", desc: "Tặng 100% khi thi công nội thất trọn gói" },
    { value: "Giá Xưởng", label: "Sản xuất trực tiếp", desc: "Tối ưu 20% - 30% chi phí trung gian" }
  ]
};

// 1. Dịch Vụ Trọng Tâm
export const servicesData = [
  {
    id: "tron-goi",
    badge: "Dịch Vụ Trọng Tâm",
    title: "Thiết Kế & Thi Công Nội Thất Trọn Gói",
    description: "Giải pháp toàn diện từ khảo sát thực tế, lên phối cảnh 3D độc bản đến trực tiếp sản xuất và lắp đặt hoàn thiện chìa khóa trao tay.",
    items: [
      "Nội thất căn hộ chung cư cao cấp (1PN, 2PN, 3PN, Duplex, Penthouse)",
      "Nội thất nhà phố hiện đại, nhà ống tối ưu từng mét vuông công năng",
      "Biệt thự & Villa phong cách sang trọng, vương giả độc bản",
      "Văn phòng làm việc sáng tạo, showroom trưng bày, chuỗi cafe, shop thời trang"
    ],
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85",
    ctaText: "Nhận Báo Giá Trọn Gói"
  },
  {
    id: "may-do",
    badge: "Sản Xuất May Đo Trực Tiếp",
    title: "Sản Xuất & Gia Công Đồ Gỗ Theo Yêu Cầu",
    description: "Nhận đóng mới theo bản vẽ kỹ thuật riêng hoặc gia công từng món nội thất lẻ vừa khít kích thước thực tế của từng góc nhà.",
    items: [
      "Hệ tủ bếp thông minh (MDF chống ẩm An Cường, cánh Acrylic No-line, cánh kính khung nhôm)",
      "Tủ quần áo kịch trần, tủ áo cánh kính đèn LED sang trọng, walk-in closet",
      "Giường ngủ bọc nệm nỉ cao cấp, tap đầu giường, bàn trang điểm may đo",
      "Sofa da thật/vải nỉ, bàn ăn đá ceramic bóng gương, hệ vách ốp lam sóng than tre"
    ],
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=85",
    ctaText: "Đặt Đóng Nội Thất Theo Yêu Cầu"
  }
];

// 2. Không Gian Từng Phòng (Room-by-Room Experience)
export const roomShowcaseData = [
  {
    id: "living-room",
    name: "Phòng Khách",
    enName: "Living Room Space",
    tagline: "Bộ mặt của gia chủ – Sang trọng, thông thoáng & ấm áp",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85",
    highlights: [
      { label: "Vách tivi ốp đá Vicostone & lam sóng", desc: "Tạo chiều sâu và điểm nhấn thị giác đẳng cấp" },
      { label: "Hệ đèn LED âm trần thông minh", desc: "Điều chỉnh ánh sáng 3000K ấm cúng theo kịch bản" },
      { label: "Sofa may đo khung gỗ sồi bọc da Ý", desc: "Tối ưu kích thước chuẩn tỷ lệ phòng khách" }
    ],
    materials: "Gỗ MDF lõi xanh An Cường phủ Melamine, đá tự nhiên Marble, nẹp đồng mạ PVD"
  },
  {
    id: "kitchen",
    name: "Phòng Bếp & Ăn",
    enName: "Kitchen & Dining",
    tagline: "Trái tim tổ ấm – Tối ưu tam giác công năng, bền bỉ chống ẩm",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=85",
    highlights: [
      { label: "Tủ bếp cánh Acrylic No-line bóng gương", desc: "Dễ lau chùi dầu mỡ, không bám vân tay" },
      { label: "Mặt đá bếp Solid Surface / Vicostone", desc: "Chống ố, chống xước, kháng khuẩn chuẩn an toàn thực phẩm" },
      { label: "Phụ kiện ray trượt & bản lề Hafele / Blum", desc: "Đóng mở êm ái, bảo hành chuyển động 5 năm" }
    ],
    materials: "Thùng nhựa Picomat chịu nước 100%, cánh MDF chống ẩm phủ Acrylic bóng gương An Cường"
  },
  {
    id: "master-bedroom",
    name: "Phòng Ngủ Master",
    enName: "Master Bedroom Suite",
    tagline: "Chốn nghỉ ngơi thanh bình – Thư thái, riêng tư & êm dịu",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=85",
    highlights: [
      { label: "Giường ngủ bọc nệm đầu giường êm ái", desc: "Thiết kế bo cong hiện đại, cách âm tốt" },
      { label: "Tủ áo cánh kính viền nhôm Slim cao cấp", desc: "Tích hợp ray trượt giảm chấn và đèn LED cảm biến mở cửa" },
      { label: "Bàn trang điểm treo tường tối ưu diện tích", desc: "Gương LED cảm ứng 3 chế độ sáng trang điểm" }
    ],
    materials: "Ván gỗ An Cường phủ Melamine vân sồi tự nhiên kết hợp kính trà cường lực viền nhôm Anode"
  },
  {
    id: "walkin-closet",
    name: "Phòng Thay Đồ",
    enName: "Walk-in Closet",
    tagline: "Đẳng cấp không gian thời trang độc bản chuẩn khách sạn 5 sao",
    image: "https://images.unsplash.com/photo-1558997519-83ea9252def8?auto=format&fit=crop&w=1200&q=85",
    highlights: [
      { label: "Đảo phụ kiện trang sức trung tâm", desc: "Mặt kính nhìn thấu, lót nhung cao cấp chia ô đồng hồ, caravat" },
      { label: "Hệ thống ray treo quần áo tự động", desc: "Sắp xếp khoa học phân chia đầm dạ hội, vest, áo sơ mi" },
      { label: "Ánh sáng CRI > 95 chuẩn màu thực", desc: "Giúp phối đồ chuẩn xác và sang trọng" }
    ],
    materials: "Hệ nhôm Slim cao cấp mạ anode xám titan, kính xám khói cường lực 5mm, ván An Cường vân gỗ óc chó"
  }
];

// 3. So Sánh Bản Vẽ 3D & Thực Tế Thi Công
export const beforeAfterProjects = [
  {
    title: "Căn Hộ Masteri Centre Point (Thủ Đức)",
    render3D: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=80",
    reality: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=80",
    desc: "Khải Thiên cam kết chuẩn xác từ màu vân gỗ An Cường, vị trí hắt đèn LED đến từng đường chỉ bo góc.",
    area: "98m²",
    style: "Hiện Đại Sang Trọng"
  },
  {
    title: "Nhà Phố Liền Kề Cityland Park Hills (Gò Vấp)",
    render3D: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1000&q=80",
    reality: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1000&q=80",
    desc: "Bản vẽ 3D và hiện thực bàn giao chìa khóa trao tay khớp nối tỉ lệ 99%, chủ nhà hoàn toàn hài lòng.",
    area: "180m²",
    style: "Tối Giản Tinh Tế (Minimalism)"
  }
];

// 4. Năng Lực Xưởng Sản Xuất Khải Thiên
export const factoryCapabilities = [
  {
    number: "01",
    title: "Trung Tâm Gia Công Cắt CNC Nesting",
    desc: "Máy cắt tự động độ chính xác tuyệt đối từng milimet, tối ưu ván gỗ và cắt lượn các chi tiết bo cong mềm mại.",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80"
  },
  {
    number: "02",
    title: "Máy Dán Cạnh PUR No-Line Tự Động",
    desc: "Công nghệ dán cạnh không đường line chống nước 100%, bảo vệ mép ván vĩnh viễn không bị bong tróc, ẩm mốc.",
    image: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=600&q=80"
  },
  {
    number: "03",
    title: "Phòng Phun Sơn Sấy Hấp Nhiệt Vô Trùng",
    desc: "Hệ thống hút bụi lọc màng nước, sơn 2K Inchem bề mặt bóng gương mượt mà không tì vết, độ bền màu trên 10 năm.",
    image: "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=600&q=80"
  },
  {
    number: "04",
    title: "Kho Ván Gỗ An Cường & Thanh Thùy 1000m²",
    desc: "Nhập khẩu nguyên đai nguyên kiện ván MDF lõi xanh chống ẩm chuẩn E1, kiểm tra mã vạch xuất xứ minh bạch.",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80"
  }
];

// 5. Bộ Sưu Tập Phong Cách (Enriched for Architectural Moodboard Layout)
export const stylesData = [
  {
    id: "modern",
    number: "01",
    name: "Hiện Đại Tinh Tế (Modern Luxury)",
    shortName: "Modern Luxury",
    tag: "Được Yêu Thích Nhất",
    concept: "Tối ưu hóa công năng, mở rộng không gian với đường nét dứt khoát và ánh sáng hắt ma thuật.",
    suitable: "Căn hộ cao cấp, Duplex, Nhà phố hiện đại",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85",
    textureImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80",
    materials: "Ván MDF chống ẩm An Cường, kính khói cường lực, nẹp inox PVD mạ vàng, đá Vicostone",
    palette: [
      { name: "Than Chì", hex: "#1E293B" },
      { name: "Vân Gỗ Sồi", hex: "#C5A880" },
      { name: "Trắng Kem", hex: "#FAF8F5" },
      { name: "Vàng Champagne", hex: "#D4AF37" }
    ]
  },
  {
    id: "japandi",
    number: "02",
    name: "Tối Giản & Japandi / Wabi Sabi",
    shortName: "Japandi & Wabi Sabi",
    tag: "Bình Yên & Tĩnh Tại",
    concept: "Sự gặp gỡ hoàn mỹ giữa nét mộc mạc Nhật Bản và tính tiện nghi Bắc Âu, mang lại cảm giác chữa lành tuyệt đối.",
    suitable: "Gia đình trẻ, người yêu thiên nhiên và phong cách sống tối giản",
    image: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1200&q=85",
    textureImage: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=600&q=80",
    materials: "Gỗ sồi tự nhiên màu sáng, vải lanh Linen thô mộc, gốm thủ công, sơn hiệu ứng bê tông",
    palette: [
      { name: "Gỗ Sồi Mộc", hex: "#D4B996" },
      { name: "Cát Sand", hex: "#E6DFD5" },
      { name: "Trắng Bột", hex: "#F5F3EF" },
      { name: "Xám Bồ Hóng", hex: "#6B7280" }
    ]
  },
  {
    id: "luxury",
    number: "03",
    name: "Sang Trọng Đương Đại (High-End Luxury)",
    shortName: "High-End Luxury",
    tag: "Độc Bản Quyền Quý",
    concept: "Biểu tượng của vị thế gia chủ với những mảng vật liệu đắt giá, đá cẩm thạch nguyên khối và da bò Ý thủ công.",
    suitable: "Biệt thự đơn lập, Penthouse, Dinh thự triệu đô",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85",
    textureImage: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=600&q=80",
    materials: "Đá cẩm thạch Calacatta tự nhiên, da bò Ý Mastrotto, gỗ óc chó Bắc Mỹ (Walnut), đèn pha lê Asfour",
    palette: [
      { name: "Gỗ Óc Chó", hex: "#4A3525" },
      { name: "Đá Marble", hex: "#EAE6DF" },
      { name: "Vàng Gold", hex: "#B8860B" },
      { name: "Đen Quyền Lực", hex: "#0F172A" }
    ]
  },
  {
    id: "neoclassical",
    number: "04",
    name: "Tân Cổ Điển Nhẹ Nhàng (Neo Classic)",
    shortName: "Neo Classic",
    tag: "Đẳng Cấp Vượt Thời Gian",
    concept: "Hài hòa giữa tỉ lệ vàng đối xứng thời Phục Hưng và sự tinh giản hiện đại, mang lại vẻ đẹp kiêu sa bền vững.",
    suitable: "Nhà phố lớn, căn hộ diện tích rộng, biệt thự phố",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85",
    textureImage: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=600&q=80",
    materials: "Phào chỉ PU nhập khẩu sắc nét, sơn 2K Inchem chống ngả ố, tay nắm đồng mạ cổ điển",
    palette: [
      { name: "Trắng Sứ", hex: "#FAF9F6" },
      { name: "Xám Khói Nhạt", hex: "#D1D5DB" },
      { name: "Xanh Navy", hex: "#1E3A8A" },
      { name: "Đồng Cổ", hex: "#92400E" }
    ]
  }
];

// 6. Cam Kết
export const commitmentsData = [
  {
    icon: "Factory",
    number: "01",
    title: "Xưởng Sản Xuất Trực Tiếp",
    desc: "Khải Thiên sở hữu xưởng nội thất riêng biệt với trang thiết bị CNC hiện đại. Báo giá gốc tận xưởng, tiết kiệm 20% - 30% chi phí trung gian cho khách hàng."
  },
  {
    icon: "CheckCircle2",
    number: "02",
    title: "Cam Kết Giống 3D Đến 99%",
    desc: "Sản phẩm thực tế bàn giao bám sát từng tỷ lệ, chất liệu và màu sắc so với bản vẽ phối cảnh 3D đã duyệt, cam kết bồi thường nếu sai lệch vật liệu."
  },
  {
    icon: "ShieldCheck",
    number: "03",
    title: "100% Gỗ An Cường Chính Hãng",
    desc: "Chỉ dùng ván gỗ công nghiệp chống ẩm cao cấp An Cường, Thanh Thùy đạt chuẩn quốc tế E1, đảm bảo không mùi nồng cay mắt, an toàn tuyệt đối cho trẻ em."
  },
  {
    icon: "Clock",
    number: "04",
    title: "Tiến Độ Chuẩn Xác & 0 Phát Sinh",
    desc: "Bảng dự toán bóc tách minh bạch từng mét vuông và cam kết hợp đồng không phát sinh bất kỳ khoản chi phí phụ thu nào ngoài hợp đồng."
  }
];

// 7. Portfolio Dự Án Thực Tế
export const portfolioData = [
  {
    id: "alnata-celadon-city",
    category: "can-ho",
    categoryName: "Căn Hộ Chung Cư",
    title: "THIẾT KẾ VÀ THI CÔNG NỘI THẤT CĂN HỘ 2 PHÒNG NGỦ ALNATA",
    subtitle: "Phong cách Hiện đại pha trộn nét Wabi-Sabi mộc mạc, tối giản và tinh tế",
    location: "Diamond Alnata – Celadon City, Quận Tân Phú, TP. Hồ Chí Minh",
    area: "85m²",
    style: "Hiện Đại pha Wabi-Sabi",
    timeline: "Đang cập nhật",
    featured: true,
    image: "../assets/g3 (1).webp",
    gallery: [
      "../assets/g1.webp",
      "../assets/g5 (1).webp",
      "../assets/g7.webp",

    ],
    material: "Vật liệu tự nhiên thô mộc (gỗ, đá, gốm sứ), tone màu be - xám - nâu đất kết hợp ánh sáng tự nhiên",
    highlights: [
      "Thiết kế tối giản với các đường nét bo tròn mềm mại, loại bỏ chi tiết rườm rà",
      "Phối hợp hài hòa giữa phong cách Hiện đại và vẻ đẹp mộc mạc Wabi-Sabi",
      "Tận dụng tối đa ánh sáng tự nhiên và cây xanh tạo không gian bình yên, tĩnh lặng",
      "Phòng ngủ Master ấm áp với tone màu trung tính, ưu tiên công năng sử dụng"
    ]
  },
  {
    id: "can-ho-hau-giang",
    category: "can-ho",
    categoryName: "Căn Hộ Chung Cư",
    title: "Thiết kế và Thi công Nội thất Căn hộ Hậu Giang",
    subtitle: "Tối ưu không gian, hiện đại và tiện nghi theo sở thích riêng của gia chủ",
    location: "Đường Hậu Giang, TP. Hồ Chí Minh",
    area: "Đang cập nhật",
    style: "Hiện Đại",
    timeline: "Đang cập nhật",
    featured: true,
    image: "../assets/12.webp",
    gallery: [
      "../assets/13.webp",
      "../assets/14.webp",
      "../assets/15.webp",],
    material: "Gam màu trắng kem, be, gỗ sáng kết hợp đá vân sáng và kính",
    highlights: [
      "Khảo sát hiện trạng thực tế kỹ lưỡng trước khi lên bản vẽ 3D thiết kế và thi công",
      "Phòng khách nổi bật với sofa sắc cam đất tạo điểm nhấn cá tính cùng hệ lam gỗ đứng",
      "Khu vực bếp chữ L tối ưu công năng, tủ trên cao sát trần và hệ tủ đồ khô ngăn nắp",
      "Phòng ngủ Master đầu tư chỉn chu với hệ tủ quần áo kết hợp cánh kính và góc trang điểm cạnh cửa sổ"
    ]
  },
  {
    id: "biet-thu-quan-binh-tan",
    category: "biet-thu",
    categoryName: "Biệt Thự & Villa",
    title: "Thiết Kế & Thi Công Biệt Thự Tại Quận Bình Tân",
    subtitle: "Giải pháp không gian sống đẳng cấp, sang trọng và tiện nghi cho gia đình đa thế hệ",
    location: "Quận Bình Tân, TP. Hồ Chí Minh",
    area: "Đang cập nhật",
    style: "Hiện Đại Sang Trọng (Luxury)",
    timeline: "Đang cập nhật",
    featured: true,
    image: "../assets/17.webp",
    gallery: [
      "../assets/18.webp",
      "../assets/19.webp",
      "../assets/20.webp",
      "../assets/21.webp",

    ],
    material: "Đá xuyên sáng cao cấp, đá Vicostone nhóm E, vách ốp sợi than tre, gỗ An Cường & inox mạ",
    highlights: [
      "Tầng hầm thiết kế đẳng cấp như showroom trưng bày xe với hệ trần nhôm và vách ốp ánh kim",
      "Không gian phòng khách - bếp liên hoàn mở rộng, trang bị đảo bếp kết hợp quầy bar và đá Vicostone cao cấp",
      "Quy mô đa tầng tối ưu công năng: Phòng tiệc thượng lưu, phòng ngủ Master tiêu chuẩn Suite 5 sao, phòng ngủ các con và phòng thờ trang nghiêm",
      "Sân thượng tích hợp không gian tiểu cảnh xanh mát và khu vực tiệc BBQ ngoài trời lý tưởng"
    ]
  },
  {
    id: "nha-pho-cmt8",
    category: "nha-pho",
    categoryName: "Nhà Phố",
    title: "Lột Xác Nhà Phố Cũ 1 Trệt 2 Lầu Xuống Cấp Tại Đường CMT8",
    subtitle: "Biến đổi không gian nhà ống cũ kỹ thành tổ ấm nhỏ xinh, ấm áp theo phong cách White Wabi-Sabi",
    location: "Đường Cách Mạng Tháng 8, Quận 10 / Tân Bình, TP. Hồ Chí Minh",
    area: "Đang cập nhật",
    style: "White Wabi-Sabi",
    timeline: "Đang cập nhật",
    featured: true,
    image: "../assets/22.webp",
    gallery: [
      "../assets/23.webp",
      "../assets/24.webp",
      "../assets/25.webp",
    ],
    material: "Sơn hiệu ứng trắng thạch cao/trắng kem, gỗ công nghiệp phủ Melamine mờ, cánh kính nghệ thuật",
    highlights: [
      "Xử lý triệt để kết cấu nhà ống cũ hẹp ngang, tối ưu ánh sáng và giải pháp không gian mở",
      "Ứng dụng phong cách White Wabi-Sabi với các đường nét bo cong uyển chuyển, xóa nhòa góc chết",
      "Tầng 1 thiết kế đa năng linh hoạt: Phòng sinh hoạt chung kết hợp phòng ngủ tiện nghi cho khách",
      "Phòng ngủ Master tầng 2 tối ưu diện tích với giường phản sát tường, hộc kéo thông minh và tủ quần áo đụng trần vô hình"
    ]
  },
  {
    id: "vinhomes-grand-park-2pn",
    category: "can-ho",
    categoryName: "Căn Hộ Chung Cư",
    title: "Thiết kế và thi công nội thất căn hộ 2 PN Vinhomes Grand Park",
    subtitle: "Phong cách Japandi kết hợp Wabi-Sabi mộc mạc, ấm cúng và tinh tế",
    location: "Chung cư The Origami, Vinhomes Grand Park, TP. Thủ Đức, TP.HCM",
    area: "65m²",
    style: "Japandi & Wabi-Sabi",
    timeline: "Đang cập nhật",
    featured: true,
    image: "../assets/vinhome-1.webp",
    gallery: [
      "../assets/vinhome-2.webp",
      "../assets/vinhome-3.webp",
    ],
    material: "Gỗ công nghiệp MDF An Cường (mã 404 và 106 SH), sơn hiệu ứng cashmere (vải lụa)",
    highlights: [
      "Điểm nhấn mảng tường sơn hiệu ứng cashmere màu cam nổi bật sau tivi và bàn ăn",
      "Khu vực bếp nhỏ gọn tích hợp đầy đủ phụ kiện, tủ đồ khô và bố trí khoa học",
      "Phòng ngủ Master tối ưu không gian với giường gỗ, tủ quần áo cánh kính sọc lọng và bàn trang điểm",
      "Phòng ngủ nhỏ hơn 9m² cho 2 bé sử dụng giường bục tích hợp hộc kéo và bàn học tiện ích"
    ]
  }
];

// 8. Quy Trình 5 Bước
export const processSteps = [
  {
    step: "01",
    title: "Khảo Sát Hiện Trạng & Tư Vấn Tận Nơi",
    desc: "Kiến trúc sư Khải Thiên đo đạc thực tế tại công trình, lắng nghe kỹ lưỡng thói quen sinh hoạt và mức ngân sách dự kiến của gia đình."
  },
  {
    step: "02",
    title: "Bố Trí Mặt Bằng & Phối Cảnh 3D",
    desc: "Bố trí công năng khoa học, dựng phối cảnh 3D trực quan từng góc nhìn và chỉnh sửa đến khi khách hàng hoàn toàn hài lòng."
  },
  {
    step: "03",
    title: "Bóc Tách Dự Toán & Ký Hợp Đồng",
    desc: "Lập bảng báo giá chi tiết từng mã vật tư phụ kiện, cam kết rõ ràng không phát sinh chi phí trong suốt quá trình triển khai."
  },
  {
    step: "04",
    title: "Sản Xuất Tại Xưởng Khải Thiên & Lắp Đặt",
    desc: "Gia công trực tiếp trên máy CNC và máy dán cạnh tự động tại xưởng, vận chuyển và lắp ghép chuẩn xác từng milimet."
  },
  {
    step: "05",
    title: "Vệ Sinh Nghiệm Thu & Chìa Khóa Trao Tay",
    desc: "Vệ sinh công nghiệp sạch sẽ, bàn giao nhà kèm phiếu bảo hành kỹ thuật 36 tháng và bảo trì định kỳ trọn đời."
  }
];

// 9. FAQ
export const faqList = [
  {
    question: "Khải Thiên có miễn phí thiết kế khi ký hợp đồng thi công trọn gói không?",
    answer: "Có! Khải Thiên Furnishing hỗ trợ hoàn lại 100% chi phí thiết kế khi quý khách ký hợp đồng thi công nội thất trọn gói. Điều này giúp tối ưu ngân sách tối đa cho gia chủ."
  },
  {
    question: "Thời gian từ thiết kế đến thi công hoàn thiện mất bao lâu?",
    answer: "Thời gian trung bình cho căn hộ chung cư từ 20 – 30 ngày làm việc; nhà phố từ 30 – 45 ngày; biệt thự từ 40 – 60 ngày tùy quy mô và mức độ chi tiết của vật liệu."
  },
  {
    question: "Trong quá trình thi công có bị phát sinh thêm chi phí không?",
    answer: "Khải Thiên cam kết 100% KHÔNG phát sinh chi phí. Bảng dự toán bóc tách chi tiết từng hạng mục, mã ván An Cường, phụ kiện đã được cố định trong hợp đồng thi công."
  },
  {
    question: "Nếu tôi đã có sẵn bản vẽ 3D thì Khải Thiên có nhận thi công không?",
    answer: "Có. Khải Thiên có xưởng sản xuất trực tiếp nên rất hoan nghênh khách hàng đã có sẵn bản vẽ. Đội ngũ kỹ thuật sẽ bóc tách và báo giá cạnh tranh nhất theo đúng bản vẽ của bạn."
  },
  {
    question: "Chính sách bảo hành và bảo trì sản phẩm nội thất như thế nào?",
    answer: "Khải Thiên bảo hành kết cấu sản phẩm nội thất từ 24 đến 36 tháng, bảo hành phụ kiện theo hãng (Hafele, Blum, Eurogold) và cam kết hỗ trợ bảo trì trọn đời trong vòng 24 - 48h khi có yêu cầu."
  }
];

// 10. Testimonials
export const testimonialsData = [
  {
    name: "Anh Hoàng Nam",
    role: "Chủ căn hộ Masteri Centre Point",
    comment: "Tôi rất ấn tượng với Khải Thiên vì nhà hoàn thiện xong giống bản vẽ 3D đến từng góc cạnh. Đội thợ làm việc cẩn thận, dọn dẹp vệ sinh sạch sẽ trước khi bàn giao.",
    rating: 5
  },
  {
    name: "Chị Thảo My",
    role: "Gia chủ Nhà phố Cityland Gò Vấp",
    comment: "Giá tại xưởng Khải Thiên tiết kiệm hơn đáng kể so với vài bên trung gian tôi tham khảo trước đó. Gỗ An Cường kiểm tra mã tem đầy đủ, mùi mới rất nhẹ không gây cay mắt.",
    rating: 5
  },
  {
    name: "Bác Minh Tuấn",
    role: "Chủ biệt thự Phú Mỹ Hưng, Q.7",
    comment: "Anh Tín tư vấn rất có tâm, điều chỉnh bản vẽ theo nhu cầu của người lớn tuổi rất hợp lý. Tiến độ giao nhà trước hẹn 3 ngày để kịp ngày tốt dọn về.",
    rating: 5
  }
];

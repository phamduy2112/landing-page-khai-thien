export const brandInfo = {
  name: "Khải Thiên Furnishing",
  subName: "Nội Thất Khải Thiên",
  tagline: "Kiến Tạo Không Gian Sống Chuẩn Gu – Giá Gốc Tại Xưởng Sản Xuất",
  hotline1: "07 666666 33",
  hotline2: "0931 337 737",
  contactPerson: "Mr. Thành Tín",
  email: "khaithienfurnishing@gmail.com",
  website: "noithatkhaithien.com",
  addressShowroom: "217 Ngô Gia Tự, Phường 3, Quận 10, TP. Hồ Chí Minh",
  addressOffice: "606/112 Đường 3/2, Phường 14, Quận 10, TP. Hồ Chí Minh",
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
    id: "masteri-3pn",
    category: "can-ho",
    categoryName: "Căn Hộ Chung Cư",
    title: "Căn Hộ Masteri Centre Point (3PN)",
    subtitle: "Thiết kế hiện đại, tối ưu công năng mở kết nối phòng khách & bếp",
    location: "Khu Đô Thị Vinhomes Grand Park, TP. Thủ Đức",
    area: "98m²",
    style: "Hiện Đại Sang Trọng (Modern Luxury)",
    timeline: "28 Ngày Bàn Giao",
    featured: true,
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1000&q=80"
    ],
    material: "Gỗ MDF lõi xanh An Cường phủ Melamine & Acrylic bóng gương",
    highlights: ["Hệ tủ bếp kịch trần Acrylic No-line", "Vách tivi lam sóng kết hợp đá Vicostone", "Tủ áo cánh kính viền nhôm Slim"]
  },
  {
    id: "cityland-parkhills",
    category: "nha-pho",
    categoryName: "Nhà Phố Liền Kề",
    title: "Nhà Phố Liền Kề Cityland Park Hills",
    subtitle: "Kiến tạo tổ ấm 3 thế hệ với gam màu gỗ sồi tự nhiên mộc mạc",
    location: "Phường 10, Gò Vấp, TP.HCM",
    area: "180m² (1 Trệt 2 Lầu)",
    style: "Tối Giản Tinh Tế (Minimalism)",
    timeline: "35 Ngày Bàn Giao",
    featured: false,
    image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80"
    ],
    material: "Gỗ sồi tự nhiên kết hợp ván chống ẩm sơn Inchem cao cấp",
    highlights: ["Cầu thang xương cá bậc gỗ sồi", "Phòng khách liên thông giếng trời", "Hệ tủ âm tường thông minh"]
  },
  {
    id: "chateau-villa",
    category: "biet-thu",
    categoryName: "Biệt Thự & Villa",
    title: "Biệt Thự Đơn Lập Chateau Phú Mỹ Hưng",
    subtitle: "Đẳng cấp xa hoa với phào chỉ dát vàng và đá cẩm thạch tự nhiên",
    location: "Khu Đô Thị Phú Mỹ Hưng, Quận 7",
    area: "320m²",
    style: "Tân Cổ Điển Nhẹ Nhàng (Neo Classic)",
    timeline: "45 Ngày Bàn Giao",
    featured: false,
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80"
    ],
    material: "Ván chống ẩm cao cấp kết hợp đá tự nhiên & inox mạ vàng PVD",
    highlights: ["Phòng ngủ Master phong cách hoàng gia", "Phòng thay đồ walk-in closet cao cấp", "Quầy bar rượu sang trọng"]
  },
  {
    id: "sunrise-cityview",
    category: "can-ho",
    categoryName: "Căn Hộ Chung Cư",
    title: "Căn Hộ Sunrise City View (2PN)",
    subtitle: "Phong cách Japandi chữa lành với ánh sáng tự nhiên ngập tràn",
    location: "Nguyễn Hữu Thọ, Quận 7, TP.HCM",
    area: "76m²",
    style: "Japandi Gần Gũi & Ấm Cúng",
    timeline: "22 Ngày Bàn Giao",
    featured: false,
    image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1000&q=80"
    ],
    material: "Gỗ công nghiệp An Cường phủ Melamine vân sồi mộc mạc",
    highlights: ["Sàn gỗ công nghiệp xương cá", "Bàn ăn tròn mở rộng không gian", "Giường bục tích hợp ngăn kéo chứa đồ"]
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

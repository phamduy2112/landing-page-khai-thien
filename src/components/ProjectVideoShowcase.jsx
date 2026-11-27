import React, { useState } from 'react';
import { FaPlay } from 'react-icons/fa';
import { Sparkles, Video, MapPin, ArrowRight } from 'lucide-react';

const videoList = [
  {
    id: 1,
    title: 'Thiết Kế & Thi Công Nội Thất Phòng Ngủ Cô Ngọc Hoàng',
    location: 'Đường Nhiêu Tâm, Quận 5, TP.HCM',
    tag: 'Nội Thất Phòng Ngủ',
    src: 'https://drive.google.com/file/d/1jwzH562_ZIBrMqY_yNFt2h3MsQXWwvyg/view?usp=sharing',
    desc: 'Thiết kế và thi công nội thất phòng ngủ Master và phòng ngủ phụ tại nhà phố 5 tầng của cô Ngọc Hoàng, đường Nhiêu Tâm, Quận 5. Phong cách hiện đại, tinh tế, tối ưu công năng sử dụng và không gian lưu trữ, mang đến trải nghiệm nghỉ ngơi tiện nghi, ấm cúng với nội thất may đo theo yêu cầu gia chủ từ xưởng Khải Thiên.'
  },
  {
    id: 2,
    title: 'Thiết Kế & Thi Công Nội Thất Căn Hộ Hậu Giang',
    location: 'Đường Hậu Giang, TP.HCM',
    tag: 'Căn Hộ Chung Cư',
    src: 'https://drive.google.com/file/d/1I2xin_7sxKAK6v2U3H5it6H9LhuLxaoe/view?usp=sharing',
    desc: 'Tông trắng kem – be – gỗ sáng kết hợp sofa cam đất tạo điểm nhấn phòng khách, bếp chữ L kịch trần gọn gàng, phòng ngủ Master có tủ kính trưng bày & bàn trang điểm sát cửa sổ.'
  },
  {
    id: 3,
    title: 'Showcase Thực Tế: Căn Hộ Celadon City 2PN',
    location: 'Diamond Alnata – Celadon City, Tân Phú, TP.HCM',
    tag: 'Căn Hộ Chung Cư',
    src: 'https://drive.google.com/file/d/1aRanUUSb1H3f9cCkPBFPOBySj6Xr4C3k/view?usp=sharing',
    desc: 'Căn hộ 2PN diện tích 85m²: Sự kết hợp tinh tế giữa phong cách Hiện đại và nét mộc mạc Wabi-Sabi, sử dụng gam màu trung tính be - xám - nâu đất, đường nét bo tròn thư thái cùng vật liệu gỗ An Cường cao cấp.'
  },
  {
    id: 4,
    title: 'Thiết Kế & Thi Công Nội Thất Nhà Phố Gò Xoài (Bình Tân)',
    location: 'Đường Gò Xoài, Bình Tân, TP.HCM',
    tag: 'Nhà Phố',
    src: 'https://drive.google.com/file/d/1kVFj220FhQKdZ6NB45j9YBX91g7xM4dc/view?usp=sharing',
    desc: 'Thiết kế và thi công nội thất trọn gói nhà phố tại Gò Xoài, Bình Tân: Tối ưu công năng sinh hoạt, sản xuất trực tiếp tại xưởng Khải Thiên.'
  },
  {
    id: 5,
    title: 'Showcase Thực Tế: Hệ Tủ Quần Áo Kịch Trần Độc Lập',
    location: 'Thi công lắp đặt tận nơi tại TP.HCM',
    tag: 'Sản Phẩm Nội Thất',
    src: 'https://drive.google.com/file/d/1zcTwfV4kUjMUunpD5a5OT4N70uovkFQg/view?usp=sharing',
    desc: 'Giải pháp tủ quần áo kịch trần may đo chuẩn xác theo chiều cao trần nhà: Tối đa hóa không gian lưu trữ, chia khoang đồ thông minh, sản xuất trực tiếp tại xưởng Khải Thiên không qua trung gian.'
  }
];

function getVideoMedia(item) {
  const url = item.src;

  if (url.includes('drive.google.com')) {
    const fileIdMatch = url.match(/\/d\/([a-zA-Z0-9_-]+)/) || url.match(/id=([a-zA-Z0-9_-]+)/);
    const fileId = fileIdMatch ? fileIdMatch[1] : '';
    return {
      type: 'iframe',
      embedUrl: fileId ? `https://drive.google.com/file/d/${fileId}/preview` : url,
      // Tự động trích xuất thumbnail trực tiếp từ Google Drive bằng fileId
      thumbnail: fileId
        ? `https://drive.google.com/thumbnail?id=${fileId}&sz=w800`
        : (item.poster || '/assets/banner.webp'),
    };
  }

  if (url.includes('youtube.com') || url.includes('youtu.be')) {
    let videoId = '';
    if (url.includes('youtu.be')) {
      videoId = url.split('youtu.be/')[1]?.split('?')[0] || '';
    } else {
      videoId = url.split('v=')[1]?.split('&')[0] || '';
    }
    return {
      type: 'iframe',
      embedUrl: `https://www.youtube.com/embed/${videoId}?autoplay=1`,
      thumbnail: videoId
        ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
        : (item.poster || '/assets/banner.webp'),
    };
  }

  return {
    type: 'video',
    embedUrl: url,
    thumbnail: item.poster || '/assets/banner.webp',
  };
}


export default function ProjectVideoShowcase() {
  const [activeVideo, setActiveVideo] = useState(videoList[0]);
  const currentMedia = getVideoMedia(activeVideo);


  return (
    <section id="project-videos" className="py-14 sm:py-20 bg-[#FAF8F5] border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-12">
          <div className="space-y-3 m-auto text-center px-2">

            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-[0.015em]">
              Khám Phá Video Bàn Giao Thực Tế
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Trải nghiệm thực tế từng thước phim ghi lại các công trình nhà ở đã hoàn thiện và quy trình may đo trực tiếp tại xưởng sản xuất Khải Thiên.
            </p>
          </div>


        </div>

        {/* Main Video (8 Cột) + Playlist 4 Video (4 Cột) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">

          {/* 1. KHUNG PHÁT VIDEO CHÍNH (Bên trái: 8 Cột) */}
          <div className="lg:col-span-8 bg-slate-950 rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-800 shadow-2xl flex flex-col justify-between w-full">
            <div className="w-full relative bg-black flex items-center justify-center overflow-hidden h-[55vh] sm:h-[460px] md:h-[500px] lg:aspect-video">
              {currentMedia.type === 'iframe' ? (
                /* Bọc iframe với tỷ lệ zoom 106% để cắt sạch 100% thanh header trên và thanh đáy chứa 1x, CC, âm thanh */
                <div className="relative w-full h-full overflow-hidden bg-black flex items-center justify-center">
                  <iframe
                    key={currentMedia.embedUrl}
                    src={currentMedia.embedUrl}
                    className="border-0 pointer-events-auto"
                    style={{
                      width: '100%',
                      height: 'calc(100% + 110px)',
                      marginTop: '-56px',
                      marginBottom: '-54px'
                    }}
                    allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
                    allowFullScreen
                    title={activeVideo.title}
                  />
                </div>
              ) : (
                <video
                  key={currentMedia.embedUrl}
                  playsInline
                  autoPlay
                  muted
                  loop
                  controls
                  controlsList="nodownload nofullscreen noremoteplayback noplaybackrate"
                  disablePictureInPicture
                  preload="metadata"
                  poster={currentMedia.thumbnail}
                  className="w-full h-full object-cover bg-black"
                >
                  <source src={currentMedia.embedUrl} type="video/mp4" />
                  Trình duyệt của bạn không hỗ trợ video.
                </video>
              )}
            </div>

            {/* Thông tin video đang phát */}
            <div className="p-4 sm:p-6 hidden sm:block bg-slate-900 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-slate-800">
              <div className="space-y-1.5 max-w-xl">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-[10px] sm:text-[11px] font-bold px-2.5 py-0.5 rounded-md bg-stone-900 text-white uppercase tracking-wider">
                    {activeVideo.tag}
                  </span>
                  <span className="text-slate-400 text-[11px] sm:text-xs flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-stone-300 shrink-0" />
                    <span>{activeVideo.location}</span>
                  </span>
                </div>
                <h3 className="text-sm sm:text-lg lg:text-xl font-bold text-white leading-snug">
                  {activeVideo.title}
                </h3>
                <p className="text-[11px] sm:text-xs text-slate-300 leading-relaxed">
                  {activeVideo.desc}
                </p>
              </div>


            </div>
          </div>

          {/* 2. PLAYLIST 4 VIDEO KẾ BÊN (Bên phải: 4 Cột, chiều cao tự nhiên) */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            <div className="flex items-center justify-between pb-2 border-b border-stone-200">
              <span className="text-sm font-bold text-slate-900">
                Danh Sách Video ({videoList.length})
              </span>
              <span className="text-xs text-stone-900 font-semibold">Bấm để xem video</span>
            </div>

            <div className="space-y-3">
              {videoList.map((item) => {
                const isActive = item.id === activeVideo.id;
                const itemMedia = getVideoMedia(item);

                return (
                  <div
                    key={item.id}
                    onClick={() => setActiveVideo(item)}
                    className={`flex gap-3.5 p-3 rounded-2xl cursor-pointer transition-all border ${isActive
                      ? 'bg-white border-stone-900 shadow-md ring-2 ring-amber-500/20'
                      : 'bg-white hover:bg-stone-50 border-stone-200/90 shadow-xs hover:border-stone-400'
                      }`}
                  >
                    {/* Thumbnail video */}
                    <div className="relative w-28 h-20 shrink-0 rounded-xl overflow-hidden bg-slate-950">
                      <img
                        src={itemMedia.thumbnail}
                        alt={item.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = '/assets/banner.webp';
                        }}
                      />
                      <div className="absolute inset-0 bg-black/35 flex items-center justify-center">
                        <div
                          className={`w-7 h-7 rounded-full flex items-center justify-center text-white transition-transform ${isActive ? 'bg-stone-900 scale-110 text-slate-950' : 'bg-black/60'
                            }`}
                        >
                          <FaPlay className="w-2.5 h-2.5 ml-0.5" />
                        </div>
                      </div>
                      {item.duration && (
                        <span className="absolute bottom-1 right-1 text-[9px] font-bold bg-black/80 text-white px-1.5 py-0.5 rounded">
                          {item.duration}
                        </span>
                      )}
                    </div>

                    {/* Tiêu đề & tag */}
                    <div className="flex-1 flex flex-col justify-between py-0.5 min-w-0">
                      <span className="text-[10px] font-bold text-stone-900 uppercase tracking-wider truncate">
                        {item.tag}
                      </span>
                      <h4
                        className={`text-xs font-bold line-clamp-2 leading-snug ${isActive ? 'text-stone-900' : 'text-slate-900'
                          }`}
                      >
                        {item.title}
                      </h4>
                      <span className="text-[11px] text-slate-400 font-medium">
                        {isActive ? 'Đang phát...' : 'Bấm để xem'}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}


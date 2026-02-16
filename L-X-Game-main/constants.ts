import { EnvelopeData, CardData } from './types';

// Money denominations for Tết lucky money
// Cập nhật mệnh giá mới: 20k, 50k, 100k (Đã bỏ 10k)
export const MONEY_DENOMINATIONS = [20000, 50000, 100000];

// Generate 16 envelopes with deterministic "random" values for the visual scatter
export const ENVELOPES: EnvelopeData[] = Array.from({ length: 16 }).map((_, i) => ({
  id: i + 1,
  rotation: (i % 2 === 0 ? 1 : -1) * ((i * 3) % 5 + 1),
  xOffset: ((i * 7) % 10) - 5,
  yOffset: ((i * 11) % 10) - 5,
  delay: i * 0.1,
  money: MONEY_DENOMINATIONS[(i) % MONEY_DENOMINATIONS.length],
}));

// Base content for the cards - All Tết blessings
const RAW_CARDS: CardData[] = [
  {
    id: 1,
    vi: {
      benediction_title: "Chúc mừng năm mới",
      benediction_text: "Chúc bạn năm mới vạn sự như ý, triệu sự như mơ, trăm sự bất ngờ, hàng giờ hạnh phúc.",
      context_title: "",
      context_quote: "",
      value: "",
      unit: ""
    },
    en: {
      benediction_title: "Happy New Year",
      benediction_text: "May the new year bring you love, trust, and countless rays of hope. Each day is a fresh start to become your best self.",
      context_title: "",
      context_quote: "",
      value: "",
      unit: ""
    },
    youtube: {
      video_id: "qG1BaZ39qhk",
      title: "Em đừng đi"
    },
    image: "/imgs/anh1.jpg"
  },
  {
    id: 2,
    vi: {
      benediction_title: "Chúc sức khoẻ",
      benediction_text: "Chúc bạn năm mới an khang, tâm sáng – trí vững – đường dài thênh thang, việc gì cũng hanh thông.",
      context_title: "",
      context_quote: "",
      value: "",
      unit: ""
    },
    en: {
      benediction_title: "Health & Wellness",
      benediction_text: "Health is gold, talent is silver. May you stay sharp, healthy and energetic to overcome all challenges.",
      context_title: "",
      context_quote: "",
      value: "",
      unit: ""
    },
    youtube: {
      video_id: "P2nnRDpucs8",
      title: "Chúng ta của hiện tại"
    },
    image: "/imgs/anh2.jpg"
  },
  {
    id: 3,
    vi: {
      benediction_title: "Chúc thành công",
      benediction_text: "Năm mới chúc bạn và gia đình luôn bình an, nhà cửa ấm êm, tài lộc gõ cửa mỗi ngày.",
      context_title: "",
      context_quote: "",
      value: "",
      unit: ""
    },
    en: {
      benediction_title: "Success & Prosperity",
      benediction_text: "May you achieve brilliant success, breakthrough career, smooth work, abundant wealth and all dreams come true.",
      context_title: "",
      context_quote: "",
      value: "",
      unit: ""
    },
    youtube: {
      video_id: "uR9ZwejfuR8",
      title: "Chúng ta không thuộc về nhau"
    },
    image: "/imgs/anh3.jpg"
  },
  {
    id: 4,
    vi: {
      benediction_title: "Chúc hạnh phúc",
      benediction_text: "Chúc bạn một năm đủ sức khỏe để sống trọn, đủ bình an để an lòng và đủ thành công để tự hào.",
      context_title: "",
      context_quote: "",
      value: "",
      unit: ""
    },
    en: {
      benediction_title: "Happiness & Love",
      benediction_text: "May you and your loved ones be surrounded by joy, warmth, bright smiles every day and unforgettable beautiful moments.",
      context_title: "",
      context_quote: "",
      value: "",
      unit: ""
    },
    youtube: {
      video_id: "uw11eF7Lehc",
      title: "Có chắc yêu là đây"
    },
    image: "/imgs/anh4.jpg"
  },
  {
    id: 5,
    vi: {
      benediction_title: "Chúc tình yêu",
      benediction_text: "Mong năm mới mang đến nhiều cơ hội mới, quyết định đúng đắn và những bước tiến vững vàng.",
      context_title: "",
      context_quote: "",
      value: "",
      unit: ""
    },
    en: {
      benediction_title: "Love & Romance",
      benediction_text: "May lonely hearts find their other halves soon, may couples grow sweeter, and may love always bloom like flowers in spring.",
      context_title: "",
      context_quote: "",
      value: "",
      unit: ""
    },
    youtube: {
      video_id: "zpwwM_HTkok",
      title: "Em của ngày hôm qua"
    },
    image: "/imgs/anh5.jpg"
  },
  {
    id: 6,
    vi: {
      benediction_title: "Chúc may mắn",
      benediction_text: "Chúc mọi dự định ấp ủ của bạn đều nảy mầm, mọi cố gắng đều được đền đáp xứng đáng.",
      context_title: "",
      context_quote: "",
      value: "",
      unit: ""
    },
    en: {
      benediction_title: "Good Fortune",
      benediction_text: "May luck stay by your side, every endeavor brings blessing, every bet is a winner, and good fortune keeps coming.",
      context_title: "",
      context_quote: "",
      value: "",
      unit: ""
    },
    youtube: {
      video_id: "fMnpiBpmXY4",
      title: "Chắc ai đó sẽ về"
    },
    image: "/imgs/anh6.jpg"
  },
  {
    id: 7,
    vi: {
      benediction_title: "Chúc gia đình",
      benediction_text: "Năm mới vạn sự như ý, tâm thế an nhiên, sự nghiệp thăng hoa, gia đạo thuận hòa.",
      context_title: "",
      context_quote: "",
      value: "",
      unit: ""
    },
    en: {
      benediction_title: "Family Blessings",
      benediction_text: "May your family always be together, parents stay healthy, siblings succeed, and family love remains as sweet as honey.",
      context_title: "",
      context_quote: "",
      value: "",
      unit: ""
    },
    youtube: {
      video_id: "LPK6YM05wYQ",
      title: "Nắng ấm xa dần"
    },
    image: "/imgs/anh7.jpg"
  },
  {
    id: 8,
    vi: {
      benediction_title: "Chúc bình an",
      benediction_text: "Chúc bạn mỗi ngày trong năm đều có niềm vui nhỏ, may mắn lớn và những người tử tế bên cạnh.",
      context_title: "",
      context_quote: "",
      value: "",
      unit: ""
    },
    en: {
      benediction_title: "Peace & Serenity",
      benediction_text: "May you find peace, stability, and freedom from troubles. Let each day shine bright with tranquility.",
      context_title: "",
      context_quote: "",
      value: "",
      unit: ""
    },
    youtube: {
      video_id: "eeGQgT0voSM",
      title: "Cơn mưa ngang qua"
    },
    image: "/imgs/anh8.jpg"
  },
  {
    id: 9,
    vi: {
      benediction_title: "Chúc khôn ngoan",
      benediction_text: "Mong năm mới nhẹ lòng với chuyện cũ, mạnh mẽ cho chặng đường mới và rực rỡ theo cách riêng của bạn.",
      context_title: "",
      context_quote: "",
      value: "",
      unit: ""
    },
    en: {
      benediction_title: "Wisdom & Vision",
      benediction_text: "May you gain clarity, foresight, make right decisions, and live with wisdom and discernment.",
      context_title: "",
      context_quote: "",
      value: "",
      unit: ""
    },
    youtube: {
      video_id: "ISz-RZXZaLE",
      title: "Đừng về trễ"
    },
    image: "/imgs/anh9.jpg"
  },
  {
    id: 10,
    vi: {
      benediction_title: "Chúc tự tin",
      benediction_text: "Chúc bạn khởi đầu thuận lợi, giữa năm rực rỡ, cuối năm viên mãn.",
      context_title: "",
      context_quote: "",
      value: "",
      unit: ""
    },
    en: {
      benediction_title: "Confidence & Courage",
      benediction_text: "May you be confident and courageous, unafraid of challenges, and always keep your head held high.",
      context_title: "",
      context_quote: "",
      value: "",
      unit: ""
    },
    youtube: {
      video_id: "rsMVFeFUwz4",
      title: "Em Đã Đến Lúc Thức Tỉnh"
    },
    image: "/imgs/anh10.jpg"
  },
  {
    id: 11,
    vi: {
      benediction_title: "Chúc sáng tạo",
      benediction_text: "Năm mới kính chúc sức khỏe dồi dào, tinh thần vững vàng, tiền vào như nước và cuộc sống ngày càng thăng hoa.",
      context_title: "",
      context_quote: "",
      value: "",
      unit: ""
    },
    en: {
      benediction_title: "Creativity & Innovation",
      benediction_text: "May you stay creative, generate fresh ideas, let your talent shine, and your work stand out.",
      context_title: "",
      context_quote: "",
      value: "",
      unit: ""
    },
    youtube: {
      video_id: "oIFqYDvSEj8",
      title: "Cơn mưa ngang qua 3"
    },
    image: "/imgs/anh11.png"
  },
  {
    id: 12,
    vi: {
      benediction_title: "Chúc tình bạn",
      benediction_text: "Chúc bạn sung túc đủ đầy, tiền vào như nước, lộc đến đầy tay, vận may gõ cửa.",
      context_title: "",
      context_quote: "",
      value: "",
      unit: ""
    },
    en: {
      benediction_title: "True Friendship",
      benediction_text: "May you have genuine friends who stand by you and help when you need them most.",
      context_title: "",
      context_quote: "",
      value: "",
      unit: ""
    },
    youtube: {
      video_id: "wHS-TgMn_-E",
      title: "Một cộng một lớn hơn hai"
    },
    image: "/imgs/anh12.jpg"
  },
  {
    id: 13,
    vi: {
      benediction_title: "Chúc cân bằng",
      benediction_text: "Chúc bạn nhan sắc thăng hạng, sự nghiệp thăng tiến, tình yêu thăng hoa. Cả năm đều tiến.",
      context_title: "",
      context_quote: "",
      value: "",
      unit: ""
    },
    en: {
      benediction_title: "Balance & Harmony",
      benediction_text: "May you find balance between work and life, between hands and heart, and may each day be vibrant.",
      context_title: "",
      context_quote: "",
      value: "",
      unit: ""
    },
    youtube: {
      video_id: "uw11eF7Lehc",
      title: "Có chắc yêu là đây"
    },
    image: "/imgs/anh13.jpg"
  },
  {
    id: 14,
    vi: {
      benediction_title: "Chúc phát triển",
      benediction_text: "Chúc bạn không ngừng phát triển, học hỏi những điều mới, trưởng thành từng ngày, và vươn tới những đỉnh cao mới.",
      context_title: "",
      context_quote: "",
      value: "",
      unit: ""
    },
    en: {
      benediction_title: "Growth & Development",
      benediction_text: "May you grow constantly, learn new things, mature every day, and reach new heights.",
      context_title: "",
      context_quote: "",
      value: "",
      unit: ""
    },
    youtube: {
      video_id: "LPK6YM05wYQ",
      title: "Nắng ấm xa dần"
    },
    image: "/imgs/anh14.jpg"
  },
  {
    id: 15,
    vi: {
      benediction_title: "Chúc thay đổi",
      benediction_text: "Chúc bạn có can đảm thay đổi, rời xa những điều không tốt, đón nhận những cơ hội mới, và sống trọn vẹn.",
      context_title: "",
      context_quote: "",
      value: "",
      unit: ""
    },
    en: {
      benediction_title: "Positive Change",
      benediction_text: "May you have the courage to change, leave behind what doesn't serve you, embrace new opportunities, and live fully.",
      context_title: "",
      context_quote: "",
      value: "",
      unit: ""
    },
    youtube: {
      video_id: "eeGQgT0voSM",
      title: "Cơn mưa ngang qua"
    },
    image: "/imgs/anh15.jpg"
  },
  {
    id: 16,
    vi: {
      benediction_title: "Chúc toàn diện",
      benediction_text: "Chúc bạn năm mới tất cả đều tốt - tiền bạc, sức khỏe, tình yêu, gia đình, sự nghiệp, bạn bè, và tất cả những điều bạn mong muốn.",
      context_title: "",
      context_quote: "",
      value: "",
      unit: ""
    },
    en: {
      benediction_title: "Complete Blessings",
      benediction_text: "May everything be good in the new year - wealth, health, love, family, career, friendship, and all your wishes.",
      context_title: "",
      context_quote: "",
      value: "",
      unit: ""
    },
    youtube: {
      video_id: "uR9ZwejfuR8",
      title: "Chúng ta không thuộc về nhau"
    },
    image: "/imgs/anh16.jpg"
  }
];
// Replicate and cycle the cards to fill all 16 slots deterministically
export const CARDS_DB: CardData[] = Array.from({ length: 16 }).map((_, i) => {
  const template = RAW_CARDS[i % RAW_CARDS.length];
  return {
    ...template,
    id: i + 1
  };
});

// List of available images from imgs folder (16 images)
export const AVAILABLE_IMAGES = [
  '/imgs/anh1.jpg',
  '/imgs/anh2.jpg',
  '/imgs/anh3.jpg',
  '/imgs/anh4.jpg',
  '/imgs/anh5.jpg',
  '/imgs/anh6.jpg',
  '/imgs/anh7.jpg',
  '/imgs/anh8.jpg',
  '/imgs/anh9.jpg',
  '/imgs/anh10.jpg',
  '/imgs/anh11.png',
  '/imgs/anh12.jpg',
  '/imgs/anh13.jpg',
  '/imgs/anh14.jpg',
  '/imgs/anh15.jpg',
  '/imgs/anh16.jpg',
];

// Function to generate random lucky money content
export const generateRandomLuckyMoney = () => {
  // Random card (blessing)
  const randomCard = RAW_CARDS[Math.floor(Math.random() * RAW_CARDS.length)];
  
  // Random image
  const randomImage = AVAILABLE_IMAGES[Math.floor(Math.random() * AVAILABLE_IMAGES.length)];
  
  // Random money denomination
  const randomMoney = MONEY_DENOMINATIONS[Math.floor(Math.random() * MONEY_DENOMINATIONS.length)];
  
  return {
    card: randomCard,
    image: randomImage,
    money: randomMoney
  };
};
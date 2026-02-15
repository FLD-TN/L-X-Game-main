
import { EnvelopeData, CardData } from './types';

// Money denominations for Tết lucky money
export const MONEY_DENOMINATIONS = [100000, 200000, 500000, 1000000];

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
      benediction_text: "Năm mới - chúc bạn được bao quanh bởi tình yêu, tin tưởng và những tia sáng hy vọng. Mỗi ngày là một cơ hội mới để trở thành phiên bản tốt nhất của chính mình.",
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
    image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/414a2959-3b7a-4942-b22c-0fdb42d1abb6/dlgjy85-2c37de6d-f2e1-4b2b-bf68-ae0c15d64961.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiIvZi80MTRhMjk1OS0zYjdhLTQ5NDItYjIyYy0wZmRiNDJkMWFiYjYvZGxnank4NS0yYzM3ZGU2ZC1mMmUxLTRiMmItYmY2OC1hZTBjMTVkNjQ5NjEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.4lWB1K64YvNKPzbnh6J2XowDscHsj6H2DKBUnpo9uRk"
  },
  {
    id: 2,
    vi: {
      benediction_title: "Chúc sức khoẻ",
      benediction_text: "Sức khỏe là vàng, tài năng là bạc. Chúc bạn sắc sảo tinh anh, luôn khỏe mạnh và năng động để vượt qua mọi thử thách.",
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
    image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/414a2959-3b7a-4942-b22c-0fdb42d1abb6/dlgjybn-5d880ef2-0616-4f15-984d-59e8ccbf717a.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiIvZi80MTRhMjk1OS0zYjdhLTQ5NDItYjIyYy0wZmRiNDJkMWFiYjYvZGxnanlibi01ZDg4MGVmMi0wNjE2LTRmMTUtOTg0ZC01OWU4Y2NiZjcxN2EucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.kNxsSkkbP_7kiqQJeFHvFvkDvhcGS1ru5B8KNjlBdf0"
  },
  {
    id: 3,
    vi: {
      benediction_title: "Chúc thành công",
      benediction_text: "Chúc bạn năm này thành công rực rỡ, sự nghiệp bứt phá, công việc suôn sẻ, tiền bạc dồi dào và mọi ước mơ đều thành hiện thực.",
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
    image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/414a2959-3b7a-4942-b22c-0fdb42d1abb6/dlgjy6y-684a18eb-2d10-4b25-b759-2db4b5588a09.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiIvZi80MTRhMjk1OS0zYjdhLTQ5NDItYjIyYy0wZmRiNDJkMWFiYjYvZGxnank2eS02ODRhMThlYi0yZDEwLTRiMjUtYjc1OS0yZGI0YjU1ODhhMDkucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.RndJk1ucfo8NZfyExVgdRlEeJMj8ClN2SWZx73DNTtw"
  },
  {
    id: 4,
    vi: {
      benediction_title: "Chúc hạnh phúc",
      benediction_text: "Chúc bạn và những người thân yêu được bao quanh bởi niềm vui, tình thân ấm áp, cười tươi mỗi ngày và những khoảnh khắc đẹp không quên.",
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
    image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/414a2959-3b7a-4942-b22c-0fdb42d1abb6/dlgkka0-e76a3db4-2912-45af-9a3f-1c8c0e8950cf.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiIvZi80MTRhMjk1OS0zYjdhLTQ5NDItYjIyYy0wZmRiNDJkMWFiYjYvZGxna2thMC1lNzZhM2RiNC0yOTEyLTQ1YWYtOWEzZi0xYzhjMGU4OTUwY2YucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.f0pKPjBRTZESwMXs2ePmetZOXdSTTmREe5jJ3a-6INY"
  },
  {
    id: 5,
    vi: {
      benediction_title: "Chúc tình yêu",
      benediction_text: "Chúc những trái tim cô đơn sớm tìm được người khác nửa, chúc những cặp đôi ngọt ngào hơn, chúc tình yêu luôn nở rộ như hoa cỏ may.",
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
    image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/414a2959-3b7a-4942-b22c-0fdb42d1abb6/dlgjy7c-82934753-35d5-4151-8876-ae6761e225cf.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiIvZi80MTRhMjk1OS0zYjdhLTQ5NDItYjIyYy0wZmRiNDJkMWFiYjYvZGxnank3Yy04MjkzNDc1My0zNWQ1LTQxNTEtODg3Ni1hZTY3NjFlMjI1Y2YucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.GEuvdUV9JNmqcCQBJo3pfy12W_SnspZTF-fkKUtuP9I"
  },
  {
    id: 6,
    vi: {
      benediction_title: "Chúc may mắn",
      benediction_text: "Chúc bạn năm này vận may bên mình, mọi việc gặp hên, mọi lần cá cược đều thắng, và những may mắn tốt sẽ ùa về không ngừng.",
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
    image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/414a2959-3b7a-4942-b22c-0fdb42d1abb6/dlgjy8t-598cbac5-66e4-49fd-a90a-aaa3da43229d.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiIvZi80MTRhMjk1OS0zYjdhLTQ5NDItYjIyYy0wZmRiNDJkMWFiYjYvZGxnank4dC01OThjYmFjNS02NmU0LTQ5ZmQtYTkwYS1hYWEzZGE0MzIyOWQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.g_wfZhkLtlzuIca4HQiLyQsLqV0L57FePQCUkfQEBWs"
  },
  {
    id: 7,
    vi: {
      benediction_title: "Chúc gia đình",
      benediction_text: "Chúc gia đình bạn luôn sum vầy, cha mẹ khỏe mạnh, con em thành đạt, và tình thương gia đình như mật ngọt trên lưỡi.",
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
    image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/414a2959-3b7a-4942-b22c-0fdb42d1abb6/dlgjy7r-e48dfcc5-c18b-4729-9c69-7334879e3795.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiIvZi80MTRhMjk1OS0zYjdhLTQ5NDItYjIyYy0wZmRiNDJkMWFiYjYvZGxnank3ci1lNDhkZmNjNS1jMThiLTQ3MjktOWM2OS03MzM0ODc5ZTM3OTUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.aVM6myho7DIUeNA_HTy6JQuQfDGZkyz3COkYONsmw9A"
  },
  {
    id: 8,
    vi: {
      benediction_title: "Chúc bình an",
      benediction_text: "Chúc bạn năm này bình an, yên ổn, thoát khỏi những rắc rối, ưu phiền, và mỗi ngày đều là một ngày tươi sáng.",
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
    image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/414a2959-3b7a-4942-b22c-0fdb42d1abb6/dlgjy92-7b47eb76-1352-4259-8f53-a5544fa7977f.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiIvZi80MTRhMjk1OS0zYjdhLTQ5NDItYjIyYy0wZmRiNDJkMWFiYjYvZGxnank5Mi03YjQ3ZWI3Ni0xMzUyLTQyNTktOGY1My1hNTU0NGZhNzk3N2YucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.rBPeFt6bUyCriNYHDXY3CUtvbIwyzka6eKuxO6sH-84"
  },
  {
    id: 9,
    vi: {
      benediction_title: "Chúc khôn ngoan",
      benediction_text: "Chúc bạn sáng suốt, có tầm nhìn dài hạn, đưa ra những quyết định đúng đắn, và luôn biết cách sống thông thái.",
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
    image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/414a2959-3b7a-4942-b22c-0fdb42d1abb6/dlgjy9l-30c2f18a-b130-4d7b-9c2d-a63335b5bf6b.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiIvZi80MTRhMjk1OS0zYjdhLTQ5NDItYjIyYy0wZmRiNDJkMWFiYjYvZGxnank5bC0zMGMyZjE4YS1iMTMwLTRkN2ItOWMyZC1hNjMzMzViNWJmNmIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.KfOTtn7gXPw9luEO9YYEi6Hkm6z2aiCCBJHDUt_5af8"
  },
  {
    id: 10,
    vi: {
      benediction_title: "Chúc tự tin",
      benediction_text: "Chúc bạn tự tin, dũng cảm, không sợ hãi trước những thử thách, và luôn giữ đầu cao đi về phía trước.",
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
    image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/414a2959-3b7a-4942-b22c-0fdb42d1abb6/dlgjy9h-19d940fa-909b-44c2-ac9e-4e77596bc762.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiIvZi80MTRhMjk1OS0zYjdhLTQ5NDItYjIyYy0wZmRiNDJkMWFiYjYvZGxnank5aC0xOWQ5NDBmYS05MDliLTQ0YzItYWM5ZS00ZTc3NTk2YmM3NjIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.GoEBbgys2sAnUDRkOVMzja5NAlTJTUNhFMLX9Ch1w3w"
  },
  {
    id: 11,
    vi: {
      benediction_title: "Chúc sáng tạo",
      benediction_text: "Chúc bạn lúc nào cũng sáng tạo, có những ý tưởng mới mẻ, tài năng được phát huy, và công trình của bạn nổi bật.",
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
    image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/414a2959-3b7a-4942-b22c-0fdb42d1abb6/dlgjya0-0b92096c-d817-4bdc-b0c8-a61dcacf6442.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiIvZi80MTRhMjk1OS0zYjdhLTQ5NDItYjIyYy0wZmRiNDJkMWFiYjYvZGxnanlhMC0wYjkyMDk2Yy1kODE3LTRiZGMtYjBjOC1hNjFkY2FjZjY0NDIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.U20mIiOT9VLPSisrFyYCgEUMP952ah8DqJyY5JGATEQ"
  },
  {
    id: 12,
    vi: {
      benediction_title: "Chúc tình bạn",
      benediction_text: "Chúc bạn có những người bạn thật, bạn tốt, sẵn sàng đứng cạnh và giúp đỡ khi bạn cần nhất.",
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
    image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/414a2959-3b7a-4942-b22c-0fdb42d1abb6/dlgjy6o-fc3d7531-e34c-41b2-a984-e01cfefeae59.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiIvZi80MTRhMjk1OS0zYjdhLTQ5NDItYjIyYy0wZmRiNDJkMWFiYjYvZGxgank2by1mYzNkNzUzMS1lMzRjLTQxYjItYTk4NC1lMDFjZmVmZWFlNTkucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.Mo4EQQ4_Ivcl6isjh9HPunGUlfhKdgcTvsNo71GemGQ"
  },
  {
    id: 13,
    vi: {
      benediction_title: "Chúc cân bằng",
      benediction_text: "Chúc bạn cân bằng giữa công việc và cuộc sống, giữa hai tay và tâm hồn, và mỗi ngày tươi tắn.",
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
    image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/414a2959-3b7a-4942-b22c-0fdb42d1abb6/dlgjyau-80ac2388-dcaa-481b-a570-2bc1d3716566.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiIvZi80MTRhMjk1OS0zYjdhLTQ5NDItYjIyYy0wZmRiNDJkMWFiYjYvZGxganlyYXUtODBhYzIzODgtZGNhYS00ODFiLWE1NzAtMmJjMWQzNzE2NTY2LnBuZyJ9XSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.UJECkL0y1THt4oLSN7TpipKOB4YovwzF-C4ie4EfDZc"
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
    image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/414a2959-3b7a-4942-b22c-0fdb42d1abb6/dlgjyb2-c5600d9c-9915-472b-894a-d3eebf82082b.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiIvZi80MTRhMjk1OS0zYjdhLTQ5NDItYjIyYy0wZmRiNDJkMWFiYjYvZGxnanliMi1jNTYwMGQ5Yy05OTE1LTQ3MmItODk0YS1kM2VlYmY4MjA4MmIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.te7MOuADIm8QnXQ1YJS1DKZnX9x7JtIybBBK136KsqY"
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
    image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/414a2959-3b7a-4942-b22c-0fdb42d1abb6/dlgjybc-d79fc2da-5a7a-4d5c-86f3-155a21537e58.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiIvZi80MTRhMjk1OS0zYjdhLTQ5NDItYjIyYy0wZmRiNDJkMWFiYjYvZGxnanliYy1kNzlmYzJkYS01YTdhLTRkNWMtODZmMy0xNTVhMjE1MzdlNTgucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.AFRzIJR5YDUpl03mqIa5mALs5PeBIN9l7J1q5jFrOjA"
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
    image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/414a2959-3b7a-4942-b22c-0fdb42d1abb6/dlgjyaf-9d8d4937-6b19-4e81-a7f8-f19adadf736c.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiIvZi80MTRhMjk1OS0zYjdhLTQ5NDItYjIyYy0wZmRiNDJkMWFiYjYvZGxganlhZi05ZDhkNDkzNy02YjE5LTRlODEtYTdmOC1mMTlhZGFkZjczNmMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.sVsGpbQG2wzKmofB_18Nb1JlBx4xL5Z6PkXykDUdk8g"
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

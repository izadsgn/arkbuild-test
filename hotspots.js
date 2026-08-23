// 画像上のクリック領域を定義する仕組み。
// 各ホットスポットは画像に対する％で位置指定 → 拡大縮小に追従します。
// t=top, l=left, w=width, h=height (すべて％), href=リンク先, title=ラベル

// すべてのページ共通：画像内ヘッダーのナビ
const HEADER_HOTSPOTS = [
  { t: 0.15, l: 4.0,  w: 14.0, h: 1.7, href: "index.html",      title: "ロゴ（TOPへ）" },
  { t: 0.15, l: 38.5, w: 5.0,  h: 1.7, href: "index.html",      title: "TOP" },
  { t: 0.15, l: 44.5, w: 7.0,  h: 1.7, href: "business.html",   title: "事業案内" },
  { t: 0.15, l: 52.5, w: 7.0,  h: 1.7, href: "company.html",    title: "企業情報" },
  { t: 0.15, l: 60.5, w: 7.0,  h: 1.7, href: "recruit.html",    title: "採用情報" },
  { t: 0.15, l: 69.0, w: 13.0, h: 1.7, href: "mailto:info@arkbuild.example", title: "お問い合わせ" },
  { t: 0.15, l: 85.0, w: 14.0, h: 1.7, href: "requirements.html", title: "エントリー" },
];

function renderHotspots(bodyHotspots) {
  const stage = document.querySelector(".stage");
  if (!stage) return;
  const all = HEADER_HOTSPOTS.concat(bodyHotspots || []);
  all.forEach((h) => {
    const a = document.createElement("a");
    a.className = "hotspot";
    a.href = h.href;
    a.title = h.title || "";
    a.style.top = h.t + "%";
    a.style.left = h.l + "%";
    a.style.width = h.w + "%";
    a.style.height = h.h + "%";
    stage.appendChild(a);
  });

  // デモ用：ボタン位置を光らせるトグル
  const btn = document.createElement("button");
  btn.className = "reveal-toggle";
  btn.type = "button";
  btn.textContent = "◎ ボタン位置を表示";
  btn.addEventListener("click", () => {
    const on = document.body.classList.toggle("reveal");
    btn.textContent = on ? "◎ ボタン位置を隠す" : "◎ ボタン位置を表示";
  });
  document.body.appendChild(btn);
}

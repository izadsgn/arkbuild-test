// 画像上のクリック領域を定義する仕組み。
// 各ホットスポットは画像に対する％で位置指定 → 拡大縮小に追従します。
// t=top, l=left, w=width, h=height (すべて％), href=リンク先, title=ラベル

// 全ページ共通ヘッダー：右上は「採用サイトはこちら」→ 採用情報ページ
const HEADER_NEW = [
  { t: 0.15, l: 5.0,  w: 14.0, h: 1.7, href: "index.html",    title: "ロゴ（TOPへ）" },
  { t: 0.15, l: 43.0, w: 7.0,  h: 1.7, href: "index.html",    title: "TOP" },
  { t: 0.15, l: 50.5, w: 9.0,  h: 1.7, href: "business.html", title: "事業案内" },
  { t: 0.15, l: 60.0, w: 9.0,  h: 1.7, href: "company.html",  title: "企業情報" },
  { t: 0.15, l: 68.0, w: 13.5, h: 1.7, href: "mailto:info@arkbuild.example", title: "お問い合わせ" },
  { t: 0.15, l: 83.5, w: 16.5, h: 1.7, href: "recruit.html",  title: "採用サイトはこちら" },
];

function renderHotspots(bodyHotspots, header) {
  const stage = document.querySelector(".stage");
  if (!stage) return;
  const all = (header || HEADER_NEW).concat(bodyHotspots || []);
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

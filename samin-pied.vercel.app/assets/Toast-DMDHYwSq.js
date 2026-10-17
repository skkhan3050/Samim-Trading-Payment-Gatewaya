function c(n, t = "", s = "success") {
  const o = document.getElementById("toast-container");
  if (!o) return;
  const e = document.createElement("div");
  (e.className = "toast"), e.setAttribute("role", "alert");
  const l =
    s === "success"
      ? '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>'
      : '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1D6FFF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>';
  e.innerHTML = `
    <div style="flex-shrink: 0; margin-top: 2px;">${l}</div>
    <div style="display: flex; flex-direction: column; gap: 3px; flex-grow: 1;">
      <div style="font-weight: 700; font-size: 0.925rem; color: #FFFFFF;">${n}</div>
      ${
        t
          ? `<div style="font-size: 0.825rem; color: #9AA7B8; line-height: 1.4;">${t}</div>`
          : ""
      }
    </div>
    <button type="button" aria-label="Close notification" style="color: #667386; hover: { color: #FFF }; padding: 2px;" class="toast-close-btn">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
    </button>
  `;
  const r = e.querySelector(".toast-close-btn"),
    i = () => {
      (e.style.opacity = "0"),
        (e.style.transform = "translateY(-10px)"),
        (e.style.transition = "all 0.25s ease"),
        setTimeout(() => e.remove(), 250);
    };
  r.addEventListener("click", i), o.appendChild(e), setTimeout(i, 4500);
}
export { c as s };

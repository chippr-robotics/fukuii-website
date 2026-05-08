/* ============================================================
 * Fukuii — landing page interactions
 * Vanilla JS. No deps. Reduced-motion aware.
 * ============================================================ */

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------- Theme toggle ---------- */
function initTheme() {
    const root = document.documentElement;
    const stored = localStorage.getItem('fk-theme');
    if (stored === 'light' || stored === 'dark') {
        root.setAttribute('data-theme', stored);
    } else {
        // honor system pref; remove attribute so CSS @media kicks in
        root.removeAttribute('data-theme');
    }
    const btn = document.getElementById('theme-toggle');
    if (!btn) return;
    btn.addEventListener('click', () => {
        const current = root.getAttribute('data-theme')
            || (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
        const next = current === 'dark' ? 'light' : 'dark';
        root.setAttribute('data-theme', next);
        localStorage.setItem('fk-theme', next);
    });
}

/* ---------- Sticky nav background on scroll ---------- */
function initNavScroll() {
    const nav = document.querySelector('.nav');
    if (!nav) return;
    const onScroll = () => {
        if (window.scrollY > 24) nav.classList.add('is-scrolled');
        else nav.classList.remove('is-scrolled');
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
}

/* ---------- Smooth-scroll for internal anchors ---------- */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach((a) => {
        a.addEventListener('click', (e) => {
            const id = a.getAttribute('href');
            if (!id || id === '#') return;
            const target = document.querySelector(id);
            if (!target) return;
            e.preventDefault();
            target.scrollIntoView({
                behavior: reduceMotion ? 'auto' : 'smooth',
                block: 'start',
            });
        });
    });
}

/* ---------- Reveal-on-scroll with stagger ---------- */
function initReveal() {
    const els = document.querySelectorAll('.reveal');
    if (!els.length) return;
    if (reduceMotion) {
        els.forEach((el) => el.classList.add('is-visible'));
        return;
    }
    const groupIndex = new Map();
    const io = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            const el = entry.target;
            const parent = el.parentElement;
            if (parent) {
                const idx = groupIndex.get(parent) || 0;
                el.style.setProperty('--reveal-delay', `${Math.min(idx, 6) * 80}ms`);
                groupIndex.set(parent, idx + 1);
            }
            el.classList.add('is-visible');
            io.unobserve(el);
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -10% 0px' });
    els.forEach((el) => io.observe(el));
}

/* ---------- Count-up stats ---------- */
function initCountUp() {
    const nums = document.querySelectorAll('[data-count]');
    if (!nums.length) return;

    const animate = (el) => {
        const target = Number(el.dataset.count);
        if (!Number.isFinite(target)) return;
        if (reduceMotion) {
            el.textContent = target.toLocaleString();
            return;
        }
        const duration = 1400;
        const start = performance.now();
        const ease = (t) => 1 - Math.pow(1 - t, 3);
        const tick = (now) => {
            const t = Math.min(1, (now - start) / duration);
            const value = Math.floor(target * ease(t));
            el.textContent = value.toLocaleString();
            if (t < 1) requestAnimationFrame(tick);
            else el.textContent = target.toLocaleString();
        };
        requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                animate(entry.target);
                io.unobserve(entry.target);
            }
        });
    }, { threshold: 0.4 });

    nums.forEach((n) => io.observe(n));
}

/* ---------- Feature tabs (keyboard-accessible) ---------- */
function initTabs() {
    const tablist = document.querySelector('.tablist');
    if (!tablist) return;
    const tabs = Array.from(tablist.querySelectorAll('[role="tab"]'));
    const indicator = tablist.querySelector('.tab-indicator');

    const moveIndicator = (tab) => {
        if (!indicator) return;
        const left = tab.offsetLeft;
        const width = tab.offsetWidth;
        indicator.style.left = `${left}px`;
        indicator.style.width = `${width}px`;
    };

    const activate = (tab, focus = false) => {
        tabs.forEach((t) => {
            const selected = t === tab;
            t.setAttribute('aria-selected', selected ? 'true' : 'false');
            t.setAttribute('tabindex', selected ? '0' : '-1');
            const panelId = t.getAttribute('aria-controls');
            const panel = document.getElementById(panelId);
            if (panel) {
                if (selected) panel.removeAttribute('hidden');
                else panel.setAttribute('hidden', '');
            }
        });
        moveIndicator(tab);
        if (focus) tab.focus();
    };

    tabs.forEach((tab) => {
        tab.addEventListener('click', () => activate(tab));
        tab.addEventListener('keydown', (e) => {
            const idx = tabs.indexOf(tab);
            let nextIdx = null;
            switch (e.key) {
                case 'ArrowRight': nextIdx = (idx + 1) % tabs.length; break;
                case 'ArrowLeft':  nextIdx = (idx - 1 + tabs.length) % tabs.length; break;
                case 'Home':       nextIdx = 0; break;
                case 'End':        nextIdx = tabs.length - 1; break;
                default: return;
            }
            e.preventDefault();
            activate(tabs[nextIdx], true);
        });
    });

    // initial position
    const initial = tabs.find((t) => t.getAttribute('aria-selected') === 'true') || tabs[0];
    if (initial) {
        // small delay so layout has settled
        requestAnimationFrame(() => moveIndicator(initial));
    }
    window.addEventListener('resize', () => {
        const active = tabs.find((t) => t.getAttribute('aria-selected') === 'true');
        if (active) moveIndicator(active);
    });
}

/* ---------- Copy-to-clipboard for code blocks ---------- */
function initCopy() {
    document.querySelectorAll('.copy-btn').forEach((btn) => {
        btn.addEventListener('click', async () => {
            const block = btn.closest('.codeblock');
            if (!block) return;
            const code = block.querySelector('pre');
            if (!code) return;
            const text = code.innerText;
            const label = btn.querySelector('.copy-label');
            try {
                await navigator.clipboard.writeText(text);
                btn.classList.add('is-copied');
                if (label) label.textContent = 'Copied';
                setTimeout(() => {
                    btn.classList.remove('is-copied');
                    if (label) label.textContent = 'Copy';
                }, 1800);
            } catch {
                if (label) label.textContent = 'Press Ctrl+C';
                setTimeout(() => { if (label) label.textContent = 'Copy'; }, 1800);
            }
        });
    });
}

/* ---------- Glass card mouse-tracked light ---------- */
function initGlassGlow() {
    if (reduceMotion) return;
    document.querySelectorAll('.glass').forEach((card) => {
        card.addEventListener('pointermove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;
            card.style.setProperty('--mx', `${x}%`);
            card.style.setProperty('--my', `${y}%`);
        });
    });
}

/* ---------- Hex-grid canvas (hero background) ---------- */
function initHexCanvas() {
    const canvas = document.getElementById('hex-canvas');
    if (!canvas || reduceMotion) {
        if (canvas) canvas.style.display = 'none';
        return;
    }
    const ctx = canvas.getContext('2d');
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0;
    let h = 0;
    let nodes = [];
    let lastT = 0;
    let frame = 0;

    const HEX_RADIUS = 36;
    const HEX_DX = HEX_RADIUS * Math.sqrt(3);
    const HEX_DY = HEX_RADIUS * 1.5;

    const themeColors = () => {
        const root = document.documentElement;
        const isLight = root.getAttribute('data-theme') === 'light'
            || (!root.hasAttribute('data-theme') && window.matchMedia('(prefers-color-scheme: light)').matches);
        return isLight
            ? { line: 'rgba(45, 80, 22, 0.16)', glow: 'rgba(184, 150, 79, 0.55)', node: 'rgba(45, 80, 22, 0.5)' }
            : { line: 'rgba(214, 181, 107, 0.10)', glow: 'rgba(214, 181, 107, 0.85)', node: 'rgba(77, 138, 40, 0.6)' };
    };
    let colors = themeColors();

    const buildNodes = () => {
        nodes = [];
        const cols = Math.ceil(w / HEX_DX) + 2;
        const rows = Math.ceil(h / HEX_DY) + 2;
        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                const x = c * HEX_DX + (r % 2 ? HEX_DX / 2 : 0);
                const y = r * HEX_DY;
                nodes.push({
                    x, y,
                    phase: Math.random() * Math.PI * 2,
                    speed: 0.3 + Math.random() * 0.6,
                });
            }
        }
    };

    const drawHex = (cx, cy, radius) => {
        ctx.beginPath();
        for (let i = 0; i < 6; i++) {
            const a = (Math.PI / 3) * i + Math.PI / 6;
            const x = cx + radius * Math.cos(a);
            const y = cy + radius * Math.sin(a);
            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
        }
        ctx.closePath();
    };

    const resize = () => {
        const heroEl = document.querySelector('.hero');
        const heroH = heroEl ? heroEl.offsetHeight : window.innerHeight;
        w = window.innerWidth;
        h = heroH;
        canvas.width = w * dpr;
        canvas.height = h * dpr;
        canvas.style.width = `${w}px`;
        canvas.style.height = `${h}px`;
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        buildNodes();
    };

    const render = (t) => {
        if (lastT === 0) lastT = t;
        const dt = (t - lastT) / 1000;
        lastT = t;
        frame++;

        ctx.clearRect(0, 0, w, h);

        // base hex grid (faint outlines)
        ctx.strokeStyle = colors.line;
        ctx.lineWidth = 1;
        for (let i = 0; i < nodes.length; i++) {
            const n = nodes[i];
            drawHex(n.x, n.y, HEX_RADIUS - 2);
            ctx.stroke();
        }

        // pulsing nodes
        const time = t / 1000;
        for (let i = 0; i < nodes.length; i++) {
            const n = nodes[i];
            const pulse = (Math.sin(time * n.speed + n.phase) + 1) / 2; // 0..1
            if (pulse > 0.85) {
                const alpha = (pulse - 0.85) / 0.15;
                ctx.fillStyle = colors.glow;
                ctx.globalAlpha = alpha * 0.7;
                ctx.beginPath();
                ctx.arc(n.x, n.y, 3 + alpha * 3, 0, Math.PI * 2);
                ctx.fill();
                ctx.globalAlpha = 1;

                // occasional connecting line to a nearby node
                if (frame % 4 === 0 && i % 7 === 0) {
                    const partner = nodes[(i + 1) % nodes.length];
                    if (partner) {
                        const dx = partner.x - n.x;
                        const dy = partner.y - n.y;
                        if (Math.hypot(dx, dy) < HEX_DX * 1.3) {
                            ctx.strokeStyle = colors.glow;
                            ctx.globalAlpha = alpha * 0.35;
                            ctx.lineWidth = 1.2;
                            ctx.beginPath();
                            ctx.moveTo(n.x, n.y);
                            ctx.lineTo(partner.x, partner.y);
                            ctx.stroke();
                            ctx.globalAlpha = 1;
                        }
                    }
                }
            } else if (pulse > 0.5) {
                ctx.fillStyle = colors.node;
                ctx.globalAlpha = (pulse - 0.5) * 0.6;
                ctx.beginPath();
                ctx.arc(n.x, n.y, 1.5, 0, Math.PI * 2);
                ctx.fill();
                ctx.globalAlpha = 1;
            }
        }

        // dt is referenced once for lint friendliness
        if (dt > 0.5) lastT = t;

        requestAnimationFrame(render);
    };

    resize();
    window.addEventListener('resize', resize);

    // re-pick theme colors when toggled
    const themeObs = new MutationObserver(() => { colors = themeColors(); });
    themeObs.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });

    requestAnimationFrame(render);
}

/* ---------- Boot ---------- */
function boot() {
    initTheme();
    initNavScroll();
    initSmoothScroll();
    initReveal();
    initCountUp();
    initTabs();
    initCopy();
    initGlassGlow();
    initHexCanvas();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
} else {
    boot();
}

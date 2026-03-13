/* ============================================
   main.js — DAG canvas + scroll reveals + nav
   ============================================ */

(function () {
    'use strict';

    // ---- Mobile menu ----
    document.addEventListener('DOMContentLoaded', function () {
        const toggle = document.querySelector('.menu-toggle');
        const menu = document.querySelector('.nav-menu');
        if (!toggle || !menu) return;

        toggle.addEventListener('click', function () {
            const open = toggle.getAttribute('aria-expanded') === 'true';
            toggle.setAttribute('aria-expanded', !open);
            menu.classList.toggle('active');
            toggle.classList.toggle('active');
        });

        menu.addEventListener('click', function (e) {
            if (e.target.closest('a')) {
                toggle.setAttribute('aria-expanded', 'false');
                menu.classList.remove('active');
                toggle.classList.remove('active');
            }
        });

        document.addEventListener('click', function (e) {
            if (!toggle.contains(e.target) && !menu.contains(e.target)) {
                toggle.setAttribute('aria-expanded', 'false');
                menu.classList.remove('active');
                toggle.classList.remove('active');
            }
        });

        // Smooth scroll
        document.querySelectorAll('a[href^="#"]').forEach(function (a) {
            a.addEventListener('click', function (e) {
                e.preventDefault();
                var t = document.querySelector(this.getAttribute('href'));
                if (t) t.scrollIntoView({ behavior: 'smooth', block: 'start' });
            });
        });
    });

    // ---- Intersection Observer for .reveal ----
    document.addEventListener('DOMContentLoaded', function () {
        var els = document.querySelectorAll('.reveal');
        if (!els.length) return;

        if (!('IntersectionObserver' in window)) {
            // Fallback: show everything
            els.forEach(function (el) { el.classList.add('visible'); });
            return;
        }

        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

        els.forEach(function (el) { observer.observe(el); });
    });

    // ---- DAG Canvas ----
    // Draws a slowly drifting network of nodes and edges,
    // visually referencing the causal DAG at the heart of the theory.
    (function dagCanvas() {
        var canvas = document.getElementById('dag-canvas');
        if (!canvas) return;
        var ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Respect reduced motion
        var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        var nodes = [];
        var NODE_COUNT = 0;
        var CONNECT_DIST = 0;
        var dpr = 1;
        var w = 0, h = 0;

        function resize() {
            dpr = window.devicePixelRatio || 1;
            w = window.innerWidth;
            h = window.innerHeight;
            canvas.width = w * dpr;
            canvas.height = h * dpr;
            canvas.style.width = w + 'px';
            canvas.style.height = h + 'px';
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

            // Scale node count to viewport
            var area = w * h;
            NODE_COUNT = Math.min(Math.max(Math.floor(area / 18000), 30), 120);
            CONNECT_DIST = Math.min(w, h) * 0.18;

            // Re-seed if needed
            while (nodes.length < NODE_COUNT) nodes.push(makeNode());
            if (nodes.length > NODE_COUNT) nodes.length = NODE_COUNT;
        }

        function makeNode() {
            return {
                x: Math.random() * w,
                y: Math.random() * h,
                vx: (Math.random() - 0.5) * 0.15,
                vy: (Math.random() - 0.5) * 0.15,
                r: 1.2 + Math.random() * 1.0,
                opacity: 0.25 + Math.random() * 0.35
            };
        }

        function tick() {
            ctx.clearRect(0, 0, w, h);

            // Move
            for (var i = 0; i < nodes.length; i++) {
                var n = nodes[i];
                if (!prefersReduced) {
                    n.x += n.vx;
                    n.y += n.vy;
                    // Wrap
                    if (n.x < -20) n.x = w + 20;
                    if (n.x > w + 20) n.x = -20;
                    if (n.y < -20) n.y = h + 20;
                    if (n.y > h + 20) n.y = -20;
                }
            }

            // Draw edges (directed — only i → j where j > i, simulating DAG direction)
            for (var i = 0; i < nodes.length; i++) {
                for (var j = i + 1; j < nodes.length; j++) {
                    var dx = nodes[j].x - nodes[i].x;
                    var dy = nodes[j].y - nodes[i].y;
                    var dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < CONNECT_DIST) {
                        var alpha = (1 - dist / CONNECT_DIST) * 0.12;
                        ctx.beginPath();
                        ctx.moveTo(nodes[i].x, nodes[i].y);
                        ctx.lineTo(nodes[j].x, nodes[j].y);
                        ctx.strokeStyle = 'rgba(79, 143, 247, ' + alpha + ')';
                        ctx.lineWidth = 0.5;
                        ctx.stroke();
                    }
                }
            }

            // Draw nodes
            for (var i = 0; i < nodes.length; i++) {
                var n = nodes[i];
                ctx.beginPath();
                ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(79, 143, 247, ' + n.opacity * 0.5 + ')';
                ctx.fill();
            }

            requestAnimationFrame(tick);
        }

        resize();
        window.addEventListener('resize', debounce(resize, 200));
        requestAnimationFrame(tick);
    })();

    // ---- Utility ----
    function debounce(fn, ms) {
        var timer;
        return function () {
            clearTimeout(timer);
            timer = setTimeout(fn, ms);
        };
    }
})();

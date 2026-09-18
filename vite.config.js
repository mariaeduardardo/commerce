import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
var securityHeadersPlugin = {
    name: 'security-headers',
    configureServer: function (server) {
        server.middlewares.use(function (_req, res, next) {
            res.setHeader('Content-Security-Policy', "default-src 'self'; base-uri 'self'; form-action 'self' https://wa.me; img-src 'self' data: blob: https:; style-src 'self' 'unsafe-inline'; font-src 'self' data:; script-src 'self' 'unsafe-inline' 'unsafe-eval'; connect-src 'self' https:; frame-ancestors 'none'; object-src 'none'; upgrade-insecure-requests;");
            res.setHeader('X-Frame-Options', 'SAMEORIGIN');
            res.setHeader('X-Content-Type-Options', 'nosniff');
            res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
            res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
            next();
        });
    },
    configurePreviewServer: function (server) {
        server.middlewares.use(function (_req, res, next) {
            res.setHeader('Content-Security-Policy', "default-src 'self'; base-uri 'self'; form-action 'self' https://wa.me; img-src 'self' data: blob: https:; style-src 'self' 'unsafe-inline'; font-src 'self' data:; script-src 'self'; connect-src 'self' https:; frame-ancestors 'none'; object-src 'none'; upgrade-insecure-requests;");
            res.setHeader('X-Frame-Options', 'SAMEORIGIN');
            res.setHeader('X-Content-Type-Options', 'nosniff');
            res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
            res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
            next();
        });
    },
};
export default defineConfig({
    base: '/commerce/',
    plugins: [react(), securityHeadersPlugin],
    server: {
        host: '0.0.0.0',
        port: 3000,
        open: false,
    },
    preview: {
        host: '0.0.0.0',
        port: 4173,
        open: false,
    },
});

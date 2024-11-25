import { createProxyMiddleware } from "http-proxy-middleware";

export default createProxyMiddleware({
  target: "https://api.pintu.co.id/v2",
  changeOrigin: true,
  pathRewrite: {
    "^/api": "",
  },
});
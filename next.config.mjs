/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // React Strict 모드 활성화

  // 앱 디렉토리 활성화 (Next.js 13 이상에서 사용하는 경우)
  // 앱 디렉토리를 사용하려면 app 디렉토리가 있어야 함
  experimental: {
    appDir: true,
  },

  // 최신 Next.js 버전에서 자동으로 SWC로 최적화되므로 별도로 설정할 필요 없음
};

export default nextConfig;

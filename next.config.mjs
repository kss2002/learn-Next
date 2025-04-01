/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // React Strict 모드 활성화
  swcMinify: true, // SWC를 사용한 빌드 최적화

  experimental: {
    appDir: true, // 앱 디렉토리 구조 활성화 (Next.js 13 이상에서 필요)
  },

  // 서버리스 환경에서 빌드할 경우 `target`을 serverless로 설정
  target: 'serverless',
};

export default nextConfig;

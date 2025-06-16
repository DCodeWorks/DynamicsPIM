/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol: 'https',
                hostname: 'cdn.hudson.com.mt',
                port:'',
                pathname:'/images/**',
            }
        ]
    }
};

export default nextConfig;

import { ConfigProps } from "@/types/config";

const config = {
    appName: "Ken Mwangi",
    appDescription: "Personal portfolio for Ken Mwangi showcasing fullstack development, blog, personal development and technical writing",
    domainName: "kenmwangi-com.vercel.app",
    auth: {
        loginUrl: "/api/auth/signin",
        callbackUrl: "/dashboard"
    }
} as ConfigProps

export default config
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Github } from "lucide-react";
import "../../Signup/Page.css";


export default function Page() {
  return (
    <div className="flex min-h-screen bg-black">
      {/* Left Section */}
      <div className="relative hidden w-1/2 p-8 lg:block">
        <div className="h-full w-full overflow-hidden rounded-[40px] bg-gradient-to-b from-purple-400 via-purple-600 to-black">
          <div className="flex h-full flex-col items-center justify-center px-8 text-center text-white">
            <div className="mb-8">
              <h1 className="text-2xl font-semibold">Flowers&Saints</h1>
            </div>
            <h2 className="mb-6 text-4xl font-bold">Get Started with Us</h2>
            <p className="mb-12 text-lg">Complete these easy steps to register your account.</p>

            <div className="w-full max-w-sm space-y-4">
              {["Sign up your account", "Set up your workspace", "Set up your profile"].map((step, index) => (
                <div key={index} className={`rounded-lg p-4 backdrop-blur-sm ${index === 0 ? "bg-white/10" : "bg-white/5"}`}>
                  <div className="flex items-center gap-4">
                    <span className={`flex h-8 w-8 items-center justify-center rounded-full ${index === 0 ? "bg-white text-black" : "bg-white/20 text-white"}`}>
                      {index + 1}
                    </span>
                    <span className="text-lg">{step}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex w-full items-center justify-center bg-black p-6 lg:w-1/2">
        <div className="w-full max-w-md rounded-[40px] p-12">
          <div className="mx-auto max-w-sm">
            <h2 className="mb-2 text-3xl font-bold text-white">Sign Up Account</h2>
            <p className="mb-8 text-gray-400">Enter your personal data to create your account.</p>

            <div className="mb-8 grid gap-4">
              <Button variant="outline" className="h-12">
                <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                </svg>
                Google
              </Button>
              <Button variant="outline" className="h-12">
                <Github className="mr-2 h-5 w-5" />
                Github
              </Button>
            </div>

            <div className="relative mb-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-800"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-black px-2 text-gray-400">Or</span>
              </div>
            </div>

            <form className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2">
                <Input className="h-12 border-gray-800 bg-gray-900 text-white placeholder:text-gray-400" placeholder="First Name" type="text" />
                <Input className="h-12 border-gray-800 bg-gray-900 text-white placeholder:text-gray-400" placeholder="Last Name" type="text" />
              </div>

              <Input className="h-12 border-gray-800 bg-gray-900 text-white placeholder:text-gray-400" placeholder="Email Address" type="email" />

              <div className="space-y-2">
                <Input className="h-12 border-gray-800 bg-gray-900 text-white placeholder:text-gray-400" placeholder="Password" type="password" />
                <p className="text-sm text-gray-400">Must be at least 8 characters.</p>
              </div>

              <Button className="h-12 w-full bg-white text-black hover:bg-gray-100">Sign Up</Button>

              <p className="text-center text-sm text-gray-400">
                Already have an account?{" "}
                <a href="/login" className="text-white hover:underline">
                  Log in
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

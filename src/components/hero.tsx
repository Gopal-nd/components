import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function Hero() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-24">
      <div className="space-y-8">
        <h1 className="text-4xl md:text-7xl font-bold tracking-tight text-center max-w-4xl mx-auto">
          Remarkable Websites for Fast-Growing Startups
        </h1>
        <p className="text-xl text-zinc-600 max-w-2xl mx-auto text-center">
          Get leads and stand out with a new remarkable website that reflects your business goals and delivers the message, easy and fast
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button 
            size="lg" 
            className="min-w-[200px] h-12 text-base bg-black hover:bg-zinc-800 text-white rounded-full"
          >
            Book an intro call
          </Button>
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              {[...Array(5)].map((_, i) => (
                <Avatar key={i} className="border-2 border-white w-8 h-8">
                  <AvatarImage src={`https://img.freepik.com/premium-vector/people-saving-money_24908-51568.jpg?semt=ais_hybrid`} />
                  <AvatarFallback>U{i + 1}</AvatarFallback>
                </Avatar>
              ))}
            </div>
            <span className="text-sm text-zinc-600">
              Trusted by industry leaders
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}


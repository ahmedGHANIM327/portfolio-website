import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Briefcase, GraduationCap } from "lucide-react"

const Career = () => {
  return (
    <section className="pt-8 xl:pt-16">
        <div className="container mx-auto">
            <Tabs defaultValue="account" className="w-full flex flex-col items-center">
                <TabsList className="w-full max-w-[800px] bg-accent xl:py-6 py-4 text-foreground">
                    <TabsTrigger value="account" className="gap-x-2 flex justify-center items-center w-1/2 xl:text-lg text-sm data-[state=active]:bg-primary data-[state=active]:text-white">
                        <Briefcase />
                        Professional Career
                    </TabsTrigger>
                    <TabsTrigger value="password" className="gap-x-2 flex justify-center items-center w-1/2 xl:text-lg text-sm data-[state=active]:bg-primary data-[state=active]:text-white">
                        <GraduationCap />
                        Academic Career
                    </TabsTrigger>
                </TabsList>
                <TabsContent value="account">Make changes to your account here.</TabsContent>
                <TabsContent value="password">Change your password here.</TabsContent>
            </Tabs>
        </div>
    </section>
  )
}

export default Career
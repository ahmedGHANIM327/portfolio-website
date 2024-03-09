import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Briefcase, GraduationCap } from "lucide-react"
import Timeline from "../shared/Timeline"

const Career = () => {
  return (
    <section className="pt-8 xl:pt-16">
        <div className="container mx-auto">
            <Tabs defaultValue="experiences" className="w-full flex flex-col items-center">
                <TabsList className="w-full max-w-[800px] bg-accent xl:py-6 py-4 text-foreground mb-4">
                    <TabsTrigger value="experiences" className="gap-x-2 flex justify-center items-center w-1/2 xl:text-lg text-sm data-[state=active]:bg-primary data-[state=active]:text-white">
                        <Briefcase />
                        Professional Career
                    </TabsTrigger>
                    <TabsTrigger value="education" className="gap-x-2 flex justify-center items-center w-1/2 xl:text-lg text-sm data-[state=active]:bg-primary data-[state=active]:text-white">
                        <GraduationCap />
                        Academic Career
                    </TabsTrigger>
                </TabsList>
                <TabsContent value="experiences" className="w-full">
                    <Timeline type="experiences"/>
                </TabsContent>
                <TabsContent value="education" className="w-full">
                    <Timeline type="education"/>
                </TabsContent>
            </Tabs>
        </div>
    </section>
  )
}

export default Career
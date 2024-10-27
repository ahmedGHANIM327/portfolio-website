"use client";

import Link from "next/link";

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { Button } from "../ui/button";
import ProjectSmallCard from "../shared/ProjectSmallCard";
import { projects } from "@/data/projects";
import { ArrowUpRight } from "lucide-react";

const RecentProjects = () => {
  return (
    <section className="pt-8 xl:pt-16 my-4">
        <div className="container mx-auto flex flex-wrap gap-y-4 xl:gap-x-[2%] items-center ">
            <div className="xl:w-[29%] mx-auto xl:mx-0 flex flex-col items-center xl:items-start">
                <h2 className="text-4xl font-bold relative mb-4">Latest Projects</h2>
                <p className="xl:text-lg text-base font-light text-justify text-muted-foreground mb-4">
                    Discover the latest additions to my portfolio, showcasing innovative solutions crafted
                    to enhance user experiences and streamline processes.
                </p>
                <Link href='/projects'>
                    <Button size={'lg'} className="mt-2 gap-x-3 mb-4">
                        All Projects
                        <ArrowUpRight size={18}/>
                    </Button>
                </Link>
            </div>
            <div className="xl:w-[69%] w-[100%]">
                <Swiper
                    slidesPerView={1}
                    breakpoints={{
                        600: {
                            slidesPerView :2
                        }
                    }}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    modules={[Pagination, Autoplay]}
                    className="!pb-[40px]"
                >
                    {projects.map((project, index) => {
                        return <SwiperSlide key={index}>
                            <ProjectSmallCard project={project}/>
                        </SwiperSlide>
                    })}
                </Swiper>
            </div>
        </div>
    </section>
  )
}

export default RecentProjects
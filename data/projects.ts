export type Project = {
    id: number;
    images: string[];
    name: string;
    short_description?:string,
    description: string[];
    tools: string[];
    preview:string;
    code:string;
    order?: number;
}

export const projects: Project[] = [
    {
        id: 0,
        images: [
            '/projects/shifaelib/shifaelib-agenda.png',
            '/projects/shifaelib/shifaelib-users.png',
            '/projects/shifaelib/shifaelib-cabinet-data.png'
        ],
        name: 'Shifaelib',
        short_description:'Shifaelib is an advanced web platform designed to streamline the management of medical cabinets....',
        description: [
            `Shifaelib is an advanced web platform designed to streamline the management of medical cabinets, providing a 
            seamless experience for healthcare professionals. It enables doctors to manage their accounts securely with 
            NextAuth authentication while offering a dynamic and fully customizable service schema tailored to their 
            specific needs. Additionally, Shifaelib facilitates comprehensive patient data management, including treatments 
            and medical history, ensuring efficiency and organization.`,

            `One of its standout features is the intelligent agenda, which optimizes patient session management. This system 
            allows for effortless scheduling, rescheduling, and tracking of sessions, ensuring a smooth workflow for medical 
            professionals. The platform’s robust architecture, powered by NestJS, NextJS, PostgreSQL, and Zustand for state 
            management, guarantees high performance, scalability, and a responsive user experience.`,

            `To maintain reliability and automation, Shifaelib integrates Jest for rigorous testing, GitHub Actions for 
            continuous integration and deployment, and Docker with Portainer for streamlined deployment. Furthermore, 
            RabbitMQ enables asynchronous email notifications, ensuring timely communication without affecting system 
            performance. With its powerful tech stack and well-thought-out features, Shifaelib is a complete solution for 
            modern medical practice management.`,
        ],
        tools: ["NestJS", "NextJS", "PostgreSQL", "MongoDB", "RabbitMQ", "Jenkins", "Jest", "Stripe"],
        preview : "https://app.recette.shifaelib.com",
        code : ""
    },
    {
        id: 1,
        images: ['/projects/evently/evently-hero.png'],
        name: 'Events Organization',
        short_description:'Events Organization is a comprehensive platform designed to revolutionize event organization and attendance...',
        description: [
            `Events Organization is a comprehensive platform designed to revolutionize event organization and attendance. 
            Leveraging cutting-edge technologies including Next.js, MongoDB, Tailwind CSS, and Stripe, alongside 
            UploadThing for seamless file uploads, Evently offers an intuitive and dynamic solution for creating, 
            sharing, and participating in events.`,

            `At its core, Evently simplifies the event management process by allowing users to effortlessly create 
            and share events with others. Whether it's a concert, workshop, conference, or any other gathering, 
            Evently provides a user-friendly interface for organizers to showcase their events and manage bookings.`,

            `One of Evently's standout features is its robust ticketing system powered by Stripe. Users can easily 
            purchase tickets for their desired events, securely and conveniently, directly through the platform. 
            With integrated payment processing, Evently ensures a smooth transaction experience for both event 
            organizers and attendees.`,

            `Furthermore, Evently prioritizes user engagement and connectivity by incorporating Clerk for seamless authentication 
            and user management. This allows attendees to easily log in, purchase tickets, and view their reservations. 
            Additionally, users can interact with the platform to discover new events, share upcoming gatherings with their network, 
            and stay informed about the events they plan to attend.`,

            `With Evently, the entire event experience is streamlined and enhanced, from event creation to ticket purchase and attendee management. 
            Whether you're an organizer looking to host an event or an attendee seeking exciting gatherings to attend, 
            Evently provides a comprehensive and user-friendly solution for all your event needs.`
        ],
        tools: ["React", "Nextjs", "MongoDB", "Stripe", "TailwindCSS"],
        preview : "",
        code : "https://github.com/ahmedGHANIM327/events-organization"
    },
    {
        id: 2,
        images: ['/projects/clothing-ecommerce.JPG'],
        name: 'Clothing Ecommerce',
        short_description:'Clothing Ecommerce web development project I created using React, Material-UI, and Sass...',
        description: [
            `Clothing Ecommerce web development project I created using React, Material-UI, and Sass.It is a modern and robust web application
             designed to provide an engaging and intuitive shopping experience for customers.`,
            `To ensure secure user authentication and seamless data management, I integrated Firebase into this project. 
             This allowed me to implement secure authentication for users, as well as store and manage my application data 
             in the cloud.`,
            `To extract this data and ensure optimal performance, I used GraphQL, a powerful query language that allows me to retrieve
            only the data I need from my database. This helped me to avoid unnecessary data transfer, thereby enhancing the performance
            and responsiveness of my application.`,
            `To manage the status and share data between components, I used Redux with Redux Toolkit, a state management library that 
            simplifies the process of managing and sharing data in a React application. This allowed me to easily update and share 
            state between components, ensuring a seamless and consistent user experience.`,
            `Overall, this ecommerce web development project is a modern, scalable, and user-friendly application that leverages 
            the latest web technologies to deliver a compelling shopping experience for customers.`
        ],
        tools: ["React","Redux","Material-UI","Sass","Firebase","GraphQL","Stripe"],
        preview : "",
        code : "https://github.com/ahmedGHANIM327/Clothing-Ecommerce"
    },
    {
        id: 3,
        images: [
            '/projects/real-estate-app/real-estate-app.png'
        ],
        name: 'Real Estate App',
        short_description:'This Real Estate mobile application is designed to simplify the management and discovery of real estate listings...',
        description: [
            `This Real Estate mobile application is designed to simplify the management and discovery of real estate listings. 
            Built with React Native and powered by Appwrite, it offers a seamless and secure experience for both property owners 
            and potential buyers or renters. Users can effortlessly create, manage, and browse property announcements while 
            benefiting from a modern and intuitive interface styled with Tailwind CSS.`,
            `Authentication is streamlined through Google Auth, ensuring secure and quick access to the platform. With Appwrite 
            handling backend services, the app provides efficient data management, real-time updates, and a smooth user experience. 
            Whether you're looking to list a property or find your next home, this app delivers a fast, reliable, and user-friendly 
            solution for the real estate market.`
        ],
        tools: ["React Native","Appwriter", "Google Auth", "TailwindCSS"],
        preview : "",
        code : "https://github.com/ahmedGHANIM327/real-estate-mobile-app"
    }
]

// 1. Shifaelib
// 2. Real estate mobile app
// 3. Evently
// 4. Clothing Ecommerce

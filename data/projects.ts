export type Project = {
    id: number;
    image: string;
    name: string;
    short_description?:string,
    description: string[];
    tools: string[];
    preview:string;
    code:string;
}

export const projects: Project[] = [
    {
        id: 0,
        image: '/projects/clothing-ecommerce.JPG',
        name: 'SantePro',
        short_description:'SantePro is a SaaS platform designed to streamline the management of private practices....',
        description: [
            `SantePro is a SaaS platform designed to streamline the management of private practices. This project leverages
            a microservices architecture to ensure scalability and maintainability, utilizing NestJS for the backend and RabbitMQ
            for efficient inter-service communication. The frontend is built with Next.js and styled with Tailwind CSS, 
            providing a responsive and user-friendly interface.`,

            `Key features of this platform include an interactive agenda for session organization, detailed patient management, 
            and robust payment management capabilities. The agenda integrates with popular calendar systems, allowing for seamless 
            scheduling and rescheduling of appointments. Patient management is enhanced with secure record-keeping and integrated 
            messaging features, ensuring compliance with data protection regulations.`,

            `The payment management system tracks and organizes payments received by the practitioner, generating automated 
            invoices and supporting various payment methods and currencies. This feature simplifies the billing process, 
            allowing practitioners to monitor and manage their revenue efficiently. Additionally, service management 
            capabilities allow for the easy updating and tracking of services offered, helping practices optimize their 
            offerings based on patient preferences`,

            `For database management, the platform uses PostgreSQL for relational data and MongoDB for unstructured data, 
            ensuring flexibility and reliability. Continuous integration and deployment pipelines are managed with Jenkins, 
            enabling efficient CI/CD processes. I also implemented unit tests using Jest, ensuring code quality and reliability 
            throughout the development process. This project showcases my expertise in building scalable, user-centric solutions 
            with a focus on performance and security.`
        ],
        tools: ["NestJS", "NextJS", "PostgreSQL", "MongoDB", "RabbitMQ", "Jenkins", "Jest", "Stripe"],
        preview : "",
        code : ""
    },
    {
        id: 1,
        image: '/projects/clothing-ecommerce.JPG',
        name: 'Evently',
        short_description:'Evently is a comprehensive platform designed to revolutionize event organization and attendance...',
        description: [
            `Evently is a comprehensive platform designed to revolutionize event organization and attendance. 
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
        preview : "https://events-organization.vercel.app/",
        code : "https://github.com/ahmedGHANIM327/Clothing-Ecommerce"
    },
    {
        id: 2,
        image: '/projects/clothing-ecommerce.JPG',
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
        preview : "https://clothing-ecommerce-gold.vercel.app/",
        code : "https://github.com/ahmedGHANIM327/Clothing-Ecommerce"
    }
]

// 4. Smart Brain
// 5. Artisan7


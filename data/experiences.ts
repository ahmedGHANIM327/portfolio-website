export type Experience = {
    id: number;
    company: string;
    location: string;
    date: string;
    poste: string;
    description: string[];
    skills: string[];
}

export const experiences: Experience[] = 
[
    {
        "id":0,
        "company":"Repam",
        "location":"Lyon , France",
        "date": "08/2023 - Now",
        "poste": "Full Stack Developer",
        "description": [
            "Developed and maintained multiple web applications using a JavaScript/TypeScript stack (React, Next.js)",
            "Implemented backend functionalities using Nest.js and Express and GraphQL to efficiently handle data retrieval, storage, and manipulation, ensuring optimal performance and scalability.",
            "Collaborated with cross-functional agile teams to plan, prioritize, and execute project tasks",
            "Designed and implemented intuitive user interfaces using Tailwind CSS",
            "Created comprehensive unit and integration tests for both front-end and back-end applications using Jest and Vitest",
            "Implemented continuous integration and continuous deployment (CI/CD) pipelines using Docker, GitHub Actions, and Drone, automating the deployment process and ensuring code quality and consistency.",
            "Actively engaged in DevOps tasks, including container management with Portainer, monitoring application performance, and troubleshooting issues to ensure seamless operation in production environments.",
            "Code quality monitoring with SonarQube",
            "Monitor test and production environments with NewRelic"
        ],
        "skills":[
            "NodeJS","React","NextJS","NestJS","ExpressJS","MongoDB","PostgreSQL","GraphQL","RabbitMQ","Docker"
        ]
    },
    {
        "id":1,
        "company":"CAPGEMINI",
        "location":"Toulouse , France",
        "date": "09/2021 - 08/2023",
        "poste": "Software Enginee",
        "description": [
            "Data engineer activity as part of an agile project in the aeronautics sector. - Skywise Platform",
            "Data visualization using Contour/Palantir.",
            "Back-end development using Spark-SQL, PySpark and Java.",
            "Front-End and Dashboarding development using Slate, React and PostgreSQL.",
            "Participation in PIs/Sprints demos (Demo for the client)."
        ],
        "skills":[
            "PySpark","PostgreSQL","Javascript","React","AWS","Java","Palantir","React"
        ]
    },
    {
        "id":2,
        "company":"Capitole Formation",
        "location":"Toulouse , France",
        "date": "06/2021 - 08/2021",
        "poste": "Web Developer",
        "description": [
            "Update web sites and installing new plugins.",
            "Create new websites using Wordpress."
        ],
        "skills":[
            "JQuery","Php","Wordpress","Javascript","HTML","CSS"
        ]
    },
    {
        "id":3,
        "company":"N7 Consulting",
        "location":"Toulouse , France",
        "date": "03/2021 - 06/2021",
        "poste": "Web Developer",
        "description": [
            "Develop a web application with Angular , NestJS and MongoDB."
        ],
        "skills":[
            "Angular","NestJS","MongoDB"
        ]
    }
];
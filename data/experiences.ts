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
        "description": [],
        "skills":[
            "NodeJS","React","NextJS","NestJS","ExpressJS","MongoDB","PostgreSQL"
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
            "Front-End and Dashboarding development using Slate, HTML , CSS , Javascript and PostgreSQL.",
            "Participation in PIs/Sprints demos (Demo for the client)."
        ],
        "skills":[
            "PySpark","PostgreSQL","Javascript","React","AWS","Java","Palantir"
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
            "Develop a web application with Angular , Django and MongoDB."
        ],
        "skills":[
            "Angular","Django","MongoDB"
        ]
    }
];
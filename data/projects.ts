export type Project = {
    id: number;
    image: string;
    name: string;
    description: string;
    tools: string[];
    preview:string;
    code:string;
}

export const projects: Project[] = [
    {
        id: 0,
        image: '/projects/clothing-ecommerce.JPG',
        name: 'Clothing Ecommerce 1',
        description: 'Clothing Ecommerce web development project I created using React, Material-UI, and Sass and,...',
        tools: ["React","Redux","Material-UI","Sass","Firebase","GraphQL","Stripe"],
        preview : "https://clothing-ecommerce-react.ahmed-ghanim.com/",
        code : "https://github.com/ahmedGHANIM327/Clothing-Ecommerce"
    },
    {
        id: 1,
        image: '/projects/clothing-ecommerce.JPG',
        name: 'Clothing Ecommerce 2',
        description: 'Clothing Ecommerce web development project I created using React, Material-UI, and Sass and,...',
        tools: ["React","Redux","Material-UI","Sass","Firebase","GraphQL","Stripe"],
        preview : "https://clothing-ecommerce-react.ahmed-ghanim.com/",
        code : "https://github.com/ahmedGHANIM327/Clothing-Ecommerce"
    },
    {
        id: 2,
        image: '/projects/clothing-ecommerce.JPG',
        name: 'Clothing Ecommerce 3',
        description: 'Clothing Ecommerce web development project I created using React, Material-UI, and Sass and,...',
        tools: ["React","Redux","Material-UI","Sass","Firebase","GraphQL","Stripe"],
        preview : "https://clothing-ecommerce-react.ahmed-ghanim.com/",
        code : "https://github.com/ahmedGHANIM327/Clothing-Ecommerce"
    },
    {
        id: 3,
        image: '/projects/clothing-ecommerce.JPG',
        name: 'Clothing Ecommerce 4',
        description: 'Clothing Ecommerce web development project I created using React, Material-UI, and Sass and,...',
        tools: ["React","Redux","Material-UI","Sass","Firebase","GraphQL","Stripe"],
        preview : "https://clothing-ecommerce-react.ahmed-ghanim.com/",
        code : "https://github.com/ahmedGHANIM327/Clothing-Ecommerce"
    }
]
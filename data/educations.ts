export type Education = {
    id: number;
    school: string;
    location: string;
    date: string;
    field: string;
}

export const educations: Education[] = 
[
    {
        "id":0,
        "school":"INP-ENSEEIHT",
        "location":"Toulouse , France",
        "date": "09/2021 - 08/2023",
        "field": "Engineering degree in digital sciences"
    },
    {
        "id":1,
        "school":"CPGE Ibn-Baja",
        "location":"Beni-Mellal , Maroc",
        "date": "09/2017 - 06/2019",
        "field": "Mathematics and Physics"
    },
    {
        "id":2,
        "school":"Mohamed 5 high school",
        "location":"Beni-Mellal , Maroc",
        "date": "2017",
        "field": "Bac with high honours"
    }
];
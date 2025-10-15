export const personalInformationConstant = {
    name: 'Paula Pérez Blanco',
}

export const aboutMeConstants = {
    description: 'Ingeniera biomédica con experiencia en el desarrollo software. Tengo interés por laciencia de datos, especialmente por el diseño e implementación de modelos de machinelearning, inteligencia artificial y procesamiento del lenguaje natural en el ámbitobiosanitario. Busco poder desarrollar soluciones innovadoras en proyectos de medicinapreventiva, análisis clínico y salud digital.'
}

export const skillsConstants = [
    {
        "group":"Programación y desarrollo",
         "skills": [
            {"name": "JavaScript", "level": 80},
            {"name": "TypeScript", "level": 80},
            {"name": "HTML y CSS", "level": 80},
            {"name": "Angular", "level": 80},
            {"name": "Python", "level": 70},
            {"name": "Matlab", "level": 80},
            {"name": "SQL", "level": 60},
            {"name": "R", "level": 40},
            {"name": "Control de versiones Git", "level": 70},
            {"name": "Cloud Computing (AWS, Azure)", "level": 50},
        ]   
    },
    {   groupSkill: [
        {   "group":"Análisis de datos",
            "skills": [
                {"name": "Paquetes estadísticos (SPSS, Statgraphics, RStudio)", "level": 60},
                {"name": "Librerías de Analisis de datos (Pandas, NumPy, Seaborn)", "level": 60},
                {"name": "Visualización de datos (Origins, Matplotlib)", "level": 60},
                {"name": "Librerías de machine learning (Scikit-learn, TensorFlow, Keras)", "level": 60},
            ]
        },
        {
            "group":"Gestión de proyectos",
            "skills": [
                {"name": "Office365", "level": 90},
                {"name": "Jira", "level": 50},
            ],
        },
        {
            "group":"Idiomas",
            "skills": [
                {"name": "Ingles", "certificate": "Cambridge B2 First"},
            ]
        }
    ]},
    {
        "group": "Soft skills",
         "skills": [
            {"name": "Capacidad de aprendizaje", "level": 90},
            {"name": "Capacidad de adaptación", "level": 90},
            {"name": "Resolución de problemas", "level": 70},
            {"name": "Trabajo en equipo", "level": 70},
            {"name": "Comunicación", "level": 70},
            {"name": "Toma de decisiones basadas en datos", "level": 80},
            {"name": "Pensamiento analítico", "level": 80},
            {"name": "Gestión de proyectos ágiles (Scrum, Kanban)", "level": 70}
        ]
    }  
]

export const experienceFormationConstants = [
    {
        id: 1,
        position: "Máster en Inteligencia Artifical",
        company: "Universidad Internacional de La Rioja, Unir",
        dates: "2025-Actualidad",
        type: "Form"
    },
    {
        id: 2, 
        position: "Desarrolladora Fronted",
        type: "EXP",
        company: "Laberit, Valencia",
        location: "Valencia",
        dates: "09/2023 – Actualidad",
        characteristics: [
            "Desarrollo e implemento nuevas funcionalidades para un sistema HIS hospitalario usando Angular10+ y AngularJS.",
            "Colaboro en la adaptación responsive de la aplicación.",
            "Gestiono las versiones de código utilizando GitLab.",
            "Trabajo en equipos multidisciplinares con metodologías Scrumb y entornos ágiles de desarrollo colaborativo.",
            "Resuelvo problemas de bugs y soporte técnico a clientes."
        ]
    },
    {
        id: 3, 
        position: "Prácticas de Acercamiento a la CPI en la UPV",
        type: "EXP",
        company: "Centro de Investigación e Innovación en Bioingeniería",
        location: "Valencia",
        dates: "2021 – 2022",
        characteristics: [
            "Participé en el programa de 'Procesamiento de señales biomédicas y sistemas de ayuda al diagnóstico'.",
            "Segmenté y caractericé señales de EHG.",
            "Procesé y limpié bases de datos clínicos.",
            "TRealicé analisis estadísticos de las diferencias significativas entre gestación única y múltiple.",
            "Interpreté y representé los resultados de las implicaciones en el trabajo del parto prematuro."
        ]
    },
    {
        id: 4,
        position: "Grado en ingeniería biomédica",
        company: "Universidad Politécnica de Valencia",
        dates: "2019-2023",
        type: "FORM"
    }    
]

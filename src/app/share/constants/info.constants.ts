export const personalInformationConstant = {
    name: 'Paula Pérez Blanco',
}

export const aboutMeConstants = {
    description: 'Ingeniera biomédica con experiencia en el desarrollo software. Tengo interés por la ciencia de datos, especialmente por el diseño e implementación de modelos de machine learning, inteligencia artificial y procesamiento del lenguaje natural en el ámbito biosanitario. Busco poder desarrollar soluciones innovadoras en proyectos de medicina preventiva, análisis clínico y salud digital.'
}

export const skillsConstants = [
    {
        "group":"Programación y desarrollo",
         "skills": [
            {"name": "JavaScript", "level": 80},
            {"name": "TypeScript", "level": 80},
            {"name": "HTML y CSS", "level": 80},
            {"name": "Angular", "level": 80},
            {"name": "Python", "level": 80},
            {"name": "Matlab", "level": 80},
            {"name": "Control de versiones Git", "level": 70},
            {"name": "Cloud Computing (AWS, Azure)", "level": 60,  "certificate": "AZ-900: Microsoft Azure Fundamentals"},
            {"name": "SQL", "level": 60},
            {"name": "R", "level": 40},
        ]   
    },
    {   groupSkill: [
        {
            "group":"Idiomas",
            "skills": [
                {"name": "Ingles", "certificate": "Cambridge B2 First"},
            ]
        },
        {   "group":"Análisis de datos",
            "skills": [
                {"name": "Librerías de Analisis de datos (pandas, numPy, seaborn, spacy)", "level": 80},
                {"name": "Librerías de machine learning (Scikit-learn, TensorFlow, scikit-image, cv2)", "level": 80},
                {"name": "Procesamiento y visualización de datos (Origins, Matplotlib, Power BI)", "level": 60},
                {"name": "Paquetes estadísticos (SPSS, Statgraphics, RStudio)", "level": 60},
            ]
        },
        {
            "group":"Gestión de proyectos",
            "skills": [
                {"name": "Office365", "level": 90},
                {"name": "Jira", "level": 50},
            ],
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
            "Realicé analisis estadísticos de las diferencias significativas entre gestación única y múltiple.",
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

export const personalInformationConstant = {
    name: 'Paula Pérez Blanco',
}

export const aboutMeConstants = {
    description: 'Ingeniera Biomédica con experiencia profesional en desarrollo de software para entornos hospitalarios y experiencia práctica en procesamiento de señales biomédicas y análisis de datos clínicos. Actualmente finalizo un Máster en Inteligencia Artificial y he participado en proyectos de machine learning, sistemas RAG, automatización, recomendaciones y modelado de supervivencia. Busco desarrollar soluciones de IA reproducibles aplicadas a salud digital, con foco en el análisis de datos clínicos y sistemas de apoyo al diagnóstico.'
}

export const skillsConstants = [
    {
        groupSkill: [
            {
                "group":"Desarrollo Web",
                "skills": [
                    {"name": "Angular"},
                    {"name": "Next.js API Routes"},
                    {"name": "JavaScript"},
                    {"name": "TypeScript"},
                    {"name": "HTML y CSS"}
                ]
            },
            {
                "group":"Machine Learning y Ciencia de datos",
                "skills": [
                    {"name": "Python"},
                    {"name": "Matlab"},
                    {"name": "Scikit-learn"},
                    {"name": "PyTorch"},
                    {"name": "Keras"},
                    {"name": "Tensorflow"},
                    {"name": "Pandas"},
                    {"name": "Numpy"},
                    {"name": "Matplotlib"},
                    {"name": "OpenCV"}
                ]
            },
            {
                "group":"Tratamiento y análisis de datos",
                "skills": [
                    {"name": "SQL"},
                    {"name": "PostgreSQL"},
                    {"name": "Supabase"},
                    {"name": "APIs REST"},
                    {"name": "pgvector"},
                    {"name": "Power BI"}
                ]
            }
        ]   
    },
    {   groupSkill: [
            {
                "group": "Herramientas de desarrollo y Cloud Computing",
                "skills": [
                    {"name": "GitHub/GitLab"},
                    {"name": "Jira"},
                    {"name": "Notion"},
                    {"name": "Codex"},
                    {"name": "Claude Code"},
                    {"name": "AWS"},
                    {"name": "Azure", "certificate": "AZ-900: Microsoft Azure Fundamentals"},
                ]
            },
            {
                "group":"Datos biomédicos",
                "skills": [
                    {"name": "Señales biomédicas"},
                    {"name": "Neuroimagen"},
                    {"name": "Bases de datos clínicos"},
                ],
            },
            {
                "group":"IA generativa",
                "skills": [
                    {"name": "RAG"},
                    {"name": "Generación de embeddings"},
                    {"name": "Prompt engineering"},
                ]
            }            
    ]},
    {   groupSkill: [
             {
                "group":"Idiomas",
                "skills": [
                    {"name": "Ingles", "certificate": "Cambridge B2 First"},
                ]
            }, 
            {
                "group": "Competencias profesionales",
                "skills": [
                    {"name": "Capacidad de aprendizaje"},
                    {"name": "Capacidad de adaptación"},
                    {"name": "Resolución de problemas"},
                    {"name": "Trabajo en equipo"},
                    {"name": "Comunicación"},
                    {"name": "Toma de decisiones basadas en datos"},
                    {"name": "Pensamiento analítico"},
                    {"name": "Metodologías ágiles (Scrum, Kanban)"}
                ]
            }  
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
            "Desarrollo y mantengo nuevas funcionalidades para un sistema de información hospitalaria, utilizando Angular 10+ y AngularJS.",
            "Traduzco necesidades clínicas en soluciones técnicas reales, colaborando con equipos multidisciplinares bajo metodologías Agile.",
            "Resuelvo incidencias y gestiono el control de versiones con GitHub/GitLab.",
        ]
    },
    {
        id: 3, 
        position: "Prácticas de desarrollo Full Stack e IA Aplicada",
        type: "EXP",
        company: "Cronuts, Barcelona",
        location: "Remoto",
        dates: "03/2026 – 6/2026",
        characteristics: [
            "Desarrollé un portal de monitorización de campañas con Next.js, TypeScript, Supabase y BigQuery, automatizando sincronización documental, insights mensuales y alertas diarias.",
            "Implementé funcionalidades de IA generativa con OpenAI: insights automatizados a partir de métricas de rendimiento y un chatbot con arquitectura RAG.",
            "Apliqué prompt engineering y controles de uso mediante autenticación, limitación de peticiones y gestión del consumo de tokens.",
        ]
    },
    {
        id: 4, 
        position: "Prácticas de investigación en procesamiento de señales biomédicas",
        type: "EXP",
        company: "Centro de Investigación e Innovación en Bioingeniería, UPV",
        location: "Remoto",
        dates: "2021 – 2022",
        characteristics: [
            "Procesé, segmenté y caractericé señales EHG.",
            "Realicé la limpieza, organización y validación de la bases de datos clínicas así como, el posterior análisis estadístico.",
            "Interpreté y comuniqué los resultados, contextualizando y valorando sus posibles implicaciones clínicas."
        ]
    },
    {
        id: 5,
        position: "Grado en ingeniería biomédica",
        company: "Universidad Politécnica de Valencia",
        dates: "2019-2023",
        type: "FORM"
    }    
]

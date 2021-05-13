import React, { useState, useContext, useEffect } from 'react'

const ProjectDetailsContext = React.createContext()

export function useProjectDetails() {
    return useContext(ProjectDetailsContext)
}

export function ProjectDetailsProvider({ children }) {
    const [projectId, setProjectId] = useState(1);
    const [projectDetailsInfo, setProjectDetailsInfo] = useState()
    const [projectDetailsImages, setProjectDetailsImages] = useState()

    useEffect(() => {
        const projectInfo = require("../static/data/projects/" + projectId + "/project.json")

        const projectImages = projectInfo.images.map(image => {
            return require("../static/data/projects/" + projectId + "/images/" + image).default
        })

        setProjectDetailsInfo(projectInfo);
        setProjectDetailsImages(projectImages);

    }, [projectId])


    const value = {
        setProjectId: setProjectId,
        projectDetailsInfo: projectDetailsInfo,
        projectDetailsImages: projectDetailsImages
    }

    return (
        <ProjectDetailsContext.Provider value={value}>
            {children}
        </ProjectDetailsContext.Provider>
    )
}


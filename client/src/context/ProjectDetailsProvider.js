import React, { useState, useContext, useEffect } from 'react'

const ProjectDetailsContext = React.createContext()

export function useProjectDetails() {
    return useContext(ProjectDetailsContext)
}

export function ProjectDetailsProvider({ children }) {
    const [projectId, setProjectId] = useState(1);
    const [projectDetailsInfo, setProjectDetailsInfo] = useState(null)
    const [projectDetailsImages, setProjectDetailsImages] = useState(null)

    useEffect(() => {
        let projectInfo = require("../static/data/projects/" + projectId + "/project.json")

        // const filteredTagsWithIcons = projectInfo.tags.map(tag => {
        //     console.log(`require("../static/images/icon/" + tag.icon)`, require("../static/images/icon/" + tag.icon))
        //     const iconUrl = require("../static/images/icon/" + tag.icon).default
        //     console.log("icon URL", iconUrl)
        //     return { ...tag, icon: iconUrl }
        // })
        // projectInfo.tags = filteredTagsWithIcons
        const projectImages = projectInfo.images.map(image => {
            return require("../static/data/projects/" + projectId + "/images/" + image).default
        })

        setProjectDetailsInfo(projectInfo);
        setProjectDetailsImages(projectImages);

    }, [projectId])


    const value = {
        setProjectId: setProjectId,
        projectDetailsInfo: projectDetailsInfo,
        projectDetailsImages: projectDetailsImages,
    }

    return (
        <ProjectDetailsContext.Provider value={value}>
            {children}
        </ProjectDetailsContext.Provider>
    )
}


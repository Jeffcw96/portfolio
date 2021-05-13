import React from 'react'
import { useProjectDetails } from '../context/ProjectDetailsProvider'
export default function ProjectDetailsModal() {
    const { projectDetailsInfo, projectDetailsImages } = useProjectDetails()
    console.log("projectDetailsInfo", projectDetailsInfo, 'projectDetailsImage', projectDetailsImages)
    return (
        <div id="myModal" class="modal">
            <div class="modal-content">
                <div class="flex space-between" style={{ alignItems: 'center' }}>
                    <h3>Title</h3>
                    <div class="close">&times;</div>
                </div>

            </div>
        </div>
    )
}

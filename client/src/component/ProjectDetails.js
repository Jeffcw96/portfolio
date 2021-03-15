import React from 'react'

export default function ProjectDetails({ match }) {
    console.log("match", match)
    return (
        <div>
            Project Details Page {match.params.id}
        </div>
    )
}

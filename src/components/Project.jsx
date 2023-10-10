const projectList = [
    {
        id: 1,
        title: 'Project 1',
        description: 'This is a description for project 1',
        link: '',
        image: 'https://via.placeholder.com/150',
        github: ''
    },
];

export default function Project() {
    return (
        <div>
            <h3> Project </h3>
            <div className="container">
                <div className="row">
                    {projectList.map((project) => (
                        <div className="col-md-4" key={project}>
                            <div className="card">
                                <img src={project.image} className="card-img-top" alt={project.title} />
                                <div className="card-body">
                                    <h5 className="card-title">{project.title}</h5>
                                    <p className="card-text">{project.description}</p>
                                    <a href={project.link} className="btn btn-primary">Link</a>
                                    &nbsp;
                                    <a href={project.github} className="btn btn-primary">Github</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
const projectList = [
    {
        id: 1,
        title: 'RiseUp',
        description: 'This project is a website where it looks up the weather based on the location of the city and State. The project uses the OpenWeather API to retreve the data, and the Geoapify APT to get the Latitude and Longitude.',
        link: 'https://bda2013.github.io/riseUp/',
        image: 'https://via.placeholder.com/150',
        github: 'https://github.com/BDA2013/riseUp'
    },
    {
        id: 2,
        title: 'PlayCare',
        description: 'This project uses the SQL to store data and the Sequelize to query the data. The project is a website where it allows the user to create an account and login to the website. The user can create a profile and add their children to the database who is enrolled to a Daycare Center.',
        link: 'https://mysterious-anchorage-56643-889ec0494a37.herokuapp.com',
        image: 'https://via.placeholder.com/150',
        github: 'https://github.com/USOYJ/playcare'
    },
    {
        id: 3,
        title: 'GameChip',
        description: 'This project is a website where it allows the user to create an account and login to the website. The user can create a profile and post questions about anything related to a particular game. The user can also post answers to other users questions as comments.',
        link: 'https://radiant-everglades-30632-b3c22f102a99.herokuapp.com/',
        image: 'https://via.placeholder.com/150',
        github: 'https://github.com/SethMunoz339/gamerFAQ'
    },
];

export default function Project() {
    return (
        <div>
            <h3>Projects</h3>
            <div className="container">
                <div className="row">
                    {projectList.map((project) => (
                        <div className="col-md-4" key={project}>
                            <div className="card">
                                <img src={project.image} className="card-img-top" alt={project.title} />
                                <div className="card-body">
                                    <h5 className="card-title">{project.title}</h5>
                                    <p className="card-text">{project.description}</p>
                                    <a href={project.link} className="btn btn-primary">Deployed</a>
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
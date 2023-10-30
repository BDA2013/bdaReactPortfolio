// Imports
import RiseUp from '../assets/images/RiseUp.png';
import PlayCare from '../assets/images/PlayCare.png';
import GameChip from '../assets/images/GameChip.png';

const projectList = [
    {
        id: 1,
        title: 'RiseUp',
        description: 'RiseUp is a web application that allows users to find the times when the sunrise and sunset occurs.' ,
        link: 'https://bda2013.github.io/riseUp/',
        image: RiseUp,
        github: 'https://github.com/BDA2013/riseUp'
    },
    {
        id: 2,
        title: 'PlayCare',
        description: 'PlayCare is a web application that allows parents to add and enroll their children in a daycare.' ,
        link: 'https://mysterious-anchorage-56643-889ec0494a37.herokuapp.com',
        image: PlayCare,
        github: 'https://github.com/USOYJ/playcare'
    },
    {
        id: 3,
        title: 'GameChip',
        description: 'GameChip is a web application that allows users to find and post questions, or opinions about their favorite games.' ,
        link: 'https://radiant-everglades-30632-b3c22f102a99.herokuapp.com/',
        image: GameChip,
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
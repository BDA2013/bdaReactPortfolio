// Imports
import RiseUp from '../assets/images/riseUp.png';
import PlayCare from '../assets/images/playCare.png';
import GameChip from '../assets/images/gameChip.png';

const projectList = [
    {
        id: 1,
        title: 'RiseUp',
        link: 'https://bda2013.github.io/riseUp/',
        image: RiseUp,
        github: 'https://github.com/BDA2013/riseUp'
    },
    {
        id: 2,
        title: 'PlayCare',
        link: 'https://mysterious-anchorage-56643-889ec0494a37.herokuapp.com',
        image: PlayCare,
        github: 'https://github.com/USOYJ/playcare'
    },
    {
        id: 3,
        title: 'GameChip',
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
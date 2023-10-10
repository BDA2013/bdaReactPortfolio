// Import pdf file here
import pdf from '../assets/documents/Resume.pdf';

export default function Resume() {
  return (
    <div>
      <h1> Resume </h1>
      <p>Download my <a href = {pdf} target = "_blank" rel="noreferrer">Resume</a></p>
      <h2 id="frontEndTitle">Front-end Proficiencies</h2>
      <ul>
        <li>HTML5</li>
        <li>CSS</li>
        <li>JQuery</li>
        <li>JavaScript</li>
        <li>Bootstrap</li>
        <li>AJAX</li>
        <li>SASS</li>
      </ul>
      <br />
      <h2 id="backEndTitle">Back-end Proficiencies</h2>
      <ul>
        <li>MySQL</li>
        <li>MongoDB</li>
        <li>Express</li>
        <li>ReactJS</li>
        <li>Node</li>
        <li>Handlebars</li>
        <li>Firebase</li>
        <li>AWS</li>
        <li>Webpack</li>
        <li>Gulp</li>
        <li>GraphQl</li>
      </ul>
    </div>
  );
}

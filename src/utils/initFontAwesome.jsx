import { library } from "@fortawesome/fontawesome-svg-core";
import {fab, faLinkedin, faGithub} from "@fortawesome/free-brands-svg-icons";

function initFontAwesome() {
    library.add(fab, faLinkedin, faGithub);
}
export default initFontAwesome;
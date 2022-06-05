import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import EducationPostItems from "./educationPost.items";

import "./EducationPost.css";

const EducationPost = ({ item }) => {
    return(
        <div className="educationPost">
            <div className="titleSection">
                <h2 className="educationTitle">{item.title}</h2>
                <div className="educationControls">
                    <FontAwesomeIcon icon={faPen} />
                    <FontAwesomeIcon icon={faTrash} onClick={() => {}} />
                </div>
            </div>
            <div className="dataContainer">
                
                {EducationPostItems.map(element => {
                    return (
                        <div key={element.id} className={element.classNames}>
                            <h3>{element.title}</h3>
                            <p>{element.parse(item)}</p>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}

export default EducationPost;
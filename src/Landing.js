import { Link } from "react-router-dom"
import './Post.css';

const Landing = ()=> {
    return (
        <div>
            <div className={'landing'}>
                <div>
                    <img id={'fstpage'} src={'https://res.cloudinary.com/dnjym17lt/image/upload/v1671296297/10x/cropped-828-1792-1230945_gp3a5i.jpg'} alt=""></img>
                </div>
                <div className="para">
                    <div><b>Welcome to the InstaClone</b></div>
                    <Link to={'/post'}><button className="enter"> Enter </button></Link>
                </div>
          </div>
        </div>
    )
}
export default Landing;
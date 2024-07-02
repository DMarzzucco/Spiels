import { faGitAlt, faLinkedin, faGithub } from "../../icons/icons"
import { Link } from "react-router-dom"
import { LinkFut } from "../assets/share"
function Footer() {
    return (
        <footer className="flex flex-col justify-center items-center">
            <div className="flex flex-row justify-center items-center">
                <div className="flex flex-row justify-center items-center w-full p-4 mx-3 border-r  ">
                    <img width="50" height="50" src="https://img.icons8.com/ios/50/c0c0c0/xbox-controller.png" alt="xbox-controller" />
                    <i className="font-bold text-20 border-b border-slate-300 m-0">SpielPack</i>
                </div>
                <div className="flex flex-row justify-center items-center w-full">
                    <LinkFut title="Source" path="https://github.com/DMarzzucco/Spiels" icon={faGitAlt} />
                    <LinkFut title="Linkedin" path="https://www.linkedin.com/in/dario-marzzucco-597090283/" icon={faLinkedin} />
                    <LinkFut title="GitHub" path="https://github.com/DMarzzucco" icon={faGithub} />
                </div>
            </div>
            <div className="bg-blackLight w-full flex my-px">
                <p className="footer:text-10"> &copy; 2024</p>
                <Link to={"https://systemarzz.netlify.app/"} className="mx-1 footer:text-10 text-slate-300"><b>SysteMarzz</b></Link>
                <p className="footer:text-10">
                    All rights reserved Made by Dario Marzzucco
                </p>

            </div>
        </footer>
    )
}
export default Footer
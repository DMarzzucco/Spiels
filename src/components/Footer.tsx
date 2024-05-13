import { LinkFut } from "./share"
import { faGitAlt, faLinkedin, faGithub } from "../items/icons.ts"
function Footer() {
    return (
        <footer className="flex flex-col justify-center items-center">
            <div className="flex flex-row justify-center items-center">
                <div className="flex flex-col justify-center items-center w-full p-4 mx-3 border-r  ">
                    <img width="50" height="50" src="https://img.icons8.com/ios/50/c0c0c0/xbox-controller.png" alt="xbox-controller" />
                    <p className="border-t">SpielPack</p>
                </div>
                <div className="flex flex-row justify-center items-center w-full">
                    <LinkFut title="Source" path="https://github.com/DMarzzucco/Spiels" icon={faGitAlt} />
                    <LinkFut title="Linkedin" path="https://www.linkedin.com/in/dario-marzzucco-597090283/" icon={faLinkedin} />
                    <LinkFut title="GitHub" path="https://github.com/DMarzzucco" icon={faGithub} />
                </div>
            </div>
            <div className="bg-blackLight w-full flex my-px">
                <p className="footer:text-10">
                    &copy; 2024
                </p>
                <span className="mx-1 font-mono footer:text-10 text-white">SysteMarzz</span>
                <p className="footer:text-10">
                    All rights reserved Made by Dario Marzzucco
                </p>

            </div>
        </footer>
    )
}
export default Footer
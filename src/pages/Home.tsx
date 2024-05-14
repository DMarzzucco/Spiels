import { LinkHome } from "../components/share";

function Home() {
    return (
        <section className="bg-gradient-to-r from-slate-500 to-slate-300 flex flex-col justify-center items-center h-screen w-full text-slate-800">
            <div className="flex flex-row justify-center items-center">
                <img width="60" height="60" src="https://img.icons8.com/ios/50/141516/xbox-controller.png" alt="xbox-controller" />
                <i className="font-bold text-30 border-b border-slate-800 m-0">SpielPack</i>
            </div>
            <div className="flex flex-col justify-center items-center  m-3 border border-slate-800 rounded-xl
            w-300">
                <b className="text-center text-15 text-slate-300 bg-slate-700 rounded-t-xl w-full">Select the Game</b>
                <div className="flex flex-col justify-center items-center p-2 m-2">
                    <LinkHome path="/Game" title="Tennis" />
                </div>
            </div>
        </section>
    )
}
export default Home;
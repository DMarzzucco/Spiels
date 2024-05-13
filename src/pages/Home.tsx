import { LinkHome } from "../components/share";

function Home() {
    return (
        <section className="bg-gradient-to-r from-slate-500 to-slate-300 flex flex-col justify-center items-center h-screen w-full text-slate-800">
            <h1>Home</h1>
            <div className="flex flex-col justify-center items-center p-2 m-3 border rounded-xl
            w-300">
                <h1>Select the Game</h1>
                <div className="flex flex-col justify-center items-center p-2 m-2">
                    <LinkHome path="/Game" title="Tennis"/>
                </div>
            </div>
        </section>
    )
}
export default Home;
import { RocketLaunch } from "phosphor-react";
import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";

export function Event() {
    const { slug } = useParams<{ slug: string }>();

    return(
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex flex-1">
                { slug 
                    ? <Video lessonSlug={slug}/> 
                    : (
                        <div className="flex-1 items-center justify-center flex flex-col">
                            <RocketLaunch size={128} color="#29292E"/>
                            <strong className="mt-8 text-gray-400 text-sm">
                                Selecione uma aula para assistir
                            </strong>
                        </div>
                    )
                }
                <Sidebar />
            </main>
        </div>
    )
}
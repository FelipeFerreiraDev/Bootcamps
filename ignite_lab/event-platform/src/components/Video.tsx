import { DiscordLogo, Lightning } from "phosphor-react";

export function Video() {
    return (
        <div className="flex-1">
            <div className="bg-black flex justify-center">
                <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
                </div>
            </div>
            <div className="p-8 max-w-[1100px] mx-auto">
                 <div className="flex items-start gap-16">
                    <div className="flex-1">
                        <h1 className="text-2xl font-bold">Aula - Abertura</h1>
                        <p className="mt-4 text-gray-200">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nobis necessitatibus excepturi, quidem vero labore ut minima debitis natus architecto iste ea eveniet tenetur earum. Iure molestias odit velit fuga?
                        </p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <a href="" className="p-4 text-sm bg-green-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-green-700 transition-colors">
                            <DiscordLogo size={24}/>
                            Comunidade do Discord
                        </a>
                        <a href="" className="p-4 text-sm border border-blue-500 text-blue-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-blue-500 hover:text-gray-900 transition-colors">
                            <Lightning size={24}/>
                            Acesse o desafio
                        </a>
                    </div>
                 </div>
                 <div>

                 </div>
            </div>
        </div>
    )
}
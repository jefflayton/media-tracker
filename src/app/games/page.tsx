import { redirect } from "next/navigation"
import { createClient } from "@/utils/supabase/server"
import MediaCard from "@/components/MediaCard/MediaCard"

const myGames = [
    {
        title: "The Legend of Zelda: Breath of the Wild",
        image: "https://images.igdb.com/igdb/image/upload/t_thumb/co1uii.jpg",
    },
    {
        title: "Doom",
        image: "https://images.igdb.com/igdb/image/upload/t_thumb/co1uii.jpg",
    },
    {
        title: "Final Fantasy VII",
        image: "https://images.igdb.com/igdb/image/upload/t_thumb/co1uii.jpg",
    },
    {
        title: "The Witcher 3: Wild Hunt",
        image: "https://images.igdb.com/igdb/image/upload/t_thumb/co1uii.jpg",
    },
    {
        title: "Super Mario Odyssey",
        image: "https://images.igdb.com/igdb/image/upload/t_thumb/co1uii.jpg",
    },
]

export default async function PrivatePage() {
    const supabase = createClient()

    // const { data, error } = await supabase.auth.getUser()
    // if (error || !data?.user) {
    //     redirect("/login")
    // }

    return (
        <>
            <div className="container mx-auto">
                {/* <div className="flex flex-wrap justify-start -mx-2">
                    {myGames.map((game, index) => (
                        <div
                            key={index}
                            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-2 mb-4"
                        >
                            <MediaCard game={game} />
                        </div>
                    ))}
                </div> */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                    {myGames.map((game, index) => (
                        <MediaCard key={index} game={game} />
                    ))}
                </div>
            </div>
            {/* <p>Hello {data.user.email}</p> */}
        </>
    )
}

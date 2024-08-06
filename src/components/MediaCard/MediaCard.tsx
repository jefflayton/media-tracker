import React from "react"
import { Card, CardFooter, Image } from "@nextui-org/react"

export default function MediaCard({ game }: { game: any }) {
    return (
        <Card isFooterBlurred radius="lg" className="border-none w-48 mx-auto">
            <Image
                src="https://images.igdb.com/igdb/image/upload/t_cover_big/co2dto.jpg"
                alt="game cover"
                className="object-fill"
            />
            <CardFooter className="justify-center before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                <p className="text-center text-tiny text-white/80">
                    {game.title}
                </p>
            </CardFooter>
        </Card>
    )
}

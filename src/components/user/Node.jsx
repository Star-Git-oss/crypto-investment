
import { Tooltip } from "@material-tailwind/react";
const Node = ({avatar, username="", email="", active=false}) => {
    return (
        <div>
            <div className="flex flex-col items-center gap-4 py-4">

                <div className="relative">
                    <div className="absolute -inset-2">
                        <div
                            className={`w-20  h-20 sm:w-28 sm:h-28 rounded-full max-w-sm mx-auto lg:mx-0 opacity-70 ${active?"blur-lg bg-gradient-to-r from-green-600 via-cyan-800 to-green-600":""} `}>
                        </div>
                    </div>
                    <Tooltip content={active?(username+'\n : '+email): "Invite your friend!"} placement="right">
                        <img src={avatar}
                            className={`relative object-cover shrink-0 w-20  h-20 sm:w-28 sm:h-28 rounded-full border-4 border-gray-800 shadow-md shadow-black hover:scale-105 hover:cursor-pointer ${!active?"blur-[5px]":""}`}/>
                    </Tooltip>
                </div>

            </div>
        </div>
    );
}

export default Node
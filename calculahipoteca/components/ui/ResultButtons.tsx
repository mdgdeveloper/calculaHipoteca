import { FC } from "react"
import BasicButton from "./BasicButton"
import Link from "next/link"

interface Props {
    id: Number[]
}


const ResultButtons: FC<Props> = ({ id }) => {
    console.log(id)
    return (
        <div>
            {(id && id.length > 0) ?
                <div className="flex gap-2 pt-5">
                    <div className="">
                        {id.map((v, i) => (<BasicButton key={i} id={v} onClick={() => { }} />))}
                    </div>
                    <div>
                        <BasicButton id={0} onClick={() => { }} />
                    </div>
                </div> :
                <div>
                    <div className="pt-5">Debes introducir datos</div>
                    {/* button to return to main page using divs */}
                    <div className="pt-5">
                        <div className="w-24 rounded border-2 border-blue-500 bg-blue-300 hover:bg-blue-200 cursor-pointer flex items-center justify-center p-1">
                            <div className="text-gray-800 font-semibold"><Link href="/">Volver</Link></div>
                        </div>
                    </div>

                </div>}
        </div>
    )
}

export default ResultButtons
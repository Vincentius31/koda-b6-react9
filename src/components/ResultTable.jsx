import { useDispatch } from "react-redux"
import { removeData } from "./redux/reducer/surveyReducer"

export default function ResultTable({ data }) {
    const dispatch = useDispatch()

    return (
        <div className="overflow-x-auto">
            <table className="w-full border border-gray-300 text-center">
                <thead className="bg-[#673ab7] text-white">
                    <tr>
                        <th className="p-2">Nama</th>
                        <th className="p-2">Umur</th>
                        <th className="p-2">Gender</th>
                        <th className="p-2">Perokok</th>
                        <th className="p-2">Rokok</th>
                        <th className="p-2">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, i) => (
                        <tr key={i} className="border-t">
                            <td className="p-2">{item.nama}</td>
                            <td className="p-2">{item.umur}</td>
                            <td className="p-2">{item.gender}</td>
                            <td className="p-2">{item.perokok}</td>
                            <td className="p-2">{item.rokok.join(", ")}</td>
                            <td className="p-2"><button
                                // Pastikan index di sini merujuk ke index dari .map()
                                onClick={() => dispatch(removeData(i))}
                                className="bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-600 transition"
                            >
                                Hapus
                            </button>
                            </td>

                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
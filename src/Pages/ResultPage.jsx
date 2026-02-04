import { Link } from "react-router-dom"
import ResultTable from "../components/ResultTable"
import { useSelector } from "react-redux"

export default function ResultPage() {
    const data = useSelector((state) => state.surveyResults.surveyResults)

    if (!data.length) {
        return (
            <div className="bg-[#f0ebf8] min-h-screen flex justify-center py-10">
                <div className="w-full max-w-2xl bg-white p-6 rounded shadow">
                    <h1 className="text-2xl font-medium mb-4">
                        Hasil Survei
                    </h1>
                    <p className="text-gray-500">
                        Belum ada data
                    </p>
                    
                </div>
            </div>
        )
    }

    return (
        <div className="bg-[#f0ebf8] min-h-screen flex justify-center py-10">
            <div className="w-full max-w-4xl bg-white p-6 rounded shadow">
                <h1 className="text-2xl font-medium mb-4">
                    Hasil Survei
                </h1>

                <ResultTable data={data} />
            </div>
        </div>
    )
}
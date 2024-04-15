
export default function MainButton({ text, color, onClick }) {

    if (color === "dark") {
        return <button onClick={onClick} className="text-center border w-24 rounded-lg bg-violet-400 border-violet-900 text-white"> {text} </button>
    }

    if (color === "light") {
        return <button onClick={onClick} className="text-center border w-24 rounded-lg border-violet-400"> {text} </button>
    }

}
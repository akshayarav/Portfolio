import './Header.css'

export default function Header(props) {
    return (
        <div className = "wrapper">
        <div className="top">{props.name}</div>
        <div className="bottom" aria-hidden="true">{props.name}</div>
        </div>

    )

}
// import img from '../assets/Icons/img1.jpg'
import { Link } from "react-router-dom"
export function VacationCard({ img, imgAlt, eyebrow, title, pricing, url, distance }) {
    return (
      <Link to="/bnb">
      <div className="vacationcard">
        <img className="rounded-lg thepics" src={img} alt={imgAlt} />
        <div className="mt-4">
          <div className="text-xs font-bold text-gray-500">{eyebrow}</div>
          <div className="text-s font-bold text-gray-500">{distance}</div>
          <div className="mt-1 font-bold text-gray-700">
            <a href={url} className="hover:underline">
              {title}
            </a>
          </div>
          <div className="mt-2 text-sm text-gray-600">{pricing}</div>
        </div>
      </div>
      </Link>
    );
  }
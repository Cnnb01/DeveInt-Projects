// import img from '../assets/Icons/img1.jpg'
import { Link } from "react-router-dom"
export function VacationCard({ image, hostname, amenities, pricing, imgAlt, location, startdate, enddate, eyebrow, title, url, distance }) {
    return (
      <Link to="/bnb">
      <div className="vacationcard">
        <img className="rounded-lg thepics" src={image} alt={imgAlt} />
        <div className="mt-4">
        <div className="text-xs font-bold text-gray-500">Hosted by: {hostname}</div>
        <div className="text-s font-bold text-gray-500">Whats included {amenities}</div>
          <div className="text-s font-bold text-gray-500">{distance}</div>
          <div className="mt-1 font-bold text-gray-700">
            <a href={url} className="hover:underline">{location}</a>
          </div>
          <div className="mt-2 text-sm text-gray-600">Cost {pricing}</div>
          <div className="mt-2 text-sm text-gray-600">Available from {startdate}</div>
          <div className="mt-2 text-sm text-gray-600">to {enddate}</div>
        </div>
      </div>
      </Link>
    );
  }
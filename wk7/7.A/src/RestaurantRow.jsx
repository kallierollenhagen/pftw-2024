/* eslint-disable react/prop-types */
import "./RestaurantRow.css";
export function RestaurantRow({name, location, about, rating, image, odd}) {
    return (
    <tr className={odd && "odd"}>
        <td style={{fontWeight: rating > 4 ? 900 : 400}}><a href={link}>{name}</a></td>
        <td>{location}</td>
        <td>{about}</td>
        <td>{rating}</td>
        <td><img src={image} alt={name} /></td>
    </tr>
    )
}
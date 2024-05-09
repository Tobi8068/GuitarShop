import { FaStarHalfAlt } from "react-icons/fa";
import { RiStarFill } from "react-icons/ri";

const RatingStars = ({product}) => {
    const filledStars = Math.floor(product.rating);
    const hasHalfStar = product.rating - filledStars >= 0.25 && product.rating - filledStars < 0.75;
    const emptyStars = 5 - filledStars - (hasHalfStar ? 1 : 0);

    // Generate the JSX for filled stars
    const filledStarIcons = Array.from({ length: filledStars }, (_, index) => (
        <RiStarFill key={`filled-${index}`} className="text-yellow-300" />
    ));

    // Generate the JSX for half star if applicable
    const halfStarIcon = hasHalfStar && <FaStarHalfAlt key="half" className="text-yellow-300" />;

    // Generate the JSX for empty stars
    const emptyStarIcons = Array.from({ length: emptyStars }, (_, index) => (
        <RiStarFill key={`empty-${index}`} className="text-gray-300" />
    ));

    // Concatenate all star icons
    const allStarIcons = [...filledStarIcons, halfStarIcon, ...emptyStarIcons];

    // Generate the JSX for all white stars when rating is 0
    const allWhiteStars = product.rating === 0 && Array.from({ length: 5 }, (_, index) => (
        <RiStarFill key={`white-${index}`} className="text-gray-300" />
    ));
    // Render all star icons along with all white stars if rating is 0
    return (
        <>
          {product.rating === 0 ? allWhiteStars : allStarIcons}
        </>
            
    );
}

export default RatingStars
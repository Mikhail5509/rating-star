import Star from "./Star";

const Stars = ({ count = 0 }) => {
    if (typeof count !== 'number' || count < 1 || count > 5) return null;

    return (
        <ul className="card-body-stars u-clearfix">
            {Array.from({ length: count }).map((_, i) => <Star key={i} />)}
        </ul>
    );
};

export default Stars;

import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div>
            <h1>404</h1>
            <h2>Puslapis nerastas.</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores cum quaerat non, repudiandae eum reiciendis repellendus molestias nisi, rem tempore earum tenetur ab dolorem. Magni illum pariatur corrupti similique a?</p>

            <p>Grįžti į <Link to='/'>pradinį puslapį</Link>.</p>
        </div>
    )
}

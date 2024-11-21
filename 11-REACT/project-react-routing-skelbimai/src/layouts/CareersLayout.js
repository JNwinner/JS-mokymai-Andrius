import { Outlet } from "react-router-dom";

export default function CareersLayout() {
    return (
        <div className="careers-layout">
            <h2>Skelbimai</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam repellat officia molestiae veniam aut. Ab dicta et magni eos nihil.</p>

            <Outlet />
        </div>
    )
}

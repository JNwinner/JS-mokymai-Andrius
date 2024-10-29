import Comp5Child from "./Comp5Child";

const Comp5Parent = () => {
    let articles = [
        {id: 1, title: 'Pirmas', text: 'aa'},
        {id: 2, title: 'Antras', text: 'bb'},
        {id: 3, title: 'Trecias', text: 'cc'},
        {id: 4, title: 'Ketvirtas', text: 'd'}
    ];

    return (
        <div>
            <div className="articles-list-v1">
                <Comp5Child article={articles[0]} />
                <Comp5Child article={articles[1]} />
                <Comp5Child article={articles[2]} />
                <Comp5Child article={articles[3]} />
            </div>
            
            <div className="articles-list-v2">
                {
                    articles.map(str => {
                        return <Comp5Child key={str.id} article={str} />
                    })
                }
            </div>
        </div>
    );
};

export default Comp5Parent;
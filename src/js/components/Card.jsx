const Card = () => {
    return (
        <div className="card mb-3">
            <img src="" className="card-img-top" alt="" style={{ height: '200px', objectFit: 'cover' }} />
            <div className="card-body text-center">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum, voluptatibus eveniet voluptas nobis aspernatur est atque cumque, voluptatem, earum officia quae suscipit quidem. Quisquam nulla ex ipsum iusto minima voluptas.</p>
                <a href="#" className="btn btn-primary">Find out more!</a>
            </div>
        </div>
    )
}

const Cards = () => {
    return (
        <div className="container-sm mb-5">
            <div className="row">
                <div className="col-12 col-sm-6 col-md-6 col-lg-3">
                    <Card />
                </div>
                <div className="col-12 col-sm-6 col-md-6 col-lg-3">
                    <Card />
                </div>
                <div className="col-12 col-sm-6 col-md-6 col-lg-3">
                    <Card />
                </div>
                <div className="col-12 col-sm-6 col-md-6 col-lg-3">
                    <Card />
                </div>
            </div>
        </div>)
}

export default Cards;
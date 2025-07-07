export default function Card() {
    return (
    <div className="container-fluid">
        <div className="row">
            <div className="col-md-12 text-center mb-4"></div>
            <div className="col-md-12 text-center mb-4">
                <h3>Our Project</h3>
            </div>
        </div>
        <div className="row">
            <div className="col-md-4 mb-4">
                <div className="card">
                <img src="/img/ddd.jpg" className="card-img-top img-responsive" width={500} height={500} alt="..." />
                <div className="card-body">
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                </div>
                </div>
            </div>

            <div className="col-md-4 mb-4">
            <div className="card">
                <img src="/img/eee.jpg" className="card-img-top" width={500} height={500} alt="..." />
                <div className="card-body">
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 mb-4">
            <div className="card">
                <img src="/img/fff.jpg" className="card-img-top" width={500} height={500} alt="..." />
                <div className="card-body">
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                </div>
                </div>
            </div>
      </div>
    </div>
    );
  }
const Price = ({currency,paper,price}) => {
    return (
        <div>
            <div className="card border-primary mb-3" style={{ maxWidth: '20rem' }}>
                <div className="card-header d-flex justify-content-center"><span className='font-weight-bold' >{paper}</span></div>
                <div className="card-body">
                <h4 className="card-title"><span className ='badge badge-danger' style ={{marginRight:'1rem'}}>{currency}</span> 
                {price}</h4>
                </div>
            </div>
        </div>
    )
}
export default Price
import '../css/issued.css';
import noDataImg from '../images/bookheaders/norecordfound.png';
import HistoryGrid from './HistoryGrid';

export const BooksRead = () => {

    const books = null;

    return (
        <>
            <div className="main-container">

                <nav className="navbar navbar-expand-lg navbar-dark bg-dark bookNav">
                    <div className="container-fluid">
                        <h4 style={{ color: 'whitesmoke' }}>History</h4>
                    </div>
                </nav>

                {books ?
                    // <div className='inner-container'>
                    <HistoryGrid />

                    /* <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">S.No</th>
                            <th scope="col">Book Name</th>
                            <th scope="col">Author</th>
                            <th scope="col">Issue Date</th>
                            <th scope="col">Return Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>milk and honey</td>
                            <td>Rupi Kaur</td>
                            <td>14-04-22</td>
                            <td>28-04-22</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>milk and honey</td>
                            <td>Rupi Kaur</td>
                            <td>14-04-22</td>
                            <td>28-04-22</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>milk and honey</td>
                            <td>Rupi Kaur</td>
                            <td>14-04-22</td>
                            <td>28-04-22</td>
                        </tr>
                    </tbody>
                </table>  */
                    // </div>}
                    : <img src={noDataImg} className="no-data" />}

            </div>
        </>
    )
}
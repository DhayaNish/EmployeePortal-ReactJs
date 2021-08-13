import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import Checkbox from '@material-ui/core/Checkbox';
import ShareIcon from '@material-ui/icons/Share';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import SortIcon from '@material-ui/icons/Sort';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import getAlluser from '../Services/emp-data';
import { FaFilter } from 'react-icons/fa';
import Collapsible from 'react-collapsible';
import Modal from 'react-modal';
const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
const Table = () => {

    const [resp, setResp] = useState([])   
     const [resp2, setResp2] = useState([])
    const [modalIsOpen, setIsOpen] = useState(false);
    const [selectallarr, setselectallarr] = useState(false);

    useEffect(() => {
        getAlluser.getAlluser()
            .then((res) => {
                setResp(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, []);

    // const handleChange = (event) => {
    //     setChecked(event.target.checked);
    // };
    const useStyles = makeStyles((theme) => ({
        root: {
            '& > *': {
                marginTop: theme.spacing(2),
            },
        },
    }));

    const classes = useStyles();

    const selectall=()=>{
        if(selectallarr==true){
            setselectallarr(false)
            setResp2([])
            const ids=resp
            setResp(ids)
        }else if(selectallarr==false){          
            setselectallarr(true)
            const ids=resp
            setResp2(ids)
        }
    }

    const ischecked = (item) => {
        const isThere = resp2.some(
            (resp2) => resp2._id === item._id,
          );
          return isThere;
        }

        const toggleChecked = (itemId) => {
            let ids = [...resp2, itemId];
            if (ischecked(itemId)) {
              setResp2(
                (ids = resp2.filter((id) => id._id !== itemId._id)),
              );
            } else {
                setResp2(ids);
            }
        }

    return (
        <section>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <span><i class="fa fa-male"></i><i class="fa fa-male"></i><b className="ml-1"> HireMan</b></span>
                </div>
                <form class="form-inline my-2 my-lg-0 d-flex justify-content-end">
                    <i class="fa fa-search " ></i>
                    <i class="fa fa-bell ml-3"></i>
                    <i class="fa fa-user ml-3" ></i>
                </form>
            </nav>
            <div className="line-sep">
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-lg-2 side-bar">
                        <p className="side"><Link to="./perfomance">ENROLLMENT</Link></p>
                        <p className="side">DETAILS</p>
                        <p className="side">ATTENDANCE</p>
                        <p className="side">SALARY</p>
                    </div>
                    <div className="col-12 col-lg-10 ">
                        <form class="form-inline">
                            <input class="form-control mr-sm-2 mt-1 mb-2" type="search" placeholder="Search" aria-label="Search" />
                            <i class="fa fa-search" aria-hidden="true"></i>
                        </form>
                        <div class="d-flex justify-content-between">
                            <div>
                            <span className="ml-1">{resp2.length} SELECTED</span>

                                <Checkbox
                                    color="primary"
                                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                                    // value={checked}
                                    // onChange={(e) => setChecked(e.target.value)}
                                  onClick={selectall}
                             />
                                                            
                                <span className="ml-1">SELECT ALL</span>
                                <ShareIcon className="ml-4" color="primary" />
                                <span>SHARE</span>
                                <EditIcon className="ml-4" color="primary" />
                                <span>Edit</span>
                                <DeleteIcon className="ml-4" color="secondary" />
                                <span>DELETE</span>
                                

                            </div>
                            <div className="d-flex justify-content-between">
                                <div className="mr-3 mt-2">
                                    <FaFilter className="ml-4" color="primary" />
                                    <span onClick={()=>setIsOpen(true)} > FILTER </span>
                                    <Modal
                                    isOpen={modalIsOpen}
                                    contentLabel="Example Modal"
                                    style={customStyles}
                                >
                                    <button onClick={()=>setIsOpen(false)}>close</button>
                                    <div className="card">
                                        jbnsfvbrs
                                    </div>
                                </Modal>
                                    <SortIcon className="ml-4" color="primary" />
                                    <span>SORT BY</span>
                                </div>
                            </div>
                        </div>
                        <div class="table-responsive">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">ID:</th>
                                        <th scope="col">Name:</th>
                                        <th scope="col">Position:</th>
                                        <th scope="col">Department:</th>
                                        <th scope="col">Email:</th>
                                        <th scope="col">Experience:</th>
                                        <th scope="col">Status:</th>
                                    </tr>
                                </thead>
                                {resp.map((item, index) => {
                                    return (
                                        <>
                                            <tr>
                                                <td scope="row">
                                                    <Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }}
                                                         checked={selectallarr?true:ischecked(item)}
                                                         onChange={() => 
                                                           toggleChecked(item)}
                                                    color="default" />
                                                    <span>{index + 1}</span>
                                                    <a data-toggle="collapse" data-target={`#folder1${index + 1}`}>  <i class="fa fa-angle-down ml-1" role="button" aria-hidden="true"></i></a>
                                                </td>
                                                <td>{item.name}</td>
                                                <td>{item.position}</td>
                                                <td>{item.department}</td>
                                                <td>{item.email}</td>
                                                <td>{item.experience}</td>
                                                <td><i class="fa fa-circle mr-2" aria-hidden="true"></i>Full Time</td>
                                            </tr>
                                            <tr>
                                                <div>
                                                    <div id={`folder1${index + 1}`} class="collapse">
                                                        <div class="card">
                                                            <div class="card-body">
                                                                This is some text within a card body.
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </tr>
                                        </>
                                    )
                                })}
                            </table>
                            <div className="line-sep"></div>
                        </div>
                        <div className="row">
                            <div className={classes.root}>
                                <Pagination count={10} color="primary" shape="rounded" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Table;
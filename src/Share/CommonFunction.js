import { Spinner } from "react-bootstrap";
function formateDate(date) {
  var event = new Date(date);
  const fullmonth = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let month = fullmonth[event.getMonth()];
  let day = event.getDate();
  // var dayName = event.toString().split(' ')[0];

  let year = event.getFullYear();
  return `${month} ${day} ${year}`;
}

function isNumber(evt) {
  evt = evt ? evt : window.event;
  var charCode = evt.which ? evt.which : evt.keyCode;
  if (charCode < 48 || charCode > 57) {
    evt.preventDefault();
  } else {
    return true;
  }
}

function buttonSpinner(show) {
  return (
    <>
      {show ? (
        <div className="spinner-button">
          <Spinner
            as="span"
            animation="border"
            size="sm"
            role="status"
            aria-hidden="true"
          />          
        </div>
      ) : null}
    </>
  );
}

function spinner(show) {
  return (
    <>
      {show ? (
       <div className="text-center pt-4">
          <Spinner animation="border" role="status" variant="primary"/>
       </div>
      ) : null}
    </>
  );
}


/**
 * yyyy-mm-dd
 * @param {*} str
 * @returns
 */

function convertDate(str) {
  var date = new Date(str),
    mnth = ("0" + (date.getMonth() + 1)).slice(-2),
    day = ("0" + date.getDate()).slice(-2);
  return [date.getFullYear(), mnth, day].join("-");
}

function CustomLoader() {
  return (
    <div className="loader-spinner-wrap">
      <div className="spinner-border-wrap">
        <div className="spinner-border"></div>
      </div>
    </div>
  );
}

function UserRole(role) {
  let access = [
    {role:1,title:'Admin',access:'ADMIN'},
    {role:2,title:'Teacher',access:'TEACHER'},
    {role:3,title:'Student',access:'STUDENT'}
  ];
  let index = access.findIndex((e)=>e.role===role);
  if(index!==-1){
    return access[index].title;
  }
  return 'User'
}


export { formateDate, isNumber, buttonSpinner, convertDate, spinner,CustomLoader,UserRole };

// export default Common;

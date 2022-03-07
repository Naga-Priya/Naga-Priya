
    // var keybNumeric = new keybEdit(‘01234567890’);
    function Timesheet(Name,EID,JDate,NoHours,Designation){
        this.Name = Name;
        this.EmployeeID=EID;
        this.JoiningDate = JDate;
        this.NoOfHours = NoHours;
        this.Designation = Designation;
        
        switch(this.Designation){
            case "Manager":
                this.Salary = this.NoOfHours * 90;
                break;
            case "Consultant":
                this.Salary = this.NoOfHours * 70;
                break;
            case "Trainee":
                this.Salary = this.NoOfHours * 45;
                break;
            default:
                this.Salary = 'invalid';

        }
        myStorage = window.sessionStorage;
        sessionStorage.setItem("Name",this.Name);
        sessionStorage.setItem("EmployeeID",this.EmployeeID);
        sessionStorage.setItem("JoiningDate",this.JoiningDate);
        sessionStorage.setItem("NoOfHours",this.NoOfHours);
        sessionStorage.setItem("Designation",this.Designation);
        sessionStorage.setItem("Salary",this.Salary);
        this.myfunc = () =>console.log("Salary",this.Salary);
        //  {
        //     // console.log(this.Name,this.EmployeeID,this.JoiningDate,this.NoOfHours,this.Designation);
        //     console.log("I'm here");
        // }
    }
    function editKey(event){
        // console.log("here");
        alert("Use Up/Down to enter values");
        event.preventDefault();
    }
    function submitTimesheet(){
        console.log("Print");
        var timesheet = new Timesheet (document.getElementById("usr").value,
        document.getElementById("empid").value,
        document.getElementById("date").value,
        document.getElementById("hours").value,
        document.getElementById("designation").value
        );
        console.log("From Form",document.getElementById("usr").value,
        document.getElementById("empid").value,
        document.getElementById("date").value,
        document.getElementById("hours").value,
        document.getElementById("designation").value
        )

        console.log(timesheet.Name,
        timesheet.EmployeeID,
        timesheet.JoiningDate,
        timesheet.NoOfHours,
        timesheet.Designation
        )
        timesheet.myfunc();
    }

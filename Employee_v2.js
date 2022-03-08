
    // var keybNumeric = new keybEdit(‘01234567890’);
    class Timesheet {
        constructor(Name,EID,JDate,NoHours,Designation){ 
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
            this.storeValues();
            
        }
        //Getter for Name
        get Name(){
            return this._Name;
        }
        //Setter for Name
        set Name(name){
            this._Name = name;
        }

        //Getter for EmployeeID
        get EmployeeID(){
            return this._EmployeeID;
        }
        //Setter for EmployeeID
        set EmployeeID(employeeID){
            this._EmployeeID = employeeID;
        }

        //Getter for JoiningDate
        get JoiningDate(){
            return this._JoiningDate;
        }
        //Setter for JoiningDate
        set JoiningDate(joiningdt){
            this._JoiningDate = joiningdt;
        }

        //Getter for NoOfHours
        get NoOfHours(){
            return this._NoOfHours;
        }
        //Setter for NoOfHours
        set NoOfHours(noofhrs){
            this._NoOfHours = noofhrs;
        }

        //Getter for Designation
        get Designation(){
            return this._Designation;
        }
        //Setter for Designation
        set Designation(desg){
            this._Designation = desg;
        }

        //Getter for Salary
        get Salary(){
            return this._Salary;
        }
        //Setter for Salary
        set Salary(salary){
            this._Salary = salary;
        }

        storeValues(){
            // let myStorage = window.sessionStorage;
            // myStorage.se
            sessionStorage.setItem("Name",this.Name);
            sessionStorage.setItem("EmployeeID",this.EmployeeID);
            sessionStorage.setItem("JoiningDate",this.JoiningDate);
            sessionStorage.setItem("NoOfHours",this.NoOfHours);
            sessionStorage.setItem("Designation",this.Designation);
            sessionStorage.setItem("Salary",this.Salary);
        }
        
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
    function validateID(event){
        let txt= new String(document.getElementById("empid").value);
        if(txt.length==0)
        {
            //This is the first character, It should start with M
            if(event.key!="M"){
                alert("ID should start with 'M-' ");
                document.getElementById("empid").value = '';
                event.preventDefault();
            }
        }
        else if(txt.length==1)
        {
            //This is the first character, It should start with M
            if(event.key!="-"){
                alert("ID should start with 'M-' ");
                document.getElementById("empid").value = 'M';
                event.preventDefault();
            }
        }
    }
    function submitTimesheet(){
        console.log("Print");
        debugger;
        var timesheet = new Timesheet (document.getElementById("usr").value,
        document.getElementById("empid").value,
        document.getElementById("date").value,
        document.getElementById("hours").value,
        document.getElementById("designation").value
        );
        // console.log("From Form",document.getElementById("usr").value,
        // document.getElementById("empid").value,
        // document.getElementById("date").value,
        // document.getElementById("hours").value,
        // document.getElementById("designation").value
        // )

        // console.log(timesheet.Name,
        // timesheet.EmployeeID,
        // timesheet.JoiningDate,
        // timesheet.NoOfHours,
        // timesheet.Designation
        // )
        // timesheet.myfunc();
    }
